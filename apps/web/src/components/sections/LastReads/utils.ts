import React from "react";


export function handleScroll(
  scrollRef: React.RefObject<HTMLUListElement | null>,
  imageWidth: number) {
  return (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const { scrollLeft } = scrollRef.current;
    const scrollAmount = imageWidth + 10; // slightly more than card width
    scrollRef.current.scrollTo({
      left: direction === "left"
        ? scrollLeft - scrollAmount
        : scrollLeft + scrollAmount,
      behavior: "smooth",
    });
  };
}
