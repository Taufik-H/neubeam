import type { Metadata } from "next";

import "./globals.css";
import { Navbar, Footer } from "@/components/sections";

export const metadata: Metadata = {
  title: "NeuBeam",
  description: "Tailwindcss components free ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
