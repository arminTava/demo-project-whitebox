import { Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

import NoTicketsIllustration from "../../assets/illustrations/NoTicketsIllustration";

// ----------------------------------------------------------------------

const motionProps = {
  animate: {
    scale: [0.3, 1.1, 0.9, 1.03, 0.97, 1],
    opacity: [0, 1, 1, 1, 1, 1],
    transition: { ease: [0.43, 0.13, 0.23, 0.96], duration: 0.64 },
  },
  exit: {
    scale: [0.9, 1.1, 0.3],
    opacity: [1, 1, 0],
  },
};

export const NoTickets = () => {
  return (
    <Container>
      <Stack
        sx={{
          py: 12,
          m: "auto",
          maxWidth: 400,
          minHeight: "80vh",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <motion.div {...motionProps}>
          <Typography variant="h4" color="text.secondary" paragraph>
            Keine Tickets
          </Typography>
        </motion.div>

        <motion.div {...motionProps}>
          <Typography sx={{ color: "text.secondary" }}>
            Zu diesem Auftrag gibt es keine Tickets.
          </Typography>
        </motion.div>

        <motion.div {...motionProps}>
          <NoTicketsIllustration
            sx={{ height: 260, mt: { xs: 5, sm: 10 }, mb: { xs: 15, sm: 20 } }}
          />
        </motion.div>

        {/* <Button
          // onClick={() => router.reload()}
                  component=
          size="large"
          variant="contained"
          sx={{ width: "fit-content" }}
        >
          Neu Laden
        </Button> */}
      </Stack>
    </Container>
  );
};
