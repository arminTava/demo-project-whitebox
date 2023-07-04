import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import SupportAgent from "@mui/icons-material/SupportAgent";
import {
  AppBar,
  Box,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from "@mui/material";
import NextLink from "next/link";

import { NoTickets } from "modules/NoTickets";
import { Page403 } from "modules/Page403";

import { useTicketData } from "../../../hooks/use-ticket-data/useTicketData";
import { LoadingSkeleton } from "../LoadingSkeleton";

const drawerWidth = 240;

export const ClippedDrawer = () => {
  const { dataTicket, isLoading, isError, queryParameterComplete } =
    useTicketData();

  if (!isLoading && isError) {
    return <Page403 />;
  }

  if (!queryParameterComplete) {
    return <Page403 />;
  }

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div" color="text.primary">
            Schnittstellen
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SupportAgent inheritViewBox />
              </ListItemIcon>
              <ListItemText
                primary="Zoho Desk"
                sx={{ color: "text.secondary" }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        {isLoading && <LoadingSkeleton />}

        {dataTicket?.searchTicket?.data === null && <NoTickets />}

        {dataTicket?.searchTicket?.data && (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Ticketnummer</TableCell>
                  <TableCell>Titel</TableCell>
                  <TableCell>Erstellt am</TableCell>
                  <TableCell>Status</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {dataTicket.searchTicket.data.map((ticket, index) => (
                  <TableRow
                    key={index}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell width={"20%"} component="th" scope="row">
                      {ticket?.ticketNumber ?? ""}
                    </TableCell>
                    <TableCell width={"35%"}>{ticket?.subject ?? ""}</TableCell>
                    <TableCell width={"20%"}>
                      {!ticket?.createdTime
                        ? ""
                        : new Date(ticket.createdTime).toLocaleDateString(
                            "de-DE",
                            {
                              day: "2-digit",
                              month: "2-digit",
                              year: "numeric",
                            }
                          )}
                    </TableCell>
                    <TableCell width={"20%"}>{ticket?.status ?? ""}</TableCell>
                    <TableCell>
                      <IconButton
                        component={NextLink}
                        href={ticket?.webUrl ?? ""}
                        target="_blank"
                        sx={{
                          width: "32px",
                          height: "32px",
                        }}
                      >
                        <OpenInNewIcon
                          sx={{
                            color: "text.secondary",
                            width: "24px",
                            height: "24px",
                          }}
                        />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </Box>
  );
};
