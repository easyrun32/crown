import React, { useState } from "react";
import FormInput from "../FormInput/FormInput";

import "./SignIn.scss";
import CustomButton from "../Custombutton/Custombutton";
import { auth, SignInWithGoogle } from "../../firebase/firebaseUtils";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await auth.signInWithEmailAndPassword(email, password);
      setEmail("");
      setPassword("");
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleChange = (event) => {
    switch (event.target.name) {
      case "email":
        setEmail(event.target.value);
        break;
      case "password":
        setPassword(event.target.value);
        break;
      default:
        break;
    }
  };
  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='Email'
          type='email'
          name='email'
          handleChange={handleChange}
          value={email}
          required
        />
        <FormInput
          label='Password'
          type='password'
          name='password'
          handleChange={handleChange}
          value={password}
          required
        />
        <div className='buttons'>
          <CustomButton type='submit'>SIGN IN </CustomButton>
          <CustomButton onClick={SignInWithGoogle} isGoogleSignin>
            SIGN IN WITH GOOGLE
          </CustomButton>
        </div>
      </form>
    </div>
  );
};
export default SignIn;
