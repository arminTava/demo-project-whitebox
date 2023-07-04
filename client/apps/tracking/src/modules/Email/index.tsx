import { Send } from "@mui/icons-material";
import { Grid, Typography } from "@mui/material";
import { ReactNode } from "react";

type EmailProps = {
  children: ReactNode;
};

export const Email = ({ children }: EmailProps) => {
  return (
    <Grid container alignItems="center" item xs={12} gap={1}>
      <Send sx={{ width: "16px" }} />
      <Typography variant="body1" data-testid="email">
        {children}
      </Typography>
    </Grid>
  );
};
