import styled from "styled-components";

const Input = styled.input`
  width: 50px;
  outline: none;
  border: 2px solid blue;
  border-radius: 16px;
  padding: 8px;
  appearance: none;
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
export default Input;
