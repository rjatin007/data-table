import React from "react";
import styled from "styled-components";
import FlexRowContainer from "../ui/FlexRowContainer";
import ColHead from "../ui/ColHead";
function ColumnHeaders({ colHeaders }) {
  const ColHeaderContainer = styled(FlexRowContainer)`
    margin-bottom: 16px;
    border: 2px solid black;
    padding: 8px;
    width: 100%;
    margin-top: 1px;
    justify-content: flex-start;
  `;
  return (
    <ColHeaderContainer>
      {colHeaders.map((key) => {
        const { label } = key;
        return (
          <ColHead key={label}>
            {label === "isChecked" ? "Select All" : label}
          </ColHead>
        );
      })}
    </ColHeaderContainer>
  );
}

export default ColumnHeaders;
