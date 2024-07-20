import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "sonner";
import Cart from "./pages/Cart";
import DashLayout from "./pages/DashLayout";
import Dashboard from "./pages/Dashboard";
import Layout from "./pages/Layout";
import Products from "./pages/Products";
import ManageProducts from "./pages/manageProducts";
import ProductDetails from "./pages/productDetail";
import { SignIn } from "./pages/signIn";
import { SignUp } from "./pages/signup";

function App() {
  return (
    <div className="min-h-screen">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Products />} />
            <Route path="productDetail/:id" element={<ProductDetails />} />
            <Route path="cart" element={<Cart />} />
            <Route path="signin" element={<SignIn />} />
            <Route path="signup" element={<SignUp />} />
          </Route>
          <Route path="dashboard" element={<DashLayout />}>
            <Route index element={<Dashboard />} />
            <Route
              path="/dashboard/manageproducts"
              element={<ManageProducts />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
