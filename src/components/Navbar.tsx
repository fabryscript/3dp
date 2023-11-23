import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import Image from "next/image";

function Navbar() {
  return (
    <header>
      <div className="absolute left-0 right-0 top-2 z-40 pt-14">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="flex items-center justify-between">
              <Image
                src={"/images/sig.webp"}
                alt="Signature"
                className="invert filter"
                width={80}
                height={80}
              />
              <div className="flex items-center gap-x-8">
                <Link
                  className="inline-flex min-h-[36px] items-center rounded-full bg-neutral-950 px-4 py-1.5 text-sm text-white transition hover:bg-neutral-800"
                  href={"mailto:fabrizioemanuelepiperno@nabla.studio"}
                >
                  Get in touch
                </Link>
                {/* <button className="group -m-2.5 rounded-full p-2.5 transition hover:bg-neutral-950/10">
                  <Menu />
                </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
