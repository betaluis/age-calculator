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
    const cardTheme = isDark ? "sm:darkModeCard" : "sm:lightModeCard"

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
        <div className={`${themeClasses} sm:flex sm:flex-col min-h-screen selection:bg-indigo-500 selection:text-white`}>
            <header className="flex justify-between items-center p-4">
                <h1 className="font-bold text-lg">Calculate your age</h1>
                <ThemeIcon size={40} click={toggleTheme} isDark={isDark} />
            </header>
            <main 
                className={`p-4 max-w-2xl m-auto 
                        sm:min-w-[600px] sm:flex sm:flex-col sm:p-12 sm:shadow-lg sm:rounded-2xl sm:rounded-br-[150px]
                        ${cardTheme}
                    `}>
                <form onSubmit={handleSubmit}>
                    <div className="sm:w-[380px]">
                        <BirthdayInputs 
                            setValidation={setValidationResults} 
                            validation={validationResults} 
                            data={birthday} 
                            setData={setBirthday} 
                        />
                    </div>
                    <Button />
                </form>
                <div className="pt-20 flex flex-col justify-center items-center sm:pt-8 sm:items-start">
                    <Results showResults={showResults} age={age} />
                </div>
            </main>
        </div>
    );
}

export default App;
