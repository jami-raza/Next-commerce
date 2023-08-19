"use client";
import Image from "next/image";
import client from "../../client";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { groq } from "next-sanity";
import { cache, useEffect, useState } from "react";
import { getProducts } from "./api/getProducts";
import { decrement, increment, reset } from "@/store/counterSlice";
import { getAsyncProducts, selectKanye } from "@/store/productSlice";
import { addToCart } from "@/store/cartSlice";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import './globals.css'
import { IProduct } from "@/types/product.type";


export default function Home() {
  const count = useAppSelector((state) => state.counterReducer.value);
  const dispatch = useAppDispatch();

// const products = dispatch(getAsyncProducts())

const {
  data, 
  pending, 
  error,
} = useAppSelector(selectKanye);

console.log(error, "error")
console.log(pending, "pending")
console.log(data, "data")
  
  // console.log(products);
  return (
  <main className="container">
<h2>Counter: {count}</h2>
    <div className="banner-img">

    </div>
    <div>
{/* {products.map(product => (
        <div className="product" key={product.id}>
          <Image src={product.image} alt={product.name} width={40} height={40}/>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.shortdescription}</p>
            <p>Price: Rs{product.price}</p>
        </div>
    ))} */}
  </div>
  <button onClick={() => dispatch(getAsyncProducts())} disabled={pending}>
        Generate Kanye Quote
      </button>
  {/* <div className="shell">
  <div className="container">
    <div className="row">
    {pending && <p>Loading...</p>}
    {data && data.map((product:IProduct) => (
      <div className="col-md-3" key={product._id}>
        <div className="wsk-cp-product">
          <div className="wsk-cp-img">
            <img src={product.image} alt="Product" className="img-responsive" />
          </div>
          <div className="wsk-cp-text">
            
            <div className="title-product">
              <h3>{product.name}</h3>
            </div>
            <div className="description-prod">
              <p>{product.shortdescription}</p>
            </div>
            <div className="card-footer">
              <div className="wcf-left"><span className="price">Rs{product.price}</span></div>
              <div className="wcf-right"><a href="#" className="buy-btn">ADD TO CART</a></div>
            </div>
          </div>
        </div>
      </div>
      ))}
      </div>
      </div>
      </div> */}
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

