import { create } from "zustand";

// {
//   "id": 1,
//   "brand": "Apple",
//   "price": "1099",
//   "rating": "4.12",
//   "thumbnail": "https://cdn.dummyjson.com/product-images/1/thumbnail.jpg",
//   "discountPercentage": "14.99"
// },

const useCartStore = create((set) => ({
  cart: [],
  addProduct: (product) =>
    set((state) => {
      const existingProduct = state.cart.find((item) => item.id === product.id);
      if (existingProduct) {
        // If the product already exists in the cart, increase its quantity
        return {
          cart: state.cart.map((item) =>
            item.id === product.id
              ? {
                  ...item,
                  quantity: Math.min(item.quantity + 1, 20), // Ensure quantity does not exceed stock
                }
              : item
          ),
        };
      } else {
        // If the product does not exist in the cart, add it with quantity 1
        return {
          cart: [...state.cart, { ...product, quantity: 1 }],
        };
      }
    }),
  removeProduct: (id) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== id),
    })),
  incrementQuantity: (id) =>
    set((state) => {
      return {
        cart: state.cart.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: Math.min(item.quantity + 1, 20), // Ensure quantity does not exceed stock
              }
            : item
        ),
      };
    }),
  decrementQuantity: (id) =>
    set((state) => {
      return {
        cart: state.cart
          .map((item) =>
            item.id === id ? { ...item, quantity: item.quantity - 1 } : item
          )
          .filter((item) => item.quantity > 0), // Remove items with quantity 0
      };
    }),
}));

export default useCartStore;
