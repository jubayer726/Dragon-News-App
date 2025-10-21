import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const [error, setError] = useState("")
  const { signIn } = use(AuthContext);

  const location = useLocation()
  const navigate = useNavigate();

  const handleSignIn = (e) =>{
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log({email, password});
    signIn(email, password)
    .then(result=>{
      const user = result.user;
      console.log(user);
      navigate(`${location.state? location.state : '/'}`)

    })
    .catch(error =>{
      const errorCode = error.code;
    // const errorMessage = error.message;
    //   alert(errorCode, errorMessage)
    setError(errorCode)
    })
  }

  return (
    <div className="flex flex-col items-center min-h-screen justify-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSignIn} className="card-body">
            <h1 className="text-2xl font-semibold text-center p-5">Login your accout</h1>
          <fieldset className="fieldset">
            {/* email */}
            <label className="label">Email</label>
            <input type="email" className="input" name='email' placeholder="Email" required />
            {/* password */}
            <label className="label">Password</label>
            <input type="password" className="input" name='password' placeholder="Password" required/>
            <div>
              {error && <p className="text-red-500 text-center">{error}</p>}
            </div>
            <div>
              <a className="link link-hover">Forgot password?</a>
            </div>
            <button type="submit" className="btn btn-neutral mt-4">Login</button>
          </fieldset>
          <p className="font-semibold text-center py-3">Don't have account ? Please <Link to='/auth/register' className="text-secondary">Register</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
