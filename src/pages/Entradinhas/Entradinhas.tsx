import { useEffect, useState } from "react";
import { Button, CategoryList, Layout, ProductCard } from "../../components";
import { ProductCategories, ProductWrapper, Form} from "./Entradinhas.style";
import {
  ProductCardContent,
  ProductCardPrice,
} from "../../components/ProductCard/ProductCard.style";

export default function Entradinhas() {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [valorSelecionado, setValorSelecionado] = useState('');
  const size = ['small', 'large'];

  const handleChange = (event) => {
    setValorSelecionado(event.target.value);
  };

  const priceFormat = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  const getCategories = async () => {
    const url = "http://localhost:8000/categories";
    setIsLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();

      setCategories(data);
    }
    catch (error) {
      console.log(error);
    }
    finally {
      setIsLoading(false)
    }
  }

  const getAppetizers = async () => {
    const url = "http://localhost:8000/appetizers";
    //setIsLoading(true);

    try {
      const response = await fetch(url);
      const data = await response.json();

      setProducts(data);
    }
    catch (error) {
      console.log(error);
    }
    finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getCategories();
  }, []);

  useEffect(() => {
    getAppetizers();
  }, []);

  return (
    <Layout>
      <h1>Entradinhas</h1>
      <ProductCategories>
        {isLoading ? (
          <p>Carregando</p>
        ) : (
          categories.map((item, index) => (
            <CategoryList key={index} data={item} />
          ))
        )}
      </ProductCategories>
      <ProductWrapper>
        {isLoading ? (
          <p>Carregando</p>
        ) : (
          products.map((product, index) => (
            <ProductCard key={index}>
              <ProductCardContent>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <Button onClick={() => { }}>Adicionar</Button>
              </ProductCardContent>
              <ProductCardPrice>
                {priceFormat(product.values)}
                <Form>
                  {size.map(opcao => (
                    <label key={opcao}>
                      <input
                        type="radio"
                        value={opcao}
                        checked={valorSelecionado === opcao}
                        onChange={handleChange}
                      />
                      {opcao}
                    </label>
                  ))}
                </Form>
              </ProductCardPrice>
              <img src={product.image[0]} alt={product.title} />
            </ProductCard>
          ))
        )}
      </ProductWrapper>
    </Layout>
  );
}