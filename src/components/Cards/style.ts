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
  }
`;

export const CounterContainer = styled.div`
  background: ${(props) => props.theme["base-button"]};
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;

  button {
    background: none;
    border: 0;
    color: ${(props) => props.theme.purple};

    :hover {
      color: ${(props) => props.theme["purple-dark"]};
      cursor: pointer;
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
