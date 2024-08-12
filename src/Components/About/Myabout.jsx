import "./About.css";
import OurJourney from "./OurJourney";
import OurStory from "./OurStory";
import OurvisionOurgoals from "./OurvisionOurgoals";

const Myabout = () => {
  return (
    <div>
      <div className="grn-div">
        <div className="para-div">
          <p className="About-us-para1">About Us</p>
          <p className="About-us-para2">
            Welcome to the world of CeramicShop, where artistry and innovation
            come
          </p>
          <p className="About-us-para2">
            together to craft stunning ceramic pieces. Discover our story, the
            passion that
          </p>
          <p className="About-us-para2">
            drives us, and our commitment to delivering timeless beauty and
            quality.
          </p>
        </div>
        <div>
          <img
            src="https://images.pexels.com/photos/4207892/pexels-photo-4207892.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            className="about-us-img"
          />
        </div>
      </div>
      <div className="ourStory-container">
        <OurStory />
      </div>
      <div className="ourStory-main-container">
        <OurJourney />
      </div>
      <div className="vision-Goals-container">
        <OurvisionOurgoals />
      </div>
    </div>
  );
};

export default Myabout;
