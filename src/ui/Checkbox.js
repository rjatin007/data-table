import styled from "styled-components";

const CustomInput = styled.input`
  padding: 8px;
  margin: 0 8px;
  font-size: 14px;
  width: ${({ width }) => (width ? width : "200px")};
  height: 50px;
  text-align: center;
`;
const CheckBox = ({ isChecked }) => {
  return <CustomInput type="checkbox" isChecked={isChecked} />;
};
export default CheckBox;
