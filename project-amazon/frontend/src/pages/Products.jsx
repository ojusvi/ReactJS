import { useEffect, useState } from "react"
import axios from "axios"
import ProductCard from "../components/ProductCard"
import { banner1 } from "../assets/images"
import { banner2 } from "../assets/images"
import { banner3 } from "../assets/images"
import { banner4 } from "../assets/images"
import { banner5 } from "../assets/images"
import { banner6 } from "../assets/images"
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";

const Products = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchproducts = async () => {
        try{
            const res = await axios.get("/api/products")
            setProducts(res.data)
        }
        catch(error) {
            setError(error.message)
        }
        finally {
            setLoading(false)
        }
    }

    // const fetchproducts = async () => {
    //     const res = await axios.get(BASE_URL + "/products")
    //     setProducts(res.data.products)
    // }

    useEffect(() => {
        fetchproducts();
    }, [])

    if(loading) {
        return <div className="text-center mt-4">Loading...</div>
    }

    if(error) {
        return <div className="text-center mt-4 text-red-500">{error}</div>
    }

    return (
        <div>
          <Carousel>
            <Carousel.Item interval={3000}>
              <img
                className="w-screen"
                src={banner1}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="w-screen"
                src={banner2}
                alt="Second slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="w-screen"
                src={banner3}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="w-screen"
                src={banner4}
                alt="Fourth slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="w-screen"
                src={banner5}
                alt="Fifth slide"
              />
            </Carousel.Item>
            <Carousel.Item interval={3000}>
              <img
                className="w-screen"
                src={banner6}
                alt="Sixth slide"
              />
            </Carousel.Item>
          </Carousel>
          <div className="grid lg:grid-cols-5 md:grid-cols-2 sm:grid-cols-2 mx-auto">
            {products.map((item, key) => (
                <ProductCard key={key} product={item} />
            ))}
          </div>
        </div>
      );
}

export default Products;