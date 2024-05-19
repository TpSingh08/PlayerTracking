import React from "react";
import { Navbar } from "../Navbar";
import "./style.css";

export const MyData = () => {
  return (
    <div className="my-data">
      <div className="div">
        <div className="overlap">
          <div className="text-wrapper">My Data</div>
        </div>
        <div className="overlap-group">
          <div className="text-wrapper-2">My Data</div>
          <img className="undraw-about-me-re" alt="Undraw about me re" src="/img/undraw-about-me-re-82bv-1.svg" />
        </div>
        <img className="line" alt="Line" src="/img/line-4.svg" />
        <div className="div-wrapper">
          <div className="text-wrapper-3">Enter your name</div>
          <input type="text" className="input-box" />
        </div>
        <div className="text-wrapper-4">Name:</div>
        <div className="overlap-2">
          <div className="text-wrapper-3">Enter your weight</div>
          <input type="text" className="input-box" />
        </div>
        <div className="text-wrapper-5">Weight:</div>
        <div className="overlap-group-2">
          <div className="text-wrapper-3">Enter your sports</div>
          <input type="text" className="input-box" />
        </div>
        <div className="text-wrapper-6">Sports:</div>
        <div className="overlap-3">
          <p className="text-wrapper-3">Enter your team (if any)</p>
          <input type="text" className="input-box" />
        </div>
        <div className="text-wrapper-7">Team:</div>
        <div className="overlap-4">
          <div className="text-wrapper-3">Enter your age</div>
          <input type="text" className="input-box" />
        </div>
        <div className="text-wrapper-8">Age:</div>
        <div className="overlap-5">
          <div className="text-wrapper-3">Enter your height</div>
          <input type="text" className="input-box" />
        </div>
        <div className="text-wrapper-9">Height:</div>
        <div className="overlap-6">
          <div className="text-wrapper-10">Save</div>
        </div>
        <div className="text-wrapper-11">Edit</div>
        <img className="img" alt="Line" src="/img/line-1.svg" />
        <p className="player-TRACKING">
          <span className="span">Player </span>
          <span className="text-wrapper-12">TRACKING</span>
        </p>

        <div className="text-wrapper-13">Team Stats</div>
        <div className="text-wrapper-14">Player Stats</div>
        <div className="text-wrapper-15">Sign up</div>
        <div className="text-wrapper-16">Home</div>
        <img className="microsoftteams-image" alt="Microsoftteams image" src="/img/microsoftteams-image-4.png" />
        <p className="p">
          <span className="span">Player </span>
          <span className="text-wrapper-12">TRACKING</span>
        </p>
        <img className="microsoftteams-image-2" alt="Microsoftteams image" src="/img/microsoftteams-image-4.png" />
        <div className="email-fake-email-com">
          Email:
          <br />
          fake@email.com
        </div>
        <div className="phone-XXXX-XXX-XXX">
          Phone:
          <br />
          XXXX-XXX-XXX
        </div>
      </div>
    </div>
  );
};

export default MyData;
