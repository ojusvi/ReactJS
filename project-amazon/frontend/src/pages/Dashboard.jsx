// src/components/Dashboard.jsx
import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";
import { INflag, amazon, location } from "../assets/images";
import { InputDemo } from "../components/Demo/InputDemo";
import { dashLinks } from "../constants";

Modal.setAppElement("#root"); // Necessary for accessibility reasons

const Dashboard = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    brand: "",
    price: "",
    rating: "",
    thumbnail: "",
    discountPercentage: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:3000/products"); // Replace with your API endpoint
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleAddProduct = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/products",
        newProduct
      ); // Replace with your API endpoint
      setProducts([...products, response.data]);
      setNewProduct({
        brand: "",
        price: "",
        rating: "",
        thumbnail: "",
        discountPercentage: "",
      });
      setIsModalOpen(false);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/products/${id}`); // Replace with your API endpoint
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="">
      <header className="padding-x py-3 w-full bg-adgray text-white">
        <nav className="flex items-center max-container">
          <Link to="/" className="mt-3">
            <img
              src={amazon}
              alt=""
              width={100}
              height={100}
              className="px-2 ml-5"
            />
          </Link>
          <img
            src={location}
            alt=""
            width={12}
            height={12}
            className="ml-20 mt-3.5 max-sm:hidden"
          />

          <div className="ml-3 text-sm max-sm:hidden">
            Hello User, <br />
            <span className="font-bold">Select Your Address</span>
          </div>
          <div className="mx-16 w-[50%] max-sm:w-[50%]">
            <InputDemo></InputDemo>
          </div>

          <img
            src={INflag}
            alt=""
            width={40}
            height={40}
            className="-mx-10 max-sm:hidden"
          />
          <span className="mx-5 max-sm:hidden">EN</span>

          <div className="text-xs max-sm:hidden">
            Hello, Sign In <br />
            <span className="font-bold text-sm">Account & Lists</span>
          </div>

          <div className="ml-10 text-xs max-sm:hidden">
            Returns
            <br />
            <span className="font-bold text-sm">& Orders</span>
          </div>
        </nav>
      </header>

      <div className="bg-acharcol text-white items-center py-2 font-bold">
        <ul className="flex flex-1 justify-center items-center gap-16">
          {dashLinks.map((item) => (
            <li key={item.label} className="max-sm:hidden">
              <a
                href={item.href}
                className="font-montserrat leading-normal text-sm"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>

      <div className="mb-6">
        <h2 className="text-xl mb-2">Add New Product</h2>
        <button
          className="bg-blue-500 text-white p-2"
          onClick={() => setIsModalOpen(true)}
        >
          Add
        </button>
      </div>

      <div className="container mb-6">
        <h2 className="text-xl mb-2">Products</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr>
                <th className="border p-2">ID</th>
                <th className="border p-2">Brand</th>
                <th className="border p-2">Price</th>
                <th className="border p-2">Rating</th>
                <th className="border p-2">Thumbnail</th>
                <th className="border p-2">Discount</th>
                <th className="border p-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id}>
                  <td className="border p-2">{product.id}</td>
                  <td className="border p-2">{product.brand}</td>
                  <td className="border p-2">{product.price}</td>
                  <td className="border p-2">{product.rating}</td>
                  <td className="border p-2">
                    <img
                      src={product.thumbnail}
                      alt={product.brand}
                      className="w-16"
                    />
                  </td>
                  <td className="border p-2">{product.discountPercentage}%</td>
                  <td className="border p-2">
                    <button
                      className="bg-red-500 text-white p-2"
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Add New Product"
        className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md mx-auto mt-20"
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <h2 className="text-xl mb-4">Add New Product</h2>
        <input
          type="text"
          className="border p-2 mb-2 w-full"
          value={newProduct.brand}
          onChange={(e) =>
            setNewProduct({ ...newProduct, brand: e.target.value })
          }
          placeholder="Brand"
        />
        <input
          type="number"
          className="border p-2 mb-2 w-full"
          value={newProduct.price}
          onChange={(e) =>
            setNewProduct({ ...newProduct, price: e.target.value })
          }
          placeholder="Price"
        />
        <input
          type="number"
          className="border p-2 mb-2 w-full"
          value={newProduct.rating}
          onChange={(e) =>
            setNewProduct({ ...newProduct, rating: e.target.value })
          }
          placeholder="Rating"
        />
        <input
          type="text"
          className="border p-2 mb-2 w-full"
          value={newProduct.thumbnail}
          onChange={(e) =>
            setNewProduct({ ...newProduct, thumbnail: e.target.value })
          }
          placeholder="Thumbnail URL"
        />
        <input
          type="number"
          className="border p-2 mb-2 w-full"
          value={newProduct.discountPercentage}
          onChange={(e) =>
            setNewProduct({ ...newProduct, discountPercentage: e.target.value })
          }
          placeholder="Discount Percentage"
        />
        <div className="flex justify-end">
          <button
            className="bg-red-500 text-white p-2 mr-2"
            onClick={() => setIsModalOpen(false)}
          >
            Cancel
          </button>
          <button
            className="bg-blue-500 text-white p-2"
            onClick={handleAddProduct}
          >
            Add Product
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Dashboard;
