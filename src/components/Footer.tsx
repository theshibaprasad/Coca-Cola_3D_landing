import React from "react";
import { CocaColaLogo } from "./CocaColaLogo";
import CircleText from "./CircleText";

type Props = {};

export default function Footer({}: Props) {
  return (
    <footer className="bg-[#FEE832] text-[#F40009]">
      <div className="relative mx-auto flex w-full max-w-4xl flex-col items-center justify-center px-4 py-10">
        <CocaColaLogo className="h-28" />
        <p className="mt-4 text-center text-base md:text-lg">
          Made with <span aria-hidden className="inline-block animate-breath">♥</span> by {""}
          <a
            href="https://github.com/theshibaprasad/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline decoration-[#FE6334]/50 underline-offset-4 hover:no-underline"
          >
            Shiba Prasad
          </a>
        </p>
        <div className="absolute right-24 top-0 size-28 origin-center -translate-y-14 md:size-48 md:-translate-y-28">
          <CircleText />
        </div>
      </div>
    </footer>
  );
}
