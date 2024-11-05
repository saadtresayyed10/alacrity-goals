import { useState } from "react";

const SignUp = ({ goToLogin }) => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { name, email, password, confirmPassword } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    setUser({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  return (
    <div className="flex justify-center items-center p-10 border-2 border-white rounded-lg">
      <form
        onSubmit={(e) => onSubmit(e)}
        className="flex justify-center items-center flex-col gap-y-6 text-blue-950 bg-transparent"
      >
        <input
          type="text"
          placeholder="Enter Name:"
          name="name"
          value={name}
          onChange={(e) => onInputChange(e)}
          autoComplete="off"
          required
          className="font-metana text-sm p-2 uppercase bg-transparent text-white border-b border-white focus:border-b-2 focus:outline-none"
        />
        <input
          type="email"
          placeholder="Enter Email:"
          name="email"
          value={email}
          onChange={(e) => onInputChange(e)}
          autoComplete="off"
          required
          className="font-metana text-sm p-2 uppercase bg-transparent text-white border-b border-white focus:border-b-2 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Enter Password:"
          name="password"
          value={password}
          onChange={(e) => onInputChange(e)}
          autoComplete="off"
          required
          className="font-metana text-sm p-2 uppercase bg-transparent text-white border-b border-white focus:border-b-2 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Confirm Password:"
          name="confirmPassword"
          value={confirmPassword}
          onChange={(e) => onInputChange(e)}
          autoComplete="off"
          required
          className="font-metana text-sm p-2 uppercase bg-transparent text-white border-b border-white focus:border-b-2 focus:outline-none"
        />
        <div className="flex justify-center items-center flex-col lg:gap-y-4">
          <p
            onClick={goToLogin}
            className="text-xs font-metana text-white uppercase lg:mt-8 mt-6 mb-2 lg:mb-0 cursor-pointer"
          >
            Account already exists?
          </p>
          <button className="lg:px-8 px-6 py-2 font-metana uppercase text-xs font-semibold bg-white hover:bg-transparent text-blue-950 hover:text-white duration-100 border-2 border-white rounded-full">
            Create Account
          </button>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
