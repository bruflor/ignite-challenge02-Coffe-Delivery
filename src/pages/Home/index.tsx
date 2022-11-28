import { useContext } from "react";
import { BannerInfo } from "../../components/Banner";
import { MenuCard } from "../../components/Cards/menuCard";
import { CartContext } from "../../contexts/CartContext";
import { coffeMenu } from "../../mocks/coffeMenu";
import { CoffeMenu } from "./style";

export const Home = () => {
  const { onCart, setOnCart } = useContext(CartContext);
  function onHandleAddToCart(newItemCart: any) {
    if (onCart.length >= 1) {
      setOnCart([...onCart, newItemCart]);
    } else {
      setOnCart([newItemCart]);
    }
  }
  return (
    <main>
      <BannerInfo />
      <CoffeMenu>
        <h2>Nossos Cafés</h2>
        <div>
          {coffeMenu.map((coffe) => {
            return (
              <MenuCard
                handleAddToCart={onHandleAddToCart}
                key={coffe.id}
                id={coffe.id}
                name={coffe.name}
                description={coffe.description}
                tags={coffe.tags}
                priceUnit={coffe.price}
              />
            );
          })}
        </div>
      </CoffeMenu>
    </main>
  );
};
