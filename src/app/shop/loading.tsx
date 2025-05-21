// app/cars/[id]/loading.tsx
'use client'

import LoadingComp from "@/components/loading/Loading";

export default function Loading() {
  return (
    <div className="flex justify-center items-center h-screen">
      <LoadingComp/>
    </div>
  );
}
