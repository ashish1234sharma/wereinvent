import React,{useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Register } from '../services'
import axios from 'axios'

const SignUp =()=>{
    const [form,setForm]=useState<any>({email:"",mobile:"",username:"",password:''})
    const dispatch=useDispatch()
    const navigate=useNavigate()

  

    const handleForm=(e:any)=>{
        const {id,value}=e.target
        setForm({
            ...form,
            [id]:value
        })
    }
    const hanldeSubmit=()=>{
        // navigate('/signin')
        // if(form.email === '' || form.mobile ==='' || form.username === '' || form.password === ''){
        //     // alert("Please enter credentials ")
        // }else{
        //     handleRegister()
            
         
        // }
        handleRegister()
       
    }
    // const handleRegister = async () => {
    //     try {
    //       const payload = {
    //         'email': "eve.holt@reqres.in",
    //         'password': "pistol"
    //     }
    //       const response = await Register(payload);
    //       console.log('Registration successful:', response);
    //       navigate('/signin')
         
         
    //     } catch (error:any) {
    //       console.error('Registration failed:', error.message);
         
    //     }
    //   };
    const handleRegister=()=>{
        const payload={
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        }
        axios.post('https://reqres.in/api/register',payload).then((res)=>{
           console.log(res)
        }).catch((e)=>{
            console.log(e)
        })
    }

    return(
        <>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create a new user
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  onChange={handleForm}
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 text-left">
                Mobile
              </label>
              <div className="mt-2">
                <input
                  id="mobile"
                  name="mobile"
                  type="mobile"
                  autoComplete="mobile"
                  required
                  onChange={handleForm}
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 text-left">
               UserName
              </label>
              <div className="mt-2">
                <input
                  id="username"
                  name="username"
                  type="username"
                  autoComplete="username"
                  required
                  onChange={handleForm}
                  className="block w-full rounded-md border-0 py-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
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
                onClick={hanldeSubmit}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
    )
}

export default SignUp