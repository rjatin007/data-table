import styled from "styled-components";

const ColHead = styled.p`
  width: ${({ width }) => (width ? width : "200px")};
  padding: ${({ padding }) => (padding ? padding : "8px")};
  margin: 0 ${({ margin }) => (margin ? margin : "8px")};
  font-size: 14px;
  text-transform: capitalize;
  font-weight: bold;
  text-align: center;
`;
export default ColHead;
