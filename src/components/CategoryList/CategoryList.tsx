import { CategoryListElement } from "./CategoryList.style";
import { useNavigate } from "react-router-dom";


interface CategoryListProps {
  data: {
    text: string;
    link: string;
  };
}



export const CategoryList = ({ data }: CategoryListProps) => {

  const navigate = useNavigate();

  const handleClick = () => {
    if(data.text == "Burgers") {
      navigate("/hamburgers");
    }
    else if (data.text == "Entradinhas") {
      navigate("/entradinhas");
    }
    else if (data.text == "Combos") {
      navigate("/combos");
    }
    else if (data.text == "Sobremesas") {
      navigate("/sobremesas");
    }
    else if (data.text == "Bebidas") {
      navigate("/bebidas");
    }

  };

  return <CategoryListElement onClick={handleClick}>{data.text}</CategoryListElement>;
};
