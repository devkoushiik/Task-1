import axios from "axios";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
}

export const fetchProducts = async (): Promise<Product[]> => {
  const response = await axios.get(
    "https://admin.refabry.com/api/all/product/get"
  );
  return response.data.data.data;
};

export const fetchProductById = async (id: number): Promise<Product | null> => {
  const products = await fetchProducts();
  return products.find((product) => product.id === id) || null;
};
