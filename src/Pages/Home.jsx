import React from "react";
import introImg from "../images/HomePage/landing_image_1.svg";
import interestsImg from "../images/HomePage/landing_image_3.svg";
import contactImg from "../images/HomePage/landing_image_2.svg";
import CommonBlockRowLeft from "../CommonBlocks/CommonBlockRowLeft";
import CommonBlockRowRight from "../CommonBlocks/CommonBlockRowRight";

const Home = () => {
  return (
    <>
      <CommonBlockRowLeft
        title="Hi, I’m Akash. And
        I Like Programming"
        subtitle="This website is a digital catalogue of my work"
        imgsrc={introImg}
        visit="/contact"
        btname="Contact Now"
      />
      <CommonBlockRowRight
        title="Interests"
        subtitle="This website is a digital catalogue of my work"
        imgsrc={interestsImg}
        visit="#"
        btname=""
      />
      <CommonBlockRowRight
        title="Contact"
        subtitle="This website is a digital catalogue of my work"
        imgsrc={contactImg}
        visit="/contact"
        btname="Contact Now"
      />
    </>
  );
};

export default Home;
