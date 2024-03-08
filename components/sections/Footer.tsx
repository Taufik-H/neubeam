import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="max-conteiner padding-container my-5 w-full ">
      <div className="relative h-12 w-full rounded-lg bg-slate-900 ">
        <div className="absolute -left-1 -top-2 flex w-full justify-between rounded-lg border border-slate-900 bg-white p-3">
          <p className="font-semibold">NeuBeam</p>
          <ul className="flex gap-5">
            <li className="underline">
              <Link href={"#"}>contribute</Link>
            </li>
            <li className="underline">
              <Link href={"#"}>support</Link>
            </li>
          </ul>
          <Link
            href="https://github.com/Taufik-H"
            className="flex items-center"
          >
            <Image
              src={"/github.svg"}
              height={20}
              width={20}
              alt="github"
              className=""
            />
            Taufik-H
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
