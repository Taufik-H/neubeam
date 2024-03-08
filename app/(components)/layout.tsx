import Button from "@/components/sections/Button";
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
      <section className="max-container padding-container ">
        <Button
          bg="bg-slate-900"
          borderColor="border-slate-900"
          textColor="text-slate-900"
          height="h-9"
          hover={true}
          href="/"
          label="Back"
          iconSize={20}
          icon="/left-arrow.svg"
          rounded="rounded-lg"
          width="w-12 md:w-24"
          className="mb-5 ml-5 mt-10 font-bold"
        />
        <div className="w-full border-b border-slate-200 p-1"></div>
        {children}
      </section>
    </>
  );
}
