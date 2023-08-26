import * as React from "react"

import { Button } from "@/components/ui/button"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addToCart } from "@/store/cartSlice";
import Link from "next/link";
// import { cartProducts } from "@/store/cartSlice";

type IProductCard = {
    _id: string;
    name: string;
    shortdescription: string;
    image: string;
    price: number;
    category: {
        name: string;
      }
    
    // removeToCart: any;
    // findQty: (id: string) => number | null;
}


export function ProductCard(prop:IProductCard) {

  const cart = useAppSelector((state) => state.cartReducer);

    const dispatch = useAppDispatch();

    const findQty = (id: string) => {
        const findPr = cart.products.find((il) => il.product_id == id)
        if (findPr) {
          return findPr.qty
        } else {
          return null;
        }
      }

    return (
      <Card className="w-[100%] max-w-[23%] mt-4 max-md:max-w-[48%] max-sm:max-w-[100%]">
          <Link href={`/product/${prop._id}`} passHref>
          <CardHeader className="p-0">
             <img src={prop.image} alt="Product" className="h-80 w-[100%] object-cover rounded-t-lg" />
          </CardHeader>
              </Link>
          
          <CardContent>
          <Link href='/product' passHref>

          <CardTitle className="line-clamp-1 mb-2">

<span className="text-black  uppercase text-xs">{prop.name}</span>
</CardTitle>
          </Link>
<CardDescription className="line-clamp-3 mb-2">
{prop.shortdescription}
{/* <p className="text-lg font-bold text-black truncate block capitalize"></p> */}
</CardDescription>
            <div className="flex justify-between">
            <h3 className="font-bold">$ {prop.price} </h3>
            <p> {prop.category.name}</p>
            </div>
          {/* <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5"> */}
          {/* <div className="w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">
    <a href="#">
     
      <div className="px-4 py-3 w-72">
       
        <div className="flex items-center">
          <p className="text-lg font-semibold text-black cursor-auto my-3">$149</p>
          <del>
            <p className="text-sm text-gray-600 cursor-auto ml-2">$199</p>
          </del>
          <div className="ml-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-bag-plus" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 7.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V12a.5.5 0 0 1-1 0v-1.5H6a.5.5 0 0 1 0-1h1.5V8a.5.5 0 0 1 .5-.5z" />
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z" />
            </svg></div>
        </div>
      </div>
    </a>
  </div> */}
          {/* </section> */}
          
          
          </CardContent>
          <CardFooter className="block p-0 ">
            <Button className="w-full rounded-none rounded-b-lg " variant="outline" onClick={() => dispatch(addToCart({
                price: prop.price,
                product_id: prop._id,
                qty:1,
                subTotal: prop.price,
                title: prop.name
            }))}>ADD TO CART {findQty(prop._id) ? `x ${findQty(prop._id)}`  : null}</Button>
            {/* <Button className="w-full rounded-none rounded-b-lg mt-2">Rmove To Cart</Button> */}
          </CardFooter>
        </Card>
       
    )
}