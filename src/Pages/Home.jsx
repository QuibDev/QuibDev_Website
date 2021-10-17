import React from "react";
import introImg from "../images/HomePage/homepage_image_1.svg";
import interestsImg from "../images/HomePage/homepage_image_2.svg";
import contactImg from "../images/HomePage/homepage_image_3.png";
import CommonBlockRowLeft from "../CommonBlocks/CommonBlockRowLeft";
import CommonBlockRowRight from "../CommonBlocks/CommonBlockRowRight";
import InterestsBlock from "../CommonBlocks/InterestsBlock";
import ContactMeBlock from "../CommonBlocks/ContactMeBlock";

const Home = () => {
  return (
    <>
      <CommonBlockRowLeft
        title="Hi, I’m Akash. And
        I Like Programming"
        subtitle="This website is a digital catalogue of my work"
        imgsrc={introImg}
      />
      <InterestsBlock
        title="Interests"
        imgsrc={interestsImg}
        visit="#"
        btName1="Data Science"
        btName2="Machine Learning"
        btName3="Text Mining"
        btName4="Arduino"
      />
      <ContactMeBlock
        title="Got Questions?"
        imgsrc={contactImg}
        visit="/contact"
        btName1="Contact Me"
        btName2="About Page"
      />
    </>
  );
};

export default Home;
