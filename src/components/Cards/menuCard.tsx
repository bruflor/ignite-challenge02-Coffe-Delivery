import { ShoppingCart, Minus, Plus } from "phosphor-react";
import { ButtonCart, CounterContainer, ProductCard, Tags } from "./style";
import Americano from "../../assets/Coffes/Type=Expresso Americano.png";
import Arabe from "../../assets/Coffes/Type=Árabe.png";
import ComLeite from "../../assets/Coffes/Type=Café com Leite.png";
import Gelado from "../../assets/Coffes/Type=Expresso Gelado.png";
import Capuccino from "../../assets/Coffes/Type=Capuccino.png";
import ChocolateQuente from "../../assets/Coffes/Type=Chocolate Quente.png";
import Cubano from "../../assets/Coffes/Type=Cubano.png";
import ExpressoCremoso from "../../assets/Coffes/Type=Expresso Cremoso.png";
import Expresso from "../../assets/Coffes/Type=Expresso Tradicional.png";
import Havaiano from "../../assets/Coffes/Type=Havaiano.png";
import Irlandes from "../../assets/Coffes/Type=Irlandês.png";
import Latte from "../../assets/Coffes/Type=Latte.png";
import Macchiato from "../../assets/Coffes/Type=Macchiato.png";
import Mocaccino from "../../assets/Coffes/Type=Mocaccino.png";
import { useState } from "react";
import { AmountCounter } from "./AmountCounter";

interface MenuCardProps {
  name: string;
  description: string;
  tags: string[];
  price: number;
  handleAddToCart: any;
  id: string;
}

export const MenuCard = ({
  description,
  name,
  price,
  tags,
  handleAddToCart,
  id,
}: MenuCardProps) => {
  const [coffeAmount, setCoffeAmount] = useState(0);
  const imageSrcArray = [
    Americano,
    Cubano,
    Arabe,
    ComLeite,
    Gelado,
    Capuccino,
    ChocolateQuente,
    ExpressoCremoso,
    Expresso,
    Havaiano,
    Irlandes,
    Latte,
    Macchiato,
    Mocaccino,
  ];

  function findSRC(imgSrc: string) {
    return imgSrc.includes(name);
  }
  const imageSRC = imageSrcArray.find(findSRC);

  function onHandleAddToCart() {
    if (coffeAmount > 0) {
      handleAddToCart({
        amount: coffeAmount,
        name: name,
        price: price * coffeAmount,
        id: id,
      });
    }
  }

  return (
    <ProductCard>
      <img src={imageSRC} />
      <div>
        {tags.map((tag) => {
          return <Tags key={tag}>{tag}</Tags>;
        })}
      </div>
      <h4>{name}</h4>
      <p>{description}</p>
      <div>
        <span>{price.toFixed(2)}</span>
        <AmountCounter
          coffeAmount={coffeAmount}
          setCoffeAmount={setCoffeAmount}
        />
        <ButtonCart onClick={onHandleAddToCart}>
          <ShoppingCart size={18} weight="fill" />
        </ButtonCart>
      </div>
    </ProductCard>
  );
};
