import axios from "axios";
import { useEffect, useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

export default function SingleProduct() {
  const { productId } = useParams();
  const [product, setProduct] = useState(); // array return [variable, function to update variable]

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/api/v1/products/${productId}`)
      .then((res) => setProduct(res.data));
  }, [productId]);

  // undefined, null, empty string 0

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.images[0]} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text className="text-truncate">{product.description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Price : ${product.price}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Card.Link href="#">Wishlist</Card.Link>
        </Card.Body>
      </Card>
      <Link to={"/"}>Back to Home</Link>
    </div>
  );
}
