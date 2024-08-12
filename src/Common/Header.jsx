import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "./HeaderFooter.css";

const Header = () => {
  return (
    <header className="nav-div">
      <div className="Logo-icon">
        <Link to="/">CeramicShop</Link>
      </div>
      <nav className="Link-class">
        <ul>
          <li>
            <Link className="Link1" to="/">
              HOME
            </Link>
          </li>
          <li>
            <Link className="Link2" to="/about">
              ABOUT
            </Link>
          </li>
          <li>
            <Link className="Link3" to="/shop">
              SHOP
            </Link>
          </li>
          <li>
            <Link className="Link4" to="/contact">
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
      <div className="cart-div">
        <FontAwesomeIcon icon={faCartShopping} />
      </div>
    </header>
  );
};

export default Header;
