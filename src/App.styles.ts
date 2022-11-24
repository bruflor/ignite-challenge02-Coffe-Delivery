import styled from "styled-components";
import bgBanner from "./assets/BackgroundBanner.png";

export const Banner = styled.div`
  padding: 2rem;
  height: 100%;
  width: 100%;
  background-image: url(${bgBanner});
  background-size: contain;
  /* background-repeat: no-repeat; */
  /* background-attachment: fixed; */

  display: grid;
  /* grid-template-columns: auto 1fr; */
  grid-template-columns: 540px auto;
  gap: 4rem;
  justify-content: center;
  align-items: center;

  h3 {
    margin: 1rem 0;
  }
  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }

    background-size: cover;
    grid-template-columns: 1fr;
    overflow-wrap: break-word;
    h1 {
      font-size: 2.5rem;
    }
  }
`;

const BulletsColor = {
  "yellow-dark": "yellow-dark",
  yellow: "yellow",
  "purple-dark": "purple-dark",
  purple: "purple",
} as const;

interface BannerBulletsProps {
  bulletsColor: keyof typeof BulletsColor;
}

export const BannerBullets = styled.span<BannerBulletsProps>`
  background: ${(props) => props.theme[BulletsColor[props.bulletsColor]]};
  color: ${(props) => props.theme.white};
  height: 2rem;
  width: 2rem;
  padding: 0.5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
`;

export const BannerItems = styled.div`
  display: flex;
  gap: 1rem;

  div {
    margin: 1rem 0;
  }

  div div {
    gap: 0.5rem;
    display: flex;
    align-items: center;
  }
`;

export const CoffeMenu = styled.div`
  max-width: 68rem;
  margin: 2rem auto;
  padding: 2rem;

  /* background: red; */
  > div {
    max-width: 68rem;
    margin-top: 2rem;
    gap: 4rem 1rem;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`;
