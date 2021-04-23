import React from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import CartIcon from "../CartIcon/CartIcon";
import "./Header.scss";
import { Link } from "react-router-dom";
import { auth } from "../../firebase/firebaseUtils";
import { connect } from "react-redux";
import CartDropDown from "../CartDropDown/CartDropDown";
import { selectCartHidden } from "../../redux/Cart/cart-selectors";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../../redux/Users/user-selector";
const Header = ({ currentUser, hidden }) => (
  <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/contact'>
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className='option' to='/signin'>
          SIGN IN
        </Link>
      )}
      <CartIcon />
    </div>
    {!hidden && <CartDropDown />}
  </div>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});
export default connect(mapStateToProps)(Header);
