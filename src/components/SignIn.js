import { useRef, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import Button from "./Button";
import Input from "./Input";
import { checkValidations } from "../utils/validation";
import { auth } from "../utils/firebase";

const SignIn = () => {
  const email = useRef(null);
  const password = useRef(null);
  const fullname = useRef(null);

  const [signUpForm, setSignUpForm] = useState(false);
  const [errMsg, setErrMsg] = useState("");

  const handleSignInSignUp = (e) => {
    e.preventDefault();
    const emailVal = email.current.value;
    const passVal = password.current.value;
    const nameVal = fullname?.current?.value || "";
    let validationObj = { email: emailVal, password: passVal };

    if (signUpForm) {
      validationObj = {
        ...validationObj,
        name: nameVal,
      };
    }
    const isError = checkValidations(validationObj);
    setErrMsg(isError);
    if (!isError) {
      if (signUpForm) {
        createUserWithEmailAndPassword(auth, emailVal, passVal)
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            console.log(user);
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            setErrMsg(errorCode + " - " + errorMessage);
          });
      } else {
        signInWithEmailAndPassword(auth, emailVal, passVal)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrMsg(errorCode + " - " + errorMessage);
          });
      }
    }
  };
  return (
    <div className=" bg-gray-800 bg-opacity-35 flex flex-col w-1/3 absolute top-52 p-8 justify-center justify-self-center align-middle rounded-md">
      <h2 className="text-2xl">{signUpForm ? "Sign Up" : "Sign In"}</h2>
      <form onSubmit={handleSignInSignUp}>
        {signUpForm && (
          <div className="py-2">
            <label className="pr-3" htmlFor="fullName">
              Full Name
            </label>
            <Input id="fullName" type="text" ref={fullname} />
          </div>
        )}

        <div className="py-4">
          <label className="pr-3" htmlFor="email">
            Email
          </label>
          <Input id="email" type="text" ref={email} />
        </div>
        <div className="pb-8">
          <label className="pr-3" htmlFor="password">
            Password
          </label>
          <Input id="password" type="password" ref={password} />
        </div>
        <p className="text-red-800 font-bold py-2">{errMsg}</p>
        <Button
          classNames="!w-full !m-0"
          btnType="primary"
          name={signUpForm ? "Sign Up" : "Sign In"}
          type="submit"
        />
        <p>
          {signUpForm ? "Already a member?" : "New to the app?"}
          <span
            className="underline cursor-pointer"
            onClick={() => {
              setSignUpForm(!signUpForm);
            }}
          >
            {`Sign ${!signUpForm ? "Up" : "In"} here`}
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignIn;
