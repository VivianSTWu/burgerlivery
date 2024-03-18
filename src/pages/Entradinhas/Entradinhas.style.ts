import { styled } from "styled-components";

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: 32px;
`;

export const ProductCategories = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 48px 0;
`;

export const Form = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 16px 0px;
  font-size: 16px;

  & label {
    margin-left: 10px;
    font-size: 16px;
  }

  & input[type=radio] {
    margin: 16px 2px;
  }
`;
