import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import Arrow from "/icon-arrow.svg";

const Button = () => {
    const { isDark } = useContext(ThemeContext);

    return (
        <div
            className={`block w-full mt-20 h-[1px] relative sm:mt-8 ${isDark ? "lightTheme" : "bg-zinc-300" }`}
        >
            <button
                tabIndex={0}
                type="submit"
                className="absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2 
                bg-indigo-500 p-4 rounded-full
                focus-visible:outline-zinc-100 focus-visible:outline-1 focus-visible:-outline-offset-4
                sm:right-0 sm:translate-x-0
                "
            >
                <img
                    src={Arrow}
                    alt="Arrow down icon"
                />
            </button>
        </div>
    );
};

export default Button;
