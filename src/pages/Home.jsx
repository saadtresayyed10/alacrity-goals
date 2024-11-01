import SignUp from "../_components/SignUp";

const Home = () => {
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
        <button className="lg:px-8 lg:py-2 font-metana uppercase lg:text-sm font-semibold bg-white text-blue-950 rounded-full">
          Sign Up
        </button>
        <button className="lg:px-8 lg:py-2 font-metana uppercase lg:text-sm font-semibold bg-transparent border-white border-2 text-white rounded-full">
          Login
        </button>
      </div>
      <SignUp />
    </div>
  );
};

export default Home;
