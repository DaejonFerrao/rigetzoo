import "./NavBar.css";

const NavBar = () => {
    return (
        <div class="navbar">
           <a class="active" href="Tour">Tour</a>
           <a href="Register">Register</a>
           <a href="Login">Login</a>
           <a href="Articles">Articles</a>
           <a href="Experiences">Experiences</a>
           <a href="Home">Home</a>
        </div>
    )
}

export default NavBar;