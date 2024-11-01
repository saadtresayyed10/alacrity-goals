import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center p-10 border-2 border-white rounded-lg">
      <form className="flex justify-center items-center flex-col lg:gap-y-6 text-blue-950 bg-transparent">
        <input
          type="text"
          placeholder="Enter Name:"
          className="font-metana lg:text-sm p-2 uppercase bg-transparent text-white border-b border-white focus:border-b-2 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Enter Email:"
          className="font-metana lg:text-sm p-2 uppercase bg-transparent text-white border-b border-white focus:border-b-2 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Enter Password:"
          className="font-metana lg:text-sm p-2 uppercase bg-transparent text-white border-b border-white focus:border-b-2 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Confirm Password:"
          className="font-metana lg:text-sm p-2 uppercase bg-transparent text-white border-b border-white focus:border-b-2 focus:outline-none"
        />
        <div className="flex justify-center items-center flex-col lg:gap-y-4">
          <p className="lg:text-xs font-metana text-white uppercase lg:mt-8 cursor-pointer">
            Account already exists?
          </p>
          <button className="lg:px-8 lg:py-2 font-metana uppercase lg:text-xs font-semibold bg-white hover:bg-transparent text-blue-950 hover:text-white duration-100 border-2 border-white rounded-full">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
