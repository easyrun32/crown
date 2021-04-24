import "./CartDropDown.scss";
import { connect } from "react-redux";
import CustomButton from "../Custombutton/Custombutton";
import CartItems from "../CartItems/CartItems";

import { withRouter } from "react-router";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.actions";
const CartDropDown = ({ cartItems, history, toggleCartHidden }) => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems ? (
          cartItems.map((item) => <CartItems key={item.id} item={item} />)
        ) : (
          <span className="empty-message">Your Cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push("/checkout");
          toggleCartHidden();
        }}
      >
        Go To CheckOut
      </CustomButton>
    </div>
  );
};
const mapStateToProps = (state) => ({ cartItems: selectCartItems(state) });
const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(CartDropDown)
);
