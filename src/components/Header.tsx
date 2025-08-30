import React from "react";
import { CocaColaLogo } from "@/components/CocaColaLogo";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="-mb-28 flex justify-center py-4">
      <CocaColaLogo className="z-10 h-24 cursor-pointer" />
    </header>
  );
}
