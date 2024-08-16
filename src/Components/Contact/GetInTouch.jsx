import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
const GetInTouch = () => {
  return (
    <div className="GetInTouch-Container">
      <div className="GetInTouch-Container-1">
        <div>
          <p className="get-para1">Get in touch</p>
          <p className="get-para2">
            Share some details here. This is Flexible section where
          </p>
          <p className="get-para2">
            you can share anything you want. It could be details or
          </p>
          <p className="get-para2">some information.</p>
        </div>
        <div className="A-P-E-div">
          <div className="icons-div">
            <FontAwesomeIcon icon={faLocationDot} />
          </div>
          <div>
            <span className="Address-para">ADDRESS</span>
            <p className="Address-para1">
              2972 Westheimer Rd. Santa Ana, Illinois 85486
            </p>
          </div>
        </div>
        <div className="A-P-E-div">
          <div className="icons-div">
            <FontAwesomeIcon icon={faPhone} />
          </div>
          <div>
            <span className="Address-para">PHONE</span>
            <p className="Address-para1"> (+91) 987 654 321</p>
          </div>
        </div>
        <div className="A-P-E-div">
          <div className="icons-div">
            <FontAwesomeIcon icon={faEnvelope} />
          </div>
          <div>
            <span className="Address-para">Email</span>
            <p className="Address-para1">info@contact.com</p>
          </div>
        </div>
        <div className="Foloow-div">
          <p className="Address-para-2">FOLLOW</p>
          <div>
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
        </div>
      </div>
      <div className="GetInTouch-Container-2">
        <div className="Form-Div">
          <form>
            <div className="lebel-div">
              <label>Name*</label>
            </div>
            <div style={{ display: "flex" }}>
              <div>
                <input className="Name-Input" />
                <p style={{ margin: "5px", fontSize: "15px" }}>First</p>
              </div>
              <div>
                <input className="Name-Input" />
                <p style={{ margin: "5px", fontSize: "15px" }}> Last</p>
              </div>
            </div>
            <div className="lebel-div2">
              <label>Eamil*</label>
            </div>
            <input className="Email-Input" />

            <div className="lebel-div3">
              <lable>Comments or Messages</lable>
            </div>
            <input className="Message-input" />
            <div>
              <button className="Form-Submit-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
