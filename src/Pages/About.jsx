import React from "react";
import CommonBlockRowLeft from "../CommonBlocks/CommonBlockRowLeft";
import web from "../images/HomePage/landing_image_3.svg";

const About = () => {
  return (
    <>
      <CommonBlockRowLeft
        title="About Me"
        subtitle="I am an aspiring front-end developer. Brimming with creativity."
        imgsrc={web}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
