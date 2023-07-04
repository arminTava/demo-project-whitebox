import { Phone } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import { ReactNode } from "react";

type PhoneNumberProps = {
  children: ReactNode;
};

export const PhoneNumber = ({ children }: PhoneNumberProps) => {
  return (
    <Grid container alignItems="center" item xs={12} gap={1}>
      <Phone sx={{ width: "16px" }} />
      <Typography variant="body1" data-testid="phone">
        {children}
      </Typography>
    </Grid>
  );
};
