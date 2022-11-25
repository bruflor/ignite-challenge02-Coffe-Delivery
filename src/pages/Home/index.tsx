import { useState } from "react";
import { BannerInfo } from "../../components/Banner";
import { MenuCard } from "../../components/Cards/menuCard";
import { coffeMenu } from "../../mocks/coffeMenu";
import { CoffeMenu } from "./style";

interface CartProps {
  amount: number;
  name: string;
  price: number;
}

export const Home = () => {
  const [onCart, setOnCart] = useState<CartProps[]>([]);
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
                name={coffe.name}
                description={coffe.description}
                tags={coffe.tags}
                price={coffe.price}
              />
            );
          })}
        </div>
      </CoffeMenu>
    </main>
  );
};
