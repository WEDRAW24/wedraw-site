import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import SidebarNav from "./components/SidebarNav";
import ConditionalLayout from "./components/ConditionalLayout";
import StructuredData from "./components/StructuredData";
import { ReactNode } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://wedraw.uk"),
  title: {
    default: "WEDRAW — Event design & site planning studio",
    template: "%s | WEDRAW",
  },
  description:
    "WEDRAW is an innovative event design and site planning studio. We design, we survey, we mark out — transforming spaces into unforgettable events.",
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://wedraw.uk",
    siteName: "WEDRAW",
    title: "WEDRAW — Event design & site planning studio",
    description:
      "WEDRAW is an innovative event design and site planning studio. We design, we survey, we mark out — transforming spaces into unforgettable events.",
  },
  twitter: {
    card: "summary_large_image",
    title: "WEDRAW — Event design & site planning studio",
    description:
      "WEDRAW is an innovative event design and site planning studio. We design, we survey, we mark out — transforming spaces into unforgettable events.",
  },
  robots: {
    index: true,
    follow: true,
  },
  verification: {
    google: "JN4vZPD40XlfFC8k_pBBdJ1_kDaKIK1gl0SP2ODje_Y",
  },
};

function Providers({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/bbt5cpp.css" />
      </head>
      <body className="antialiased">
        <StructuredData />
        <ConditionalLayout>
        {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return <Providers>{children}</Providers>;
}
