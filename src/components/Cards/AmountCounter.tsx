import { Minus, Plus } from "phosphor-react";
import { CounterContainer } from "./style";

export const AmountCounter = ({ coffeAmount, setCoffeAmount }: any) => {
  return (
    <CounterContainer>
      <button onClick={() => setCoffeAmount(coffeAmount - 1)}>
        <Minus size={18} weight="fill" />
      </button>
      <span>{coffeAmount}</span>
      <button onClick={() => setCoffeAmount(coffeAmount + 1)}>
        <Plus size={18} weight="fill" />
      </button>
    </CounterContainer>
  );
};
