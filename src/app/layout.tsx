import ClientWrapper from "@/components/ClientWrapper";
import type { Metadata, Viewport } from "next";
import React from "react";
import COLORS from "@/settings/colors";
import InitColorSchemeScript from "@mui/material/InitColorSchemeScript";

import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/700.css";

const APP_NAME = "Recipe Helper";
const APP_DEFAULT_TITLE = "Recipe Helper - Your AI Baking Assistant";
const APP_TITLE_TEMPLATE = "%s - Recipe Helper";
const APP_DESCRIPTION =
  "Discover, create, and refine your baking recipes with Recipe Helper, the ultimate AI baking assistant. Track your recipe evolution, experiment with new ideas, and achieve delicious results every time.";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  keywords:
    "baking recipes, AI recipe assistant, baking app, recipe tracker, recipe evolution, cooking assistant, baking experiments, food app, Recipe Helper",
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE
  },
  authors: [{ name: "Trevor Recker" }],
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  robots:
    process.env.NODE_ENV === "development"
      ? "noindex, nofollow, noarchive, nosnippet"
      : "index, follow",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE
    // startUpImage: [],
  },
  formatDetection: {
    telephone: false
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE
    },
    description: APP_DESCRIPTION
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE
    },
    description: APP_DESCRIPTION
  }
};

export const viewport: Viewport = {
  themeColor: COLORS.light.primary,
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <body>
        <InitColorSchemeScript />
        <main>
          <ClientWrapper>{children}</ClientWrapper>
        </main>
      </body>
    </html>
  );
}
