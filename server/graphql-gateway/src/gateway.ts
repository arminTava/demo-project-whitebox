import {
  ApolloGateway,
  IntrospectAndCompose,
  RemoteGraphQLDataSource,
  ServiceEndpointDefinition,
} from "@apollo/gateway";

type Context = {
  request?: {
    headers: {
      headersInit: Record<string, string>;
    };
  };
};

export async function createGateway(appUrls: Array<ServiceEndpointDefinition>) {
  const newAppUrls = await healthcheck(appUrls);
  const gateway = new ApolloGateway({
    supergraphSdl: new IntrospectAndCompose({
      subgraphs: newAppUrls,

      subgraphHealthCheck: true,
    }),
    buildService({ url }) {
      return new RemoteGraphQLDataSource({
        url,
        willSendRequest({ request, context }) {
          const currentContext = context as Context;
          if (!currentContext.request) return;
          /* istanbul ignore next */
          Object.keys(currentContext.request.headers.headersInit).forEach(
            (key) => {
              if (
                currentContext.request?.headers.headersInit[key] &&
                key == "authorization"
              ) {
                request.http?.headers.set(
                  key,
                  currentContext.request.headers.headersInit[key]
                );
              }
            }
          );
        },
      });
    },
  });
  // Make sure all services are loaded
  await gateway.load();
  return gateway;
}

async function healthcheck(appUrls: Array<ServiceEndpointDefinition>) {
  const newAppUrls: Array<ServiceEndpointDefinition> = [];
  for (const sed of appUrls) {
    try {
      if (!sed.url) continue;
      const responseSuccess = await fetch(`${sed.url}/health`);
      if (responseSuccess.status == 200)
        newAppUrls.push({
          name: sed.name,
          url: `${sed.url}/graphql`,
        });
    } catch {
      continue;
    }
  }
  return newAppUrls;
}
