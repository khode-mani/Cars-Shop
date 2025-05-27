import Button from "@/components/button/Button";
import Carousel from "@/components/carousel/Carousel";
import Container from "@/components/container/Container";
import HomeTitle from "@/components/HomeTitle/HomeTitle";
import WhyUs from "@/components/whyUs/WhyUs";
import { whyUsItems } from "@/components/whyUs/WhyUSItems";
import Link from "next/link";
import { RxModulzLogo } from "react-icons/rx";

export default function Home() {
  return (
    <>
      <section className="banner h-screen w-full  bordr-2 bordr-white lg:flex items-center justify-evenly ">
        <div className="right
         bg-indgo-500 h-1/3 lg:h-full w-full lg:w-4/10 lg:pb-40 flex justify-center items-center ">

          <div className="border-r-8  px-5 py-5 lg:right-[-30] relative mt-20 lg:mt-0 cars-shop-title">

              <h1 className="fa2 text-6xl mb-10">  <RxModulzLogo className="inline text-indigo-500 "/>  کارز شاپ</h1>

              <div className="gap-10 bg-blac flex justify-evenly items-center">
                
                <Link href={'/shop'}  className=" border-2 w-32 h-15 rounded-xl flex justify-center items-center hover:bg-indigo-500 hover:border-0 transition duration-350"> خودرو ها </Link>
                <Link href={'/login'} className=" border-2 w-32 h-15 rounded-xl flex justify-center items-center hover:bg-indigo-500 hover:border-0 transition duration-350"> ورود </Link>

              </div>

          </div>

        </div>

        <div className="left
         bg-re-500 h-1/2 lg:h-full w-full  lg:w-6/10 flex items-center justify-end p-5  lg:p-0">


          <HomeTitle/>
        

        </div>
      </section>

      <section >

          <Container>

            <div className="carousel-con w-full  flex flex-col gap-5 pb-10 mb-10 ">

              <h1 className="fa2 text-center text-4xl mb-10 ">تنوع بالا</h1>

              <Link href={'/shop'}>
                <Carousel/>
              </Link>

              <Button className="mx-auto lg:mt-20 mt-10 lg:px-40 px-20 border-2 border-indigo-500 text-indigo-500">
                <Link href={'/shop'} >
                  خودرو های بیشتر
                </Link>
              </Button>

            </div>

          </Container>

      </section>

      <section >

        <Container className="border-t-1 pt-20 pb-40 border-gray-300">

            <h2 className="text-center text-4xl py-10 ">چرا ما؟</h2>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 lg:px-10  w-full">
            {
            whyUsItems.map((item , index) => <WhyUs icon={item.Icon} title={item.title} desc={item.desc} key={index}/>)
            }


          </div>
          

        </Container>

      </section>

    </>
  );
}
