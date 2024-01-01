import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full max-conteiner padding-container absolute bottom-5">
      <div className="relative w-full bg-slate-900 rounded-lg h-12 ">
        <div className="absolute flex justify-between w-full border bg-white rounded-lg border-slate-900 p-3 -top-2 -left-1">
          <p>NeuBeam</p>
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
            <Image src={"/github.svg"} height={20} width={20} alt="github" />
            Taufik-H
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
