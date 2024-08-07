import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import { useEffect, useState } from "react";
import Modal from "react-modal";

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
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/products"); // Replace with your API endpoint
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  const handleAddProduct = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/products",
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
      setIsDialogOpen(false);
    } catch (error) {
      console.error("Error adding product:", error);
    }
  };

  const handleEditProduct = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5000/products/${productToEdit.id}`,
        newProduct
      ); // Replace with your API endpoint
      setProducts(
        products.map((product) =>
          product.id === productToEdit.id ? response.data : product
        )
      );
      setNewProduct({
        brand: "",
        price: "",
        rating: "",
        thumbnail: "",
        discountPercentage: "",
      });
      setIsDialogOpen(false);
      setIsEditing(false);
      setProductToEdit(null);
    } catch (error) {
      console.error("Error editing product:", error);
    }
  };

  const handleDeleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/products/${id}`); // Replace with your API endpoint
      setProducts(products.filter((product) => product.id !== id));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const openEditDialog = (product) => {
    setIsEditing(true);
    setProductToEdit(product);
    setNewProduct(product);
    setIsDialogOpen(true);
  };

  return (
    <div className="">
      <h1 className="text-2xl font-bold text-center mb-4 mt-5 font-montserrat">
        Dashboard
      </h1>

      <div className="mb-6">
        <h2 className="text-xl ml-20 mb-2">Add New Product</h2>
        <button
          className="bg-blue-500 text-white py-2.5 px-3 ml-32 rounded-md"
          onClick={() => setIsDialogOpen(true)}
        >
          Add
        </button>
      </div>

      <div className="container mb-6">
        <h2 className="text-xl mb-2">Products</h2>
        <div className="overflow-x-auto">
          <Table>
            <TableCaption>A list of your products.</TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">ID</TableHead>
                <TableHead>Brand</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Rating</TableHead>
                <TableHead>Thumbnail</TableHead>
                <TableHead>Discount</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product.id}>
                  <TableCell className="font-medium">{product.id}</TableCell>
                  <TableCell>{product.brand}</TableCell>
                  <TableCell>{product.price}</TableCell>
                  <TableCell>{product.rating}</TableCell>
                  <TableCell>
                    <img
                      src={product.thumbnail}
                      alt={product.brand}
                      className="w-16"
                    />
                  </TableCell>
                  <TableCell>{product.discountPercentage}%</TableCell>
                  <TableCell>
                    <button
                      className="bg-yellow-500 text-white p-2 mr-2"
                      onClick={() => openEditDialog(product)}
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-500 text-white p-2"
                      onClick={() => {
                        setProductIdToDelete(product.id);
                        setIsAlertOpen(true);
                      }}
                    >
                      Delete
                    </button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>

      <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              product.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel
              onClick={() => {
                setIsAlertOpen(false);
                setProductIdToDelete(null);
              }}
            >
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                handleDeleteProduct(productIdToDelete);
                setIsAlertOpen(false);
                setProductIdToDelete(null);
              }}
            >
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Dialog
        open={isDialogOpen}
        onOpenChange={(open) => {
          setIsDialogOpen(open);
          if (!open) {
            setIsEditing(false);
            setNewProduct({
              brand: "",
              price: "",
              rating: "",
              thumbnail: "",
              discountPercentage: "",
            });
          }
        }}
        overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      >
        <DialogContent className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md mx-auto mt-20">
          <DialogHeader>
            <DialogTitle className="text-xl mb-4">
              {isEditing ? "Edit Product" : "Add New Product"}
            </DialogTitle>
            <DialogDescription>
              <div>
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
                    setNewProduct({
                      ...newProduct,
                      discountPercentage: e.target.value,
                    })
                  }
                  placeholder="Discount Percentage"
                />
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-red-500 text-white p-2 mr-2"
                  onClick={() => setIsDialogOpen(false)}
                >
                  Cancel
                </button>
                <button
                  className="bg-blue-500 text-white p-2"
                  onClick={isEditing ? handleEditProduct : handleAddProduct}
                >
                  {isEditing ? "Update Product" : "Add Product"}
                </button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Dashboard;
