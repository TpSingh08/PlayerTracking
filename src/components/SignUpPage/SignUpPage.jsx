import React from "react";
import { Navbar } from "../Navbar";
import "./style.css";

export const SignUpPage = () => {
  return (
    <div className="sign-up-page">
      <div className="div-3">
        <div className="overlap-15">
          <img className="undraw-greek-freak-j" alt="Undraw greek freak j" src="/img/undraw-greek-freak-j-2-qb-1.svg" />
          <p className="player-TRACKING-4">
            <span className="text-wrapper-35">Player </span>
            <span className="text-wrapper-36">TRACKING</span>
          </p>
        </div>
        <div className="text-wrapper-37">Welcome!</div>
        <div className="overlap-group-4">
          <div className="text-wrapper-38">Sign Up</div>
        </div>
        <div className="overlap-16">
          <div className="text-wrapper-39">Enter your username</div>
        </div>
        <div className="text-wrapper-40">Username</div>
        <div className="overlap-17">
          <div className="text-wrapper-39">Enter your email</div>
        </div>
        <div className="text-wrapper-41">Email Id</div>
        <div className="overlap-18">
          <div className="text-wrapper-39">Enter your password</div>
        </div>
        <div className="text-wrapper-42">Password</div>
        <div className="text-wrapper-43">or</div>
        <div className="text-wrapper-44">Log in</div>
        <img className="line-6" alt="Line" src="/img/line-1-2.svg" />
        <img className="microsoftteams-image-5" alt="Microsoftteams image" src="/img/microsoftteams-image-4.png" />
      </div>
    </div>
  );
};

export default SignUpPage;