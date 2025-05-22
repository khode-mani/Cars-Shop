//app/shop/page.tsx

import CarsCard from "@/components/carsCard/CarsCard";
import Container from "@/components/container/Container";
import { ICars } from "@/types/Icars";
import './Shop.scss'
import Image from "next/image";
import titleCover from '../../../public/assets/images/5818214-3840x2160-desktop-hd-cool-car-background-photo.webp'
import Pagination from "@/components/Pagination/Pagination";
import Search from "@/components/Search/Search";


export interface ICarsList {
  first: number | null;
  prev : number | null;
  next : number | null;
  last : number | null;
  pages: number ;
  items: number | null;
  data : ICars[];
}

interface IShopProps {
  params : Promise<unknown>;
  searchParams: Promise<{page: string;  per_page: string ; title: string}>
}

// interface IShopProps {
//   searchParams: { page?: Promise<string>; per_page?: string; title?: string };
// }



export default async function Shop ({searchParams} : IShopProps)  {

  const page = (await searchParams).page ?? "1"
  // const perPage = (await searchParams).per_page ?? "4"
  const PTitle = (await searchParams).title ?? ""

  console.log(searchParams);
  

// const page = searchParams?.page ?? "1";
// const PTitle = searchParams?.title ?? "";




  // const  res  = await fetch(`http://localhost:8000/cars?_page=${page}&_per_page=6&title=${PTitle}`);
  const  res  = await fetch(`https://cars-shop-api.liara.run/cars?_page=${page}&_per_page=6&title=${PTitle}`);
  const resData = await res.json() as ICarsList;


  return (
    <div className="shop-container min-h-screen">
        <div className="w-full pb-15 pt-5">
          <div className="w-full lg:w-1/2   mx-auto h-70 shop-title flex justify-center items-center lg:rounded-2xl overflow-hidden relative">

          <Image 
                  alt="mew"
                  src={titleCover}
                  width={100}
                  height={100}
          />

            <h1 className="z-10 text-6xl lg:text-8xl absolute  fa2 text-white">خودرو ها</h1>

          </div>
        </div>


        <div className="mx-auto w-100  pt-5 pb-20 lex justify-">
          <Search/>
        </div>
            {
              resData.data.length > 0 ? 
              (
                
                <Container className="grid grid-cols-1 lg:grid-cols-3 w-full gap-y-5 ">
                
                {resData.data.map( item=> <CarsCard {...item} key={item.id} /> )}

              </Container>

            ):(
              <h1 className="absolute text-center text-3xl mx-auto w-full ">لطفا نام کامل محصول را درست وارد کنید</h1>
            )

            }
            <Pagination pageCount={resData.pages}/>
        
    </div>
  )
}

