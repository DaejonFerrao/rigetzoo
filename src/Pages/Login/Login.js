import { useState } from "react";
import "./Login.css"
import { useNavigate } from "react-router-dom"
import  axios  from "axios";

const Login = () => {
    const navigate = useNavigate();

    const [User, setUser] = useState();
    const [Pass, setPass] = useState();

    const handleSumbit = async (e) => {
        e.preventDefault();
        console.log(User);
        const response = await axios.post("http://127.0.0.1:8000/users/login", {"user": User, "password":Pass})
        console.log(response.data)
        return;
    }
    

    return (
        <form className="form">
            <form className="form-container">
            <p className="title">Login</p>
            <p className="message">Please fill in the details below</p>
            </form>
            <div className="input-container" onSumbit={handleSumbit}>
            <label>
                <span>Email</span>
                <input onChange={(e) => { setUser(e.target.value) }} required="" type="text" placholder="email" class="input" />
            </label>

            <label>
                <span>Password</span>
                <input  onChange={(e) => { setPass(e.target.value) }} required="" type="text" placeholder="password" class="input" />
            </label>

                </div>
            <button class="submit">submit</button>
            <span>New to the website?</span>
                <button onClick={() => navigate("/Register")}>Signin Here</button>
        </form>
    )
}

export default Login;