import "./Contact.css";
import ContactUs from "./ContactUs";
import FaqS from "./FaqS";
import GetInTouch from "./GetInTouch";

const MyContact = () => {
  return (
    <div>
      <div>
        <ContactUs />
      </div>
      <div>
        <GetInTouch />
      </div>
      <div>
        <FaqS />
      </div>
    </div>
  );
};

export default MyContact;
