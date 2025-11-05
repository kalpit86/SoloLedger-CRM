import { useRef } from 'react';
import {Link, Navigate} from "react-router-dom";
import useAuth from '../hooks/useAuth';

const AuthComponent = ({authType}) => {
  const passRef = useRef(null);
  const emailRef = useRef(null);
  const nameRef = useRef(null);
  const {isLoading,error,login,register} = useAuth();

  function handleSubmitRegister(){
    event.preventDefault()
    const email = emailRef.current.value
    const password = passRef.current.value
    const username = nameRef.current.value
    console.log("Form submit register:", {email, username, password: !!password});
    if(email && password && username){
        register(username,password,email)
    } else {
        console.log("Missing form fields:", {email: !!email, username: !!username, password: !!password});
    }
  }

  function handleSubmitLogin(){
    event.preventDefault()
    const email = emailRef.current.value
    const password = passRef.current.value
  if(email && password){
        login(email,password)
    }
  }

  return (
      <div className="min-h-screen flex items-center justify-center bg-base-200 font-Roboto">
      <div
        className="card w-full max-w-sm bg-base-100/90 shadow-2xl backdrop-blur-xl border border-base-300/40
                   p-8 animate-fadeIn transform transition-all duration-500 hover:shadow-primary/30 hover:scale-[1.02]">
        
        <h2 className="text-2xl font-semibold text-center mb-1">
            {(authType=="Register")? "Welcome to ": "Welcome Back"} 
          <span className="font-extrabold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-blue-700 underline decoration-gray-500">   
            {(authType=="Register") && "Pristine"}
          </span>
        </h2>
        <p className="text-sm text-center text-base-content/70 mb-6">
          {(authType=="Register")? "Register to create account": "Login to continue"} 
        </p>

        {error && (
          <div className="alert alert-error mb-4">
            <span>{error}</span>
          </div>
        )}


        <form className="space-y-4" onSubmit={authType=="Register"?handleSubmitRegister:handleSubmitLogin} autoComplete='on'>
          <input
            type="email"
            placeholder="Email"
            className="input input-bordered w-full focus:input-primary transition-all duration-200"
            maxLength={40}
            required
            ref={emailRef}
            disabled={isLoading}
          />

          {(authType == "Register") && <input
            type="text"
            placeholder="Username"
            className="input input-bordered w-full focus:input-primary transition-all duration-200"
            maxLength={12}
            required
            ref={nameRef}
            disabled={isLoading}
          />}

          <input
            type="password"
            placeholder="Password"
            className="input input-bordered w-full focus:input-primary transition-all duration-200"
            maxLength={16}
            required
            ref={passRef}
            disabled={isLoading}
          />

          <button
            type='submit'
            disabled={isLoading}
            className="btn btn-primary w-full transition-all duration-300 ease-in-out
                       hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]
                       shadow-md hover:shadow-lg hover:shadow-primary/30">
            {isLoading?<span className="loading loading-spinner loading-md text-info"></span>:authType}
          </button>
        </form>

        <p className="text-sm text-center mt-5">
          {(authType=="Register")? "Already have an account? ": "Don’t have an account? "} 
        <Link to={authType === "Register" ? "/login" : "/register"} className="link link-primary">
          {authType === "Register" ? "Login" : "Register"}
        </Link>
        </p>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>

    </div>
  )
}

export default AuthComponent
