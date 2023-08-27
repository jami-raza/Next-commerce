"use client";
import Image from "next/image";
import client from "../../client";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { groq } from "next-sanity";
import { cache, useEffect, useState } from "react";
import { getProducts } from "./api/getProducts";
import { decrement, increment, reset } from "@/store/counterSlice";
import { getAsyncProducts, selectKanye } from "@/store/productSlice";
import { addToCart, removeToCart } from "@/store/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import './globals.css'
import { IProduct } from "@/types/product.type";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/card";




export default function Home() {
  const count = useAppSelector((state) => state.counterReducer.value);
  const cart = useAppSelector((state) => state.cartReducer);

  const dispatch = useAppDispatch();

  // const products = dispatch(getAsyncProducts())

  const {
    data,
    pending,
    error,
  } = useAppSelector(selectKanye);

  useEffect(() => {
    dispatch(getAsyncProducts())
  }, [])


  console.log(error, "error")
  console.log(pending, "pending")
  console.log(data, "data")




  // console.log(products);
  return (
    <main className="container">
      <div className="banner-img mb-16 grid grid-rows-1 grid-flow-col gap-2 mt-2 overflow-hidden max-sm:block">
        <div className="row-span-2 col-span-2  ">
          <Image src='/img/banner6.jpg' alt="banner-img" width={1000} height={1000} />
        </div>
        <div className=" row-span-1  max-sm:hidden">
          <Image src='/img/banner4.webp' alt="banner-img" width={1000} height={1000} />
        </div>
        <div className="row-span-1  max-sm:hidden">
          <Image src='/img/banner2.jpg' alt="banner-img" width={1000} height={1000} />
        </div>
      </div>

      {/* Product Card */}


      <div className="flex gap-[2%] flex-wrap mb-16">
        {pending && <p>Loading...</p>}
        {data && data.map((product: IProduct) => (
          // <div className="col-md-3" key={product._id}>
          //   <div className="wsk-cp-product">
          //     <div className="wsk-cp-img">
          //       <img src={product.image} alt="Product" className="img-responsive" />
          //     </div>
          //     <div className="wsk-cp-text">

          //       <div className="title-product">
          //         <h3>{product.name}</h3>
          //       </div>
          //       <div className="description-prod">
          //         <p>{product.shortdescription}</p>
          //       </div>
          //       <div className="card-footer">
          //         <div className="wcf-left"><span className="price">Rs{product.price}</span></div>
          //         <div className="wcf-right">
          //           <Button className="buy-btn" onClick={() => dispatch(addToCart({
          //             price: product.price,
          //             product_id: product._id,
          //             qty: 1,
          //             title: product.name,
          //             subTotal: product.price
          //           }))}>ADD TO CART {findQty(product._id)}</Button></div>

          //         {findQty(product._id) ?
          //           <Button variant={"secondary"} onClick={() => dispatch(removeToCart(
          //             product._id
          //           ))}>
          //             Remove to cart
          //           </Button> : null}

          //       </div>
          //     </div>
          //   </div>
          // </div>
          <ProductCard _id={product._id} name={product.name} shortdescription={product.shortdescription} image={product.image} price={product.price} category={product.category}
          // addToCart={dispatch(addToCart({
          //                 price: product.price,
          //                           product_id: product._id,
          //                           qty: 1,
          //                           title: product.name,
          //                           subTotal: product.price
          //               }))} removeToCart={dispatch(removeToCart(product._id))} findQty={findQty(product._id)}
          />

        ))}
      </div>




      {/* <ProductCard _id={product._id} name={product.name} shortdescription={product.shortdescription} image={product.image} price={product.price} addToCart={dispatch(addToCart({
                price: product.price,
                          product_id: product._id,
                          qty: 1,
                          title: product.name,
                          subTotal: product.price
              }))} removeToCart={dispatch(removeToCart(product._id))} findQty={findQty(product._id)}/> */}

    </main>
  );
}


// "use client";

// import { decrement, increment, reset, incrementByAmount } from "@/store/counterSlice";
// import { useAppDispatch, useAppSelector } from "@/store/hooks";
// import { useState } from "react";

// export default  function Home() {

//   const [inputVal, setInputVal] = useState<any>(0)

//   const count = useAppSelector((state) => state.counterReducer.value);
//   const dispatch = useAppDispatch();

//   return (
//     <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
//       <div style={{ marginBottom: "4rem", textAlign: "center" }}>
//         <h4 style={{ marginBottom: 16 }}>{count}</h4>
//         <button onClick={() => dispatch(increment())}>increment</button>
//         <button
//           onClick={() => dispatch(decrement())}
//           style={{ marginInline: 16 }}
//         >
//           decrement
//         </button>
//         <button
//           onClick={() => dispatch(incrementByAmount(inputVal))}
//           style={{ marginInline: 16 }}
//         >
//           Increment by amount
//         </button>
//         <input type="number" value={inputVal} onChange={(e) => setInputVal(parseInt(e.target.value))}/>
//         <button onClick={() => dispatch(reset())}>reset asdasd</button>
//       </div>
//     </main>
//   );
// }

