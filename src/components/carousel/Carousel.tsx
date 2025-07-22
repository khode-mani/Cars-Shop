"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import Image from "next/image";

const images = [
  "https://rng-t.com/wp-content/uploads/2025/07/dsc4453-scaled-e1751865264136.jpg",
  "https://rng-t.com/wp-content/uploads/2025/06/img_9652-1-scaled-e1749969180672-690x363.jpg",
  "https://rng-t.com/wp-content/uploads/2025/05/img_2755-e1709912070274-690x363.jpg",
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
