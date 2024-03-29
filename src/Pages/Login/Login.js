import "./Login.css"

const Login = () => {
    return (
        <form className="form">
            <form className="form-container">
            <p className="title">Login</p>
            <p className="message">Please fill in the details below</p>
            </form>
            <div className="input-container">
            <label>
                <span>Email</span>
                <input required="" type="text" placholder="email" class="input" />
            </label>

            <label>
                <span>Password</span>
                <input required="" type="text" placeholder="password" class="input" />

            </label>
                </div>
            <button class="submit">submit</button>
            <span>New to the website? <button>Signin Here</button></span>
        </form>
    )
}

export default Login;