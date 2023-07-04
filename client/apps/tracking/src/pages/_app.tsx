import type { EmotionCache } from "@emotion/cache";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { theme } from "config-mui";
import type { AppProps } from "next/app";
import { createEmotionCache } from "utils-mui";
import "../styles/global.css";

import { Layout } from "modules/Layout";
import { Seo } from "modules/Seo";
const clientSideEmotionCache: EmotionCache = createEmotionCache();
const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Seo />
      <CacheProvider value={clientSideEmotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <QueryClientProvider client={queryClient}>
            <Layout>{<Component {...pageProps} />}</Layout>
          </QueryClientProvider>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
};

export default App;
