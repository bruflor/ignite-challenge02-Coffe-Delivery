import styled from "styled-components";

export const NavBar = styled.nav`
  padding: 2rem 0;
  display: flex;
  max-width: 68rem;
  justify-content: space-between;
  margin: 0 auto;
  div {
    display: flex;
    gap: 1rem;
  }
  img {
  }
  @media (max-width: 768px) {
    padding: 2rem;
    margin-top: 2rem;
  }
`;

export const LocationTag = styled.a`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  background: ${(props) => props.theme["purple-light"]};
  color: ${(props) => props.theme["purple-dark"]};
  gap: 0.5rem;

  svg {
    color: ${(props) => props.theme.purple};
  }
`;

export const Cart = styled.a`
  position: relative;

  display: flex;
  align-items: center;
  background: ${(props) => props.theme["yellow-light"]};
  color: ${(props) => props.theme["yellow-dark"]};
  padding: 0.5rem 0.75rem;
  :hover {
    /* background: ${(props) => props.theme.yellow}; */
    cursor: pointer;
  }

  span {
    position: absolute;
    z-index: 1;
    top: -12px;
    right: -10px;
    background: ${(props) => props.theme["yellow-dark"]};
    color: ${(props) => props.theme.white};
    padding: 0.15rem 0.5rem;
    /* line-height: 0; */
    border-radius: 50%;
  }
`;
