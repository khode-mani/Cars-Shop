"use client";

import "./cursor.scss";

import { useEffect, useState } from "react";

import clsx from "clsx";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isLinkHover, setIsLinkHover] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isInputHover , setIsInputHover] = useState(false)
  



  useEffect(() => {
  const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  setIsTouchDevice(isTouch);
  if (isTouch) return;

  const move = (e: MouseEvent) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  const mouseDown = () => setIsClicking(true);
  const mouseUp = () => setIsClicking(false);

  const handleMouseOver = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest("a, button")) {
      setIsLinkHover(true);
    }
    else if (target.closest("input , .no-cursor")) {
      setIsInputHover(true)
    }
  };

  const handleMouseOut = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (target.closest("a, button")) {
      setIsLinkHover(false);
    }else if (target.closest("input , .no-cursor")) {
      setIsInputHover(false);
    }
  };

  window.addEventListener("mousemove", move);
  window.addEventListener("mousedown", mouseDown);
  window.addEventListener("mouseup", mouseUp);
  document.addEventListener("mouseover", handleMouseOver);
  document.addEventListener("mouseout", handleMouseOut);

  return () => {
    window.removeEventListener("mousemove", move);
    window.removeEventListener("mousedown", mouseDown);
    window.removeEventListener("mouseup", mouseUp);
    document.removeEventListener("mouseover", handleMouseOver);
    document.removeEventListener("mouseout", handleMouseOut);
  };
}, []);



    if (isTouchDevice) return null;

  return (
    <>
        <div
          className={clsx(
            "pointer-events-none fixed z-[9999] rounded-full  mix-blend-difference c-cursor",
            isClicking ? "cursor-clicked" : "",
            isLinkHover
              ? "border-indigo-500 bg-white w-10 h-10 "
              : "bg-white w-5 h-5",

            isInputHover? "opacity-0" : "opacity-100"
          )}
          style={{
            left: position.x,
            top: position.y,
            transform: "translate(-50%, -50%)",
          }}
        />

    </>
  );
}
