/* eslint-disable react/prop-types */
// import axios from "axios";
import { Link } from "react-router-dom";

function ProductCard({ product }) {
  // const deleteProduct = async (id) => {
  //   try {
  //     await axios.delete(`http://localhost:3000/products/${id}`);
  //     window.location.reload();
  //   } catch (error) {
  //     console.error("Error deleting product:", error);
  //   }
  // };

  return (
    <div className=" m-10 flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md  max-sm:bottom-0 max-md:bottom-0">
      <Link
        to="/"
        className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
      >
        <img
          className="object-cover"
          src={product.thumbnail}
          alt="product image"
          width={300}
        />
        <span className="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          ${product.discountPercentage} OFF
        </span>
      </Link>
      <div className="mt-4 px-5 pb-5">
        <Link to="/">
          <h5 className="text-xl tracking-tight text-slate-900">
            {product.name} {product.brand}
          </h5>
        </Link>
        <div className="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span className="text-3xl font-bold text-slate-900">
              ${product.price}
            </span>
            <span className="text-sm text-slate-900 line-through">$699</span>
          </p>
          <div className="flex items-center">
            <span className="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
              {product.rating}
            </span>
          </div>
        </div>
        <Link
          to={`productDetail/${product.id}`}
          className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Shop Now
        </Link>
        {/* <span
          onClick={() => {
            deleteProduct(product.id);
          }}
          className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Delete
        </span> */}
      </div>
    </div>
  );
}

export default ProductCard;
