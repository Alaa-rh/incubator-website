import React from 'react'
import NavLinkUniversal from './NavLinkUniversal'
const SignupLink = ({label, className}) => {
  return (
    <div className={`flex justify-center w-fit text-white hover:scale-105 transition ${className}`}>
                <NavLinkUniversal
                label={label}
                to="/signup"
                className="bg-main-color text-[22px] font-bold px-10 py-4 rounded-xl"
                />
    </div>
  )
}

export default SignupLink