import { cache } from 'react'
import client from '../../../client'
import { groq } from 'next-sanity'
 
export const getProducts = cache(async () => {
    try {
        const products = await client.fetch(groq`*[_type == 'product']{
            _id, name, shortdescription, image, price, category-> 
          }`)

          console.log(products, "API")

          return products;
        
    } catch (error) {
        
    }


})

export const getProduct = cache(async (id:string) => {
    try {
        const products = await client.fetch(groq`*[_type == "product" && _id == "${id}"]`)

          console.log(products, "API")

          return products;
        
    } catch (error) {
        console.error("Error fetching product:", error);
    throw error;
    }


})