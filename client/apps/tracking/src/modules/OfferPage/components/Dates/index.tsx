import {
  Grid,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

import { CoreCalendar } from "gql/graphql";

type DatesProps = {
  dates: Array<CoreCalendar> | undefined;
};

export const Dates = ({ dates }: DatesProps) => {
  console.log("dates", dates);
  const time = (startDate: string, endDate: string) =>
    `${new Date(startDate).toLocaleTimeString("de", {
      timeZone: "Europe/Berlin",
      hour: "2-digit",
      minute: "2-digit",
    })}-${new Date(endDate).toLocaleTimeString("de", {
      timeZone: "Europe/Berlin",
      hour: "2-digit",
      minute: "2-digit",
    })} `;

  return (
    <Grid container p={{ xs: "25px", sm: "50px" }}>
      <Typography variant="h2" fontSize="20px" fontWeight={600}>
        Termine
      </Typography>
      <Table
        sx={{
          "& th, td": {
            fontSize: "14px",
            letterSpacing: "0.17px",
          },
        }}
      >
        <TableHead>
          <TableRow>
            <TableCell>Datum</TableCell>
            <TableCell>Uhrzeit</TableCell>
            <TableCell>Terminart</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dates?.map((date) => {
            const outdated = new Date(date.end_date as string) < new Date();
            return (
              <TableRow
                key={date.itemId}
                sx={{
                  "& td": {
                    color: outdated
                      ? "rgba(0, 0, 0, 0.6)"
                      : "rgba(0, 0, 0, 0.87)",
                  },
                }}
              >
                <TableCell>
                  {new Date(date.start_date as string).toLocaleDateString(
                    "de-DE",
                    { day: "2-digit", month: "2-digit", year: "numeric" }
                  )}
                </TableCell>
                <TableCell>
                  {time(date.start_date as string, date.end_date as string)}
                </TableCell>
                <TableCell>
                  <span style={{ wordBreak: "break-all" }}>
                    {date.coreCalendarType?.title}
                  </span>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Grid>
  );
};
