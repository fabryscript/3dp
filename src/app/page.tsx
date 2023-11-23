"use client";

import { Github, Instagram, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const socials = [
  {
    icon: <Github color="white" size={"32px"} />,
    href: "https://github.com/fabryscript",
    label: "GitHub",
  },
  {
    icon: <Twitter color="white" size={"32px"} />,
    href: "https://twitter.com/fabryscript",
    label: "Twitter",
  },
  {
    icon: <Instagram color="white" size={"32px"} />,
    href: "https://instagram.com/fabryscript",
    label: "Instagram",
  },
];

export default function Home() {
  return (
    <div className="relative flex flex-auto overflow-hidden bg-white pt-14">
      <div className="relative isolate flex w-full flex-col pt-9">
        <main className="w-full flex-auto">
          <div className="mx-auto mt-24 max-w-7xl px-6 sm:mt-32 md:mt-56 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="mx-auto max-w-3xl text-left sm:text-center">
                <h1 className="text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
                  Hi, I&apos;m Fabrizio Piperno
                </h1>
                <p className="mt-6 text-xl text-neutral-600">
                  I&apos;m an Italian developer specialized in web and mobile
                  technologies, with vast knowledge of React and its ecosystem.
                </p>
              </div>
            </div>
          </div>
          <div className="mx-2 mt-24 py-20 sm:mt-32 sm:py-32 lg:mt-56">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:max-w-none">
                <div className="flex items-center gap-x-8">
                  <h2 className="text-center text-sm font-semibold sm:text-left">
                    I&apos;ve worked with amazing people
                  </h2>
                  <div className="h-0.5 flex-auto bg-neutral-800" />
                </div>
                <ul
                  role="list"
                  className="mt-10 flex flex-wrap items-center justify-between gap-x-8 gap-y-10 max-sm:justify-center"
                >
                  <li>
                    <Link
                      href={"https://nabla.studio"}
                      className="inline-flex items-center gap-2"
                    >
                      <Image
                        src={"/images/nabla.svg"}
                        alt="Nabla logo"
                        width={70}
                        height={40}
                        className="invert filter"
                      />
                      <p className="text-2xl font-medium">nabla</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"https://osmosis.zone"}
                      className="inline-flex items-center gap-2"
                    >
                      <Image
                        src={"/images/osmosis.webp"}
                        alt="Osmosis logo"
                        width={40}
                        height={40}
                      />
                      <p className="text-2xl font-medium">Osmosis</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"https://studioaico.org/"}
                      className="inline-flex items-center gap-2"
                    >
                      <Image
                        src={"/images/aico.svg"}
                        alt="Nabla logo"
                        width={90}
                        height={40}
                      />
                      <p className="text-2xl font-medium">Studio AICO</p>
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"https://www.gipsytattooshop.com/"}
                      className="inline-flex items-center gap-2"
                    >
                      <Image
                        src={"/images/gipsy.png"}
                        alt="Nabla logo"
                        width={50}
                        height={43}
                      />
                      <p className="text-2xl font-medium">Gipsy Tattoo</p>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-24 max-w-7xl px-6 sm:mt-32 lg:mt-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="max-w-2xl">
                <h2 className="block text-4xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-5xl">
                  Using harmony as the key for the best experience
                </h2>
                <div className="mt-6 text-xl text-neutral-600">
                  <p>
                    I believe that harmony, order and an organized workflow are
                    the base elements through which I can craft the best
                    experiences.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-16 max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                <div className="flex">
                  <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                    <Link
                      href={"https://cosmoshop.nabla.studio/"}
                      target="_blank"
                    >
                      <h3>
                        <Image
                          src={"/images/cosmoshop.png"}
                          alt="Cosmoshop logo"
                          width={36}
                          height={36}
                          className="min-h-[36px]"
                        />
                      </h3>
                      <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                        <time dateTime="2023" className="font-semibold">
                          2023
                        </time>
                        <span className="text-neutral-300">/</span>
                        <span>Work</span>
                      </p>
                      <p className="font-display mt-6 text-2xl font-semibold text-neutral-950">
                        Unlock a universe of sales with NFT-powered e-commerce.
                      </p>
                      <p className="mt-4 text-base text-neutral-600">
                        Cosmoshop is a platform for modern web3 e-commerce
                        solutions. Using strategies such as Token Gating, NFT
                        Discounts, Loyalty Plans and Crypto Payments to boost
                        your e-commerce revenue and engagement
                      </p>
                    </Link>
                  </article>
                </div>
                <div className="flex">
                  <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                    <Link href={"https://studioaico.org/"} target="_blank">
                      <h3>
                        <Image
                          src={"/images/aico.svg"}
                          alt="Studio AICO logo"
                          width={36}
                          height={36}
                          className="min-h-[36px]"
                        />
                      </h3>
                      <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                        <time dateTime="2023" className="font-semibold">
                          2023
                        </time>
                        <span className="text-neutral-300">/</span>
                        <span>Work</span>
                      </p>
                      <p className="font-display mt-6 text-2xl font-semibold text-neutral-950">
                        Integrated services for organizations with high
                        innovative, social and cultural value.
                      </p>
                      <p className="mt-4 text-base text-neutral-600">
                        Studio AICO is a company focused on delivering
                        management and consulting services to organizations.
                        Ranging from consulting to fundraising and
                        sustainability.
                      </p>
                    </Link>
                  </article>
                </div>
                <div className="flex">
                  <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                    <Link href={"https://quirks.nabla.studio/"} target="_blank">
                      <h3>
                        <Image
                          src={"/images/quirks.svg"}
                          alt="Quirks logo"
                          width={36}
                          height={36}
                          className="min-h-[36px] invert filter"
                        />
                      </h3>
                      <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                        <time dateTime="2023" className="font-semibold">
                          2023
                        </time>
                        <span className="text-neutral-300">/</span>
                        <span>Work</span>
                      </p>
                      <p className="font-display mt-6 text-2xl font-semibold text-neutral-950">
                        A library for developers to focus entirely on dApp
                        creation.
                      </p>
                      <p className="mt-4 text-base text-neutral-600">
                        Quirks is a framework-agnostic, TypeScript library that
                        focuses on connecting wallets and your dApp with minimal
                        effort, while weighing only 2kb.
                      </p>
                    </Link>
                  </article>
                </div>
              </div>
            </div>
          </div>
          <div className="mx-2 mt-24 max-w-7xl px-6 sm:mx-auto sm:mt-32 lg:mt-40 lg:px-8">
            <div className="mx-auto max-w-2xl lg:max-w-none">
              <div className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
                <div className="mx-auto max-w-4xl">
                  <div className="max-w-xl">
                    <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
                      Let&apos;s bring your idea to life
                    </h2>
                    <div className="mt-6 flex">
                      <Link
                        href={"/contact"}
                        className="inline-flex rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-neutral-950 transition hover:bg-neutral-200"
                      >
                        <span className="relative top-px">Contact me</span>
                      </Link>
                    </div>
                    <div className="mt-10 flex justify-center border-t border-white/10 pt-10">
                      <ul
                        role="list"
                        className="flex w-full items-center justify-center gap-11 md:justify-start md:gap-20"
                      >
                        {socials.map(({ href, icon }) => (
                          <Link
                            href={href}
                            target="_blank"
                            key={href}
                            className="flex flex-col items-center justify-center"
                          >
                            {icon}
                          </Link>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
        <footer className="mx-auto mt-24 w-full max-w-7xl px-6 sm:mt-32 lg:mt-40 lg:px-8">
          <div className="mx-auto max-w-2xl lg:max-w-none">
            <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
              <Link href={"/"}>
                <Image
                  src={"/images/sig.png"}
                  className="invert filter"
                  alt="Signature"
                  width={80}
                  height={80}
                />
              </Link>
              <p className="text-sm text-neutral-700">
                © {new Date().getFullYear()} Fabrizio Piperno.
              </p>
              <p className="text-sm text-neutral-700">
                Made with ❤️ in{" "}
                <span>
                  <Link
                    target="_blank"
                    className="text-blue-700"
                    href={"https://en.wikipedia.org/wiki/Milazzo"}
                  >
                    Milazzu
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
