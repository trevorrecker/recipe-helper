"use client";

import Header from "@/components/Header";
import ThemeModeToggle from "@/components/ThemeModeToggle";
import {
  Badge,
  Box,
  Card,
  CardContent,
  CardHeader,
  Chip,
  Container,
  Link,
  Stack,
  Typography
} from "@mui/material";

export default function HomePage() {
  return (
    <Container>
      <Header />
      <h1>Recipe Helper</h1>

      <Card>
        <CardContent>
          <Stack direction="row" gap={1}>
            <Typography variant="h5" sx={{}}>
              Development Preview
            </Typography>
            <Chip
              color="info"
              label={`v${process.env.NEXT_PUBLIC_PACKAGE_VERSION}`}
            />
            <Chip
              color="default"
              label={`${process.env.NEXT_PUBLIC_ENV_NAME}`}
            />
          </Stack>
        </CardContent>
      </Card>
    </Container>
  );
}
