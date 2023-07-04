import { Grid, Typography } from "@mui/material";

export const Content = () => {
  return (
    <Grid
      container
      gap={3}
      color="text.secondary"
      justifyContent="center"
      py="50px"
      px={{ xs: "42px", sm: "80px" }}
    >
      <Typography
        variant="h2"
        fontSize={{ xs: "20px", sm: "32px" }}
        fontWeight={800}
        align="center"
        data-testid="content-title"
      >
        Verfolgen Sie den aktuellen Stand Ihres Auftrags
      </Typography>
      <Typography align="center" data-testid="content-text">
        Mit der Auftragsverfolgung haben Sie die Möglichkeit Ihren Auftrag zu
        verfolgen und den aktuellen Stand einzusehen. Geben Sie dafür einfach
        die Auftragsnummer aus der Bestätigungsemail und die Postleitzahl des
        Objekts ein und Ihnen wird der aktuelle Status Ihres Auftrags angezeigt.
      </Typography>
    </Grid>
  );
};
