import { Stack } from "@mui/material";

import { Banner } from "modules/Banner";
import { Hero } from "modules/Hero";
import { OrderTracking } from "modules/OrderTracking";

import { Content } from "./components/Content";

export const HomePage = () => {
  return (
    <main>
      <Stack>
        <Banner />
        <Hero />
        <OrderTracking />
        <Content />
      </Stack>
    </main>
  );
};
