import { Grid, SxProps, Theme, Typography } from "@mui/material";

import { Email } from "modules/Email";
import { PhoneNumber } from "modules/PhoneNumber";

type DetailsProps = {
  variant: string;
  title?: string;
  name?: string;
  address?: string;
  city?: string;
  email?: string;
  phone?: string;
  mobile?: string;
  orderNumber?: string;
  sx?: SxProps<Theme> | undefined;
  testId?: string;
};

export const Details = ({
  variant,
  title,
  name,
  address,
  city,
  email,
  phone,
  mobile,
  sx,
  orderNumber,
  testId,
}: DetailsProps) => {
  return (
    <Grid
      container
      sx={sx}
      justifyContent="space-between"
      px={{ xs: "25px", sm: "50px" }}
      py="25px"
      data-testid={testId}
    >
      <Grid container item justifyContent="space-between">
        <Grid item sm>
          {variant === "customer" ? (
            <Typography
              variant="h1"
              fontSize={{ xs: "16px", sm: "23px" }}
              fontWeight="600"
              mb={1}
              data-testid="details-h1"
            >
              INSTALLION Auftrag
            </Typography>
          ) : (
            <Typography fontWeight="600" mb={1} data-testid="details-title">
              {title}
            </Typography>
          )}
        </Grid>
        {variant === "customer" ? (
          <Grid item xs={12} sm textAlign={{ xs: "start", sm: "end" }}>
            <Typography
              color="rgba(0, 0, 0, 0.6);"
              mb={1}
              data-testid="details-ordernumber"
            >
              Auftragsnummer: {orderNumber}
            </Typography>
          </Grid>
        ) : null}
      </Grid>
      <Grid container item direction="column">
        {variant === "branch" ? null : (
          <Typography data-testid="details-name">{name}</Typography>
        )}

        {variant === "contact" ? (
          <>
            <Grid
              container
              item
              display={email ? "flex" : "none"}
              justifyContent="flex-start"
              alignItems="center"
            >
              <Grid item xs={3} sm={2}>
                <Typography>E-Mail:</Typography>
              </Grid>
              <Grid item xs={9} sm>
                <Email>{email}</Email>
              </Grid>
            </Grid>
            <Grid
              container
              item
              display={phone ? "flex" : "none"}
              justifyContent="flex-start"
              alignItems="center"
            >
              <Grid item xs={3} sm={2}>
                <Typography>Telefonnr.:</Typography>
              </Grid>
              <Grid item xs={9} sm>
                <PhoneNumber>{phone}</PhoneNumber>
              </Grid>
            </Grid>
            <Grid
              container
              item
              display={mobile ? "flex" : "none"}
              justifyContent="flex-start"
              alignItems="center"
            >
              <Grid item xs={3} sm={2}>
                <Typography>Mobilnr.:</Typography>
              </Grid>
              <Grid item xs={9} sm>
                <PhoneNumber>{mobile}</PhoneNumber>
              </Grid>
            </Grid>
          </>
        ) : (
          <>
            <Typography data-testid="details-adress">{address}</Typography>
            <Typography data-testid="details-city">{city}</Typography>
          </>
        )}
      </Grid>
    </Grid>
  );
};
