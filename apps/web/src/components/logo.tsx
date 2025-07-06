// import Image from "next/image";
import Link from "next/link";

import { Logo as LogoUI } from "@workspace/ui/components/logo";

import type { Maybe, SanityImageProps } from "@/types";

// import { SanityImage } from "./sanity-image";

interface LogoProps {
  src?: Maybe<string>;
  image?: Maybe<SanityImageProps>;
  alt?: Maybe<string>;
  width?: number;
  height?: number;
  priority?: boolean;
}

export function Logo(
  {
    // src,
    // alt = "logo",
    // image,
    // width = 170,
    // height = 40,
    // priority = true,
  }: LogoProps,
) {
  return (
    <Link href="/" className="inline-block select-none">
      {/* TODO: In future create logo ad add here */}
      {/* 
        <SanityImage
          asset={image}
          alt={alt ?? "logo"}
          className="w-[170px]  dark:invert"
          priority={priority}
          loading="eager"
          decoding="sync"
          quality={100}
        />
         */}
      <LogoUI />
    </Link>
  );
}
