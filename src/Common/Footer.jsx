import { Link } from "react-router-dom";
import "./HeaderFooter.css";

const Footer = () => {
  return (
    <div>
      <div className="Footer">
        <div className="nav-div-footer">
          <div className="Logo-icon2">
            <a>CeramicShop</a>
          </div>
          <div className="Link-class2">
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
          </div>
          <div>
            <span className="social-platforms">
              <a href="https://www.instagram.com">
                <img
                  className="insta"
                  src="https://i.pinimg.com/originals/8a/3b/05/8a3b055d7e3cc52a0f0053535f0339ea.jpg"
                />
              </a>
            </span>
            <span className="social-platforms">
              <a href="https://www.facebook.com">
                <img
                  className="fb"
                  src="https://i.pinimg.com/564x/33/26/20/332620901c757f6c86ac6c753c4dd793.jpg"
                />
              </a>
            </span>
            <span className="social-platforms">
              <a href="https://x.com/i/flow/login?lang=en">
                <img
                  className="fb"
                  src="https://images.freeimages.com/image/large-previews/bc5/x-twitter-black-on-grey-square-5694254.png?fmt=webp&w=500"
                />
              </a>
            </span>
            <span className="social-platforms">
              <a href="https://www.youtube.com/">
                <img
                  className="fb"
                  src="https://i.pinimg.com/736x/15/a0/aa/15a0aa438c147c4896347b2421209a3d.jpg"
                />
              </a>
            </span>
          </div>
        </div>
        <div className="Divider"></div>
        <div>
          <div className="footer-paras">
            <p>Copyright © 2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
