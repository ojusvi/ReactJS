import cors from 'cors';
import express from 'express';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Helper variables for __dirname and __filename in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS for all routes
app.use(cors());

const productsFilePath = path.join(__dirname, 'products.json');

// Function to read products from the JSON file
const readProducts = () => {
    const data = fs.readFileSync(productsFilePath, 'utf-8');
    return JSON.parse(data);
};

// Function to write products to the JSON file
const writeProducts = (products) => {
    fs.writeFileSync(productsFilePath, JSON.stringify(products, null, 2));
};

// Route to get all products
app.get('/products', (req, res) => {
    const products = readProducts();
    res.json(products);
});

// Route to add a new product
app.post('/products', (req, res) => {
    const products = readProducts();
    const newProduct = req.body;
    newProduct.id = products.length ? products[products.length - 1].id + 1 : 1; // Assign a new id
    products.push(newProduct);
    writeProducts(products);
    res.status(201).json(newProduct);
});

// Route to delete a product by id
app.delete('/products/:id', (req, res) => {
    let products = readProducts();
    const { id } = req.params;
    products = products.filter(product => product.id !== parseInt(id, 10));
    writeProducts(products);
    res.status(204).send();
});

// Route to edit a product by id
app.put('/products/:id', (req, res) => {
    const products = readProducts();
    const { id } = req.params;
    const updatedProduct = req.body;
    let productIndex = products.findIndex(product => product.id === parseInt(id, 10));
    if (productIndex !== -1) {
        products[productIndex] = { ...products[productIndex], ...updatedProduct };
        writeProducts(products);
        res.json(products[productIndex]);
    } else {
        res.status(404).json({ message: 'Product not found' });
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});