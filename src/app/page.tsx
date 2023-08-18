import Image from "next/image";
import client from "../../client";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { groq } from "next-sanity";
import { cache } from "react";
import { getProducts } from "./api/getProducts";
import './globals.css'

// export const getStaticProps: GetStaticProps = async (context) => {
//   // It's important to default the slug so that it doesn't return "undefined"
//   try {

//     // const products = await client.fetch(`*[_type == "product"]`);
//     const products = await client.fetch(groq`*[]`);

//     console.log(products, "product inner")
//     console.log(context, "context inner")

//     return {
//       props: {
//         products,
//       },
//     };
//   } catch (error) {
//     return {
//       props: {
//         error: 'error creating',
//       },
//     };
//   }

// };

type Product = {
  _id: string;
  name: string;
  shortdescription: string;
  image: string;
  price: number;
  category: {
    name: string;
  };
};




export default async function Home() {
  
  const products = await getProducts();
  console.log(products);
  return (
  <main className="container">

    <div className="banner-img">

    </div>

  </main>
  );
}

// export async function getStaticPaths() {
//   const paths = await client.fetch(`*[_type == "product"]`);
//   // console.log(paths, "Paths")
//   return {
//     paths: paths,
//     fallback: true,
//   };
// }
