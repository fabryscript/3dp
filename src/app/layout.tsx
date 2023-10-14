import "./globals.css";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "fabryscript",
  description: "Web developer based in Milazzo, Italy 🇮🇹",
  keywords: [
    "Fabrizio Piperno",
    "Web Developer",
    "React",
    "NextJS",
    "Vue",
    "Nuxt",
    "Front-end Developer",
    "JavaScript",
    "UI/UX Design",
    "Portfolio",
    "Code Quality",
    "Software Engineer",
    "Custom Web Development",
    "Web Development Services",
    "Fabryscript",
    "Vue.js",
    "Nuxt.js",
    "NextJS Development",
    "Web Apps",
    "JavaScript Developer",
    "Blog",
    "Hire",
    "Solutions",
  ],
  openGraph: {
    type: "website",
    title: "fabryscript",
    description: "Web developer based in Milazzo, Italy 🇮🇹",
    images: ["/images/og_card.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} overflow-hidden bg-black p-4 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
