


"use client";

import CarsCard from "@/components/carsCard/CarsCard";
import Container from "@/components/container/Container";
import { ICars } from "@/types/Icars";
import "./Shop.scss";
import Image from "next/image";
import titleCover from "../../../public/assets/images/5818214-3840x2160-desktop-hd-cool-car-background-photo.webp";
import Pagination from "@/components/Pagination/Pagination";
import Search from "@/components/Search/Search";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

export default function ShopClient() {
  const searchParams = useSearchParams();
  const page = searchParams.get("page") ?? "1";
  const limit = searchParams.get("limit") ?? "6";
  const title = searchParams.get("title") ?? "";

  const [cars, setCars] = useState<ICars[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await fetch(
          `https://687ffa43f1dcae717b60ca53.mockapi.io/api/v1/cars?page=${page}&limit=${limit}&search=${title}`
        );
        const data = await res.json();
        setCars(title ? data.filter((car: ICars) => car.title.toLowerCase().includes(title.toLowerCase())) : data);
      } catch (error) {
        console.error("Error fetching cars:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();

    
  }, [page, limit, title]);

  return (
    <div className="shop-container min-h-screen">
      <div className="w-full pb-15 pt-5">
        <div className="w-full lg:w-1/2 mx-auto h-70 shop-title flex justify-center items-center lg:rounded-2xl overflow-hidden relative">
          <Image alt="mew" src={titleCover} width={100} height={100} />
          <h1 className="z-10 text-6xl lg:text-8xl absolute fa2 text-white">خودرو ها</h1>
        </div>
      </div>

      <div className="mx-auto w-100 pt-5 pb-20">
        <Search />
      </div>

      {loading ? (
        <p className="text-center text-xl py-10">در حال بارگذاری...</p>
      ) : cars.length > 0 ? (
        <Container className="grid grid-cols-1 lg:grid-cols-3 w-full gap-y-5">
          {cars.map((item) => (
            <CarsCard {...item} key={item.id} />
          ))}
        </Container>
      ) : (
        <h1 className="absolute text-center text-3xl mx-auto w-full">لطفا نام کامل محصول را درست وارد کنید</h1>
      )}

      <Pagination pageCount={2} />
    </div>
  );
}