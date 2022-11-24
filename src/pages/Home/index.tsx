import { BannerInfo } from "../../components/Banner";
import { MenuCard } from "../../components/Cards/menuCard";
import { coffeMenu } from "../../mocks/coffeMenu";
import { CoffeMenu } from "./style";

export const Home = () => {
  return (
    <main>
      <BannerInfo />
      <CoffeMenu>
        <h2>Nossos Cafés</h2>
        <div>
          {coffeMenu.map((coffe) => {
            return (
              <MenuCard
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
