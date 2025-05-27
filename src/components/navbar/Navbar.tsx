"use client"

import './navbar.scss'
import Link from "next/link";
import ThemeToggle from '../toggleTheme/ToggleTheme';
import { RxModulzLogo } from 'react-icons/rx';
import { useEffect, useState, useCallback } from 'react';
import { usePathname } from 'next/navigation';
import Offcanvas from './OffCanvas';
import { FaShoppingCart } from 'react-icons/fa';
import { useAppSelector } from '@/hooks/reduxHook';
import { setCartItemsFromStorage } from '@/store/cartSlice'
import { useAppDispatch } from '@/hooks/reduxHook'

interface INavsLink {
  title: string,
  href: string
}

export const navsLinks: INavsLink[] = [
  { title: "پروفایل", href: '/profile' },
  { title: "ورود | ثبت نام", href: '/login' },
  { title: 'خودرو ها', href: '/shop' },
  { title: "وبلاگ ها", href: '/blog' },
  { title: "درباره من", href: '/about' }
];

export default function Navbar() {
 
  const [isScroll, setIsScroll] = useState(false);
  const [navWidth, setNavWidth] = useState('w-full');
  const [isDesktop, setIsDesktop] = useState(false);
  const [isCartReady, setIsCartReady] = useState(false);


  const dispatch = useAppDispatch();

 
  const handleScroll = useCallback(() => {
    if (window.scrollY > 50) {
      setIsScroll(true);
      setNavWidth(isDesktop ? "w-96" : "w-50");
    } else {
      setIsScroll(false);
      setNavWidth("w-full");
    }
  }, [isDesktop]);


  const handleResize = useCallback(() => {
    if (typeof window !== "undefined") {
      setIsDesktop(window.innerWidth >= 1200);
    }
  }, []);


  useEffect(() => {
    handleScroll();
  }, [handleScroll]);


  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);


  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll, handleResize]);


  const path = usePathname();


  const allCartQty = useAppSelector(state =>
    state.cart.items.reduce((total, item) => total + item.qty, 0)
  );


  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    if (cartData) {
      dispatch(setCartItemsFromStorage(JSON.parse(cartData)));
    }
    setIsCartReady(true);
  }, [dispatch]);

  return (
    <>
      <div className="all-nav-con w-full fixed top-0 z-100" id="top">
        <div
          className={`bg-gradient-to-b flex items-center justify-between h-20 mx-auto navbar 
          transition-all text-nowrap
          ${isScroll ? 'scrolly-nav px-7 text-white' : 'pb-2 px-10 w-full static-nav '} 
          ${navWidth}`}
        >


          <div className="right h-full overflow-hidden flex justify-evenly gap-5 items-center">
            <Link href={'/'}>
              <RxModulzLogo className={`inline-block ${isDesktop ? (isScroll ? 'text-4xl' : 'text-5xl') : 'text-4xl'}`} />
            </Link>
            <Link href={'/cart'} className='text-2xl relative'>
              {isCartReady && allCartQty !== 0 && (
                <p className='absolute top-[-8px] right-[-10px] text-sm h-5 w-5 bg-red-500 rounded-full text-center'>
                  {allCartQty}
                </p>
              )}
              <FaShoppingCart />
            </Link>
            {!isScroll && <ThemeToggle />}
          </div>
          <div className="left">
            <ul className='h-full flex items-center justify-evenly gap-x-5'>
              {isDesktop ? (
                !isScroll ? (
                  navsLinks.map(item => (
                    <li key={item.href} className={item.href === path ? 'border-b-2 border-b-indigo-500' : ''}>
                      <Link href={item.href} className='text-sm'>{item.title}</Link>
                    </li>
                  ))
                ) : (
                  <Offcanvas />
                )
              ) : (
                <Offcanvas />
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
