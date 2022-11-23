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
  grid-template-columns: auto 1fr;
  gap: 4rem;
  justify-content: center;
  align-items: center;

  div {
  }
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
