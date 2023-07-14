import { BirthdayType } from "../App";
import { ChangeEvent, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

interface Props {
    data: BirthdayType[];
    setData: React.Dispatch<React.SetStateAction<BirthdayType[]>>;
}

interface InputProps extends Props {
    obj: BirthdayType;
}

const Input = ({ obj, data, setData }: InputProps) => {
    const { isDark } = useContext(ThemeContext);
    const { timeFrame: label, value } = obj;

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        console.log(data);
        setData((prev: BirthdayType[]) => prev.map(item => item.timeFrame === label ? { ...item, value: parseInt(e.target.value) } : item))
    };

    return (
        <label className="flex flex-col space-y-2">
            <span
                className={`uppercase text-sm font-bold ${isDark ? "darkModeText" : "text-zinc-900"}`}
            >
                {label}
            </span>
            <input
                onChange={handleChange}
                value={value}
                type="number"
                className={`outline w-full text-3xl p-4 rounded outline-none ring-1 focus:ring-2 focus:ring-indigo-400 font-bold ${isDark
                    ? "ring-zinc-100 bg-zinc-800 darkModeText"
                    : "ring-zinc-300 bg-zinc-100 lightModeText"} 
                `}
            />
        </label>
    );
};

const BirthdayInputs = ({ data, setData }: Props) => {
    return (
        <div className="flex space-x-2">
            {data.map((obj, index) => (
                <Input
                    key={index}
                    obj={obj}
                    data={data}
                    setData={setData}
                />
            ))}
        </div>
    );
};

export default BirthdayInputs;
