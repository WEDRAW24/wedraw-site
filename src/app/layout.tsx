import type { Metadata } from "next";
import "./globals.css";
import Footer from "./components/Footer"; // Updated import path to correct location

export const metadata: Metadata = {
  title: "WeDraw Style Guide",
  description: "Style guide and component library",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/bbt5cpp.css" />
      </head>
      <body className="antialiased">
        {children}
        <Footer />
      </body>
    </html>
  );
}
