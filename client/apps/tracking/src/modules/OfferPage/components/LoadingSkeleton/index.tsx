import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import {
  Stack,
  Skeleton,
  Grid,
  Divider,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Box,
} from "@mui/material";

export const LoadingSkeleton = () => {
  return (
    <Stack gap={2} py="1rem" data-testid="skeleton">
      <CustomerSkeleton />
      <Divider variant="middle" />
      <ContactSkeleton />
      <Divider variant="middle" />
      <ContactSkeleton />
      <Divider variant="middle" />
      <BranchSkeleton />
      <Divider variant="middle" />
      <DatesSkeleton />
      <StatusSkeleton />
    </Stack>
  );
};

const StatusSkeleton = () => {
  return (
    <Grid container px="30px" direction="column" alignContent="flex-start">
      <Skeleton
        variant="text"
        width={250}
        height={30}
        sx={{ mx: "25px", mb: "10px" }}
      />

      <Timeline
        sx={{
          margin: 0,
          padding: 0,
          "& :before": {
            display: "none",
          },
        }}
      >
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent mb="27px">
            <Skeleton variant="text" width={150} height={25} />
            <Box width={{ xs: "75vw", md: "600px" }}>
              <Skeleton variant="text" height={25} />
              <Skeleton variant="text" height={25} />
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent mb="27px">
            <Skeleton variant="text" width={150} height={25} />
            <Box width={{ xs: "75vw", md: "600px" }}>
              <Skeleton variant="text" height={25} />
              <Skeleton variant="text" height={25} />
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent mb="27px">
            <Skeleton variant="text" width={150} height={25} />
            <Box width={{ xs: "75vw", md: "600px" }}>
              <Skeleton variant="text" height={25} />
              <Skeleton variant="text" height={25} />
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent mb="27px">
            <Skeleton variant="text" width={150} height={25} />
            <Box width={{ xs: "75vw", md: "600px" }}>
              <Skeleton variant="text" height={25} />
              <Skeleton variant="text" height={25} />
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent mb="27px">
            <Skeleton variant="text" width={150} height={25} />
            <Box width={{ xs: "75vw", md: "600px" }}>
              <Skeleton variant="text" height={25} />
              <Skeleton variant="text" height={25} />
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent mb="27px">
            <Skeleton variant="text" width={150} height={25} />
            <Box width={{ xs: "75vw", md: "600px" }}>
              <Skeleton variant="text" height={25} />
              <Skeleton variant="text" height={25} />
            </Box>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot />
          </TimelineSeparator>
          <TimelineContent mb="27px">
            <Skeleton variant="text" width={150} height={25} />
            <Box width={{ xs: "75vw", md: "600px" }}>
              <Skeleton variant="text" height={25} />
              <Skeleton variant="text" height={25} />
            </Box>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </Grid>
  );
};

const DatesSkeleton = () => {
  return (
    <Grid container p={{ xs: "25px", sm: "25px 50px" }}>
      <Skeleton variant="text" width={100} height={30} sx={{ mb: "10px" }} />
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>
              <Skeleton variant="text" />
            </TableCell>
            <TableCell>
              <Skeleton variant="text" />
            </TableCell>
            <TableCell>
              <Skeleton variant="text" />
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>
              <Skeleton variant="text" />
            </TableCell>
            <TableCell>
              <Skeleton variant="text" />
            </TableCell>
            <TableCell>
              <Skeleton variant="text" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Skeleton variant="text" />
            </TableCell>
            <TableCell>
              <Skeleton variant="text" />
            </TableCell>
            <TableCell>
              <Skeleton variant="text" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>
              <Skeleton variant="text" />
            </TableCell>
            <TableCell>
              <Skeleton variant="text" />
            </TableCell>
            <TableCell>
              <Skeleton variant="text" />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </Grid>
  );
};

const ContactSkeleton = () => {
  return (
    <Grid
      container
      justifyContent="space-between"
      px={{ xs: "25px", sm: "50px" }}
      py="15px"
      gap={1}
    >
      <Grid container item justifyContent="space-between" gap={1}>
        <Grid item xs={12} sm>
          <Skeleton variant="text" width={300} />
        </Grid>
      </Grid>
      <Grid container item direction="column">
        <Skeleton variant="text" width={200} />

        <Grid
          container
          item
          justifyContent="flex-start"
          alignItems="center"
          mt={1}
          gap={2}
        >
          <Grid item xs={3} sm={2}>
            <Skeleton variant="text" width={70} />
          </Grid>
          <Grid item xs={8} sm>
            <Skeleton variant="text" width={250} />
          </Grid>
        </Grid>
        <Grid
          container
          item
          justifyContent="flex-start"
          alignItems="center"
          gap={2}
        >
          <Grid item xs={3} sm={2}>
            <Skeleton variant="text" width={85} />
          </Grid>
          <Grid item xs={8} sm>
            <Skeleton variant="text" width={200} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
const CustomerSkeleton = () => {
  return (
    <Grid
      container
      justifyContent="space-between"
      px={{ xs: "25px", sm: "50px" }}
      py="25px"
      gap={2}
    >
      <Grid container item justifyContent="space-between">
        <Grid item xs={12} sm>
          <Skeleton variant="text" width={180} height={30} />
        </Grid>
        <Grid
          item
          xs={12}
          sm
          maxWidth={250}
          alignSelf={{ xs: "start", sm: "end" }}
        >
          <Skeleton variant="text" />
        </Grid>
      </Grid>
      <Grid container item direction="column">
        <Skeleton variant="text" width={120} />
        <>
          <Skeleton variant="text" width={150} />
          <Skeleton variant="text" width={100} />
        </>
      </Grid>
    </Grid>
  );
};
const BranchSkeleton = () => {
  return (
    <Grid
      container
      justifyContent="space-between"
      px={{ xs: "25px", sm: "50px" }}
      py="15px"
      gap={2}
    >
      <Grid container item justifyContent="space-between">
        <Grid item xs={12} sm>
          <Skeleton variant="text" width={300} />
        </Grid>
      </Grid>
      <Grid container item direction="column">
        <>
          <Skeleton variant="text" width={150} />
          <Skeleton variant="text" width={100} />
        </>
      </Grid>
    </Grid>
  );
};
