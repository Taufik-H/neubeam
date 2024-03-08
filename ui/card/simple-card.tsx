import React from "react";

function SimpleCard() {
  return (
    <section className="mt-10">
      <div className="w-64 border-2 border-slate-900 bg-white p-5 shadow-[5px_7px_0_rgb(15,23,42,1)]">
        <img
          className="h-full w-full object-cover"
          src="https://images.unsplash.com/photo-1615232934320-87b37b0ff5ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80"
          alt="cardImage"
        />
        <div>
          <h1 className="text-xl font-bold">Lorem, ipsum dolor.</h1>
          <p className="my-3 text-justify text-slate-600">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <a
            href="#"
            className="mt-5  border border-black px-4 py-2 transition-all duration-200 hover:bg-slate-900 hover:text-white"
          >
            Read more
          </a>
        </div>
      </div>
    </section>
  );
}

export default SimpleCard;
