"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import Image from "next/image";

const images = [
  "https://20126a3f-8651-4a19-b2fe-b4ed7855fdf6.selcdn.net/wp-content/cache/thumb/89/81e77deb0260a89_1250x0.png",
  "https://20126a3f-8651-4a19-b2fe-b4ed7855fdf6.selcdn.net/wp-content/cache/thumb/03/d91ee9de3c05b03_1600x0.jpg",
  "https://20126a3f-8651-4a19-b2fe-b4ed7855fdf6.selcdn.net/wp-content/uploads/2025/04/1G2A2886-scaled-e1745562623447.jpg",
];

export default function Carousel() {
  return (
    <div className="w-full flex   justify-center lg:h-130 h-70 ">
      <Swiper
        modules={[Autoplay, EffectCoverflow, Pagination , ]}
        effect="coverflow"
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        slidesPerView="auto"
        centeredSlides={true}
        loop={true}
        coverflowEffect={{
          rotate: 30,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        className="w-[90%]  max-w-screen-lg"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} className="flex justify-center ">
            <Image
              src={src}
              alt={`Slide ${index}`}
              className="rounded-xl w-full h-full shadow-lg object-cover"
              width={1000}
              height={1000}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
