import styled from "styled-components";

const Anchor = styled.a`
  padding: 8px;
  margin: 0 8px;
  font-size: 14px;
  width: ${({ width }) => (width ? width : "200px")};

  text-align: center;
`;
export default Anchor;
