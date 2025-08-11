import { Link } from "react-router-dom";

export default function Product() {
  return (
    <div>
      <h1>Product Page</h1>
      <h2>Akhane shob product ache</h2>
      <div>
        <Link to={"/products/1"}>View Product Id 1</Link>
      </div>
      <div>
        <Link to={"/products/2"}>View Product Id 2</Link>
      </div>
    </div>
  );
}
