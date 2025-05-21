"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { navsLinks } from "./Navbar";
import { usePathname } from "next/navigation";

export default function Offcanvas() {
  const [isOpen, setIsOpen] = useState(false);

  const path = usePathname()
  
  useEffect(()=>{
    setIsOpen(false)
  },[path])

  const closeOffcanvas = () => setIsOpen(false);


  return (
    <div>
      
      <button
        onClick={() => setIsOpen(true)}
        className=" text-white px-4 py-1 rounded  hover:bg-amber-50 hover:text-black transition-all"
      >
        <RiMenu2Fill className="text-2xl"/>

      </button>

      {/* پنل Offcanvas */}


      <div
        className={`of-panel fixed bottom-0 left-0  w-full  bg-black opacity-95  text-white transition-all duration-500 ${
          isOpen ? "h-full" : "h-0"
        }`}
      >
        
        <div className="h-full w-full flex flex-col justify-center items-center overflow-hidden  b-red-500">


        <ul className="space-y-2  flex flex-col items-center text-5xl mb-10">

          <li>

          </li>

          <li> <Link href={'/'} className={`block p-2 hover:text-7xl hover:border-l- transition-all duration-250 fa2 ${'/' === path && 'text-indigo-400'}`}> صفحه اصلی </Link> </li>

          {
            navsLinks.map(item=>
              <li key={item.href}>
              <Link href={item.href} className={`block p-2 hover:text-7xl hover:border-l- transition-all duration-250 fa2 ${item.href === path && 'text-indigo-400'}`}>
               {item.title}
              </Link>
            </li>)
          }
          <li> <Link href={'/cart'} className={`block p-2 hover:text-7xl hover:border-l- transition-all duration-250 fa2 ${'/cart' === path && 'text-indigo-400'}`}> سبد خرید </Link> </li>

          
        </ul>

        <button
          onClick={closeOffcanvas}
          className=" text-white block mx-auto text-7xl hover:text-red-500 transition-all duration-150"
        >
          ✖
        </button>
        </div>
      </div>
    </div>
  );
}
