"use client"

import CartCard from '@/components/CartCard.tsx/CartCard';
import Container from '@/components/container/Container';
import LoadingComp from '@/components/loading/Loading';
import { useAppSelector } from '@/hooks/reduxHook'
import { ICars } from '@/types/Icars';
import React, { useEffect, useState } from 'react';
import './cart.scss'
import Link from 'next/link';
import NumFormatter from '@/components/NumFormatter/NumFormatter';
import { Idiscounts } from '@/types/IDiscounts';
import Swal from 'sweetalert2';

export default function Cart() {

  const [cars, setCars] = useState<ICars[] | null>(null);
  const [Inp, setInp] = useState('');
  const [DiscountCodes, setDiscountCodes] = useState<Idiscounts[] | null>(null);
  const [discountedPrice, setDiscountedPrice] = useState<number | null>(null);

  const cartData = useAppSelector(state => state.cart.items);

  useEffect(() => {
    fetch('http://localhost:8000/cars')
      .then(res => res.json())
      .then(data => setCars(data))
      .catch(err => {
        console.log('Error fetching cars', err);
        setCars([]);
      });
  }, []);

  useEffect(() => {
    fetch('http://localhost:8000/discounts')
      .then(res => res.json())
      .then(data => setDiscountCodes(data))
      .catch(() => setDiscountCodes([]));
  }, []);


  const finalCartItems = cars?.filter(car =>
    cartData.some(element => element.id === car.id)
  ) || [];


  const totalPrice = cartData.reduce((total, item) => {
    const car = cars?.find(car => car.id === item.id);
    return car ? total + (car.price * item.qty) : total;
  }, 0);


  const discountHandel = () => {
    const discount = DiscountCodes?.find(d => d.code === Inp);
    if (discount) {
      setDiscountedPrice( totalPrice - (  (  totalPrice * discount.percentage ) / 100 )  );

      Swal.fire({

        title: `${discount.percentage} درصد تخفیف بر روی  خرید شما اعمال شد`,
        text: ":)",
        icon: "success",
        confirmButtonText : " دمت گرم "
      });


    } else {
      setDiscountedPrice(null);
            Swal.fire({

        title: 'کد اشتباهه',
        text: ":(",
        icon: "error",
        confirmButtonText : " باشه "
      });
    }
  };

  const buyHandel = ()=>{
          Swal.fire({

        title: '👍',
        icon: "success",
        timer: 2500
      });
  }


  const isLoading = cars === null || DiscountCodes === null;

  return (
    <div>
      {isLoading ? (
        <LoadingComp />
      ) : cartData.length > 0 ? (
        <div>
          <Container className='grid lg:grid-cols-2 grid-cols-1 gap-10 '>
            {finalCartItems.map(item => <CartCard {...item} key={item.id} />)}
          </Container>
          <Container>
            <div className='bg-amber-500 w-full min-h-150 lg:min-h-70 invoice lg:p-10 p-5 grid grid-cols-1 lg:grid-cols-2 text-white'>
              <div className="right h-full w-full flex flex-col justify-center items-center gap-5">
                <h2 className='text-2xl inline-block'>
                  قیمت کل :
                  <span className='text-black font-extrabold fa2 underline mb-10'>
                    {NumFormatter(totalPrice)}
                  </span>
                </h2>
                <div className='text-center'>
                  <input
                    type="text"
                    placeholder='کد تخفیف را وارد کنید'
                    onChange={(e) => setInp(e.target.value)}
                    className='bg-black outline-0 px-5 py-2 text-center rounded-xl lg:ml-5'
                  />
                  <button
                    className='border-2 hover:bg-black hover:text-white fa2 px-5 py-2 rounded-2xl transition-all duration-500'
                    onClick={discountHandel}
                  >
                    تایید
                  </button>

                  <Link href={'/discounts'}> 
                    <p className='text-center border-t-2 mt-2 pt-2'>لیست کد تخفیف ها</p>
                  </Link>


                </div>
              </div>
              <div className="left h-full w-full flex flex-col justify-center items-center gap-2">
                <h2 className='text-2xl inline-block'>
                  قیمت نهایی :
                  <span className='text-black font-extrabold fa2 underline mb-10'>
                    {NumFormatter( discountedPrice || totalPrice)}
                  </span>
                </h2>

                <button className="pay-Btn fa2 " onClick={buyHandel}>
                  خرید
                    <svg className="svgIcon" viewBox="0 0 576 512"><path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z"></path></svg>
                </button>
              </div>
            </div>
          </Container>
        </div>
      ) : (
        <div className='flex flex-col justify-center items-center w-full h-100 gap-10'>
          <p className='text-4xl'>سبد خرید خالی است :(</p>
          <Link href={'/shop'}>
            <button className='discover-btn fa2 no-cursor'>خودرو ها</button>
          </Link>
        </div>
      )}
    </div>
  );
}
