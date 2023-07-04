import { Grid, Typography } from "@mui/material";

export const Hero = () => {
  return (
    <Grid
      container
      alignItems={{ xs: "flex-end", sm: "center" }}
      height={{ xs: "220px", sm: "422px" }}
    >
      <Grid
        item
        container
        gap={1}
        alignItems={{ xs: "flex-end", sm: "center" }}
        alignContent="center"
        mx={{ xs: "20px", sm: "60px" }}
        p={{ xs: "16px", sm: "" }}
        width={{ xs: "90%", sm: "540px" }}
        height="max-content"
        bgcolor={{ xs: "#fff", sm: "transparent" }}
        borderRadius="4px"
      >
        <Typography
          variant="h1"
          fontSize={{ xs: "14px", sm: "20px" }}
          fontWeight={{ xs: 400, sm: 700 }}
          color={{ xs: "background.secondary", sm: "text.primary" }}
          textTransform="uppercase"
          data-testid="hero-title"
        >
          Installion Auftragsverfolgung
        </Typography>
        <Typography
          variant="h2"
          fontSize={{ xs: "16px", sm: "32px" }}
          fontWeight={800}
          color={{ xs: "text.secondary", sm: "text.primary" }}
          data-testid="hero-subtitle"
        >
          Den aktuellen Status des Auftrags ganz einfach nachschauen
        </Typography>
      </Grid>
    </Grid>
  );
};
