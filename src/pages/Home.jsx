import { useState } from "react";
import SignUp from "../_components/SignUp";
import Login from "../_components/Login";

const Home = () => {
  const [activeComponent, setActiveComponent] = useState("login");

  const handleSignUpButton = () => {
    setActiveComponent("signup");
  };

  const handleLoginButton = () => {
    setActiveComponent("login");
  };

  const goToSignUp = () => {
    setActiveComponent("signup");
  };

  // const goToLogin = () => {
  //   setActiveComponent("login");
  // };

  return (
    <div className="w-full min-h-screen bg-gradient-to-b text-white text-center from-blue-950 to-black flex justify-center items-center flex-col lg:gap-y-12">
      <div className="flex justify-center items-center flex-col lg:gap-y-8 lg:p-20">
        <h1 className="lg:text-4xl font-semibold font-wildworld uppercase">
          Dream Big, Track Better!
        </h1>
        <p className="lg:text-base font-metana font-light uppercase">
          This app helps users stay on track by automating goal progress through
          visual charts, providing daily affirmations and motivational boosts.
          With timely reminders, it keeps users aware of their goal deadlines,
          celebrating achievements and encouraging action on unmet goals to keep
          them moving forward.
        </p>
      </div>
      <div className="flex items-center lg:gap-x-16">
        <button
          onClick={handleSignUpButton}
          className={`lg:px-8 lg:py-2 font-metana uppercase lg:text-sm font-semibold rounded-full ${
            activeComponent === "signup"
              ? "bg-white text-blue-950"
              : "bg-transparent border-2 border-white text-white"
          }`}
        >
          Sign Up
        </button>
        <button
          onClick={handleLoginButton}
          className={`lg:px-8 lg:py-2 font-metana uppercase lg:text-sm font-semibold rounded-full ${
            activeComponent === "login"
              ? "bg-white text-blue-950"
              : "bg-transparent border-2 border-white text-white"
          }`}
        >
          Login
        </button>
      </div>
      {activeComponent === "login" && <Login goToSignUp={goToSignUp} />}
      {activeComponent === "signup" && <SignUp />}
    </div>
  );
};

export default Home;
