import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const MostPopularSection = () => {
  return (
    <>
      <div className="most-popular-main-div">
        <div>
          <div>
            <p className="most-popular-p1">MOST POPULAR </p>
            <p className="most-popular-p2">
              Discover the Latest Additions at Your Top
            </p>
            <p className="most-popular-p2">Choice Flower Shop</p>
          </div>
        </div>
        <div className="ceramic-samples">
          <div>
            <img
              className="ceramic-cup"
              src="https://dealclear.com/image/catalog/products/anwaliya/b081hg6ydt/830728.jpg"
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
              </div>
              <p className="ceramic-cup-p3">$189.00</p>
            </div>
          </div>
          <div>
            <img
              className="ceramic-cup"
              src="https://townofceramics.in/wp-content/uploads/2023/08/29-6.jpg"
            />
            <div className="sample-text-div">
              <p className="ceramic-cup-p1">Ceramic</p>
              <p className="ceramic-cup-p2">Ceramic Planter</p>
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
              src="https://nestasia.in/cdn/shop/products/a141_33ad3a9f-9528-4008-91a4-cc52413ce932.png?v=1624964732&width=600"
            />
            <div className="sample-text-div">
              <p className="ceramic-cup-p1">Ceramic</p>
              <p className="ceramic-cup-p2">Ceramic Plates</p>
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
          <div className="bottom-cards">
            <img
              className="ceramic-cup"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3cqavzSYZaFP5Lu-fqtMTBxnLtz2pxoqdJg&s"
            />
            <div className="sample-text-div">
              <p className="ceramic-cup-p1">Ceramic</p>
              <p className="ceramic-cup-p2">Ceramic Plates and Bowls</p>
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
              <p className="ceramic-cup-p3">$289.00</p>
            </div>
          </div>
          <div className="bottom-cards">
            <img
              className="ceramic-cup"
              src="https://www.wonderchef.com/cdn/shop/files/Spoon_1_cebe8b79-4ee0-4321-b00f-7941c575da15_1024x1024.jpg?v=1718100247"
            />
            <div className="sample-text-div">
              <p className="ceramic-cup-p1">Ceramic</p>
              <p className="ceramic-cup-p2">Ceramic Plates and Spoons</p>
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
              <p className="ceramic-cup-p3">$489.00</p>
            </div>
          </div>
          <div className="bottom-cards">
            <img
              className="ceramic-cup"
              src="https://nestasia.in/cdn/shop/products/CeramicPlanter_2.jpg?v=1655312602"
            />
            <div className="sample-text-div">
              <p className="ceramic-cup-p1">Ceramic</p>
              <p className="ceramic-cup-p2">Ceramic Vases and Planters</p>
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
              <p className="ceramic-cup-p3">$689.00</p>
            </div>
          </div>
        </div>
      </div>
      <div className="img-background">
        <div className="ceramic-explore">
          <div className="text-div">
            <h1 className="ceramic-explore-p">
              Begin Your Ceramic Journey Explore
            </h1>
            <h1 className="ceramic-explore-p">Our Stunning Collections</h1>
            <p className="ceramic-explore-p1">Starting from just $149.00</p>
            <button className="read-btn shopNow-btn">
              <h5>SHOP NOW</h5>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default MostPopularSection;
