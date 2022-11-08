import { useState, useEffect, useRef } from "react";
import { fetchPhotos } from "./api";
import DataTable from "./DataTable/DataTable";
import Paginator from "./Paginator/Paginator";
import FlexColumnContainer from "./ui/FlexColumnContainer";
function App() {
  const [currentData, setCurrentData] = useState([]);
  const [itemCount, setItemCount] = useState(10);
  const totalCount = useRef(0);
  const dataRef = useRef(null);
  useEffect(() => {
    fetchPhotos().then((res) => {
      dataRef.current = res;
      totalCount.current = res.length;

      // console.log(res);
      const perPageData = res.slice(0, 10);

      setCurrentData(getFormattedData(perPageData));
    });
  }, []);

  const getFormattedData = (inputData) => {
    return inputData.map((item, index) => ({
      isChecked: false,
      srNo: index + 1,
      ...item,
    }));
  };
  const onItemCountChange = (count) => {
    const end = count;
    setItemCount(count);
    const perPageData = dataRef.current.slice(0, end);

    setCurrentData(getFormattedData(perPageData));
  };
  return (
    <FlexColumnContainer>
      <Paginator
        totalCount={totalCount.current}
        setItemCount={onItemCountChange}
        itemCount={itemCount}
      />
      {currentData && currentData.length > 0 && (
        <DataTable data={currentData} />
      )}
    </FlexColumnContainer>
  );
}

export default App;
