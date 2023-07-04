import {
  Skeleton,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  TableContainer,
  Paper,
} from "@mui/material";

export const LoadingSkeleton = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Ticketnummer</TableCell>
            <TableCell>Titel</TableCell>
            <TableCell>Erstellt am</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
            <TableCell width={"20%"} component="th" scope="row">
              <Skeleton variant="text" data-testid="skeleton" />
            </TableCell>
            <TableCell width={"40%"}>
              <Skeleton variant="text" />
            </TableCell>
            <TableCell width={"20%"}>
              <Skeleton variant="text" />
            </TableCell>
            <TableCell width={"20%"}>
              <Skeleton variant="text" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};
