import "./globals.css";
import { Unbounded, Inter } from "next/font/google";

const unbounded = Unbounded({
  weight: "400",
  style: "normal",
  subsets: ["latin-ext"],
});

const inter = Inter({
  weight: "400",
  style: "normal",
  subsets: ["latin-ext"],
});

export const metadata = {
  title: "NeuBeam",
  description: "OpenSource components neubrutalism for TailwindCss",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
