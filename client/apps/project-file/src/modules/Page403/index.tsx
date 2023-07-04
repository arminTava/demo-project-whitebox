import { Container, Stack, Typography } from "@mui/material";
import { motion } from "framer-motion";

import ForbiddenIllustration from "../../assets/illustrations/ForbiddenIllustration";

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

export const Page403 = () => {
  return (
    <Container>
      <Stack
        sx={{
          py: 12,
          m: "auto",
          maxWidth: 400,
          minHeight: "100vh",
          textAlign: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <motion.div {...motionProps}>
          <Typography variant="h4" color="text.secondary" paragraph>
            Keine Berechtigung
          </Typography>
        </motion.div>

        <motion.div {...motionProps}>
          <Typography sx={{ color: "text.secondary" }}>
            Diese Seite ist nicht frei zugänglich. <br /> Bitte wenden Sie sich
            an Ihren Systemadministrator.
          </Typography>
        </motion.div>

        <motion.div {...motionProps}>
          <ForbiddenIllustration sx={{ height: 260, my: { xs: 5, sm: 10 } }} />
        </motion.div>

        {/* <Button
          onClick={() => router.reload()}
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
