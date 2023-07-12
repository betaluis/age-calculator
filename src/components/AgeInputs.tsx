import { useContext } from "react"
import { ThemeContext } from "../context/ThemeContext";

interface InputProps {
    label: string;
}

const AgeInput = ({ label }: InputProps) => {

    const { isDark } = useContext(ThemeContext);

    return (
        <label className="flex flex-col space-y-2">
            <span className={`uppercase text-sm font-bold ${isDark ? "darkModeText" : "text-zinc-900"}`}>{label}</span>
            <input 
                type="number" 
                className={`outline w-full text-3xl p-4 rounded outline-none ring-1
                    focus:ring-2 focus:ring-indigo-400 font-bold
                    ${isDark ? "ring-zinc-100 bg-zinc-800 darkModeText" : "ring-zinc-300 bg-zinc-100 lightModeText"}
                `} 
            />
        </label>
    )
}


const AgeInputs = () => {
    return (
        <div className="flex space-x-2">
            <AgeInput label="Day" />
            <AgeInput label="Month" />
            <AgeInput label="Year" />
        </div>
    )
}

export default AgeInputs
