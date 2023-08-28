"use client"
import { useAppSelector } from '@/store/hooks';
import Link from 'next/link';
import React, { useState } from 'react'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"

const Header = () => {
  const cart = useAppSelector((state) => state.cartReducer);
  const totalLength = cart.products.length

  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='header flex justify-between bg-black text-white p-4 px-5'>
      <Link href='/' passHref>
      <div className='logo'>
        <h2>Tees</h2>
      </div>
      </Link>
     <div className='flex justify-end'>
      <div className='nav-menu hidden sm:block mr-2'>
        <ul className='flex justify-end gap-x-6'>
         <Link href="/" passHref> <li>Home</li></Link>
         <Link href="" passHref>  <li>About</li></Link>
         <Link href="" passHref>  <li>Products</li></Link>
         <Link href="" passHref>  <li>Categories</li></Link>
        </ul>
        <h1></h1>
      </div>
      <div  className='cart-li relative max-sm:mt-2 max-sm:mr-2'>
      <Link href='/cart' passHref>
         
            <span>{totalLength}</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
            </svg>
       
          </Link>
      </div>
      
      <div className='sm:hidden block '>
      <Menubar className='bg-black'>
  <MenubarMenu >
    <MenubarTrigger className='bg-black focus:bg-black active:bg-black hover:bg-black p-0'>
    <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g clipPath="url(#clip0_429_11066)"> <path d="M3 6.00092H21M3 12.0009H21M3 18.0009H21" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path> </g> <defs> <clipPath id="clip0_429_11066"> <rect width="24" height="24" fill="white" transform="translate(0 0.000915527)"></rect> </clipPath> </defs> </g></svg>
    </MenubarTrigger>
    <MenubarContent className='bg-black text-white w-full'>
      <MenubarItem>
      <Link href="/" passHref>   Home   </Link>
      </MenubarItem>
      <MenubarItem>
        <Link href="" passHref>  About  </Link>
        </MenubarItem>
      <MenubarItem>
        <Link href="" passHref>   Product  </Link>
      </MenubarItem>
      <MenubarItem>
       <Link href="" passHref>   Categories  </Link>
        </MenubarItem>
    </MenubarContent>
  </MenubarMenu>
</Menubar>
      </div>
      </div>
    
      
    </div>
  )
}

export default Header