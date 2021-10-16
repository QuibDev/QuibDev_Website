import React from "react";
import introImg from "../images/HomePage/landing_image_1.svg";
import CertificateBlock from "../CommonBlocks/CertificateBlock/CertificateBlock";
import CommonBlockRowLeft from "../CommonBlocks/CommonBlockRowLeft";
import certificate1 from "../images/Certificates/Building Arduino Robots And Devices Coursera Certificate.png";
import certificate2 from "../images/Certificates/Programing Fundamentals Duke University Coursera Certificate.png";
import certificate3 from "../images/Certificates/Applied Text Mining In Python Coursera Certificate.png";
import certificate4 from "../images/Certificates/Introduction To Data Science Coursera Certificate.png";
import certificate5 from "../images/Certificates/Applied Machine Learning Coursera Certificate.png";

const sData = [
  {
    title: "Building Arduino Robots And Devices",
    imgsrc: certificate1,
    btName1: "Verify Certificate",
    btName2: "Course Page",
    btnVisit1: "",
    btnVisit2: "",
  },
  {
    title: "Programming Fundamentals",
    imgsrc: certificate2,
    btName1: "Verify Certificate",
    btName2: "Course Page",
    btnVisit1: "",
    btnVisit2: "",
  },
  {
    title: "Data Science In Python",
    imgsrc: certificate3,
    btName1: "Verify Certificate",
    btName2: "Course Page",
    btnVisit1: "",
    btnVisit2: "",
  },
  {
    title: "Applied Machine Learning In Python",
    imgsrc: certificate4,
    btName1: "Verify Certificate",
    btName2: "Course Page",
    btnVisit1: "",
    btnVisit2: "",
  },
  {
    title: "Applied Text Mining In Python",
    imgsrc: certificate5,
    btName1: "Verify Certificate",
    btName2: "Course Page",
    btnVisit1: "",
    btnVisit2: "",
  },
];

const Certificates = () => {
  return (
    <>
      {sData.map((val, ind) => {
        return (
          <CertificateBlock
            title={val.title}
            imgsrc={val.imgsrc}
            btName1={val.btName1}
            btnVisit1={val.btnVisit1}
            btName2={val.btName2}
            btnVisit2={val.btnVisit2}
          />
        );
      })}
    </>
  );
};

export default Certificates;
