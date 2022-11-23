import { Cart, LocationTag, NavBar } from "./style";
import Logo from "../../assets/LogoCoffeDelivery.svg";
import { MapPin, ShoppingCart } from "phosphor-react";

export const Header = () => {
  return (
    <NavBar>
      <img src={Logo} />
      <div>
        <LocationTag>
          <MapPin size={20} weight="fill" />
          <span>Location</span>
        </LocationTag>
        <Cart>
          <span>3</span>
          <ShoppingCart size={20} weight="fill" />
        </Cart>
      </div>
    </NavBar>
  );
};
