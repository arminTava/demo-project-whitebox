import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
} from "@mui/lab";
import { Box, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";

import { CoreOfferLog } from "gql/graphql";

import {
  DateType,
  DateTypeFullName,
  Days,
  TimeLineData,
  timeLineDataInit,
} from "./constants";

type StatusProps = {
  coreOfferlog: Array<CoreOfferLog> | undefined;
  descriptionInformation: Array<string>;
};

export const Status = ({
  coreOfferlog,
  descriptionInformation,
}: StatusProps) => {
  const [timeLineData, setTimeLineData] =
    useState<Array<TimeLineData>>(timeLineDataInit);
  useEffect(() => {
    updateTimeLine();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [coreOfferlog]);

  function findLastLog(coreOfferlog: Array<CoreOfferLog>): CoreOfferLog | null {
    let lastLog: CoreOfferLog | null = null;
    for (const cl of coreOfferlog) {
      if (cl.type && !(cl.type in DateType)) continue;
      if (
        !lastLog ||
        new Date(cl.createdAt as string) > new Date(lastLog.createdAt as string)
      )
        lastLog = cl;
    }
    return lastLog;
  }

  function updateTimeLine() {
    if (!coreOfferlog) return;
    const lastLog = findLastLog(coreOfferlog);
    let index = -1;
    const timeLineDataCopy = timeLineData.map((tl, cindex) => {
      if (index !== -1 || tl.type === lastLog?.type) {
        if (tl.type === lastLog?.type) index = cindex;
        return {
          ...tl,
          disabled: false,
          current: tl.type === lastLog?.type,
          date: new Date(
            coreOfferlog.find((cl) => cl.type === tl.type)?.createdAt as string
          ),
          description:
            tl.type === lastLog?.type
              ? tl.descriptionPresent(...descriptionInformation)
              : tl.descriptionPast(...descriptionInformation),
        };
      }
      return {
        ...tl,
        disabled: true,
        date: undefined,
        description: tl.descriptionPresent(...descriptionInformation),
      };
    });
    setTimeLineData(timeLineDataCopy);
  }
  return (
    <Grid container px="30px" direction="column" alignContent="flex-start">
      <Typography
        variant="h2"
        fontSize="20px"
        fontWeight={600}
        px={{ xs: "0", sm: "20px" }}
        mb="24px"
      >
        Detaillierter Auftragsverlauf
      </Typography>
      <Timeline
        sx={{
          margin: 0,
          padding: 0,
          "& :before": {
            display: "none",
          },
        }}
      >
        {timeLineData.map((tD, index) => (
          <TimelineItem
            key={index}
            // sx={{ display: tD.type === DateType.finalize ? "none" : "flex" }}
          >
            <TimelineSeparator>
              <TimelineDot
                color={
                  // eslint-disable-next-line no-nested-ternary
                  tD.disabled
                    ? "grey"
                    : tD.current && !tD.finalItem
                    ? "grey"
                    : "primary"
                }
              />
              <TimelineConnector
                sx={{
                  bgcolor: tD.disabled ? "" : "primary.main",
                  display: tD.lastItem ? "none" : "block",
                }}
              />
            </TimelineSeparator>
            <TimelineContent mb="27px">
              <Box sx={{ color: tD.disabled ? "grey" : "black" }}>
                <Box
                  display="flex"
                  flexDirection={{ xs: "column", sm: "row" }}
                  justifyItems="center"
                  gap={{ sm: 2 }}
                >
                  <Typography fontSize="14px" fontWeight={700}>
                    {DateTypeFullName[tD.type]}
                  </Typography>
                  <Typography fontSize="14px">
                    {!tD.date
                      ? ""
                      : `${
                          Days[tD.date.getDay()]
                        }, ${tD.date.toLocaleDateString()}`}
                    {/* (Mo, 29.01.23) */}
                  </Typography>
                </Box>

                <Typography data-testid="status-description">
                  {tD.description}
                </Typography>
              </Box>
            </TimelineContent>
          </TimelineItem>
        ))}
      </Timeline>
    </Grid>
  );
};
