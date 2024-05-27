import useCartStore from "../../store/cartStore";
import { Button } from "../components/ui/button";
function MinusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
    </svg>
  );
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  );
}

export default function Cart() {
  const cart = useCartStore((state) => state.cart);
  const incrementQuantity = useCartStore((state) => state.incrementQuantity);
  const decrementQuantity = useCartStore((state) => state.decrementQuantity);
  const calculateSubtotal = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const calculateTaxes = (subtotal) => {
    const taxRate = 0.085; // Example tax rate
    return subtotal * taxRate;
  };

  const subtotal = calculateSubtotal();
  const taxes = calculateTaxes(subtotal);
  const total = subtotal + taxes;

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold">Shopping Cart</h1>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[2fr_1fr]">
        <div className="space-y-6">
          <div className="overflow-hidden rounded-lg border">
            <div className="grid grid-cols-[80px_1fr_80px] items-center gap-4 bg-gray-100 px-4 py-3 dark:bg-gray-800">
              <span className="font-medium">Product</span>
              <span className="font-medium">Price</span>
              <span className="font-medium">Quantity</span>
            </div>
            <div className="divide-y dark:divide-gray-800">
              {cart.map((item) => (
                <div
                  key={item._id}
                  className="grid grid-cols-[80px_1fr_80px] items-center gap-4 p-4"
                >
                  <img
                    alt={item.title}
                    className="rounded-md"
                    height={80}
                    src={item.thumbnail}
                    style={{
                      aspectRatio: "80/80",
                      objectFit: "cover",
                    }}
                    width={80}
                  />
                  <div>
                    <h3 className="font-medium">{item.brand}</h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      {item.rating}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button
                      onClick={() => decrementQuantity(item.id)}
                      className="size-8"
                      size="icon"
                      variant="outline"
                    >
                      <MinusIcon className="size-4" />
                    </Button>
                    <span>{item.quantity}</span>
                    <Button
                      onClick={() => incrementQuantity(item.id)}
                      className="size-8"
                      size="icon"
                      variant="outline"
                    >
                      <PlusIcon className="size-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-end">
            <Button variant="outline">Continue Shopping</Button>
          </div>
        </div>
        <div className="rounded-lg bg-gray-100 p-6 dark:bg-gray-800">
          <h2 className="mb-4 text-2xl font-bold">Order Summary</h2>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Taxes</span>
              <span>${taxes.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-lg font-medium">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
          <Button className="mt-6 w-full" size="lg">
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </div>
  );
}
