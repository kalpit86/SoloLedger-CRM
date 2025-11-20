import { registerUser,loginUser } from "../api/auth";
import { useState } from "react";
import useUserStore from "../store/useUserStore";
import { useNavigate } from "react-router-dom";

function useAuth(){
    const API_URL = "http://localhost:5000/api/auth"
    const setUser = useUserStore((state) => state.setUser)
    const [isLoading,setIsLoading] = useState(false)
    const [error,setError] = useState(null);
    const navigate = useNavigate();

    async function register(username,password,email){
        console.log("Register hook called with:", {username, email, password: !!password});
        setIsLoading(true)
        try{
            const response = await registerUser(`${API_URL}/register`,username,password,email)
            console.log("Register successful:", response);
            setUser(response)
            setIsLoading(true)
            setError(null)
            navigate("/dashboard", {replace:true})
        }
        catch(err){
            console.error("Register hook error:", err);
            setError(err.response?.data?.message || err.message)
            setUser(null)
        }
        finally{
            setIsLoading(false)
        }
    }

    async function login(email,password){
        setIsLoading(true)
        try{
            const response = await loginUser(`${API_URL}/login`,email,password)
            setUser(response)
            setIsLoading(true)
            setError(null)
            navigate("/dashboard", {replace:true})
        }
        catch(err){
            setError(err.message)
            setUser(null)
        }
        finally{
            setIsLoading(false)
        }
    }

    return {isLoading,error,register,login}
        
}

export default useAuth;
