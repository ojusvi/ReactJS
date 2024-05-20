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
} from "../assets/images";
import ProductCard from "../components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // const fetchproducts = async () => {
  //     try{
  //         const res = await axios.get("/api/products")
  //         setProducts(res.data)
  //     }
  //     catch(error) {
  //         setError(error.message)
  //     }
  //     finally {
  //         setLoading(false)
  //     }
  // }

  // // const fetchproducts = async () => {
  // //     const res = await axios.get(BASE_URL + "/products")
  // //     setProducts(res.data.products)
  // // }

  // useEffect(() => {
  //     fetchproducts();
  // }, [])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3000/products");
        setProducts(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

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
          {[banner1, banner2, banner3, banner4, banner5, banner6].map(
            (banner, index) => (
              <Carousel.Item key={index} interval={3000}>
                <div className="relative w-full">
                  <img
                    src={banner}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent"></div>
                </div>
              </Carousel.Item>
            )
          )}
        </Carousel>
      </div>
      <div className="grid lg:grid-cols-5 md:grid-cols-4 sm:grid-cols-2 mt-12 mx-auto">
        {products.map((item, key) => (
          <ProductCard key={key} product={item} />
        ))}
      </div>
    </div>
  );
};

export default Products;
