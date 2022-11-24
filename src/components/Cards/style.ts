import styled from "styled-components";

const Card = styled.div`
  background: ${(props) => props.theme["base-card"]};
`;

export const ProductCard = styled(Card)`
  height: 310px;
  width: 256px;
  border-radius: 6px 36px 6px 36px;
`;
