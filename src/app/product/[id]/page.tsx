"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { getProduct, getProducts } from '../../api/getProducts'
import RichText from '@/components/textPortable'
import PortableText from 'react-portable-text'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addToCart, minusQuantity, plusQanity } from "@/store/cartSlice";
import { redirect } from 'next/navigation';
import { useRouter } from 'next/navigation';


export default function Product(params: any) {
  const cart = useAppSelector((state) => state.cartReducer);
  const products = useAppSelector((state) => state.productReducer);
  const dispatch = useAppDispatch();
  const router = useRouter()
  const [qty, setQty] = useState<number>(1)

  console.log(params.params.id, "sad");
  const [productData, setProductData] = useState<any>()


  useEffect(() => {
    const get = async () => {
      const data = await getProduct(params.params.id)
      console.log(data, "Data")
      setProductData(data[0])
    }

    get()
    // const createInterval = setInterval(() => {

    //   // const initialQty = productData && findCartQty(productData._id) 
    //   // console.log(initialQty)
    //   console.log(findCartQty(params.params.id._id)?.qty, "find qty ")
    //   if(findCartQty(params.params.id._id) && findCartQty(params.params.id._id)?.qty){
    //     console.log("asidn")
    //     let cartQty = findCartQty(params.params.id._id) && findCartQty(params.params.id._id)?.qty

    //     setQty(cartQty ? cartQty : 1)
    //   }
    // }, 1000)
    // if(qty > 1){
    //   console.log("asdasd")
    //   return () => clearInterval(createInterval);
    // }
    setTimeout(() => {
      const cartQty = findCartQty(params.params.id)
      console.log(cartQty, "Cart qy")
      if(cartQty){
        setQty(cartQty.qty)
      }
    }, 1000);
  }, [])

  const findCartQty = (id: string) => {
    const findPr = cart.products.find((il) => il.product_id == id)
    if (findPr) {
      return findPr
    } else {
      return null;
    }
  }

 
  return (
    <div>
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        {productData &&

          <div className="flex flex-col md:flex-row -mx-4" >
            <div className="md:flex-1 px-4 h-full max-h-[500px] overflow-hidden">

              <Image src={productData.image} alt='Product-Image' width={600} height={400}
                layout="responsive"
                loading="lazy"
                style={{ maxWidth: '500px' }}
              />

            </div>
            <div className="md:flex-1 px-4">
              <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">{productData.name}</h2>
              <p className="text-indigo-600 text-sm">Pant</p>

              <div className="flex items-center space-x-4 my-4">
                <div>
                  <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                    <span className="text-indigo-400 mr-1 mt-1">Rs. {productData.price}</span>
                    <span className="font-bold text-indigo-600 text-3xl"></span>
                  </div>
                </div>
                {/* <div className="flex-1">
            <p className="text-green-500 text-xl font-semibold">Save 12%</p>
            <p className="text-gray-400 text-sm">Inclusive of all Taxes.</p>
          </div> */}
              </div>

              <p className="text-gray-500">{productData.shortdescription}</p>

              <div className="flex py-4 space-x-4">
                {/* <div className="relative">
            <div className="text-center left-0 pt-2 right-0 absolute block text-xs uppercase text-gray-400 tracking-wide font-semibold">Qty</div>
            <select className="cursor-pointer appearance-none rounded-xl border border-gray-200 pl-4 pr-8 h-14 flex items-end pb-1">
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>

            <svg className="w-5 h-5 text-gray-400 absolute right-0 bottom-0 mb-2 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
          </div> */}


                <div className="flex justify-center w-1/5 max-md:w-full max-md:justify-end" >
                  <button onClick={
                    findCartQty(productData._id) != null ? 
                    
                    () => {
                      dispatch(minusQuantity(productData._id))
                      setQty(qty - 1)
                    } :
                    
                    () => { setQty(qty - 1) }
                    
                    } disabled={qty == 1 ? true : false}>

                    <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                  </button>

                  <input className="mx-2 border text-center w-8" type="text" value={
                    findCartQty(productData._id) != null ? 
                    findCartQty(productData._id)?.qty 
                    
                    : qty
                    } readOnly/>
                  <button onClick={findCartQty(productData._id) != null ? () => {dispatch(plusQanity(productData._id))
                  
                  setQty(qty+1)
                  } : () => {
                    console.log("working")
                    setQty(qty + 1)
                    console.log(qty, "Qty")
                  }}>

                    <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                      <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                    </svg>
                  </button>
                </div>






                <button type="button" className="h-14 px-6 py-2 font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
                onClick={
                  findCartQty(productData._id) == null ?
                  () => {
                    dispatch(addToCart({
                    price: productData.price,
                    qty: qty,
                    product_id:productData._id,
                    title:productData.name,
                    subTotal:productData.price * qty

                  }))

                
                } :
                  
                  () => {
                    console.log("redirect")
                    // redirect('/cart')
                    router.push('/cart')
                  }
                
                }
                >
                 {
                  findCartQty(productData._id) == null ?
                  "Add to cart" :
                  
                  "View cart"
                
                }
                </button>
              </div>
            </div>
          </div>
        }
      </div>


      <div>
        <Tabs defaultValue="Description" className="w-full mx-auto px-4 sm:px-6 lg:px-8 mt-[50px]">
          <TabsList>
            <TabsTrigger value="Description">Description</TabsTrigger>
            <TabsTrigger value="Review">Review</TabsTrigger>
            <TabsTrigger value="FAQ">FAQ</TabsTrigger>
          </TabsList>
          <TabsContent value="Description" className='max-w-[900px] p-4'>
            {productData && <PortableText
              // Pass in block content straight from Sanity.io
              content={productData.description} />}
          </TabsContent>
          <TabsContent value="Review" className='max-w-[900px] p-4'></TabsContent>
          <TabsContent value="FAQ" className='max-w-[900px] p-4'></TabsContent>
        </Tabs>
      </div>


    </div>
  )
}

