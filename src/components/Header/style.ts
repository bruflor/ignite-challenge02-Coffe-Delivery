import styled from "styled-components";

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  padding: 2rem;

  div {
    display: flex;
    gap: 1rem;
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
background: ${props => props.theme["yellow-light"]};
color: ${props => props.theme["yellow-dark"]};
padding: 0.5rem 0.75rem;
:hover{
    /* background: ${props => props.theme.yellow}; */
    cursor: pointer;
}

span { 
    position: absolute;
    z-index: 1;
    top: -12px;
    right: -10px;
    background: ${props => props.theme["yellow-dark"]};
    color:${props => props.theme.white};
    padding: 0.15rem 0.5rem;
    /* line-height: 0; */
    border-radius: 50%;
}
`
