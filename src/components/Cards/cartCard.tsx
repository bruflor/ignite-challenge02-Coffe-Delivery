import { Minus, Plus } from "phosphor-react";
import { CounterContainer, HorizontalCard } from "./style";
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

interface CartCardProps {
  name: string;
  price: number;
}

export const CartCard = ({ name, price }: CartCardProps) => {
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
    <HorizontalCard>
      <img src={imageSRC} />
      <div>
        <div>
          <p>{name}</p>
          <span>{price}</span>
        </div>
        <div>
          <CounterContainer>
            <button>
              <Minus size={18} weight="fill" />
            </button>
            <span>1</span>
            <button>
              <Plus size={18} weight="fill" />
            </button>
          </CounterContainer>
          <button>Remover</button>
        </div>
      </div>
    </HorizontalCard>
  );
};
