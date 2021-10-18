import React from "react";
import styled from "styled-components";
import AboutCertificateImg from "../images/Certificates/AboutCertificate.png";
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
    btName1: "Course Page",
    btName2: "Verify",
    btnVisit1: "https://www.coursera.org/learn/arduino",
    btnVisit2:
      "https://www.coursera.org/account/accomplishments/verify/YSJ8UA3A3CHW",
  },
  {
    title: "Programming Fundamentals",
    imgsrc: certificate2,
    btName1: "Course Page",
    btName2: "Verify",
    btnVisit1: "https://www.coursera.org/learn/programming-fundamentals",
    btnVisit2:
      "https://www.coursera.org/account/accomplishments/records/56PUBJK2JUDC",
  },
  {
    title: "Data Science In Python",
    imgsrc: certificate3,
    btName1: "Course Page",
    btName2: "Verify",
    btnVisit1: "https://www.coursera.org/learn/python-data-analysis",
    btnVisit2:
      "https://www.coursera.org/account/accomplishments/verify/Q2V34B49AQDJ",
  },
  {
    title: "Applied Machine Learning In Python",
    imgsrc: certificate4,
    btName1: "Course Page",
    btName2: "Verify",
    btnVisit1: "https://www.coursera.org/learn/python-machine-learning",
    btnVisit2:
      "https://www.coursera.org/account/accomplishments/verify/PT9TZ62SB37C",
  },
  {
    title: "Applied Text Mining In Python",
    imgsrc: certificate5,
    btName1: "Course Page",
    btName2: "Verify",
    btnVisit1: "https://www.coursera.org/learn/python-text-mining",
    btnVisit2:
      "https://www.coursera.org/account/accomplishments/verify/TW2WJJCLDNXB",
  },
];

const ButtonPrimary = styled.button`
  background-color: #8ab0ff;
  font: 700 26px Ubuntu;
  color: white;
  padding: 15px 25px;
  margin: 10px;
  border-radius: 30px;
  border-width: 0px;
  outline-color: #77a0ff;
  text-transform: uppercase;
  box-shadow: 0px 4px 4px lightgray;
  cursor: pointer;
  transition: ease background-color 300ms;
  &:hover {
    background-color: #77a0ff;
  }
`;

const Certificates = () => {
  const aboutCertificateBlock = {
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginBottom: 20,
  };

  return (
    <>
      <h1
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          fontFamily: "Ubuntu",
          fontWeight: "bold",
          color: "#65617d",
          marginTop: 30,
        }}
      >
        Certificates
      </h1>
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
      <div style={aboutCertificateBlock}>
        <CommonBlockRowLeft
          title="What do these certificates mean?"
          subtitle="These certificates are a token of the fields I have dabbled in. – A “learning timeline” if you will. Those interested in what I actually learn throughout my journey can check out the Projects section of the website."
          imgsrc={AboutCertificateImg}
        />
      </div>
    </>
  );
};

export default Certificates;
