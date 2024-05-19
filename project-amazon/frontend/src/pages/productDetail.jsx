import axios from "axios";
import { useCallback, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { BASE_URL } from "../config/baseURL";
// import { useSearchParams } from "react-router-dom";

export default function ProductDetails() {
  const { id } = useParams();
  console.log("ID:", id);
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = useCallback(async () => {
    try {
      const res = await axios.get(`${BASE_URL}/product/${id}`);
      setProducts(res.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [id, setProducts, setError, setLoading]);

  // const fetchproducts = async () => {
  //     const res = await axios.get(`${BASE_URL}/product/${id}`)
  //     setProducts(res.data)
  // }

  useEffect(() => {
    fetchProducts();
  }, [id, fetchProducts]);

  if (loading) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-4 text-red-500">{error}</div>;
  }

  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-4">
        <nav className="flex">
          <ol role="list" className="flex items-center">
            <li className="text-left">
              <div className="-m-1">
                <Link
                  to="/"
                  className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                >
                  {" "}
                  Home{" "}
                </Link>
              </div>
            </li>

            <li className="text-left">
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <div className="-m-1">
                  <Link
                    to="#"
                    className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                  >
                    {" "}
                    Products{" "}
                  </Link>
                </div>
              </div>
            </li>

            <li className="text-left">
              <div className="flex items-center">
                <span className="mx-2 text-gray-400">/</span>
                <div className="-m-1">
                  <Link
                    to="#"
                    className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                    aria-current="page"
                  >
                    {" "}
                    {products.brand}{" "}
                  </Link>
                </div>
              </div>
            </li>
          </ol>
        </nav>

        <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-3 lg:row-end-1">
            <div className="lg:flex lg:items-start">
              <div className="lg:order-2 lg:ml-5">
                <div className="max-w-xl overflow-hidden rounded-lg">
                  <img
                    className="h-full w-full max-w-full object-cover"
                    src={products.thumbnail}
                    alt=""
                  />
                </div>
              </div>

              {/* <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
                <div className="flex flex-row items-start lg:flex-col">
                  <button type="button" className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center">
                    <img className="h-full w-full object-cover" src={products.images} alt="" />
                  </button>
                  <button type="button" className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
                    <img className="h-full w-full object-cover" src="/images/JHxMnVrtPMdcNU1s_7g7f.png" alt="" />
                  </button>
                  <button type="button" className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
                    <img className="h-full w-full object-cover" src="/images/JHxMnVrtPMdcNU1s_7g7f.png" alt="" />
                  </button>
                </div>
              </div> */}
            </div>
          </div>

          <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
            <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">
              {products.title}
            </h1>

            <h2 className="mt-8 text-base text-gray-900">Color Type</h2>
            <div className="mt-3 flex select-none flex-wrap items-center gap-1">
              <label className="">
                <input
                  type="radio"
                  name="type"
                  value="Powder"
                  className="peer sr-only"
                />
                <p className="peer-:bg-black peer-:text-white rounded-lg border border-black px-6 py-2 font-bold">
                  Black
                </p>
              </label>
              <label className="">
                <input
                  type="radio"
                  name="type"
                  value="Whole Bean"
                  className="peer sr-only"
                />
                <p className="peer-:bg-black peer-:text-white rounded-lg border border-black px-6 py-2 font-bold">
                  White
                </p>
              </label>
              <label className="">
                <input
                  type="radio"
                  name="type"
                  value="Groud"
                  className="peer sr-only"
                />
                <p className="peer-:bg-black peer-:text-white rounded-lg border border-black px-6 py-2 font-bold">
                  Gray
                </p>
              </label>
            </div>

            <h2 className="mt-8 text-base text-gray-900">Choose Variant</h2>
            <div className="mt-3 flex select-none flex-wrap items-center gap-1">
              <label className="">
                <input
                  type="radio"
                  name="subscription"
                  value="4 Months"
                  className="peer sr-only"
                />
                <p className="peer-:bg-black peer-:text-white rounded-lg border border-black px-6 py-2 font-bold">
                  128 gb
                </p>
                {/* <span className="mt-1 block text-center text-xs">$80/mo</span> */}
              </label>
              <label className="">
                <input
                  type="radio"
                  name="subscription"
                  value="8 Months"
                  className="peer sr-only"
                />
                <p className="peer-:bg-black peer-:text-white rounded-lg border border-black px-6 py-2 font-bold">
                  256 gb
                </p>
                {/* <span className="mt-1 block text-center text-xs">$60/mo</span> */}
              </label>
              <label className="">
                <input
                  type="radio"
                  name="subscription"
                  value="12 Months"
                  className="peer sr-only"
                />
                <p className="peer-:bg-black peer-:text-white rounded-lg border border-black px-6 py-2 font-bold">
                  512 gb
                </p>
                {/* <span className="mt-1 block text-center text-xs">$40/mo</span> */}
              </label>
            </div>

            <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
              <div className="flex items-end">
                <h1 className="text-3xl font-bold">${products.price}</h1>
                {/* <span className="text-base">/month</span> */}
              </div>

              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-6 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
              >
                Add to cart
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-6 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
              >
                Del
              </button>
            </div>

            <ul className="mt-8 space-y-2">
              <li className="flex items-center text-left text-sm font-medium text-gray-600">
                Free shipping worldwide
              </li>

              <li className="flex items-center text-left text-sm font-medium text-gray-600">
                Cancel Anytime
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="border-b border-gray-300">
              <nav className="flex gap-4">
                <Link
                  to="#"
                  title=""
                  className="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"
                >
                  {" "}
                  Description{" "}
                </Link>

                <Link
                  to="#"
                  title=""
                  className="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600"
                >
                  Reviews
                  <span className="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100">
                    {" "}
                    1,209{" "}
                  </span>
                </Link>
              </nav>
            </div>

            <div className="mt-8 flow-root sm:mt-12">
              <h1 className="text-3xl font-bold">Delivered To Your Door</h1>
              <p className="mt-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
                accusantium nesciunt fuga.
              </p>
              <h1 className="mt-8 text-3xl font-bold">Description</h1>
              <p className="mt-4">{products.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
