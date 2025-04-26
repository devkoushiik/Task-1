import { fetchProducts } from "@/lib/api";
import Link from "next/link";

export default async function ProductsPage() {
  const products = await fetchProducts();
  console.log(products);
  return (
    <div className="p-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="border rounded-lg p-4 shadow hover:shadow-lg transition"
        >
          <div className="aspect-w-1 aspect-h-1 w-full">
            <img
              src={`https://admin.refabry.com/storage/product/${product.image}`}
              alt={product.name}
              className="h-full w-full object-cover rounded"
            />
          </div>
          <h2 className="text-xl font-bold mt-4">{product.name}</h2>
          <p className="text-gray-600 mt-1">${product.price}</p>
          <Link
            href={`/${product.id}`}
            className="mt-4 inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            View Details
          </Link>
        </div>
      ))}
    </div>
  );
}
