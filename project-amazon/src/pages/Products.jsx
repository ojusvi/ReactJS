import { useEffect, useState } from "react"
import { BASE_URL } from '../config/baseURL'
import axios from "axios"
import ProductCard from "../components/ProductCard"

const Products = () => {
    const [products, setProducts] = useState([])

    const fetchproducts = async () => {
        const res = await axios.get(BASE_URL + "/products")
        setProducts(res.data.products)
    }

    useEffect(() => {
        fetchproducts();
    }, [])

    return(
        <div className="grid lg:grid-cols-4 md:grid-cols-2 mx-auto">
            {products.map((item, key) => (
                <ProductCard key={key} product={item} />
            ))}
        </div>
    )
}

export default Products;