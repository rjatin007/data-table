import { useState, useEffect, useRef } from "react";
import FlexColumnContainer from "../ui/FlexColumnContainer";

import ColumnHeaders from "./ColumnHeaders";
import Rows from "./Rows";
const getColumnHeaders = (data) => {
  const colHeaderObj = [];

  data.forEach((item) => {
    const keys = Object.keys(item);

    keys.forEach((key) => {
      if (!colHeaderObj[key]) {
        colHeaderObj[key] = {
          label: key,
        };
      }
    });
  });
  // console.log(JSON.stringify(colHeaderObj));
  const colHeaders = Object.values(colHeaderObj);

  return colHeaders;
};

function DataTable({ data }) {
  console.log(data);

  const colHeaders = getColumnHeaders(data);

  return (
    <FlexColumnContainer>
      <ColumnHeaders colHeaders={colHeaders} />
      <FlexColumnContainer>
        {data && data.length > 0 && <Rows data={data} />}
      </FlexColumnContainer>
    </FlexColumnContainer>
  );
}

export default DataTable;
