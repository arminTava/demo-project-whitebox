FROM node:18-alpine  as builder
RUN apk add --no-cache libc6-compat
RUN apk update
# Set working directory
WORKDIR /build

RUN npm install -g turbo
COPY . .
RUN turbo prune --scope=installion_tools-zoho --docker

# Add lockfile and package.json's of isolated subworkspace
FROM node:18-alpine AS installer
RUN apk add --update openssl
RUN apk add --no-cache libc6-compat
RUN apk update
# Set working directory
WORKDIR /build

# First install the dependencies (as they change less often)
COPY .gitignore .gitignore
COPY --from=builder /build/out/json/ .
COPY --from=builder /build/out/package-lock.json ./package-lock.json
COPY --from=builder /build/out/full/ .

RUN npm install --ignore-scripts

# enable remote cache
ARG TURBO_TEAM
ENV TURBO_TEAM=$TURBO_TEAM
ARG TURBO_TOKEN
ENV TURBO_TOKEN=$TURBO_TOKEN
ARG TURBO_API
ENV TURBO_API=$TURBO_API
# Build the project
RUN npm i -D esbuild --ignore-scripts
# github execution
RUN npm run generate-prisma
RUN npm run build -- --filter=installion_tools-zoho...

# Local execution
# RUN npm install -g turbo --ignore-scripts
# RUN turbo generate-prisma
# RUN turbo build --filter=installion_tools-zoho...


FROM node:18-alpine  AS runner
RUN apk update
# add curl in order to healthcheck web services
RUN apk add curl

RUN mkdir -p /app
WORKDIR /app
COPY --from=installer /build /app

WORKDIR /app/server/zoho/dist/

# CMD ["node", "main.js", "--help"]
