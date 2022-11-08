import React from "react";
import styled from "styled-components";
import FlexColumnContainer from "../ui/FlexColumnContainer";
import FlexRowContainer from "../ui/FlexRowContainer";
import Cell from "./Cell";

const renderCells = (cellData) => {
  const keys = Object.keys(cellData);

  return keys.map((key) => <Cell key={key} data={cellData[key]} />);
};
const Row = styled(FlexRowContainer)`
  border: 2px solid #eee;
  padding: 8px;
  width: 100%;
  margin-top: 1px;
  justify-content: flex-start;
`;
const renderRows = (data) => {
  return data.map((item) => {
    return <Row key={item.id}>{renderCells(item)}</Row>;
  });
};
const RowsContainer = styled(FlexColumnContainer)`
  height: 700px;
  overflow-x: hidden;
  overflow-y: scroll;
  padding: 16px 0;
  margin-top: 8px;
  justify-content: flex-start;
`;

function Rows({ data }) {
  if (!data && data.length <= 0) return null;
  return <RowsContainer>{renderRows(data)}</RowsContainer>;
}

export default Rows;
