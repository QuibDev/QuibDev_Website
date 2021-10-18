import React from "react";
import MailSentBlock from "../CommonBlocks/MailSentBlock.jsx";
import MailSentSuccessImg from "../images/MailSent/MailSent.svg";

const MailSent = () => {
  return (
    <>
      <MailSentBlock
        title="Mail Sent Successfully"
        subtitle="I will get back to you as soon as I am able to!"
        imgsrc={MailSentSuccessImg}
      />
    </>
  );
};

export default MailSent;
