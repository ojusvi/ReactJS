import { useEffect, useState } from "react"
import { BASE_URL } from '../config/baseURL'
import axios from "axios"
import ProductCard from "../components/ProductCard"

const Products = () => {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchproducts = async () => {
        try{
            const res = await axios.get(BASE_URL + "/products")
            setProducts(res.data.products)
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

    return(
        <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 mx-auto">
            {products.map((item, key) => (
                <ProductCard key={key} product={item} />
            ))}
        </div>
    )
}

export default Products;