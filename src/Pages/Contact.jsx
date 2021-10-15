import React from "react";
import styled from "styled-components";
import contact_image from "../images/Contact/contact_image.svg";
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
  flex: "1";
  &:hover {
    background-color: #77a0ff;
  }
`;

const Contact = () => {
  return (
    <>
      <div className="my-5">
        <img
          src="../images/Contact/contact_image.svg"
          className="img-fluid animated"
          alt="InterestsBlock img"
        />
        <h1
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            font: "Ubuntu",
            color: "#65617d",
          }}
        >
          Let's Get In Touch!
        </h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Name
                </label>
                <input
                  type="name"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="John Doe"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="johnDoe@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Organization
                </label>
                <input
                  type="oragnization"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="John Doe Co. Ltd"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Your Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  placeholder="Enter your message..."
                  rows="3"
                ></textarea>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  paddingTop: 10,
                }}
                class="col-12"
              >
                <ButtonPrimary type="submit">Submit form</ButtonPrimary>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
