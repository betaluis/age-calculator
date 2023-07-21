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
import { ValidType, useValidation } from "./hooks/useValidation";

export interface BirthdayType {
    timeFrame: string;
    value: number | string;
}

function App() {
    const { isDark, toggleTheme } = useContext(ThemeContext);

    const themeClasses = isDark ? "darkTheme" : "lightTheme";

    const [birthday, setBirthday] = useState<BirthdayType[]>([
        { timeFrame: "month", value: "" },
        { timeFrame: "day", value: "" },
        { timeFrame: "year", value: "" }
    ]);

    const { age, calculateAge } = useAge(birthday);

    const [showResults, setShowResults] = useState(false);
    const [ validationResults, setValidationResults ] = useState<ValidType>({
        isValid: undefined,
        day: {
            success: false,
            error: ""
        },
        month: {
            success: false,
            error: ""
        },
        year: {
            success: false,
            error: ""
        }
    });

    
    const { isValid, validate } = useValidation(birthday);

    const handleSubmit = (e: FormEvent): void => {

        e.preventDefault();

        validate();

        setValidationResults({ ...isValid })

        if (isValid.isValid) {
            calculateAge();
            setShowResults(true)
        } else {
            setShowResults(false)
        }

    };

    return (
        <div className={`${themeClasses} min-h-screen selection:bg-indigo-500 selection:text-white`}>
            <header className="flex justify-between items-center p-4">
                <h1 className="font-bold text-lg">Calculate your age</h1>
                <ThemeIcon size={40} click={toggleTheme} isDark={isDark} />
            </header>
            <main className="p-4">
                <form onSubmit={handleSubmit}>
                    <BirthdayInputs setValidation={setValidationResults} validation={validationResults} data={birthday} setData={setBirthday} />
                    <Button />
                </form>
                <div className="pt-20 flex flex-col justify-center items-center">
                    <Results showResults={showResults} age={age} />
                </div>
            </main>
        </div>
    );
}

export default App;
