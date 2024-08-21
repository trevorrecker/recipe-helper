import "@/app/_styles/recipe-helper.scss";
import ClientSide from "@/components/ClientSide";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

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

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientSide>{children}</ClientSide>
      </body>
    </html>
  );
}
