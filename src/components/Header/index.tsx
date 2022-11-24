import { CartLink, LocationTag, NavBar } from "./style";
import Logo from "../../assets/LogoCoffeDelivery.svg";
import { MapPin, ShoppingCart } from "phosphor-react";
import { NavLink } from "react-router-dom";

export const Header = () => {
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
          <span>3</span>
          <NavLink to="/cart">
            <ShoppingCart size={20} weight="fill" />
          </NavLink>
        </CartLink>
      </div>
    </NavBar>
  );
};
