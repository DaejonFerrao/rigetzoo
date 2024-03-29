import "./Button.css"
import { useNavigate } from "react-router-dom"

function Button({ text, path = "", onClickFn }) {
    const naviagteTo = useNavigate();

    if (!path) {
        return (
            <button className="button-component" onClick={onClickFn}>
                {text}
            </button>
        );
    } else {
        return (
            <button
                className="button-component"
                onClick={() => {
                    naviagteTo(path);
                }}
            >
                {text}
            </button>
        )
    }
}

export default Button;