import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import fs from "fs";
import mongoose from "mongoose";
import path from "path";
import { fileURLToPath } from "url";
import { data } from "./mutilproducts.js";
import userRoutes from "./routes/userRoutes.js";

// Load environment variables
dotenv.config();

// Helper variables for __dirname and __filename in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());

mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

const productsFilePath = path.join(__dirname, "products.json");

// Function to read products from the JSON file
const readProducts = () => {
  const data = fs.readFileSync(productsFilePath, "utf-8");
  return JSON.parse(data);
};

// Function to read multiple products from the JSON file

// Function to write products to the JSON file
const writeProducts = (products) => {
  fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
};

app.get("/multiProducts", (req, res) => {
  const products = data;
  res.json(products);
});

// Route to get all products or a specific product by id
app.get("/products/:id?", (req, res) => {
  const { id } = req.params;
  const products = readProducts();

  if (id) {
    const product = products.find((product) => product.id === parseInt(id, 10));
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } else {
    res.json(products);
  }
});

// Route to add a new product
app.post("/products", (req, res) => {
  const products = readProducts();
  const newProduct = req.body;
  newProduct.id = products.length ? products[products.length - 1].id + 1 : 1; // Assign a new id
  products.push(newProduct);
  writeProducts(products);
  res.status(201).json(newProduct);
});

// Route to delete a product by id
app.delete("/products/:id", (req, res) => {
  let products = readProducts();
  const { id } = req.params;
  products = products.filter((product) => product.id !== parseInt(id, 10));
  writeProducts(products);
  res.status(204).send();
});

// Route to edit a product by id
app.put("/products/:id", (req, res) => {
  const products = readProducts();
  const { id } = req.params;
  const updatedProduct = req.body;
  let productIndex = products.findIndex(
    (product) => product.id === parseInt(id, 10)
  );
  if (productIndex !== -1) {
    products[productIndex] = { ...products[productIndex], ...updatedProduct };
    writeProducts(products);
    res.json(products[productIndex]);
  } else {
    res.status(404).json({ message: "Product not found" });
  }
});
app.use("/api/users", userRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
