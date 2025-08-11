import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

export default function Category() {
  const { categoryId } = useParams();
  const [products, setProducts] = useState(); // array return [variable, function to update variable]

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products/?categoryId=${categoryId}`)
      .then((res) => setProducts(res.data));
  }, [categoryId]); // Empty dependency, run only once

  console.log("Products by Category", products);

  if (!products) {
    return <div> Loading...</div>;
  }

  if (products.length === 0) {
    return (
      <div className="text-center">No products found in this category.</div>
    );
  }

  return (
    <div>
      <Container className="container fluid">
        <h2 className="my-5">
          Products by Category ({products[0].category.name})
        </h2>
        <Row className="mt-5">
          {products.map((product) => (
            <Col key={product.id} className="mt-5">
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={product.images[0]} />
                <Card.Body>
                  <Card.Title>{product.title}</Card.Title>
                  <Card.Text className="text-truncate">
                    {product.description}
                  </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item>Price : ${product.price}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Card.Link href={`/products/${product.id}`}>
                    Add to cart
                  </Card.Link>
                  <Card.Link href="#">Wishlist</Card.Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}
