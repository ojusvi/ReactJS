/* eslint-disable react/prop-types */
// import axios from "axios";
// import { useCallback, useEffect, useState } from "react";
// import { Link, useParams } from "react-router-dom";
// import useCartStore from "../../store/cartStore";
// // import { useSearchParams } from "react-router-dom";

// export default function ProductDetails() {

//   // const fetchproducts = async () => {
//   //     const res = await axios.get(`${BASE_URL}/product/${id}`)
//   //     setProducts(res.data)
//   // }

//   if (loading) {
//     return <div className="text-center mt-4">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-center mt-4 text-red-500">{error}</div>;
//   }

//   return (
//     <section className="py-12 sm:py-16">
//       <div className="container mx-auto px-4">
//         <nav className="flex">
//           <ol role="list" className="flex items-center">
//             <li className="text-left">
//               <div className="-m-1">
//                 <Link
//                   to="/"
//                   className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
//                 >
//                   {" "}
//                   Home{" "}
//                 </Link>
//               </div>
//             </li>

//             <li className="text-left">
//               <div className="flex items-center">
//                 <span className="mx-2 text-gray-400">/</span>
//                 <div className="-m-1">
//                   <Link
//                     to="#"
//                     className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
//                   >
//                     {" "}
//                     Products{" "}
//                   </Link>
//                 </div>
//               </div>
//             </li>

//             <li className="text-left">
//               <div className="flex items-center">
//                 <span className="mx-2 text-gray-400">/</span>
//                 <div className="-m-1">
//                   <Link
//                     to="#"
//                     className="rounded-md p-1 text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
//                     aria-current="page"
//                   >
//                     {" "}
//                     {products.brand}{" "}
//                   </Link>
//                 </div>
//               </div>
//             </li>
//           </ol>
//         </nav>

//         <div className="lg:col-gap-12 xl:col-gap-16 mt-8 grid grid-cols-1 gap-12 lg:mt-12 lg:grid-cols-5 lg:gap-16">
//           <div className="lg:col-span-3 lg:row-end-1">
//             <div className="lg:flex lg:items-start">
//               <div className="lg:order-2 lg:ml-5">
//                 <div className="max-w-xl overflow-hidden rounded-lg">
//                   <img
//                     className="h-full w-full max-w-full object-cover"
//                     src={products.thumbnail}
//                     alt=""
//                   />
//                 </div>
//               </div>

//               {/* <div className="mt-2 w-full lg:order-1 lg:w-32 lg:flex-shrink-0">
//                 <div className="flex flex-row items-start lg:flex-col">
//                   <button type="button" className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-gray-900 text-center">
//                     <img className="h-full w-full object-cover" src={products.images} alt="" />
//                   </button>
//                   <button type="button" className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
//                     <img className="h-full w-full object-cover" src="/images/JHxMnVrtPMdcNU1s_7g7f.png" alt="" />
//                   </button>
//                   <button type="button" className="flex-0 aspect-square mb-3 h-20 overflow-hidden rounded-lg border-2 border-transparent text-center">
//                     <img className="h-full w-full object-cover" src="/images/JHxMnVrtPMdcNU1s_7g7f.png" alt="" />
//                   </button>
//                 </div>
//               </div> */}
//             </div>
//           </div>

//           <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
//             <h1 className="sm: text-2xl font-bold text-gray-900 sm:text-3xl">
//               {products.brand}
//             </h1>

//             <h2 className="mt-8 text-base text-gray-900">Color Type</h2>
//             <div className="mt-3 flex select-none flex-wrap items-center gap-1">
//               <label className="">
//                 <input
//                   type="radio"
//                   name="type"
//                   value="Powder"
//                   className="peer sr-only"
//                 />
//                 <p className="peer-:bg-black peer-:text-white rounded-lg border border-black px-6 py-2 font-bold">
//                   Black
//                 </p>
//               </label>
//               <label className="">
//                 <input
//                   type="radio"
//                   name="type"
//                   value="Whole Bean"
//                   className="peer sr-only"
//                 />
//                 <p className="peer-:bg-black peer-:text-white rounded-lg border border-black px-6 py-2 font-bold">
//                   White
//                 </p>
//               </label>
//               <label className="">
//                 <input
//                   type="radio"
//                   name="type"
//                   value="Groud"
//                   className="peer sr-only"
//                 />
//                 <p className="peer-:bg-black peer-:text-white rounded-lg border border-black px-6 py-2 font-bold">
//                   Gray
//                 </p>
//               </label>
//             </div>

//             <h2 className="mt-8 text-base text-gray-900">Choose Variant</h2>
//             <div className="mt-3 flex select-none flex-wrap items-center gap-1">
//               <label className="">
//                 <input
//                   type="radio"
//                   name="subscription"
//                   value="4 Months"
//                   className="peer sr-only"
//                 />
//                 <p className="peer-:bg-black peer-:text-white rounded-lg border border-black px-6 py-2 font-bold">
//                   128 gb
//                 </p>
//                 {/* <span className="mt-1 block text-center text-xs">$80/mo</span> */}
//               </label>
//               <label className="">
//                 <input
//                   type="radio"
//                   name="subscription"
//                   value="8 Months"
//                   className="peer sr-only"
//                 />
//                 <p className="peer-:bg-black peer-:text-white rounded-lg border border-black px-6 py-2 font-bold">
//                   256 gb
//                 </p>
//                 {/* <span className="mt-1 block text-center text-xs">$60/mo</span> */}
//               </label>
//               <label className="">
//                 <input
//                   type="radio"
//                   name="subscription"
//                   value="12 Months"
//                   className="peer sr-only"
//                 />
//                 <p className="peer-:bg-black peer-:text-white rounded-lg border border-black px-6 py-2 font-bold">
//                   512 gb
//                 </p>
//                 {/* <span className="mt-1 block text-center text-xs">$40/mo</span> */}
//               </label>
//             </div>

//             <div className="mt-10 flex flex-col items-center justify-between space-y-4 border-t border-b py-4 sm:flex-row sm:space-y-0">
//               <div className="flex items-end">
//                 <h1 className="text-3xl font-bold">${products.price}</h1>
//                 {/* <span className="text-base">/month</span> */}
//               </div>

//               <button
//                 onClick={() => addProduct(products)}
//                 type="button"
//                 className="inline-flex items-center justify-center rounded-md border-2 border-transparent bg-gray-900 bg-none px-6 py-3 text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
//               >
//                 Add to cart
//               </button>
//             </div>

//             <ul className="mt-8 space-y-2">
//               <li className="flex items-center text-left text-sm font-medium text-gray-600">
//                 Free shipping worldwide
//               </li>

//               <li className="flex items-center text-left text-sm font-medium text-gray-600">
//                 Cancel Anytime
//               </li>
//             </ul>
//           </div>

//           <div className="lg:col-span-3">
//             <div className="border-b border-gray-300">
//               <nav className="flex gap-4">
//                 <Link
//                   to="#"
//                   title=""
//                   className="border-b-2 border-gray-900 py-4 text-sm font-medium text-gray-900 hover:border-gray-400 hover:text-gray-800"
//                 >
//                   {" "}
//                   Description{" "}
//                 </Link>

//                 <Link
//                   to="#"
//                   title=""
//                   className="inline-flex items-center border-b-2 border-transparent py-4 text-sm font-medium text-gray-600"
//                 >
//                   Reviews
//                   <span className="ml-2 block rounded-full bg-gray-500 px-2 py-px text-xs font-bold text-gray-100">
//                     {" "}
//                     1,209{" "}
//                   </span>
//                 </Link>
//               </nav>
//             </div>

//             <div className="mt-8 flow-root sm:mt-12">
//               <h1 className="text-3xl font-bold">Delivered To Your Door</h1>
//               <p className="mt-4">
//                 Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
//                 accusantium nesciunt fuga.
//               </p>
//               <h1 className="mt-8 text-3xl font-bold">Description</h1>
//               <p className="mt-4">{products.description}</p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import axios from "axios";
import { StarIcon } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import {
  shipping1,
  shipping2,
  shipping3,
  shipping4,
  shipping5,
  shipping7,
} from "../assets/images";
import useCartStore from "./../../store/cartStore";

// const shippingDetail = [
//   {
//     id: 1,
//     name: "Free Delivery",
//     image: { shipping1 },
//   },
//   {
//     id: 2,
//     name: "Pay on Delivery",
//     image: { shipping2 },
//   },
//   {
//     id: 3,
//     name: "7 days Replacement",
//     image: { shipping3 },
//   },
//   {
//     id: 4,
//     name: "1 Year Warranty",
//     image: { shipping4 },
//   },
//   {
//     id: 5,
//     name: "Top Brand",
//     image: { shipping5 },
//   },
//   {
//     id: 6,
//     name: "Amazon Delivered",
//     image: { shipping6 },
//   },
//   {
//     id: 7,
//     name: "Secure transaction",
//     image: { shipping7 },
//   },
//   {
//     id: 8,
//     name: "Secure transaction",
//     image: { shipping8 },
//   },
// ];

const ColorDetail = [
  {
    id: 1,
    price: "1,899.00",
    image: "productIcon1",
    color: "red1",
  },
  {
    id: 2,
    price: "1,899.00",
    image: "productIcon2",
    color: "red2",
  },
  {
    id: 3,
    price: "1,899.00",
    image: "productIcon3",
    color: "red3",
  },
  {
    id: 4,
    price: "1,899.00",
    image: "productIcon4",
    color: "red4",
  },
  {
    id: 5,
    price: "1,899.00",
    image: "productIcon5",
    color: "red5",
  },
];

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const addProduct = useCartStore((state) => state.addProduct);

  const fetchProducts = useCallback(async () => {
    try {
      const res = await axios.get(`http://localhost:5000/products/${id}`);
      setProduct(res.data);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [id, setError, setLoading]);

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
    <div className="bg-white">
      <main className="mx-auto">
        <div className="pagination py-2 mt-3 ml-24 text-xs font-bold">
          <p>Sponsored Electronics › Wearable Technology › {product.brand}</p>
        </div>
        <div className="ProductPaga-container py-2 px-2 flex justify-between items-start text-black text-sm leading-5">
          {/* ---------- */}
          <div className="product-showcase p-4">
            <SmallProduct Product={ColorDetail} />
          </div>
          {/* ---------- */}
          <div className="product-img-video w-96 mt-3 -ml-20">
            <img src={product.thumbnail} alt="" className="w-full h-[27vw]" />
          </div>
          {/* ---------- */}
          <div className="product-detail p-4 w-2/5">
            <div className="product-detail-name border-b border-gray-300 pb-4">
              <p className="bold font-bold text-3xl">{product.brand}</p>
              <span className="product-link text-blue-700 cursor-pointer">
                Visit the Store
              </span>
              <div className="flex items-center justify-start">
                <span className="flex">
                  <StarIcon
                    className={`${
                      product.rating >= 1 ? "text-yellow-500" : "text-gray-400"
                    }`}
                  />
                  <StarIcon
                    className={
                      product.rating >= 2 ? "text-yellow-500" : "text-gray-400"
                    }
                  />
                  <StarIcon
                    className={
                      product.rating >= 3 ? "text-yellow-500" : "text-gray-400"
                    }
                  />
                  <StarIcon
                    className={
                      product.rating >= 4 ? "text-yellow-500" : "text-gray-400"
                    }
                  />
                  <StarIcon
                    className={
                      product.rating >= 5 ? "text-yellow-500" : "text-gray-400"
                    }
                  />

                  {/* have the stars be yellow on the basis of the rating */}
                </span>
                <div className="product-link text-blue-700 cursor-pointer px-4">
                  {product.rating} ratings
                </div>
                <div className="saprete w-px bg-black h-4 mx-4"></div>
                <div className="product-link text-blue-700 cursor-pointer px-4">
                  587 answered questions
                </div>
              </div>
            </div>
            <div className="product-detail-name py-4 border-b border-gray-300 pb-4">
              <p className="dealBadgeSupportingText text-red-700 font-bold text-sm leading-5">
                Ends in 03h 28m 15s
              </p>
              <p className="product-price py-4 text-3xl leading-7">
                <span className="text-red-500 text-md">
                  -{product.discountPercentage}
                </span>
                <span className="ml-5">
                  <sup className="">₹</sup>
                  {product.price}
                </span>
                {/* <sup>00</sup> */}
              </p>
              <p className="text-sm">
                M.R.P.: <span className="line-through">₹11,000</span>
              </p>
              <div className="py-4 -mt-3 -mb-5">Inclusive of all taxes</div>
              <div>
                <span className="bold font-bold">EMI</span> starts at ₹
                {product.emi}. No Cost EMI available{" "}
                <span className="product-link text-blue-700 cursor-pointer">
                  EMI options
                </span>
              </div>
            </div>
            <div className="product-detail-name py-4 border-b border-gray-300 pb-4">
              <div className="flex items-center gap-1">
                <EmiSection />
                <EmiSection />
                <EmiSection />
                <EmiSection />
              </div>
            </div>
            <div className="product-detail-name py-4 border-b border-gray-300 pb-4">
              <div className="flex items-center ml-10 text-blue-500">
                <span className="">
                  <img
                    src={shipping3}
                    alt=""
                    width={40}
                    height={40}
                    className="ml-4"
                  />
                  <span className="justify-center flex">7 Days</span>
                  <span className="flex">Replacement</span>
                </span>
                <span className="ml-7">
                  <img
                    src={shipping1}
                    alt=""
                    width={40}
                    height={40}
                    className="-mt-4 ml-5"
                  />
                  Free Delivery
                </span>
                <span className="ml-7 mt-1">
                  <img
                    src={shipping4}
                    alt=""
                    width={40}
                    height={40}
                    className="ml-6"
                  />
                  <span className="justify-center flex">1 Year</span>
                  <span className="">Warranty Care</span>
                </span>
                <span className="ml-7">
                  <img
                    src={shipping2}
                    alt=""
                    width={40}
                    height={40}
                    className="-mt-4 ml-6"
                  />
                  Pay on Delivery
                </span>
                <span className="ml-7">
                  <img
                    src={shipping5}
                    alt=""
                    width={40}
                    height={40}
                    className="-mt-4 ml-3"
                  />
                  Top Brand
                </span>
                <span className="ml-7 mt-1">
                  <img
                    src={shipping7}
                    alt=""
                    width={40}
                    height={40}
                    className="ml-3"
                  />
                  <span className="justify-center flex">Amazon</span>
                  <span className="ml-1">Delivered</span>
                </span>
              </div>
            </div>
            <h2 className="mt-3 text-base text-gray-900">Choose Variant :</h2>
            <div className="product-detail-name py-4 text-xs">
              <div className="flex items-center">
                <p className="peer-:bg-black peer-:text-white rounded-lg border border-black px-6 py-2 font-bold cursor-pointer">
                  8 GB RAM + 256 GB STORAGE
                </p>
                <p className="rounded-lg border border-black px-6 py-2 font-bold ml-5 cursor-pointer">
                  12 GB RAM + 512 GB STORAGE
                </p>
              </div>
              <div className="flex items-center">
                <p className="rounded-lg border border-black px-6 py-2 font-bold mt-4 cursor-pointer">
                  8 GB RAM + 512 GB STORAGE
                </p>
              </div>
            </div>
          </div>

          {/* ---------- */}
          <div className="product-buying-detail p-4 border border-gray-400 rounded w-80 h-96 mr-48">
            <p className="product-price text-3xl leading-7">
              <sup>₹</sup>
              {product.price}
              {/* <sup>00</sup> */}
            </p>
            <p className="bold py-4">
              <span className="product-link text-blue-700 cursor-pointer">
                FREE delivery
              </span>{" "}
              {product.delivery}{" "}
              <span className="product-link text-blue-700 cursor-pointer">
                Details
              </span>
            </p>
            <p className="bold py-4">
              Or fastest delivery Tomorrow, May 2. Order within 8 hrs 17 mins.{" "}
              <span className="product-link text-blue-700 cursor-pointer">
                Details
              </span>
            </p>
            <span className="product-stock text-green-700 text-lg leading-6">
              {product.status}
            </span>
            <CartButton
              name="Add to Cart"
              onClick={() => {
                addProduct(product);
                toast("Product added to cart");
              }}
              color={""}
            />
            <CartButton name="Buy Now" color={"#FFA41C"} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetails;

export const CartButton = ({ name, color, onClick }) => {
  return (
    <button
      className={`cartBtn rounded-2xl py-2 px-8 border-none text-sm leading-5 w-4/5 my-2 mx-4 shadow-md ${
        color ? "" : "bg-yellow-400"
      }`}
      style={{ backgroundColor: color || "#FFD814" }}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export const EmiSection = () => {
  return (
    <div className="emi-section rounded-md py-2 px-3 border border-gray-400 flex-1 my-1 shadow-sm">
      <p className="bold font-bold">No Cost EMI</p>
      <p>Upto ₹85.51 EMI interest savings on Amazon Pay ICICI…</p>
      <span className="product-link text-blue-700 cursor-pointer">
        2 offers
      </span>
    </div>
  );
};

export const ShippingIcon = ({ Product }) => {
  return (
    <>
      {Product.map((item) => (
        <div
          className="shipping-Icon flex flex-col items-center text-center"
          key={item.id}
        >
          <img
            src={`../image/ProductImage/${item.image}.png`}
            alt=""
            className="w-12 object-cover"
          />
          <p className="product-link text-xs">{item.name}</p>
        </div>
      ))}
    </>
  );
};

export const ColorSelector = ({ Product }) => {
  const [color, setColor] = useState("yello");
  function changeColor(item) {
    setColor(item.color);
  }
  return (
    <div className="product-detail-name py-4">
      <p>
        Colour: <span className="bold font-bold">{color}</span>
      </p>
      <div className="flex items-center justify-start py-4">
        {Product.map((item) => (
          <div className="color-selector text-center" key={item.id}>
            <img
              onClick={() => changeColor(item)}
              src={`../image/ProductImage/${item.image}.jpg`}
              alt=""
              className="border border-gray-400 p-1 rounded mx-1"
            />
            <p>₹ {item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export const SmallProduct = ({ Product }) => {
  return (
    <>
      {Product.map((item) => (
        <div className="small-product rounded-lg m-1" key={item.id}>
          <img
            src={`../image/ProductImage/${item.image}.jpg`}
            alt=""
            className="w-12"
          />
        </div>
      ))}
    </>
  );
};
