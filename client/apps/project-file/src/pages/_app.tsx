import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { theme } from "config-mui";
import type { AppProps } from "next/app";
import Head from "next/head";
import { createEmotionCache } from "utils-mui";
import { getVersionInfo } from "utils-version";

// import { Breadcrumbs } from 'common/components';

const clientSideEmotionCache = createEmotionCache();
const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Schnittstellen</title>
        <meta name="description" content="Turborepo boilerplate." />
        <meta name="version" content={getVersionInfo()} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CacheProvider value={clientSideEmotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <QueryClientProvider client={queryClient}>
            {<Component {...pageProps} />}
          </QueryClientProvider>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};

export default App;
