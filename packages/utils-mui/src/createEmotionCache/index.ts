import createCache from "@emotion/cache";
import type { EmotionCache } from "@emotion/cache";

export const createEmotionCache = (): EmotionCache =>
  createCache({ key: "css", prepend: true });
