import React from "react";
import CommonBlockRowLeft from "../CommonBlocks/CommonBlockRowLeft";
import aboutMe from "../images/HomePage/homepage_image_2.svg";

const About = () => {
  return (
    <>
      <CommonBlockRowLeft
        title="About Me"
        subtitle="Hi, My name is Akash Raj Patel. I am an 18 year old aspiring front-end web developer based in India. Brimming with creativity and enthusiasm."
        imgsrc={aboutMe}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default About;
