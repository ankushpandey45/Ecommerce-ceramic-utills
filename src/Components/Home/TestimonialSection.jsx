import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const Testimonial = () => {
  return (
    <div>
      <div className="Testimonial-main-div">
        <div className="Testimonial-uper-text">
          <p className="Testimonial">TESTIMONIAL </p>
          <p className="Customer-says">What Our Customers Say</p>
        </div>
        <div className="feedbacks-div">
          <div className="feedbacks">
            <div className="feedback-container">
              <span>
                <FontAwesomeIcon icon={faStar} style={{ color: "tomato" }} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStar} style={{ color: "tomato" }} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStar} style={{ color: "tomato" }} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStar} style={{ color: "tomato" }} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStar} style={{ color: "tomato" }} />
              </span>
              <div className="feedbacks-p-div">
                <p className="Feedbacks-p">
                  Click edit button to change this text. Lorem ipsum dolor sit
                </p>
                <p className="Feedbacks-p">
                  amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                </p>
                <p className="Feedbacks-p">
                  ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </div>
              <div className="Profile-Div">
                <div>
                  <img
                    className="Men-img"
                    src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
                  />
                </div>
                <div>
                  <p className="profile-name">Wade Warren</p>
                  <p className="profession"> Business Man</p>
                </div>
              </div>
            </div>
          </div>
          <div className="feedbacks">
            <div className="feedback-container">
              <span>
                <FontAwesomeIcon icon={faStar} style={{ color: "tomato" }} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStar} style={{ color: "tomato" }} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStar} style={{ color: "tomato" }} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStar} style={{ color: "tomato" }} />
              </span>
              <span>
                <FontAwesomeIcon icon={faStar} style={{ color: "tomato" }} />
              </span>
              <div className="feedbacks-p-div">
                <p className="Feedbacks-p">
                  Click edit button to change this text. Lorem ipsum dolor sit
                </p>
                <p className="Feedbacks-p">
                  amet, consectetur adipiscing elit. Ut elit tellus, luctus nec
                </p>
                <p className="Feedbacks-p">
                  ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </div>
              <div className="Profile-Div">
                <div>
                  <img
                    className="Men-img"
                    src="https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=600"
                  />
                </div>
                <div>
                  <p className="profile-name">Mila Kunis</p>
                  <p className="profession">Fashion Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Uncover-World">
          <div>
            <img
              className="ceramic-img2"
              src="https://images.pexels.com/photos/4466240/pexels-photo-4466240.jpeg?auto=compress&cs=tinysrgb&w=600"
            />
          </div>
          <div className="color-bckgrnd">
            <div className="color-bckgrnd-container">
              <div>
                <p className="Uncover-p">Uncover the World</p>
                <p className="Uncover-p">of Ceramic Artistry</p>
                <p className="Uncover-p">Start Your Journey</p>
                <p className="Uncover-p">Here!</p>
              </div>
              <div>
                <button className="shop-now-btn shp-btn-2">
                  <h4>SHOP NOW</h4>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
