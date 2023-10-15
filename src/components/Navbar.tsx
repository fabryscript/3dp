import Image from "next/image";
import React from "react";
import ColorBlur from "./ColorBlur";

function Navbar() {
  return (
    <div className="relative left-0 right-0 top-4 flex flex-row items-center justify-center px-6">
      <ColorBlur className="bottom-52 left-0 h-[300px] w-[300px] bg-yellow-500 blur-[200px]" />
      <Image src={"/images/sig.png"} alt="Signature" width={70} height={70} />
      {/* <button
        type="button"
        className="flex max-h-14 flex-row items-center justify-center rounded-2xl border border-red-500 px-6 py-3"
      >
        Menu
      </button> */}
    </div>
  );
}

export default Navbar;
