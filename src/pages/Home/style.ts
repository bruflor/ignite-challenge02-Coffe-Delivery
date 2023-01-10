import styled from "styled-components";

export const CoffeMenu = styled.div`
  max-width: 68rem;
  margin: 2rem auto;
  margin-bottom: 4rem;

  /* background: red; */
  > div {
    max-width: 68rem;
    margin-top: 2rem;
    gap: 4rem 1rem;
    display: flex;
    flex-wrap: wrap;
  }
  @media (max-width: 768px) {
    h2 {
      text-align: center;
    }
    div {
      justify-content: center;
    }
  }
`;

export const ModalUpdatedCart = styled.div`
  z-index: 1;
  display: absolute;
  width: 240px;
  top: 0;
  left: 0;
  background: red;
`;
