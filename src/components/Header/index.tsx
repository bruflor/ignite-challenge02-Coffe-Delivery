import { CartLink, LocationTag, NavBar } from "./style";
import Logo from "../../assets/LogoCoffeDelivery.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export const Header = () => {
  const { onCart } = useContext(CartContext);

  return (
    <NavBar>
      <NavLink to="/">
        <img src={Logo} />
      </NavLink>
      <div>
        <LocationTag>
          <MapPin size={20} weight="fill" />
          <span>Location</span>
        </LocationTag>
        <CartLink>
          <NavLink to="/cart">
            <span>{onCart.length}</span>
            <ShoppingCart size={20} weight="fill" />
          </NavLink>
        </CartLink>
      </div>
    </NavBar>
  );
};
