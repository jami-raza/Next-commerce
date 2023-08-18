import Image from "next/image";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import { groq } from "next-sanity";

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

type Repo = {
  name: string;
  stargazers_count: number;
};

export default async function Home({
  repo,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  // console.log(products, "products");
  console.log("products");
  // const products = await client.fetch(groq`*[_type == 'product']{
  //   _id, name, shortdescription, image, price, category->
  // }`);

  console.log(repo);
  return <main>Hello world</main>;
}

// export async function getStaticPaths() {
//   const paths = await client.fetch(`*[_type == "product"]`);
//   // console.log(paths, "Paths")
//   return {
//     paths: paths,
//     fallback: true,
//   };
// }

export const getStaticProps: GetStaticProps<{
  repo: Repo;
}> = async () => {
  const res = await fetch("https://api.github.com/repos/vercel/next.js");
  const repo = await res.json();
  console.log(repo, "Repo");
  // const products = await client.fetch(groq`*[_type == 'product']{
  //   _id, name, shortdescription, image, price, category->
  // }`);
  return { props: { repo } };
};
