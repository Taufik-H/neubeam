import Link from "next/link";
import { unbounded } from "@/app/fonts";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav
      className={`${unbounded.className} max-container padding-container my-5 flex-between`}
    >
      <Link href={"/"}>NeuBeam</Link>
      <div className="flex-center gap-4">
        <Button
          bg="bg-orange-500"
          borderColor="border-orange-500"
          textColor="text-orange-500"
          height="h-9"
          hover={true}
          label="support"
          href="/"
          icon="/cofe.svg"
          rounded="rounded-full"
          width="w-32"
          iconSize={12}
        />
        <Button
          bg="bg-slate-900"
          borderColor="border-slate-900"
          textColor="text-slate-900"
          height="h-9"
          hover={true}
          label="star"
          href="/"
          icon="/github.svg"
          iconSize={20}
          rounded="rounded-full"
          width="w-32"
        />
      </div>
    </nav>
  );
};

export default Navbar;
