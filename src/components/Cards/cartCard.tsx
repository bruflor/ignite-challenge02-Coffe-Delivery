import { Minus, Plus, Trash } from "phosphor-react";
import { CounterContainer, HorizontalCard, RemoveButton } from "./style";
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
import { AmountCounter } from "./AmountCounter";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/CartContext";

interface CartCardProps {
  name: string;
  price: number;
  amount: number;
  id: string;
}

export const CartCard = ({ name, price, amount, id }: CartCardProps) => {
  // const { onCart, setOnCart } = useContext(CartContext);

  const [coffeAmount, setCoffeAmount] = useState(amount);

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
          <span>R$ {price.toFixed(2)}</span>
        </div>
        <div>
          <AmountCounter
            coffeAmount={coffeAmount}
            setCoffeAmount={setCoffeAmount}
          />
          <RemoveButton>
            <Trash size={18} /> Remover
          </RemoveButton>
        </div>
      </div>
    </HorizontalCard>
  );
};
