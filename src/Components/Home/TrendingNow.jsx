import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const TrendingNow = () => {
  return (
    <div className="most-popular-main-div Trending-now">
      <div>
        <p className="most-popular-p1">TRENDING NOW</p>
        <p className="most-popular-p2">Minimalist Ceramic Designs</p>
      </div>
      <div>
        <div className="ceramic-samples">
          <div>
            <img
              className="ceramic-cup"
              src="https://wallmantra.com/wp-content/uploads/17974_jpg-300x300.jpg"
            />
            <div className="sample-text-div">
              <p className="ceramic-cup-p1">Ceramic</p>
              <p className="ceramic-cup-p2">Ceramic Bottels</p>
              <div className="stars">
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>
              </div>
              <p className="ceramic-cup-p3">$189.00</p>
            </div>
          </div>
          <div>
            <img
              className="ceramic-cup"
              src="https://m.media-amazon.com/images/I/71VG0xRKTzL.jpg"
            />
            <div className="sample-text-div">
              <p className="ceramic-cup-p1">Ceramic</p>
              <p className="ceramic-cup-p2">Ceramic Cup</p>
              <div className="stars">
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>
              </div>
              <p className="ceramic-cup-p3">$469.00</p>
            </div>
          </div>
          <div>
            <img
              className="ceramic-cup"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG7EiU3GMas2z_LqexQ5y54flwtaP9sNYh5g&s"
            />
            <div className="sample-text-div">
              <p className="ceramic-cup-p1">Ceramic</p>
              <p className="ceramic-cup-p2">Ceramic Drink Coasters</p>
              <div className="stars">
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>
                <span>
                  <FontAwesomeIcon icon={faStar} />
                </span>
              </div>
              <p className="ceramic-cup-p3">$199.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingNow;
