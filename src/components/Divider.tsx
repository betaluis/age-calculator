import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext"
import Arrow from "/icon-arrow.svg"

const Divider = () => {

    const { isDark } = useContext(ThemeContext)

    return (
        <button type="submit" className={`block w-full mt-20 h-[1px] relative ${isDark ? "lightTheme" : "bg-zinc-300"}`}>
            <img className="bg-indigo-500 p-4 rounded-full absolute top-1/2 right-1/2 -translate-y-1/2 translate-x-1/2" src={Arrow} alt="Arrow down icon" />
        </button>
  )
}

export default Divider
