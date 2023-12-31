"use client";
import React, { useCallback, useEffect, useRef } from "react";

function ScrollToTopBtn() {
  const scrollToTopBtnRef = useRef<HTMLButtonElement>(null);

  const handleScroll = () => {
    if (!scrollToTopBtnRef.current) return;
    if (window.scrollY > 150) {
      scrollToTopBtnRef.current.style.transform = "scale(1)";
    } else {
      scrollToTopBtnRef.current.style.transform = "scale(0)";
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScrollToTop = useCallback(() => {
    if (scrollToTopBtnRef.current) {
      document.documentElement.scrollTop = 0;
    }
  }, []);

  return (
    <button
      className="absolute bottom-[20px] right-[20px] flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full bg-orange p-[10px] text-xs text-white shadow-md transition-all duration-200 ease-in-out hover:scale-125"
      ref={scrollToTopBtnRef}
      onClick={handleScrollToTop}
    >
      ▲
    </button>
  );
}

export default ScrollToTopBtn;
