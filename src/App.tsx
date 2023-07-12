import { useContext } from "react"
import './App.css'

// Components
import ThemeIcon from './components/ThemeIcon'
import AgeInputs from './components/AgeInputs'
import { ThemeContext } from './context/ThemeContext'

function App() {

    const { isDark, toggleTheme } = useContext(ThemeContext);

    return (
        <div className={`min-h-screen ${isDark ? "darkTheme" : "lightTheme"}`}>
            <header className="flex justify-between items-center p-4">
                <h1 className="font-bold text-lg">Calculate your age</h1>
                <ThemeIcon size={40} click={toggleTheme} isDark={isDark} />
            </header>
            <main className="p-4">
                <AgeInputs />
            </main>
        </div>
    )
}

export default App
