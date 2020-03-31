import React from "react";
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import {createStructuredSelector} from 'reselect';

import { ReactComponent as Logo } from "../../assets/4.4 crown.svg.svg";
import { auth } from "../../firebase/firebase.utils";
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import CartIcon from '../cart-icon/cart-icon.component';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selector';


import "./header.styles.scss";

const Header = ({ currentUser, hidden }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link to="/shop" className="option">
        SHOP
      </Link>
      <Link to="/contact" className="option">
        CONTACT
      </Link>
      {currentUser ? (
        <div className='option' onClick={()=>auth.signOut()}>SIGN OUT</div>
      ) : (
        <Link to="/signIn" className="option">
          SIGN IN
        </Link>
      )}
      <CartIcon/>
    </div>
    {
      hidden ? null:
      <CartDropdown/>
    }
  </div>
);

const mapStateToProps = (state) => createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
})

export default connect(mapStateToProps ) (Header);
