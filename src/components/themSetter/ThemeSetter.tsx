// components/themSetter/ThemeSetter.tsx
"use client";
import { useEffect } from "react";
import { useAppSelector } from "@/hooks/reduxHook";

export default function ThemeSetter() {
  const darkMode = useAppSelector(state => state.theme.darkMode);

  useEffect(() => {
    // body
    document.body.classList.remove("dark-body", "light-body");
    document.body.classList.add(darkMode ? "dark-body" : "light-body");

    // content div
    const contentDiv = document.querySelector(".content");
    if (contentDiv) {
      contentDiv.classList.remove("dark-body", "light-body");
      contentDiv.classList.add(darkMode ? "dark-body" : "light-body");
    }
  }, [darkMode]);

  return null;
}
