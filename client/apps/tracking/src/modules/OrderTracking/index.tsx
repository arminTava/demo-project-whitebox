import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import { ModalContent } from "./ModalContent";

export const OrderTracking = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setSearchTerm("");
  }, []);

  return (
    <Grid
      direction={{ xs: "column", sm: "row" }}
      container
      bgcolor="background.secondary"
      height={{ xs: "auto", sm: "95px" }}
      width={{ xs: "90%", sm: "100%" }}
      justifyContent={{ xs: "flex-start", sm: "center" }}
      alignItems="center"
      borderRadius={{ xs: "4px", sm: "0px" }}
      mx={{ xs: "20px", sm: "0px" }}
    >
      <Grid
        item
        container
        gap={{ xs: 2, sm: 6 }}
        md="auto"
        p={{ xs: "16px", sm: "0px" }}
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12} sm="auto">
          <Typography
            variant="h3"
            fontSize={{ xs: "16px", sm: "20px" }}
            fontWeight={700}
            data-testid="tracking-text"
          >
            Auftrag verfolgen
          </Typography>
        </Grid>
        <Grid item xs={12} sm="auto">
          <Box display="flex" width="100%">
            <TextField
              value={searchTerm}
              onChange={(event) => setSearchTerm(event.target.value.trim())}
              placeholder="Auftragsnummer eingeben"
              size="small"
              sx={{
                width: { xs: "100%", sm: "260px", md: "348px" },
                fontSize: "16px",
                backgroundColor: "white",
                borderRadius: "4px",
              }}
              inputProps={{
                style: {
                  color: "rgba(0, 0, 0, 0.87)",
                },
              }}
              data-testid="tracking-input"
            ></TextField>
            <Button
              variant="contained"
              onClick={() => setOpen(true)}
              type="submit"
              startIcon={
                <SearchIcon
                  sx={{
                    display: { xs: "none", sm: "block" },
                  }}
                />
              }
              data-testid="tracking-button"
            >
              <SearchIcon sx={{ display: { xs: "block", sm: "none" } }} />

              <Typography
                fontWeight={500}
                display={{ xs: "none", sm: "block" }}
              >
                Suchen
              </Typography>
            </Button>
          </Box>
        </Grid>
      </Grid>
      <ModalContent open={open} setOpen={setOpen} searchTerm={searchTerm} />
    </Grid>
  );
};
