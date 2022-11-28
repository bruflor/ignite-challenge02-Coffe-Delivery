import styled from "styled-components";

const Card = styled.div`
  background: ${(props) => props.theme["base-card"]};
`;

export const ProductCard = styled(Card)`
  height: 310px;
  width: 256px;
  border-radius: 6px 36px 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  img {
    position: relative;
    z-index: 1;
    top: -24px;
  }
  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme["base-label"]};
    text-align: center;
    padding: 0.5rem;
  }
  > div {
    display: flex;
    align-items: center;
    gap: 0.5rem;

    > span {
      font-size: 1.5rem;
      font-weight: 900;
      font-family: "Baloo 2", cursive;
    }
    > span::before {
      content: "R$";
      padding-right: 0.25rem;
      font-size: 0.875rem;
      font-weight: 400;
      font-family: "Roboto", sans-serif;
    }
    > span::after {
      content: "/uni";
      padding-right: 0.25rem;
      font-size: 0.875rem;
      font-weight: 400;
      font-family: "Roboto", sans-serif;
    }
  }
`;

export const HorizontalCard = styled(Card)`
  display: flex;
  gap: 1rem;
  padding-bottom: 1.5rem;
  padding-top: 0.5rem;
  border-bottom: 1px solid ${(props) => props.theme["base-button"]};

  div:nth-child(2) {
    width: 100%;
    gap: 0.5rem;
    margin-top: 0.25rem;
  }
  span {
    font-weight: 700;
  }

  img {
    height: 64px;
  }
  div div {
    display: flex;
  }
  div:first-child {
    justify-content: space-between;
  }
`;

export const CounterContainer = styled.div`
  background: ${(props) => props.theme["base-button"]};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;

  span {
    font-weight: 400;
  }

  button {
    background: none;
    border: 0;
    color: ${(props) => props.theme.purple};

    :hover {
      color: ${(props) => props.theme["purple-dark"]};
      cursor: pointer;
    }
    :focus {
      box-shadow: none;
    }
    :disabled {
      color: ${(props) => props.theme["base-label"]};
      cursor: not-allowed;
    }
  }
`;

export const Tags = styled.div`
  background: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  padding: 0.25rem 0.5rem;
  border-radius: 42px;
  text-transform: uppercase;
  font-size: 0.75rem;
  font-weight: 700;
  margin-top: -1.5rem;
`;
export const RemoveButton = styled.button`
  background: ${(props) => props.theme["base-button"]};
  color: ${(props) => props.theme["base-text"]};
  text-transform: uppercase;
  font-size: 0.75rem;
  border: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0 0.5rem;
  svg {
    color: ${(props) => props.theme.purple};
  }

  svg:hover {
    color: ${(props) => props.theme["purple-dark"]};
  }

  :hover {
    background: ${(props) => props.theme["base-hover"]};
    color: ${(props) => props.theme["base-subtitle"]};
    cursor: pointer;
  }
  :active {
    background: ${(props) => props.theme["purple-light"]};
    border: 1px solid ${(props) => props.theme["purple"]};
  }
`;

export const ButtonCart = styled.button`
  background: ${(props) => props.theme["purple-dark"]};
  color: ${(props) => props.theme.white};
  display: flex;
  align-items: center;
  justify-content: center;
  height: 38px;
  width: 38px;
  border: 0;
  :hover {
    background: ${(props) => props.theme["purple"]};
    cursor: pointer;
  }
`;
