import { useState } from "react";
import { useQuery } from "react-query";

//Component
import Item from "./components/Item";
import Cart from "./components/Cart";
import Drawer from "@material-ui/core/Drawer";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";

//styles
import { Wrapper, StyledButton } from "./App.styles";

//types
export type CartITemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};

const url = "https://fakestoreapi.com/products/";

const getProducts = async (): Promise<CartITemType[]> => {
  return await (await fetch(url)).json();
};

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartITemType[]);

  const { data, isLoading, error } = useQuery<CartITemType[]>(
    "products",
    getProducts
  );

  const getTotalItems = (items: CartITemType[]) =>
    items.reduce((ack: number, item) => ack + item.amount, 0);

  const handleAddToCart = (clickedItem: CartITemType) => null;

  const handleRemoveFromCart = () => null;

  if (isLoading) return <LinearProgress />;

  if (error) return <h3>Something went wrong</h3>;

  return (
    <Wrapper>
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={() => getTotalItems(cartItems)} color="error">
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>

      <Grid container spacing={3}>
        {data?.map((item) => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};

export default App;
