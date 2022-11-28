import { Minus, Plus } from "phosphor-react";
import { CounterContainer } from "./style";

export const AmountCounter = ({ coffeAmount, setCoffeAmount }: any) => {
  const disableButtons = coffeAmount === 0 ? true : false;

  return (
    <CounterContainer>
      <button
        disabled={disableButtons}
        onClick={() => setCoffeAmount(coffeAmount - 1)}
      >
        <Minus size={18} weight="fill" />
      </button>
      <span>{coffeAmount}</span>
      <button onClick={() => setCoffeAmount(coffeAmount + 1)}>
        <Plus size={18} weight="fill" />
      </button>
    </CounterContainer>
  );
};
