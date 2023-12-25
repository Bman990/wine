import '/src/Styles/Navbar.css';
import { Link, animateScroll as scroll} from 'react-scroll';

export default function Navbar() {
  return (
    <nav className="navBarContainer">
      <ul className="navUL">
        <li>
          <Link to="homeSection" className='linkStyle' smooth={true} duration={500}>
            <span className='navSpan1'>Home</span>
          </Link>
        </li>
        <li>
          <Link to="wineSection" className='linkStyle' smooth={true} duration={500}>
            <span className='navSpan2'>Our Wine</span>
          </Link>
        </li>
        <li>
          <Link to="orderSection" className='linkStyle' smooth={true} duration={500}>
            <span className='navSpan3'>Order</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}