import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
export default function MultiProductCard({ products }) {
  return (
    <div className="bg-white p-4">
      <h2 className="text-2xl font-bold mb-4">Latest and upcoming launches</h2>
      <div className="grid grid-cols-2 gap-4">
        {products?.map((product, index) => (
          <div
            key={index}
            className={
              product.price ? "" : "flex flex-col items-center justify-center"
            }
          >
            <Link to={`productDetail/${product.id}`}>
              <img
                alt={product.brand}
                className="w-full h-auto mb-2"
                height="150"
                src={product.thumbnail}
                style={{
                  aspectRatio: "150/150",
                  objectFit: "cover",
                }}
                width="150"
              />
            </Link>
            <h3
              className={`text-lg font-semibold ${
                product.price ? "" : "text-center"
              }`}
            >
              {product.brand}
            </h3>
            {product.price && (
              <p className="text-sm text-gray-500">{product.price}</p>
            )}
          </div>
        ))}
      </div>
      <div className="text-left text-sm text-blue-500 mt-4">
        <p>See all Offers</p>
      </div>
    </div>
  );
}
