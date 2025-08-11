import axios from "axios";
import { useEffect, useState } from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap";

export default function ProductList() {
  const [products, setProducts] = useState([]); // array return [variable, function to update variable]

  useEffect(() => {
    // fetch("https://api.escuelajs.co/api/v1/products")
    //   .then((res) => res.json())
    //   .then((data) => setProducts(data));

    axios
      .get("https://api.escuelajs.co/api/v1/products")
      .then((response) => setProducts(response.data));
  }, []);

  if (products.length === 0) {
    return <div>Loading...</div>;
  }

  console.log(products);

  return (
    <div>
      {/* <div>
        {products.map((product) => (
          <div key={product.id}>{product.title}</div>
        ))}
      </div> */}

      <Container className="container fluid">
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
