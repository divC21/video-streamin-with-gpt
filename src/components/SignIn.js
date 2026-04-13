import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
  });
  const [signUpForm, setSignUpForm] = useState(false);

  return (
    <div className=" bg-gray-800 bg-opacity-35 flex flex-col w-1/3 absolute top-52 p-8 justify-center justify-self-center align-middle rounded-md">
      <h2 className="text-2xl">{signUpForm ? "Sign Up" : "Sign In"}</h2>
      {signUpForm && (
        <div className="py-4">
          <label className="pr-3" htmlFor="username">
            Full Name
          </label>
          <Input
            id="username"
            type="text"
            value={formData.fullName}
            onChange={(evt) => {
              setFormData(...formData, { fullName: evt.target.value });
            }}
          />
        </div>
      )}

      <div className="py-4">
        <label className="pr-3" htmlFor="username">
          Username
        </label>
        <Input
          id="username"
          type="text"
          value={formData.email}
          onChange={(evt) => {
            setFormData(...formData, { email: evt.target.value });
          }}
        />
      </div>
      <div className="pb-8">
        <label className="pr-3" htmlFor="password">
          Password
        </label>
        <Input
          id="password"
          type="password"
          value={formData.password}
          onChange={(evt) => {
            setFormData(...formData, { password: evt.target.value });
          }}
        />
      </div>
      <Button
        classNames="!w-full !m-0"
        type="primary"
        name={signUpForm ? "Sign Up" : "Sign In"}
        onClick={() => {}}
      />
      <p>
        {signUpForm ? "Already a member?" : "New to the app?"}
        <span
          className="underline cursor-pointer"
          onClick={() => {
            setSignUpForm(!signUpForm);
          }}
        >
          {`Sign ${signUpForm ? "Up" : "In"} here`}
        </span>
      </p>
    </div>
  );
};

export default SignIn;
