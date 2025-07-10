import React from "react";
import { LastReadsProps } from "./types";

const LastReadsSkeleton: React.FC<
  LastReadsProps & {
    books: NonNullable<LastReadsProps["books"]>;
    imageWidth: number;
  }
> = ({ books, imageWidth }) => {
  return books?.map((_, index) => (
    <article key={index} className="snap-start">
      <div
        className={`w-[${imageWidth}px] h-[450px] bg-muted animate-pulse rounded-2xl mx-auto`}
      />
      <div className="space-y-2 mt-4">
        <div className="h-4 w-24 bg-muted rounded animate-pulse" />
        <div className="h-6 w-full bg-muted rounded animate-pulse" />
        <div className="h-4 w-3/4 bg-muted rounded animate-pulse" />
      </div>
    </article>
  ));
};

export { LastReadsSkeleton };
