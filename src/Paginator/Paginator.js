import React from "react";
import styled from "styled-components";
import ColHead from "../ui/ColHead";
import FlexRowContainer from "../ui/FlexRowContainer";
import Input from "../ui/Input";
const InputContainer = styled(FlexRowContainer)`
  justify-content: flex-end;
  margin-right: 16px;
  border: none;
`;

function Paginator({ itemCount = 10, setItemCount }) {
  return (
    <InputContainer>
      <ColHead width="auto">Rows Per Page</ColHead>
      <Input
        type="number"
        onChange={(evt) => setItemCount(parseInt(evt.target.value))}
        value={itemCount}
      />
    </InputContainer>
  );
}

export default Paginator;
