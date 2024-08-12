import "./Hometemplate.css";
import Texts from "./Texts";
import Aboutproduct from "./AboutproductSection";
import BestceramicSection from "./BestceramicSection";
import MostPopularSection from "./MostPopularSection";
import TrendingNow from "./TrendingNow";
import Testimonial from "./TestimonialSection";
const Myapp = () => {
  return (
    <>
      <div className="Front-page">
        <div className="pic-text-div">
          <div className="text-container">
            <Texts />
          </div>
          <div className="ceramic-img">
            <div>
              <img
                className="img-1"
                src="https://websitedemos.net/ceramic-products-store-04/wp-content/uploads/sites/1413/2023/10/hero-02.jpg"
              />
            </div>
            <div>
              <img
                className="img-2"
                src="https://images.squarespace-cdn.com/content/v1/5c44af2536099bab8069abc8/1557084548210-63P62OLTBYLPDYQ3E07G/IMG_4058.jpg"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="About-container">
        <Aboutproduct />
      </div>
      <div>
        <BestceramicSection />
      </div>
      <div>
        <MostPopularSection />
      </div>
      <div>
        <TrendingNow />
      </div>
      <div>
        <Testimonial />
      </div>
    </>
  );
};

export default Myapp;
