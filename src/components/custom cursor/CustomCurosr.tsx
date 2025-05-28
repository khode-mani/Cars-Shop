

"use client";

import "./cursor.scss";
import { useEffect, useState } from "react";
import clsx from "clsx";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [targetPosition, setTargetPosition] = useState({ x: 0, y: 0 });
  const [isLinkHover, setIsLinkHover] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isInputHover, setIsInputHover] = useState(false);

  useEffect(() => {
    const isTouch =
      "ontouchstart" in window || navigator.maxTouchPoints > 0;
    setIsTouchDevice(isTouch);
    if (isTouch) return;

    const move = (e: MouseEvent) => {
      setTargetPosition({ x: e.clientX, y: e.clientY });
    };

    const mouseDown = () => setIsClicking(true);
    const mouseUp = () => setIsClicking(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button")) {
        setIsLinkHover(true);
      } else if (target.closest("input, .no-cursor")) {
        setIsInputHover(true);
      }
    };

    const handleMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest("a, button")) {
        setIsLinkHover(false);
      } else if (target.closest("input, .no-cursor")) {
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

  // animation loop
  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      setPosition((prev) => {
        const dx = targetPosition.x - prev.x;
        const dy = targetPosition.y - prev.y;
        const speed = 0.08;
        return {
          x: prev.x + dx * speed,
          y: prev.y + dy * speed,
        };
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationFrameId);
  }, [targetPosition]);

  if (isTouchDevice) return null;

  return (
    <div
      className={clsx(
        "fixed z-[9999] rounded-full mix-blend-difference c-cursor pointer-events-none",
        isClicking && "cursor-clicked",
        isLinkHover ? "bg-white w-20 h-20 opacity-[.1] border-2 border-indigo-500 " : "bg-white w-3 h-3",
        isInputHover ? "opacity-0" : "opacity-100"
      )}
      style={{
        left: position.x,
        top: position.y,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
}
