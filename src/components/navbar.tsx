/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addToken } from '../redux/action';

const Navbar = () => {
  const Navigate=useNavigate()
  const dispatch=useDispatch()

    const handleLogout=()=>{

      dispatch(addToken(''))

        
        Navigate("signin")
    }
  return (
    <nav className="bg-gray-900 p-2">
      <div className="container  mx-auto flex justify-between items-center">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          />
        </div>

        {/* <div className="lg:block"> */}
          <div className="flex items-center justify-center">
            <p
             onClick={handleLogout}
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4 cursor-pointer"
            >
              Logout
            </p>

          </div>
        {/* </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
