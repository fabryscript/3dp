import React from "react";
import { TailSpin } from "react-loader-spinner";

function Loading() {
  return (
    <div className="flex h-auto w-full items-center justify-center">
      <TailSpin
        width={"80"}
        height={"80"}
        color="#EF4444"
        ariaLabel="Loading spinner..."
      />
    </div>
  );
}

export default Loading;
