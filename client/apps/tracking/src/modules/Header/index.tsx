import { Grid } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
  return (
    <Grid
      container
      justifyContent="flex-start"
      alignContent="center"
      bgcolor="background.secondary"
      minHeight={{ xs: "67px", sm: "95px" }}
      px={{ xs: "24px", sm: "60px" }}
    >
      <Grid
        item
        position="relative"
        width={{ xs: 148, sm: 239 }}
        height={{ xs: 16, sm: 26 }}
      >
        <Link href="/">
          <Image
            src="/images/logo.svg"
            fill
            alt="Installion Logo"
            data-testid="logo"
          />
        </Link>
      </Grid>
    </Grid>
  );
};
