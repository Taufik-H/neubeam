import { Hero } from "@/components/sections";
import Card from "@/components/sections/Card";
import components from "@/constant/components";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="padding-container max-container mt-10">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {components.map((component, index) => (
            <Link href={component.link} key={index}>
              <Card
                hover={true}
                height="h-12"
                rounded="rounded-xl"
                width="w-full"
              >
                <div className="flex w-full items-center justify-between p-2">
                  <p className="font-bold capitalize">{component.name}</p>
                  <p className="rounded-md bg-slate-900 px-2 py-1 text-sm font-bold text-white">
                    {component.style.length}
                  </p>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
