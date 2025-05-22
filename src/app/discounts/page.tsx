"use client";

import Container from "@/components/container/Container";
import { useState } from "react";

type CopiedState = {
  ten: boolean;
  twenty: boolean;
  thirty: boolean;
};

export default function CopyButton() {
  const [copied, setCopied] = useState<CopiedState>({ ten: false, twenty: false, thirty: false });

  const copyText = (key: keyof CopiedState) => {
    const textToCopy: Record<keyof CopiedState, string> = {
      ten: "mani",
      twenty: "0FF20",
      thirty: "1384M",
    };

    navigator.clipboard.writeText(textToCopy[key])
      .then(() => setCopied(prevState => ({
        ...prevState,
        [key]: true
      })))
      .catch(err => console.error("خطا در کپی کردن متن", err));

   
    setTimeout(() => setCopied(prevState => ({
      ...prevState,
      [key]: false
    })), 2000);
  };

  return (
    <div>
      <Container className="text-center">
        <ul className="flex flex-col gap-10 bg-gray-500 rounded-2xl p-10 w-1/2 mx-auto">
          <li>
            10 درصد : mani
            <button onClick={() => copyText("ten")} className="px-3 py-2 border-2 rounded-2xl mr-10 hover:bg-black hover:border-black transition-all duration-150">
              {copied.ten ? "✅ متن کپی شد!" : "📋 کپی کن"}
            </button>
          </li>

          <li>
            20 درصد : 0FF20
            <button onClick={() => copyText("twenty")} className="px-3 py-2 border-2 rounded-2xl mr-10 hover:bg-black hover:border-black transition-all duration-150">
              {copied.twenty ? "✅ متن کپی شد!" : "📋 کپی کن"}
            </button>
          </li>

          <li>
            30 درصد : 1384M
            <button onClick={() => copyText("thirty")} className="px-3 py-2 border-2 rounded-2xl mr-10 hover:bg-black hover:border-black transition-all duration-150">
              {copied.thirty ? "✅ متن کپی شد!" : "📋 کپی کن"}
            </button>
          </li>
        </ul>
      </Container>
    </div>
  );
}
