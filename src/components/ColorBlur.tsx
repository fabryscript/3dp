import React from "react";

function ColorBlur({ className: rest }: { className: string }) {
  return <div className={`absolute rounded-full filter ${rest ?? ""}`} />;
}

export default ColorBlur;
