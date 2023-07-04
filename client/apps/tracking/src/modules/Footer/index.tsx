import { Box, Grid, Link, Typography } from "@mui/material";

import { Email } from "modules/Email";
import { PhoneNumber } from "modules/PhoneNumber";

export const Footer = () => {
  return (
    <Box
      width="100%"
      padding={{ xs: "22px 19px", sm: "22px 60px" }}
      bgcolor="background.secondary"
    >
      <Grid container justifyContent="space-between" columns={2} gap={2}>
        <Grid container sm={6} item>
          <Typography variant="body1" fontWeight={500}>
            Bei Fragen melden Sie sich gerne unter:
          </Typography>
          <Email>info@installion.eu</Email>
          <PhoneNumber>+49 221 4291 42 70</PhoneNumber>
        </Grid>
        <Grid
          container
          item
          sm="auto"
          gap={{ xs: "11px", sm: "30px" }}
          direction={{ xs: "column", sm: "row" }}
        >
          <Link
            color="text.primary"
            href="https://installion.eu/impressum/"
            underline="none"
            data-testid="link-impressum"
          >
            <Typography variant="body1" fontWeight={500}>
              Impressum
            </Typography>
          </Link>
          <Link
            color="text.primary"
            href="https://installion.eu/datenschutz/"
            underline="none"
            data-testid="link-datenschutz"
          >
            <Typography variant="body1" fontWeight={500}>
              Datenschutz
            </Typography>
          </Link>
        </Grid>
      </Grid>
    </Box>
  );
};
