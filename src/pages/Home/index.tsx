import { useContext, useEffect, useState } from "react";
import { BannerInfo } from "../../components/Banner";
import { MenuCard } from "../../components/Cards/menuCard";
import { CartContext } from "../../contexts/CartContext";
import { coffeMenu } from "../../mocks/coffeMenu";
import { CoffeMenu, ModalUpdatedCart } from "./style";

//TODO: Criar portal react para o modal e context pra atualizar o state que mostra ou não o modal
//TODO: Add a "Adicionado no carrinho" return from press the button here and in checkout

//TODO: Add a "Retirado no carrinho" return from press the button here and in checkout
//TODO? Teste de validação do form (exe: CEP deve conter 8 digitos)
//TODO? Qualquer interação do usuario deve ser testada
//TODO? testar variáveis de renderização do component. (ex: tags dos cards do café)

export const Home = () => {
  const { onCart, setOnCart } = useContext(CartContext);

  function onHandleAddToCart(newItemCart: any) {
    const onCartIdEqualToNew = onCart.filter((card) => {
      return card.id === newItemCart.id;
    });

    if (onCart.length >= 1 && onCartIdEqualToNew.length <= 0) {
      setOnCart([...onCart, newItemCart]);
    } else if (onCart.length >= 1 && onCartIdEqualToNew.length >= 1) {
      const productsOnCart = [...onCart];
      const coffeIndexToUpdate = productsOnCart.findIndex(
        (coffe) => coffe.id === onCartIdEqualToNew[0].id
      );
      productsOnCart[coffeIndexToUpdate].amount = newItemCart.amount;
      setOnCart(productsOnCart);
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
