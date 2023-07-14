import { FormEvent, useContext, useState } from "react";
import "./App.css";

// Components
import ThemeIcon from "./components/ThemeIcon";
import BirthdayInputs from "./components/AgeInputs";
import Button from "./components/Button";
import Results from "./components/Results";

// Contexts
import { ThemeContext } from "./context/ThemeContext";

// Hooks
import { useAge } from "./hooks/useAge";

export interface BirthdayType {
    timeFrame: string;
    value: number | string;
}

function App() {
    const { isDark, toggleTheme } = useContext(ThemeContext);

    const themeClasses = isDark ? "darkTheme" : "lightTheme";

    const [birthday, setBirthday] = useState<BirthdayType[]>([
        { timeFrame: "day", value: "" },
        { timeFrame: "month", value: "" },
        { timeFrame: "year", value: "" }
    ]);

    const { age, calculateAge } = useAge(birthday);

    const [showResults, setShowResults] = useState(false);


    const handleSubmit = (e: FormEvent): void => {
        e.preventDefault();
        calculateAge();
        setShowResults(true)
    };

    return (
        <div className={`min-h-screen ${themeClasses}`}>
            <header className="flex justify-between items-center p-4">
                <h1 className="font-bold text-lg">Calculate your age</h1>
                <ThemeIcon size={40} click={toggleTheme} isDark={isDark} />
            </header>
            <main className="p-4">
                <form onSubmit={handleSubmit}>
                    <BirthdayInputs data={birthday} setData={setBirthday} />
                    <Button />
                </form>
                <div className="pt-20">
                    {showResults && <Results age={age} />}
                </div>
            </main>
        </div>
    );
}

export default App;
