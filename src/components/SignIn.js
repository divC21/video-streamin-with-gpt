import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

const SignIn = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className=" bg-gray-800 flex flex-col w-1/3 absolute top-52 p-8 justify-center justify-self-center align-middle rounded-md">
      <div className="py-4">
        <label className="pr-3" htmlFor="username">
          Username
        </label>
        <Input
          id="username"
          type="text"
          value={userName}
          onChange={(evt) => {
            setUserName(evt.target.value);
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
          value={password}
          onChange={(evt) => {
            setPassword(evt.target.value);
          }}
        />
      </div>
      <Button
        classNames="!w-full !m-0"
        type="primary"
        name="Sign In"
        onClick={() => {}}
      />
    </div>
  );
};

export default SignIn;
