import "./globals.css";
import { Unbounded } from "next/font/google";

const unbounded = Unbounded({
  weight: "400",
  style: "normal",
  subsets: ["latin-ext"],
});

export const metadata = {
  title: "Tailwindbrutalism",
  description: "OpenSource components neubrutalism for TailwindCss",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={unbounded.className}>{children}</body>
    </html>
  );
}
