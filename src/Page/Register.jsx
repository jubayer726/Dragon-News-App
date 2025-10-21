import React, { use } from "react";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const navigate = useNavigate();
  const { createUser, setUser, updatedProfile } = use(AuthContext);

  const handleSignIn = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log({ name, photo, email, password });
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // console.log(user);
        updatedProfile({displayName: name, photoURL: photo}).then(()=>{
          setUser({...user, displayName: name, photoURL: photo});
          alert("Account created successfully");
          navigate('/')
        })
        .catch((error) => {
          console.log(error);
          setUser(user)
      });
      })
      .catch((error) => {
        console.log(error.message);
        alert(error.message);
      });


  };
  return (
    <div className="flex flex-col items-center min-h-screen justify-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <form onSubmit={handleSignIn} className="card-body">
          <h1 className="text-2xl font-semibold text-center p-5">
            Register your accout.
          </h1>
          <fieldset className="fieldset">
            {/* Name */}
            <label className="label">Name </label>
            <input
              type="text"
              className="input"
              name="name"
              placeholder="Name"
              required
            />

            {/* Photo URL */}
            <label className="label">Photo URL</label>
            <input
              type="photoURL"
              className="input"
              name="photo"
              placeholder="Photo"
              required
            />

            {/* Email */}
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              name="email"
              placeholder="Email"
              required
            />

            {/* Password */}
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              name="password"
              placeholder="Password"
              required
            />

            <button className="btn btn-neutral mt-4">Register</button>
          </fieldset>
          <p className="font-semibold text-center py-3">
            Already You have account ? Please{" "}
            <Link type="submit" to="/auth/login" className="text-secondary">
              Login
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
