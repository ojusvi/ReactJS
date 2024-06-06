import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import {
  banner1,
  banner2,
  banner3,
  banner4,
  banner5,
  banner6,
  banner7,
} from "../assets/images";
import MultiProductCard from "../components/MultiProductCard";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [multiProducts, setMultiProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    const fetchMultiProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/multiProducts");
        setMultiProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchMultiProducts();

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-4 text-red-500">{error}</div>;
  }

  return (
    <div className="flex flex-col w-full -mb-64">
      <div>
        <Carousel pause="false">
          {[banner1, banner2, banner3, banner4, banner5, banner6, banner7].map(
            (banner, index) => (
              <Carousel.Item key={index} interval={3000}>
                <div className="relative w-full">
                  <img
                    src={banner}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-gray-200 to-transparent"></div>
                </div>
              </Carousel.Item>
            )
          )}
        </Carousel>
      </div>
      {/* <div className="mb-8">
        <h1 className="text-3xl font-bold text-center mt-12 ">
          Top Selling Products
        </h1>
        <p className="text-center mt-2 text-gray-500">
          Check out our top selling products
        </p>
      </div> */}
      <div className="grid grid-cols-1 gap-10 md:grid-cols-4 mb-80 -mt-20 z-10 px-10">
        {/* <MultiProductCard products={multiProducts} /> */}
        {multiProducts.map((item, key) => (
          <MultiProductCard key={key} products={item} />
        ))}
      </div>

      <div className="bottom-[380px] relative mt-5">
        <div className="text-center w-full">
          <h1 className="text-3xl font-bold text-center mt-20">
            Trending Products
          </h1>
          <p className="text-center mt-2 text-gray-500">
            Check out our trending products
          </p>
        </div>
        <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 mt-6 mx-auto">
          {products.map((item, key) => (
            <ProductCard key={key} product={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
