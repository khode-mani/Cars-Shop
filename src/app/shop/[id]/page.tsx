
// app/shop/[id]/page.tsx

import Container from "@/components/container/Container";
import { ICars } from "@/types/Icars";
import React from "react";
import '../Shop.scss'
import NumFormatter from "@/components/NumFormatter/NumFormatter";
import AddToCart from "@/components/AddToCart/AddToCart";
import Image from "next/image";


interface PageProps {

  params: Promise<{ id: string }>;
  searchParams: Promise<unknown>

}


export default async function Car({params} : PageProps) {

  console.log(params);
  

  const { id } = await params;
  console.log(id);
  
  const res = await fetch(`http://localhost:8000/cars/${id}`);
  const resData = (await res.json()) as ICars;

  return (
    <div className="w-full shop-container py-10">
      <Container className="flex justify-center ">
        <div className="bg-gray-900 lg:w-2/3 w-full h-fit pb-10 inline-block rounded-4xl overflow-hidden text-white ">
          <div className="w-full h-1/2 mx-auto relative overflow-hidden">
          <Image
               alt="mew"
               src={resData.mainImg}
               height={200}
               width={200}
               className="object-cover  w-full h-full max-h-full"
                />

            <div className="absolute bottom-0 right-0 w-full h-1/2 z-2 bg-gradient-to-t  from-gray-900 to-transparent"></div>
          </div>

          <div className="w-full h-1/2 flex flex-col items-cente gap-10 ">
            <h1 className="en text-5xl text-center py-5 border-b-2 border-gray-700 inline-block mx-auto">
              {resData.title}
            </h1>

            <div className="w-full px-10 flex flex-col gap-8">
              <p className="p-3 border-r-2 text-xl">{resData.desc}</p>
              <p className="text-2xl">
                قیمت : <span className="text-green-500"> {NumFormatter(resData.price)} </span>
              </p>

              <div className="self-center">
                <p className="text-center text-xl">افزودن به سبد خرید</p>
                <AddToCart productId={id} />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
