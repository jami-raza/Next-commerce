import { cache } from 'react'
import client from '../../../client'
import { groq } from 'next-sanity'
 
export const getProducts = cache(async () => {
    try {
        const products = await client.fetch(groq`*[_type == 'product']{
            _id, name, shortdescription, image, price, category-> 
          }`)

          return products;
        
    } catch (error) {
        
    }


})