import styled from "styled-components";

export const CartPageContainer = styled.div`
  display: grid;
  grid-template-columns: 640px 420px;
  justify-content: center;
  gap: 2rem;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    background: ${(props) => props.theme["base-card"]};
  }
`;

export const FormContainer = styled.div`
  padding: 2rem;
  > div {
    display: flex;
    margin-bottom: 2rem;
    gap: 0.5rem;
    svg {
      color: ${(props) => props.theme["yellow-dark"]};
    }
    > div > h3 {
      font-size: 1rem;
    }
    > div > span {
      font-size: 0.875rem;
    }
  }
  form {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 0.5rem;
    > div {
      grid-column: -1 / 2;
      display: flex;
      gap: 0.5rem;
    }
    input {
      width: 100%;
      background: ${(props) => props.theme["base-input"]};
      border: 1px solid ${(props) => props.theme["base-button"]};
      border-radius: 4px;
      outline: none;
      padding: 0.5rem;
      :focus {
        border: 1px solid ${(props) => props.theme["yellow-dark"]};
      }
      :nth-child(2) {
        grid-column: -1 / 1;
      }
      :nth-child(4) {
        grid-column: -1 / 2;
      }
      :last-child {
        width: 30%;
      }
    }
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      > div {
        display: block;
        grid-column: 1 / 3;
      }
      input {
        grid-column: 1 / 3;
        :nth-child(2) {
          grid-column: 1 / 3;
        }
        :nth-child(4) {
          grid-column: 1 / 3;
        }
        :last-child {
          margin-top: 0.5rem;
          width: 100%;
        }
      }
    }
  }
`;

export const PaymentContainer = styled.div`
  padding: 2rem;
`;

export const ProductsCardsContainer = styled.div`
  background: ${(props) => props.theme["base-card"]};
  padding: 2rem;

  border-radius: 6px 36px 6px 36px;
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
