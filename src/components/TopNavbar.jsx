import axios from "axios";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function TopNavbar() {
  const [categories, setCategories] = useState(); // array return [variable, function to update variable]

  useEffect(() => {
    axios
      .get("https://api.escuelajs.co/api/v1/categories")
      .then((res) => setCategories(res.data));
  }, []);

  // undefined, null, Empty String, Empty array, Empty object, NaN, 0, false

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">E-Com</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Products</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <NavDropdown title="Categories" id="basic-nav-dropdown">
              {categories &&
                categories.map((category) => (
                  <NavDropdown.Item
                    key={category.id}
                    href={`/category/${category.id}`}
                  >
                    {category.name}
                  </NavDropdown.Item>
                ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
