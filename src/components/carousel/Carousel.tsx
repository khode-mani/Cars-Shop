"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import Image from "next/image";

const images = [
  "https://rng-t.com/wp-content/cache/thumb/89/81e77deb0260a89_1250x0.png",
  "https://rng-t.com/wp-content/uploads/2024/11/IMG-20241124-WA0031-scaled-e1732511049946.jpg",
  "https://rng-t.com/wp-content/uploads/2025/05/IMG_8650-scaled.jpg",
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
