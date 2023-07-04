import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { Box, Button, Divider, Grid, Paper } from "@mui/material";
import Link from "next/link";

import { CoreCalendar, CoreOfferLog } from "gql/graphql";
import { convertUmlaut } from "helper/umlaut";
import { useTrackingData } from "hooks/use-tracking-data/useTrackingData";
import { Banner } from "modules/Banner";
import { Hero } from "modules/Hero";
import { LoadingSkeleton } from "modules/OfferPage/components/LoadingSkeleton";
import { OrderTracking } from "modules/OrderTracking";

import { Dates } from "./components/Dates";
import { Details } from "./components/Details";
import { Status } from "./components/Status";

export const OfferPage = () => {
  const {
    dataOffer,
    dataCalendar,
    dataMember,
    dataMemberMatched,
    dataSubuser,
    dataSubuserClient,
    isLoading,
  } = useTrackingData();

  return (
    <>
      <Divider sx={{ display: { xs: "none", sm: "block" }, height: "2px" }} />
      <Grid container>
        <Grid item display={{ xs: "block", sm: "none" }}>
          <Banner />
        </Grid>
        <Grid container item position="relative" pb="16px">
          <Grid item display={{ xs: "block", sm: "none" }}>
            <Box
              display={{ xs: "block", sm: "none" }}
              position="absolute"
              bgcolor="#fff"
              width="100%"
              height="100%"
              zIndex={-2}
            ></Box>
            <Hero />
          </Grid>
          <Grid item width="100%">
            <OrderTracking />
          </Grid>
        </Grid>
      </Grid>

      <Grid container direction="column" alignContent="center">
        <Grid item alignSelf="flex-start">
          <Link href={"/"} style={{ textDecoration: "none" }}>
            <Button
              startIcon={<ArrowBackIosNewIcon />}
              size="small"
              sx={{
                color: "primary.main",
                my: { xs: "14px", sm: "35px" },
                ml: { xs: "19px", sm: "29px" },
              }}
              data-testid="back-button"
            >
              Zurück
            </Button>
          </Link>
        </Grid>

        <Paper
          elevation={4}
          sx={{
            width: { xs: "98%", md: 764 },
            color: "text.secondary",
            pb: "60px",
            px: { xs: 0, sm: "10px" },
          }}
        >
          {isLoading ? (
            <LoadingSkeleton />
          ) : (
            <>
              <Details
                variant="customer"
                name={`${convertUmlaut(dataOffer?.customerFirstName) ?? ""} ${
                  convertUmlaut(dataOffer?.customerLastName) ?? ""
                } `}
                address={convertUmlaut(dataOffer?.address) ?? ""}
                city={`${dataOffer?.zip ?? ""} ${
                  convertUmlaut(dataOffer?.city) ?? ""
                }`}
                orderNumber={dataOffer?.offerNumber ?? ""}
              />
              <Divider variant="middle" />

              <Details
                variant="contact"
                testId="contact-element"
                sx={{
                  display: dataSubuser?.lastName ? "flex" : "none",
                }}
                title={"Projektmanager bei Installion"}
                name={`${convertUmlaut(dataSubuser?.firstName) ?? ""} ${
                  convertUmlaut(dataSubuser?.lastName) ?? ""
                } `}
                email={dataSubuser?.email ?? ""}
                phone={dataSubuser?.phone ?? ""}
              />
              <Divider
                variant="middle"
                data-testid="contact-divider"
                sx={{
                  display: dataSubuser?.lastName ? "flex" : "none",
                }}
              />
              <Details
                variant="contact"
                testId="contact-element2"
                sx={{
                  display: dataSubuserClient?.lastName ? "flex" : "none",
                }}
                title={`Ansprechpartner bei ${
                  convertUmlaut(dataMember?.companyName) ?? ""
                }`}
                name={`${convertUmlaut(dataSubuserClient?.firstName) ?? ""} ${
                  convertUmlaut(dataSubuserClient?.lastName) ?? ""
                } `}
                email={dataSubuserClient?.email ?? ""}
                phone={dataSubuserClient?.phone ?? ""}
              />
              <Divider
                variant="middle"
                data-testid="contact-divider2"
                sx={{
                  display: dataSubuserClient?.lastName ? "flex" : "none",
                }}
              />
              <Details
                variant="branch"
                title={`Sie betreut die Niederlassung ${
                  convertUmlaut(dataMemberMatched?.companyName) ?? ""
                }`}
                address={convertUmlaut(dataMemberMatched?.address) ?? ""}
                city={`${dataMemberMatched?.zip ?? ""} ${
                  convertUmlaut(dataMemberMatched?.city) ?? ""
                }`}
              />
              <Divider variant="middle" />
              <Dates dates={dataCalendar as Array<CoreCalendar>} />
              <Status
                coreOfferlog={dataOffer?.coreOfferLog as Array<CoreOfferLog>}
                descriptionInformation={[
                  dataOffer?.offerNumber ?? "",
                  `${convertUmlaut(dataSubuser?.firstName) ?? ""} ${
                    convertUmlaut(dataSubuser?.lastName) ?? ""
                  } `,
                ]}
              />
            </>
          )}
        </Paper>
      </Grid>
    </>
  );
};
