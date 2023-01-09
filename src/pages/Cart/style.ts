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

export const AddressContainer = styled.div`
  padding: 2rem;
  border-radius: 6px;
  background: ${(props) => props.theme["base-card"]};
  margin-bottom: 32px;

  svg {
    color: ${(props) => props.theme["yellow-dark"]};
  }
  > div:first-child {
    display: flex;
    gap: 0.5rem;
    margin-bottom: 32px;
  }
`;

export const FormContainer = styled.form`
  > div {
    /* margin-bottom: 2rem; */
    gap: 0.5rem;
  }
  h3 {
    font-size: 1rem;
  }
  span {
    font-size: 0.875rem;
  }
`;

export const InputTextContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 0.5rem;
  > div {
    display: flex;
    grid-column: -1 / 2;

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
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
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
`;

export const ErrorMessage = styled.span`
  color: #ff6863;
  font-weight: 700;
`;
export const PaymentContainer = styled.div`
  background: ${(props) => props.theme["base-card"]};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  svg {
    color: ${(props) => props.theme.purple};
  }

  > div {
    display: flex;
    gap: 0.5rem;

    > input {
      opacity: 0;
      position: fixed;
      width: 0;
    }

    > label {
      width: 100%;
      display: inline-block;

      display: flex;
      align-items: center;
      /* justify-content: center; */
      gap: 0.5rem;
      padding: 1rem;
      border-radius: 6px;

      text-transform: uppercase;
      font-size: 0.75rem;
      color: ${(props) => props.theme["base-text"]};
      border: 0;
      background: ${(props) => props.theme["base-button"]};

      svg:hover {
        color: ${(props) => props.theme["purple-dark"]};
      }

      :hover {
        background: ${(props) => props.theme["base-hover"]};
        color: ${(props) => props.theme["base-subtitle"]};
        cursor: pointer;
      }
    }
    input:checked + label {
      background: ${(props) => props.theme["purple-light"]};
      border: 1px solid ${(props) => props.theme["purple"]};
    }
  }
  > div > div {
    margin-bottom: 1rem;
  }
`;

export const ProductsCardsContainer = styled.div`
  background: ${(props) => props.theme["base-card"]};
  padding: 2rem;
  border-radius: 6px 36px 6px 36px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: auto;

  > div {
    display: flex;
    justify-content: space-between;

    h3 {
      font-weight: 700;
    }
  }

  > button {
    margin-top: 1.5rem;
    border: 0;
    background: ${(props) => props.theme["yellow"]};
    color: ${(props) => props.theme.white};
    padding: 0.75rem;

    :hover {
      background: ${(props) => props.theme["yellow-dark"]};
      cursor: pointer;
    }
  }
`;

export const SucessContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  align-items: center;
  gap: 5rem;
  h1 {
    color: ${(props) => props.theme["yellow-dark"]};
  }

  img {
    width: 100%;
  }
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding: 1rem;
  }
`;

export const DetailDeliveryContainer = styled.div`
  border-radius: 6px 36px 6px 36px;
  border: double 2px transparent;
  background-image: linear-gradient(white, white),
    radial-gradient(
      circle at top left,
      ${(props) => props.theme.yellow},
      ${(props) => props.theme.purple}
    );
  background-origin: border-box;
  background-clip: content-box, border-box;
  margin: 42px 0;

  > div {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 2rem;
  }

  > div > div {
    display: flex;
    gap: 1rem;
  }
`;
