import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <Link to="/"><li>HOME</li></Link>
          <Link to="/"><li>STAR WARS STARSHIPS</li></Link>
          <Link to="/about"><li>ABOUT</li></Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
