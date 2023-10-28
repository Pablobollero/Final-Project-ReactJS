import CartIcon from "./CartIcon";
import CartItems from "./CartItems";

const CartContainer = () => {
    return (
        <div className="bg-secondary rounded-circle p-3 position-relative">
            <CartIcon color="orange"/>
            {<CartItems count={7} /> }
        </div>
    );
};

export default CartContainer;