import { useSelector } from "@store";

const useCartTotals = () => {
  const { cart } = useSelector((state) => state.users);

  const cartTotals = () => {
    const summary = {
      total: 0,
      subtotal: 0,
      tax: 0,
      pieces: 0,
    };

    cart.map((x) => {
      summary.total += x.qty * x.price;
      summary.subtotal += x.qty * x.price;
      summary.tax += x.qty * x.price * 0.07;
      summary.pieces += x.qty;
      return x;
    });

    return summary;
  };

  return cartTotals;
};

export default useCartTotals;
