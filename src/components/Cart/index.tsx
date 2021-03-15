//components
import CartItem from "../CartItem";

//styles
import { Wrapper } from "./Cart.styles";

//types
import { CartITemType } from "../../App";

type Props = {
  cartItems: CartITemType[];
  addToCart: (clickedItem: CartITemType) => void;
  removeFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({ cartItems, addToCart, removeFromCart }) => {
  return (
    <Wrapper>
      <h2>Your shopping Cart</h2>
      {cartItems.length === 0 ? <p>no items in your cart!</p> : null}
      {cartItems.map((item) => (
        <CartItem />
      ))}
    </Wrapper>
  );
};

export default Cart;
