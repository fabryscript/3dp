import Image from "next/image";
import React from "react";

function Navbar() {
  return (
    <div className="fixed left-0 right-0 top-4 flex flex-row justify-between px-6">
      <Image src={"/images/sig.png"} alt="Signature" width={80} height={80} />
      <button
        type="button"
        className="flex max-h-14 flex-row items-center justify-center rounded-2xl border border-red-500 px-6 py-3"
      >
        Menu
      </button>
    </div>
  );
}

export default Navbar;
