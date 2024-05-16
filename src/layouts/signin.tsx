import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addToken } from "../redux/action";


const SignIn = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const navigate = useNavigate();
  const dispatch=useDispatch()

  const handleForm = (e: any) => {
    const { id, value } = e.target;

    setForm({
      ...form,
      [id]: value,
    });
  };
  const handleSubmit = async () => {
    if (form.username === "" || form.password === "") {
      alert("plz fill credentials");
    } else {
      handleApi()
    }
  };
  const handleApi=()=>{
    const payload={
      "username":form.username,
      "password":form.password
  }
    axios.post('http://localhost:8080/login',payload).then((res)=>{
       console.log(res)
       dispatch(addToken(res.data.token));
       navigate("/");
    }).catch((err)=>{
      alert(err.response.data.message)
      console.log(err)
    })
  }

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium leading-6 text-gray-900 text-left"
              >
                Username
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="username"
                  required
                  onChange={handleForm}
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  onChange={handleForm}
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                onClick={handleSubmit}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </div>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{" "}
            <label
              onClick={() => navigate("/signup")}
              className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
            >
              Signup
            </label>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignIn;
