"use client"

import { ICars } from "@/types/Icars"
import Image from "next/image"
import AddToCart from "../AddToCart/AddToCart"
import NumFormatter from "../NumFormatter/NumFormatter"
import { useState } from "react"

function CartCard( props? : ICars ) {


    const [loaded, setLoaded] = useState(false)


  return props && (
    <div className=' h-60 bg-white flex   justify-between rounded-2xl overflow-hidden'>
        
        <div  className="w-3/7 h-full flex items-center justify-center bg-indigo-500">
            <Image
                alt="ankd"
                src={props.mainImg}
                width={100}
                height={100}
                className={`w-full h-full object-cover  transition-opacity duration-500 ${loaded ? 'opacity-100' : 'opacity-0'}`}
                onLoad={()=> setLoaded(true)}
            />

        </div>


        <div className="bg-indigo-500 h-70 w-10  rotate-9 relative right-[-19] top-[-20]"></div>
        <div className=" w-1/2 h-full text-black p-2  flex flex-col justify-evenly">

            <h2 className="en lg:text-2xl border-r-2 border-black pr-3 ">{props.title}</h2>
            <p className="text-md lg:text-lg"> قیمت : <span className="text-indigo-500">{ NumFormatter(props.price) }</span> </p>
            <div className="lg:w-1/2 w-2/3 self-end">
                <AddToCart productId={props.id}/>
            </div>


        </div>
    </div>
  )
}

export default CartCard




