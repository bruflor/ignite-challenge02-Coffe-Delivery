import styled from "styled-components";
import bgBanner from "./assets/BackgroundBanner.png";

export const Banner = styled.div`
  padding: 2rem;
  height: 540px;
  background-image: url(${bgBanner});
  background-size: contain;
  background-repeat: no-repeat;
  background-attachment: fixed;

  display: grid;
  /* grid-template-columns: auto 1fr; */
  grid-template-columns: 520px auto;
  gap: 4rem;
  justify-content: center;
  align-items: center;

  div {
  }
  @media (max-width: 768px) {
    html {
      font-size: 87.5%;
    }
    grid-template-columns: 1fr;
  }
`;
