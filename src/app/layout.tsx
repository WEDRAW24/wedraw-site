import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer";
import SidebarNav from "./components/SidebarNav";
import { ReactNode } from "react";
import ConditionalLayout from "./components/ConditionalLayout";

export const metadata: Metadata = {
  title: "WEDRAW",
  description: "A studio for hands-on thinking",
};

function Providers({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/bbt5cpp.css" />
      </head>
      <body className="antialiased">
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
