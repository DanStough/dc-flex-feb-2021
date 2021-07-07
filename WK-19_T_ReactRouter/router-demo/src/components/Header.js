import { Link } from 'react-router-dom'

function Header() {
  return (
    <div>
        <h1>My React Router Demo</h1>
        <ul>
            <li><Link to="/">Alpha</Link></li>
            <li><Link to="/bravo">Bravo</Link></li>
        </ul>
   </div>
  );
}

export default Header;
