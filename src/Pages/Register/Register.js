import "./Register.css";

const Register = () => {
    return (
        <form class="form">
            <div className="form-container">
                <p class="title">Register </p>
                <p class="message">Please fill in the details below. </p>
            </div>
            <div className="input-container">
                <label>
                    <span>First name</span>
                    <input required="" placeholder="" type="text" class="input" />
                </label>

                <label>
                    <span>Last name</span>
                    <input required="" placeholder="" type="text" class="input" />
                </label>

                <label>
                    <span>Email</span>
                    <input required="" placeholder="" type="email" class="input" />
                </label>

                <label>
                    <span>Password</span>
                    <input required="" placeholder="" type="password" class="input" />
                </label>
                <label>
                    <span>Confirm Pass</span>
                    <input required="" placeholder="" type="password" class="input" />
                </label>
            </div>

            <button class="submit">Submit</button>
            <p class="signin">Already have an acount ? <a href="#">Signin</a> </p>

        </form>
    )
}

export default Register;