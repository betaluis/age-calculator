import { BirthdayType } from "../App";

interface ResultsProps {
    age: BirthdayType[];
}

const Results = ({ age }: ResultsProps) => {
    console.log("age from results", age)
    return (
        <div>
            {age.map((item, index) => (
                typeof item.value === "number" && 
                    item.value > 0 && 
                    item.timeFrame.length > 0 ? 
                    <Date key={index} amount={item.value} timeFrame={item.timeFrame} /> : null
                ))
            }
        </div>
    )
}

interface DateProps {
    amount: number | string;
    timeFrame: string;
}

const Date = ({ amount, timeFrame }: DateProps) => {

    return (
        <div className="">
            {
                typeof amount === "string" ? (
                    <span className="text-indigo-500 font-black text-6xl">- -</span>
                ) : (
                    <span className="text-indigo-500 font-black text-7xl">{amount}</span>
                )
            }
            <span className="inline-block pl-2 font-black text-6xl italic">
                {typeof amount === "number" && amount > 1 && (timeFrame + "s")}
                {typeof amount === "number" && amount === 0 && timeFrame}
            </span>
        </div>
    )
}

export default Results
