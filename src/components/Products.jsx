import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { useLoaderData } from "react-router-dom";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Anchor = styled.a`
    text-decoration: inherit;
    color: inherit;
    cursor: auto;
`;

const Products = () => {
  const products = useLoaderData()

  return (
    <Container>
      {products.map((item) => (
        <Anchor href="#">
        <Product item={item} key={item.id} />
        </Anchor>
      ))}
    </Container>

  );
};

export default Products;