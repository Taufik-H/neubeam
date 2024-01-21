import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "NeuBeam | components",
  description: "Tailwindcss components free ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="max-container padding-container">{children}</section>
    </>
  );
}
