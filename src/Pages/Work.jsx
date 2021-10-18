import React from "react";
import styled from "styled-components";
import DataScienceImg from "../images/Work/DataScience.png";
import MachingLearningImg from "../images/Work/MachineLearning.png";
import TextMingingImg from "../images/Work/TextMining.png";
import ArduinoImg from "../images/Work/Arduino.png";
import TitleCard from "../CommonBlocks/TitleCard";

const sData = [
  {
    title: "Factors Affecting The Housing Market Of 1970’S Boston",
    subtitle:
      "This post is from a two-part series where I dwell deep into the housing prices of Boston – from the Boston Housing Dataset. (Courtesy U.S Census Service and Dr.Jason)",
    tag: "DataScience",
    imgsrc: DataScienceImg,
    btName: "ReadMore",
    btVisit:
      "https://quib.dev/factors-affecting-the-housing-market-of-1970s-boston/",
  },
  {
    title: "Hypothesis Testing: Effect Of Recession On Housing Prices",
    subtitle:
      "The following is a part of my DataScience Project log. Every year more and more high school graduates in the United States elect for tertiary education, some by interest...",
    tag: "DataScience",
    imgsrc: DataScienceImg,
    btName: "ReadMore",
    btVisit:
      "https://quib.dev/hypothesis-testing-effect-of-recession-on-housing-prices/",
  },
  {
    title: "HandWritten Digit Recognition",
    subtitle:
      "I was in sort of a rut in the past few months, I was trying to work on projects that were clearly above my existing skillset. It took some time before I realized to cut my losses and work again on simpler and shorter projects.",
    tag: "MachineLearning",
    imgsrc: MachingLearningImg,
    btName: "ReadMore",
    btVisit: "https://quib.dev/9-handwritten-digit-recognition/",
  },
  {
    title: "Titanic Survival Model",
    subtitle:
      "In this assignment, I go over a labeled dataset containing a list of passengers on board the ship Titanic, – A large civilian cruise vessel that met its unfortunate demise near the Antarctic – and a list of survivals...",
    tag: "MachineLearning",
    imgsrc: MachingLearningImg,
    btName: "ReadMore",
    btVisit: "https://quib.dev/titanic-survival-model/",
  },
  {
    title: "Binary Classification: Prediction On Breast Cancer Datasets",
    subtitle:
      "This time around, I decided to go on a solo machine learning adventure! – That is, I choose the data and goal for myself from the myriad machine learning challenges available on the web.",
    tag: "MachineLearning",
    imgsrc: MachingLearningImg,
    btName: "ReadMore",
    btVisit:
      "https://quib.dev/binary-classification-prediction-on-breast-cancer-datasets/",
  },
  {
    title:
      "Machine Learning: Predicting Probabilities Of Blight Ticket Compliance",
    subtitle:
      "The following is a part of my machine learning project log completed during the applied machine learning introduction course from Coursera.",
    tag: "MachineLearning",
    imgsrc: MachingLearningImg,
    btName: "ReadMore",
    btVisit:
      "https://quib.dev/neural-networks-predicting-probabilities-of-blight-ticket-compliance/",
  },
  {
    title: "Multinomial Naive Bayes Classifier: Predicting Spams",
    subtitle:
      "In this assignment, I was given a labeled dataset containing spam and not-spam text messages.",
    tag: "TextMining",
    imgsrc: TextMingingImg,
    btName: "ReadMore",
    btVisit:
      "https://quib.dev/multinomial-naive-bayes-classifier-predicting-spams/",
  },
  {
    title: "Feature Extraction: Dates From Data",
    subtitle:
      "The following is a part of my text mining project log completed during the applied text mining in python course from Coursera.",
    tag: "TextMining",
    imgsrc: TextMingingImg,
    btName: "ReadMore",
    btVisit: "https://quib.dev/feature-extraction-dates-from-data/",
  },
  {
    title: "Developing An Ultrasonic Depth Sensor Gauge In Arduino",
    subtitle:
      "This post was a result of the skills I obtained from the Arduino Beginner’s Course by...",
    tag: "Arduino",
    imgsrc: ArduinoImg,
    btName: "ReadMore",
    btVisit:
      "https://quib.dev/developing-an-ultrasonic-depth-sensor-gauge-in-arduino/",
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

const Work = () => {
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
          marginBottom: 30,
        }}
      >
        Work
      </h1>
      <div className="container-fluid mb-5">
        <div style={{ marginBottom: 100, marginTop: 10 }} className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-5">
              {sData.map((val, ind) => {
                return (
                  <TitleCard
                    title={val.title}
                    subtitle={val.subtitle}
                    imgsrc={val.imgsrc}
                    btName={val.btName}
                    btVisit={val.btVisit}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Work;
