export type IProduct = {
  _id: string;
  name: string;
  shortdescription: string;
  image: string;
  price: number;
  category: {
    name: string;
  };
};