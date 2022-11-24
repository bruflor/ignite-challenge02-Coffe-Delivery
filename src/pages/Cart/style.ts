import styled from "styled-components";

export const CartPageContainer = styled.div`
  display: grid;
  grid-template-columns: 640px 420px;
  justify-content: center;
  gap: 2rem;
  /* align-items: center; */

  div {
    background: red;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
