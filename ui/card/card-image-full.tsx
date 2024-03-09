import React from "react";

function CardImageFull() {
  return (
    <div className="mt-10">
      <div className="w-64  border-2 border-slate-800 bg-white shadow-[5px_7px_0_rgb(15,23,42,1)]">
        <img
          className="h-full w-full border-b-2 border-slate-800 object-cover"
          src="https://images.unsplash.com/photo-1620336655052-b57986f5a26a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="cardImage"
        />
        <div className="w-full p-5">
          <div className="flex items-center justify-between">
            <h1 className=" font-bold">Lorem, ipsum</h1>
            <p className=" font-bold">$83.4.</p>
          </div>
          <p className="my-3 text-justify text-slate-600 ">
            Lorem ipsum, dolor sit amet consectetur adipisicing...
          </p>
          <a href="#" className="w-full ">
            <div className="w-full border border-black px-2 py-2 text-center transition-all duration-200 hover:bg-slate-900 hover:text-white">
              Add Cart
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default CardImageFull;
