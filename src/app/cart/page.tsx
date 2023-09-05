"use client"

import { Button } from '@/components/ui/button'
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { plusQanity, minusQuantity, removeToCart, clearCart } from '@/store/cartSlice';
import Link from 'next/link'
import React from 'react'
import Image from 'next/image';

export default function Cart() {
  const cart = useAppSelector((state) => state.cartReducer);
  const products = useAppSelector((state) => state.productReducer);
  const totalLength = cart.products.length
  console.log(cart, "cart")
  const dispatch = useAppDispatch();

  return (
    <div className=" mx-auto mt-10">
      <div className="flex flex-wrap shadow-md my-10 mx-2 max-lg:block">
        <div className="w-3/4 bg-white px-10 py-10 max-lg:w-full max-md:p-4 max-lg:overflow-hidden">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shopping Cart</h1>
            <h2 className="font-semibold text-2xl">{totalLength} Items</h2>
          </div>
          <div className="flex mt-10 mb-5">
            <h3 className="font-semibold text-gray-600 text-xs uppercase w-2/5 max-md:w-full ">Product</h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center max-md:text-right max-md:w-full">Quantity</h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center max-md:text-right max-md:w-full max-sm:hidden">Price</h3>
            <h3 className="font-semibold text-center text-gray-600 text-xs uppercase w-1/5 text-center max-md:text-right max-md:w-full">subTotal</h3>
          </div>
          {
            cart.products.map((el) => {
              return (
                <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5" key={el.product_id}>
                  <div className="flex w-2/5 max-md:block max-md:w-full">
                    <div className="w-[3rem]">
                      {/* <img src={
                        products.data.find(ol => ol._id == el.product_id)?.image
                      } alt="" /> */}
                      <Image src={products.data.find(ol => ol._id == el.product_id)!.image} alt='cartImage' width="0"
                        height="0"
                        sizes="100vw" className='w-[3rem]' />
                    </div>
                    <div className="flex flex-col justify-between ml-4 flex-grow max-md:ml-0">
                      <Link href={`/product/${el.product_id}`}> <span className="font-bold text-sm max-sm:hidden">{el.title}</span></Link>
                      <span className=" text-sm hidden max-sm:block">Price: Rs. {el.price}</span>
                      <span className="text-red-500 text-xs">{
                        products.data.find(ol => ol._id == el.product_id)?.category.name
                      }</span>

                      <button onClick={() => dispatch(removeToCart(el.product_id))} className="m-2 w-fit">
                        <svg width="20px" height="20px" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <rect width="48" height="48" fill="white" fillOpacity="0.01"></rect> <path d="M9 10V44H39V10H9Z" fill="#ff0000" stroke="#ff0000" strokeWidth="4" strokeLinejoin="round"></path> <path d="M20 20V33" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M28 20V33" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M4 10H44" stroke="#ff0000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"></path> <path d="M16 10L19.289 4H28.7771L32 10H16Z" fill="#ff0000" stroke="#ff0000" strokeWidth="4" strokeLinejoin="round"></path> </g></svg>
                      </button>
                    </div>
                  </div>
                  <div className="flex justify-center w-1/5 max-md:w-full max-md:justify-end">
                    <button onClick={() => dispatch(minusQuantity(el.product_id))}>

                      <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                      </svg>
                    </button>

                    <input className="mx-2 border text-center w-8" type="text" value={el.qty} readOnly/>
                    <button onClick={() => dispatch(plusQanity(el.product_id))}>

                      <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                      </svg>
                    </button>
                  </div>
                  <span className="text-center w-1/5 font-semibold text-sm max-md:w-full max-md:text-right max-sm:hidden">Rs. {el.price}</span>
                  <span className="text-center w-1/5 font-semibold text-sm max-md:w-full max-md:text-right">Rs. {el.subTotal}</span>
                </div>
              )
            })

          }

          <button className="flex font-semibold text-indigo-600 text-sm mt-10" id='clearBtn' onClick={() => dispatch(clearCart())}
            style={{ display: totalLength < 1 ? 'none' : 'flex' }}
          >
            <svg className="mr-2" width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fillRule="evenodd" clipRule="evenodd" d="M8.00003 5C7.82888 5 7.66825 5.08261 7.5687 5.22183L3.64604 10.7077C3.25585 11.2534 3.23706 11.9816 3.59858 12.5466L7.58035 18.7703C7.67192 18.9134 7.83012 19 8.00003 19H19.3589C20.2653 19 21 18.2653 21 17.3589V6.64109C21 5.73474 20.2653 5 19.3589 5H8.00003ZM9.64645 8.14645C9.84171 7.95118 10.1583 7.95118 10.3536 8.14645L13.4807 11.2736L16.575 8.14818C16.7693 7.95194 17.0859 7.95036 17.2821 8.14464C17.4784 8.33892 17.4799 8.6555 17.2857 8.85174L14.1878 11.9807L17.3536 15.1464C17.5488 15.3417 17.5488 15.6583 17.3536 15.8536C17.1583 16.0488 16.8417 16.0488 16.6464 15.8536L13.4843 12.6914L10.3553 15.8518C10.161 16.048 9.84446 16.0496 9.64822 15.8553C9.45199 15.661 9.4504 15.3445 9.64468 15.1482L12.7771 11.9843L9.64645 8.85355C9.45119 8.65829 9.45119 8.34171 9.64645 8.14645Z" fill=" #3949AB"></path> </g></svg>
            Clear Cart
          </button>
          <Link href="/" passHref className="flex font-semibold text-indigo-600 text-sm mt-10">

            <svg className="fill-current mr-2 text-indigo-600 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>
            Continue Shopping
          </Link>
        </div>

        <div id="summary" className="w-1/4 px-8 py-10 max-lg:w-full">
          <h1 className="font-semibold text-2xl border-b pb-8">Order Summary</h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold text-sm uppercase">Items {totalLength}</span>
            <span className="font-semibold text-sm">Rs. {cart.finalTotal}</span>
          </div>

          <div className="py-10">
            <label htmlFor="promo" className="font-semibold inline-block mb-3 text-sm uppercase">Promo Code</label>
            <input type="text" id="promo" placeholder="Enter your code" className="p-2 text-sm w-full" />
          </div>
          <Button variant="outline" className="">Apply</Button>
          <div className="border-t mt-8">
            <div className="flex font-semibold justify-between py-6 text-sm uppercase">
              <span>Total cost</span>
              <span>Rs. {cart.finalTotal}</span>
            </div>
            <Link href="/checkout" passHref>
              <Button className=" w-full">Checkout</Button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}
