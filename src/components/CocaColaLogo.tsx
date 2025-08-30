import { SVGProps } from "react";
import clsx from "clsx";
import Image from "next/image";

export function CocaColaLogo(props: SVGProps<SVGSVGElement> & { className?: string }) {
  return (
    <div className={clsx("group", props.className)}>
      <Image
        src="/labels/coca-cola-logo.png"
        alt="Coca-Cola"
        width={220}
        height={115}
        className="object-contain"
        priority
      />
    </div>
  );
}
