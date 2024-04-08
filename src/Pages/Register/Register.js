import "./Register.css";
import { useState, useContext } from "react";
import { AuthContext } from "../../Components/AuthContext/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const navigate = useNavigate()

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleSumbit = async (e) => {
        e.preventDefault();
        console.log(email);
        const response = await axios.post("http://127.0.0.1:8000/users/register", {"display_name": name, "email": email, "password":password})
        console.log(response.data)
        return;
    }
    


    return (
        <form class="form">
            <div className="form-container">
                <p class="title">Register </p>
                <p class="message">Please fill in the details below. </p>
            </div>
            <div className="input-container" onSubmit={handleSumbit}>
                <label>
                    <span>First name</span>
                    <input onChange={(e) => { setName(e.target.value) }} required="" placeholder="" type="text" class="input" />
                </label>

                <label>
                    <span>Last name</span>
                    <input onChange={(e) => { setName(e.target.value) }} required="" placeholder="" type="text" class="input" />
                </label>

                <label>
                    <span>Email</span>
                    <input onChange={(e) => { setEmail(e.target.value) }} required="" placeholder="" type="email" class="input" />
                </label>

                <label>
                    <span>Password</span>
                    <input onChange={(e) => { setPassword(e.target.value) }} required="" placeholder="" type="password" class="input" />
                </label>
                <label>
                    <span>Confirm Pass</span>
                    <input onChange={(e) => { setPassword(e.target.value) }} required="" placeholder="" type="password" class="input" />
                </label>
            </div>

            <button class="submit">Submit</button>
            <p class="signin">Already have an account?</p>
            <button onClick={() => navigate("/Login")}>SIGN IN HERE</button>

        </form>
    )
}

export default Register;