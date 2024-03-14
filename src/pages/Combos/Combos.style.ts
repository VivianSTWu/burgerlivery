import { styled } from "styled-components";
import { colors } from "../../styles/colors";


export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 40px;
`;

export const ProductCategories = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 48px 0;
`;

export const ProductCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between; 
  margin: 8px 16px 16px 16px;

  color: ${colors.text.main};
  & h2 {
    margin-bottom: 8px;
    font-size: 1.2rem;
    font-weight: 700;
    color: ${colors.text.title};
  }

  & p {
    min-height: 100px;
    font-size: 1rem;
  }

  & button {
    width: 100%;
    margin-top: 16px;
  }
`;
