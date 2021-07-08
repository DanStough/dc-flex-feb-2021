import { Link } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1>My React Router Demo</h1>
      <ul>
        <li>
          <Link to="/">Alpha</Link>
        </li>
        <li>
          <Link to="/">Contact Us</Link>
        </li>
        <li>
          <Link to="/">Footer</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Product</Link>
        </li>
      </ul>
    </div>
  );
}

export default Header;
