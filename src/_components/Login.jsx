import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    setUser({
      email: "",
      password: "",
    });
  };

  return (
    <div className="flex justify-center items-center p-10 border-2 border-white rounded-lg">
      <form
        onSubmit={(e) => onSubmit(e)}
        className="flex justify-center items-center flex-col lg:gap-y-6 text-blue-950 bg-transparent"
      >
        <input
          type="email"
          placeholder="Enter Email:"
          name="email"
          value={email}
          onChange={(e) => onInputChange(e)}
          autoComplete="off"
          required
          className="font-metana lg:text-sm p-2 uppercase bg-transparent text-white border-b border-white focus:border-b-2 focus:outline-none"
        />
        <input
          type="password"
          placeholder="Enter Password:"
          name="password"
          value={password}
          onChange={(e) => onInputChange(e)}
          autoComplete="off"
          required
          className="font-metana lg:text-sm p-2 uppercase bg-transparent text-white border-b border-white focus:border-b-2 focus:outline-none"
        />
        <div className="flex justify-center items-center flex-col lg:gap-y-4">
          <p className="lg:text-xs font-metana text-white uppercase lg:mt-8 cursor-pointer">
            Account does not exists?
          </p>
          <button className="lg:px-8 lg:py-2 font-metana uppercase lg:text-xs font-semibold bg-white hover:bg-transparent text-blue-950 hover:text-white duration-100 border-2 border-white rounded-full">
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
