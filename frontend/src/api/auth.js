import axios from "axios";

async function registerUser(URL,username,password,email){
    console.log("Sending register request to:", URL, "with data:", {username, email, password: !!password});
    try {
        const response  = await axios.post(URL,{
            "email":email,
            "username": username,
            "password" : password
        })
        console.log("Register response:", response.data);
        const jwtToken  = response.headers["authorization"];
        localStorage.setItem("Auth-Token",jwtToken);
        return response.data.details
    } catch (error) {
        console.error("Register API error:", error.response?.data || error.message);
        throw error;
    }
}

async function loginUser(URL,email,password){

    const response  = await axios.post(URL,{
        "email": email,
        "password" : password
    })
    console.log("User LoggedIn Successfully : " + JSON.stringify(response.data.details))
    const jwtToken  = response.headers["authorization"];
    localStorage.setItem("Auth-Token",jwtToken);
        
    return response.data.details
}


export {registerUser,loginUser}