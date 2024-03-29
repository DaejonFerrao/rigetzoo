import "./Home.css";

import Button from "../../Components/Button/Button";
import tiger from "../Images/tiger.jpeg"
import HeroImage from "../../Components/HeroImage/HeroImage.js"

const Home = () => {
    return (
        <div className="home-page-container">
            <img
                className="home-page-img"
                src={tiger}
                alt="tiger"
            />

            <div className="home-page-filler">
                <h1>This is a different tiger</h1>
                <p>Click here to learn more</p>
                <Button text="Learn More" path="/Articles"/>
            </div>

            <div className="memberships">
                    <h1>Memberships</h1>
                    <p>Take a look at the various benefits we offer</p>
                    <Button text="JOIN NOW" path="/Membership" />
            </div>

            <div className="information-box-container">

         <div className="information-box">
                <h1>Contact Us</h1>
                <p>Details Below
                    support@rza.com
                    0987654321</p>
                    <Button text="Contact Us" path="/Q&A" />
            </div>
            <div className="information-box">
                <h1>Open timings</h1>
                <p>Daily 8am-6pm
                    Book Your Tickets
                </p>
                <Button text="Find your nearest zoo" path="/Location" />
            </div>

            <div className="information-box">
                <h1>Open timings</h1>
                <p>Daily 8am-6pm
                    Book Your Tickets
                </p>
                <Button text="Find your nearest zoo" path="/Location" />
            </div>
        </div>
    </div>
    );
};

export default Home;