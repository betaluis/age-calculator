import { useContext, useState } from "react"
import './App.css'

// Components
import ThemeIcon from "./components/ThemeIcon"
import AgeInputs from "./components/AgeInputs"
import Divider from "./components/Divider"
import Results from "./components/Results"

// Contexts
import { ThemeContext } from './context/ThemeContext'

function App() {

    const { isDark, toggleTheme } = useContext(ThemeContext);

    const themeClasses = isDark ? "darkTheme" : "lightTheme";

    const [ days, setDays ] = useState<number | undefined>(undefined)

    return (
        <div className={`min-h-screen ${themeClasses}`}>
            <header className="flex justify-between items-center p-4">
                <h1 className="font-bold text-lg">Calculate your age</h1>
                <ThemeIcon size={40} click={toggleTheme} isDark={isDark} />
            </header>
            <main className="p-4">
                <form onSubmit={() => console.log("Submitted")}>
                    <AgeInputs />
                    <Divider />
                </form>
                <div className="pt-20">
                    <Results />
                </div>
            </main>
        </div>
    )
}

export default App
