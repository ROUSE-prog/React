import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/topics">Topics</Link>
    </nav>
  );
}

export default NavBar;
