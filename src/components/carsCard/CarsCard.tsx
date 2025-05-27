//src/components/CarsCard.tsx

import { ICars } from "@/types/Icars"
import './CarsCard.scss'
import NumFormatter from "../NumFormatter/NumFormatter"
import Button from "../button/Button"
import Link from "next/link"
import CarsCardImg from "./CarsCardImg"


function CarsCard(props : ICars) {
  return (
    <div className="lg:p-10 px-5 py-15  inline-block">

      <div className="car-card bg-gradient-to-tr  from-gray-300 to-blue-200  rounded-2xl  w-full lg:h-70 hover:scale-[1.02] transition-all duration-500 flex flex-col items-center gap-4 relative">
        
        <div className="w-full">
            <CarsCardImg imgSrc={props.cardImg}/>
        </div>

        <div className="w-full h-full mt-25 lg:mt-20 p-5 text-black flex flex-col gap-5 items-center">
          
          <p className="en  text-left text-2xl font-bold">{props.title}</p>
          <p className="fa2 text-xl">قیمت : <span className="text-indigo-700">{NumFormatter(props.price)}</span>  تومان </p>

            <Link href={`/shop/${props.id}`} className="w-2/3 mx-auto">
          <Button className=" text-indigo-800 border-2 border-indigo-500 w-full">
             مشخصات بیشتر 
          </Button>
            </Link>

        </div>
      </div>
    </div>
  )
}

export default CarsCard