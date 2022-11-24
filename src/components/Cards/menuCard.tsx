import { ShoppingCart } from "phosphor-react";
import { CounterContainer, ProductCard, Tags } from "./style";
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

interface MenuCardProps {
  name: string;
  description: string;
  tags: string[];
  price: number;
}

export const MenuCard = ({ description, name, price, tags }: MenuCardProps) => {
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

  return (
    <ProductCard>
      <img src={imageSRC} />
      <div>
        {tags.map((tag) => {
          return <Tags>{tag}</Tags>;
        })}
      </div>
      <h4>{name}</h4>
      <p>{description}</p>
      <div>
        <span>{price}</span>
        <CounterContainer>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </CounterContainer>
        <button>
          <ShoppingCart />
        </button>
      </div>
    </ProductCard>
  );
};
