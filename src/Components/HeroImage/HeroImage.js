import "./HeroImage.css"

import tiger from "../../Pages/Images/tiger.jpeg";

const HeroImage = () => {
    return (
        <div class="hero-image">
            <div class="hero-text">
                <h1>Pomerainian Tiger</h1>
                <img src={tiger} alt="tiger"></img>
                <p>My species is a new one</p>
                <button>Click Here to Learn More</button>
            </div>
        </div>
    )
}

export default HeroImage;