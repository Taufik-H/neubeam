import React from "react";

function UiSimpleCard() {
  return (
    <section className="mt-10">
      <div className="p-5 border border-r-4 border-b-2 border-black w-64">
        <img
          className="object-cover h-full w-full"
          src="https://images.unsplash.com/photo-1615232934320-87b37b0ff5ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
          alt="cardImage"
        />
        <div className="">
          <h1 className="text-xl font-bold">Lorem, ipsum dolor.</h1>
          <p className="my-3 text-slate-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Blanditiis, ratione.
          </p>
          <a
            href="#"
            className="border px-4 py-2 mt-5 border-black hover:text-white hover:bg-slate-900 transition-all duration-200"
          >
            Read more
          </a>
        </div>
      </div>
    </section>
  );
}

export default UiSimpleCard;
