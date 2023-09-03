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
import { Card, CardContent, CardHeader } from "@/components/ui/card";
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

  const findQty = (id: string) => {
    const findPr = cart.products.find((il) => il.product_id == id)
    if (findPr) {
      return findPr.qty
    } else {
      return null;
    }
  }


  // console.log(products);
  return (
    <main className="container">
      <div className="banner-img">

      </div>
      {/* Product Card */}
      <div className="shell">
        <div className="container">
          <div className="row">
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
              <ProductCard _id={product._id} name={product.name} shortdescription={product.shortdescription} image={product.image} price={product.price} addToCart={dispatch(addToCart({
                price: product.price,
                          product_id: product._id,
                          qty: 1,
                          title: product.name,
                          subTotal: product.price
              }))} removeToCart={dispatch(removeToCart(product._id))} findQty={findQty(product._id)}/>
            ))}
          </div>
        </div>
      </div>
      <Card >
        <CardHeader/>
        <CardContent/>
        </Card>
      
      
    </main>
  );
}

