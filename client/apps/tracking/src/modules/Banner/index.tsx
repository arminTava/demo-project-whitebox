import { Box } from "@mui/material";
import Image from "next/image";

export const Banner = () => {
  return (
    <Box
      position="absolute"
      top={{ xs: 67, sm: 95 }}
      width="100%"
      height={{ xs: "165px", sm: "422px" }}
      zIndex={"-1"}
    >
      <Image
        src="/images/hero.png"
        fill
        alt="DC Dachdecker Florian bohrt"
        style={{
          objectFit: "cover",
        }}
      />
    </Box>
  );
};
