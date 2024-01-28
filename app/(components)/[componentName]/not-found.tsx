import Image from "next/image";
import Link from "next/link";

export default function NotFound() {
  return (
    <div>
      <div className="relative -z-10 flex w-full justify-center">
        <Image
          src={"/pattern-light.svg"}
          width={1440}
          height={500}
          alt="background"
          className="absolute w-11/12 object-cover object-center lg:w-8/12"
        />
      </div>
      <div className="flex  min-h-[70vh] flex-col items-center justify-center gap-5 py-20">
        <Image
          src={"logonb.svg"}
          width={200}
          height={200}
          alt="404 image"
          className=""
        />
        <div className="text-center">
          <h3 className="text-2xl font-bold">
            Hell nooo.. I’ll create soon :*
          </h3>
          <p>
            contact the{" "}
            <span className="font-bold">
              <Link href={"github.com/Taufik-H"} className="underline">
                developer
              </Link>
            </span>{" "}
            to create this component.
          </p>
        </div>
      </div>
    </div>
  );
}
