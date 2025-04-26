import { fetchProducts, Product } from "@/lib/api";
import React from "react";

export interface ExtendedProduct extends Product {
  unique_id?: string;
  short_desc?: string;
  stock?: number;
}

export interface Category {
  id: number;
  name: string;
}

export interface ProductImage {
  id: number;
  name: string;
  pivot: {
    product_id: number;
    image_id: number;
  };
}

const products: ExtendedProduct[] = await fetchProducts();
const SingleProductPage = async ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const products: ExtendedProduct[] = await fetchProducts();

  const product = products.find(
    (product) => product.id === parseInt(id as string)
  );

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="flex flex-col items-center p-4 md:p-8">
      <h1 className="text-2xl md:text-4xl font-bold mb-4 text-center">
        {product.name}
      </h1>
      <p className="text-white font-medium text-xl text-center mb-4">
        {product.short_desc}
      </p>
      <img
        src={`https://admin.refabry.com/storage/product/${product.image}`}
        alt={product.name}
        className="w-full max-w-md rounded-lg shadow-md mb-4"
      />
      <div className="w-full max-w-md">
        <p className="text-lg font-semibold mb-2">
          Price: <span className="text-green-600">${product.price}</span>
        </p>
        <p className="text-lg font-semibold mb-4">
          Stock:{" "}
          <span
            className={`${
              product.stock && product.stock > 0
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {product.stock && product.stock > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default SingleProductPage;
