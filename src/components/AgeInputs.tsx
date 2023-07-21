import { BirthdayType } from "../App";
import { ChangeEvent, ReactNode, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { ValidType } from "../hooks/useValidation";

interface Props {
    data: BirthdayType[];
    setData: React.Dispatch<React.SetStateAction<BirthdayType[]>>;
    setValidation: React.Dispatch<React.SetStateAction<ValidType>>;
    validation: ValidType;
}

interface InputProps {
    obj: BirthdayType;
    setData: React.Dispatch<React.SetStateAction<BirthdayType[]>>;
    isValid: boolean | undefined;
    setValidation: React.Dispatch<React.SetStateAction<ValidType>>;
    errors: ErrorObjType;
}

interface ErrorObjType {
    day: string;
    month: string;
    year: string;
}

interface ErrorClassesType {
    outline: string;
    text: string;
}


const Input = ({ obj, setData, isValid, setValidation, errors }: InputProps) => {

    const { isDark } = useContext(ThemeContext);
    const { timeFrame: label, value } = obj;

    const placeholder = label === "year" ? "YYYY" : label === "month" ? "MM" : "DD";

    const errorClasses: ErrorClassesType = {
        outline: "",
        text: "",
    }

    if (isValid === undefined && errors[label as keyof ErrorObjType] === "") {
        errorClasses.text = ""
        errorClasses.outline = ""
    } else if (!isValid && errors[label as keyof ErrorObjType] !== "") {
        errorClasses.text = "text-red-500"
        errorClasses.outline = "outline-red-500"
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setData((prev: BirthdayType[]) => prev.map(item => item.timeFrame === label ? { ...item, value: parseInt(e.target.value) } : item))
        setValidation((prev: ValidType) => ({ ...prev, isValid: undefined, [label]: { success: false, error: "" }}));
    };

    return (
        <label className="flex flex-col space-y-2">
            <span
                className={`uppercase text-sm font-bold ${errorClasses.text} ${isDark ? "darkModeText" : "text-zinc-900"}`}
            >
                {label}
            </span>
            <input
                onChange={handleChange}
                // @ts-ignore
                value={isNaN(value) ? "" : value}
                type="number"
                placeholder={placeholder}
                className={`w-full text-3xl p-4 rounded outline outline-zinc-300 focus:outline-2 focus:outline-indigo-400 font-bold 
                    placeholder:text-gray-400 placeholder:opacity-40 placeholder:text-2xl
                    sm:pt-3 sm:pb-3
                    ${errorClasses.outline} ${errorClasses.text}
                    ${isDark ? "outline-zinc-100 darkModeText darkModeCard" : "outline-zinc-300 lightModeCard lightModeText"} 
                `}
            />
        </label>
    );
};

const Error = ({ children, isValid }: { children: ReactNode, isValid: boolean | undefined }) => {
    return (
        <div className={`text-white mt-3 bg-red-500 p-2 rounded flex justify-between ${isValid ? "translate-y-2" : "translate-y-0"}`}>
            <p className="">{children}</p>
            <svg className="fill-white w-5 mr-2" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" viewBox="0 0 24 24" id="exclamation-mark"><path d="M12,14a1.25,1.25,0,1,0,1.25,1.25A1.25,1.25,0,0,0,12,14Zm0-1.5a1,1,0,0,0,1-1v-3a1,1,0,0,0-2,0v3A1,1,0,0,0,12,12.5ZM12,2A10,10,0,1,0,22,12,10.01114,10.01114,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8.00917,8.00917,0,0,1,12,20Z"></path></svg>
        </div>
    )
}

const BirthdayInputs = ({ data, setData, validation, setValidation }: Props) => {
    const isValid = validation.isValid;

    const errors: ErrorObjType = {
        day: validation.day.error,
        month: validation.month.error,
        year: validation.year.error
    }

    return (
        <>
            <div className="flex space-x-2">
                {data.map((obj, index) => (
                    <Input
                        key={index}
                        obj={obj}
                        setData={setData}
                        isValid={isValid}
                        setValidation={setValidation}
                        errors={errors}
                    />
                ))}
            </div>
            {!isValid && errors.year !== "" && <Error isValid={isValid}>{errors.year}</Error> || !isValid && errors.month !== "" && <Error isValid={isValid}>{errors.month}</Error> || !isValid && errors.day !== "" && <Error isValid={isValid}>{errors.day}</Error> }
        </>
    );
};

export default BirthdayInputs;
