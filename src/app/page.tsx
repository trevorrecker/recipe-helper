"use client";

import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Stack,
  Typography
} from "@mui/material";

export default function HomePage() {
  return (
    <Container sx={{ mt: 2, mb: 2 }}>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        gap={2}
      >
        <Typography variant="h1" component="h1">
          Recipe Helper
        </Typography>
        <Chip
          color="info"
          label={`v${process.env.NEXT_PUBLIC_PACKAGE_VERSION}`}
        />
        {process.env.NEXT_PUBLIC_ENV_NAME != "production" && (
          <Chip color="default" label={"DEV"} />
        )}
      </Stack>
    </Container>
  );
}
