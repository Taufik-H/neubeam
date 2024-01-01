import { Hero } from "@/components/sections";
import Card from "@/components/sections/Card";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="padding-container max-container mt-10">
        <div className="flex gap-5 justify-center flex-wrap">
          <Card hover={true} height="h-12" rounded="rounded-xl" width="w-48">
            <div className="flex justify-between w-full p-2 items-center">
              <p className="font-bold capitalize">Alert</p>
              <p className="text-white font-bold bg-slate-900 py-1 px-2 text-sm rounded-md">
                4
              </p>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
