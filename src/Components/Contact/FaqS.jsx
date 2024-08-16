import { useState } from "react";
import AccordianData from "./AccordianData";
const FaqS = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      <div className="Faq-Container">
        <div className="Faq-Accordian-mainDiv">
          <div>
            <p className="Faq-para-1">FAQs</p>
            <div className="Faq-paras">
              <p className="Faq-para-2">
                Find answers to common questions about our ceramic
              </p>
              <p className="Faq-para-2">
                products, ordering, shipping, care, and more. If you need
              </p>
              <p className="Faq-para-2">
                further information, feel free to contact our support
              </p>
              <p className="Faq-para-2">team.</p>
            </div>
          </div>
          <div>
            <div>
              <div className="accordion">
                {AccordianData.map((item, index) => (
                  <div key={index} className="accordion-item">
                    <button
                      className={`accordion-header ${
                        activeIndex === index ? "active" : ""
                      }`}
                      onClick={() => toggleAccordion(index)}
                    >
                      {item.title}
                    </button>
                    <div
                      className="accordion-content"
                      style={{
                        display: activeIndex === index ? "block" : "none",
                      }}
                    >
                      {item.content}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="Uncover-World-1">
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
    </>
  );
};

export default FaqS;
