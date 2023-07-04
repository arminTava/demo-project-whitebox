import { Turnstile } from "@marsidev/react-turnstile";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import { OfferState } from "hooks/use-offer-exist/offerState";
import { useOfferExist } from "hooks/use-offer-exist/useOfferExist";

type ModalContentProps = {
  open: boolean;
  setOpen: (input: boolean) => void;
  searchTerm: string;
};

export function ModalContent({ open, setOpen, searchTerm }: ModalContentProps) {
  const [isCaptchaSuccess, setCaptachSuccess] = useState(false);
  const [zipTerm, setZipTerm] = useState<string>("");
  const [isFormInvalid, setIsFormInvalid] = useState(false);
  const { fetchOffer, offerState, setOfferState } = useOfferExist(
    searchTerm,
    zipTerm
  );
  /* istanbul ignore next */
  const assertOffer = () => {
    if (!zipTerm) {
      setIsFormInvalid(true);
      return;
    }
    setIsFormInvalid(false);
    (async () => await fetchOffer())().catch(() =>
      console.log("Error im fetch offer")
    );
  };
  /* istanbul ignore next */
  function handleClose() {
    setCaptachSuccess(false);
    setOfferState(OfferState.Initial);
    setOpen(false);
  }

  return (
    <>
      <Dialog
        sx={{
          maxWidth: "450px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        fullWidth
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>
          <Box display="flex">
            <Box sx={{ color: "black" }} pt={3} flexGrow={1}>
              <Typography
                component="span"
                fontWeight="bold"
                fontSize="18px"
                data-testid="modal-title"
              >
                Verifizierung{" "}
              </Typography>
            </Box>
            <Box>
              <IconButton onClick={handleClose} data-testid="close-button">
                <CloseIcon />
              </IconButton>
            </Box>
          </Box>
        </DialogTitle>
        <DialogContent>
          <DialogContentText
            width="310px"
            fontSize="14px"
            maxWidth="100%"
            data-testid="modal-subtitle"
          >
            Bitte geben Sie zur Bestätigung die Postleitzahl des Objektes ein.
          </DialogContentText>
          <Box
            display="flex"
            p={2}
            mt={3}
            borderRadius={1}
            sx={{ color: "white", bgcolor: "#004A72", gap: 2 }}
            flexDirection="column"
          >
            <Typography
              component="span"
              fontWeight="bold"
              fontSize="16px"
              data-testid="plz-title"
            >
              Auftrag verfolgen
            </Typography>
            <TextField
              error={isFormInvalid}
              helperText={isFormInvalid && "Bitte Postleitzahl angeben"}
              value={zipTerm}
              onChange={(event) => setZipTerm(event.target.value.trim())}
              placeholder="Postleitzahl eingeben"
              size="small"
              sx={{
                fontSize: "16px",
                backgroundColor: "white",
                borderRadius: "4px",
              }}
              inputProps={{
                style: {
                  color: "rgba(0, 0, 0, 0.87)",
                },
              }}
              data-testid="modal-input"
            ></TextField>
          </Box>
          <Typography
            mt={1}
            sx={{
              color: "red",
              visibility:
                /* istanbul ignore next */
                offerState === OfferState.Initial ||
                offerState === OfferState.Success
                  ? "hidden"
                  : "visible",
            }}
            fontSize="14px"
            data-testid="modal-error"
          >
            Der Auftrag konnte nicht gefunden werden. Bitte überprüfen Sie Ihre
            Eingaben.{" "}
          </Typography>
          <Box mt={1} display="flex" justifyContent="center">
            <Turnstile
              siteKey={process.env.NEXT_PUBLIC_SITE_KEY ?? ""}
              onSuccess={
                /* istanbul ignore next */ () => {
                  setCaptachSuccess(true);
                }
              }
              data-testid="turnstile"
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ paddingRight: "10px", paddingBottom: "20px" }}>
          <Button
            onClick={
              /* istanbul ignore next */ () => {
                assertOffer();
              }
            }
            disabled={!isCaptchaSuccess}
            sx={{
              marginRight: "15px",
              paddingLeft: "15px",
              paddingRight: "15px",
            }}
            variant="contained"
            size="small"
            endIcon={<ArrowForwardIosIcon />}
            data-testid="modal-button"
          >
            Öffnen
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
