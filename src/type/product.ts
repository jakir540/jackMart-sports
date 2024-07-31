export type TProduct = {
  _id: string;
  name: string;
  category: string;
  stockQuantity: number;
  brand: string;
  rating: number;
  description: string;
  price: number;
  image: string;
};

export type TAllProductProps = {
  data: TProduct;
};
