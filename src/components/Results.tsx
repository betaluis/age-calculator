import { BirthdayType } from "../App";

interface ResultsProps {
    age: BirthdayType[];
    showResults: boolean;
}

interface DateProps {
    amount: number | string;
    timeFrame: string;
    showResults: boolean;
}

const Results = ({ age, showResults }: ResultsProps) => {
    return (
        <div>
            {age.map((item, index) => (
                <Date 
                    key={index} 
                    amount={item.value} 
                    timeFrame={item.timeFrame} 
                    showResults={showResults}
                />
            ))}
        </div>
    )
}

const Dashes = ({ amount }: { amount?: number }) => {

    if (amount) 
        return <span className="inline-block text-indigo-500 font-black text-7xl">{amount}</span>

    return <span className="inline-block text-indigo-500 font-black text-6xl">- -</span>

}

const Date = ({ amount, timeFrame, showResults }: DateProps) => {

    return (
        <div className="">

            {!showResults && 
                typeof amount === "string" && timeFrame.length > 0 &&
                <Dashes />
            }

            {!showResults && typeof amount !== "string" && 
                <Dashes />
            }

            {showResults && typeof amount !== "string" &&
                <Dashes amount={amount} />
            }

            <span className={`block ${typeof amount === "number" && amount.toLocaleString().length > 3 ? "text-5xl" : "text-5xl "} inline-block pl-2 font-black italic`}>
                {typeof amount === "number" && amount !== 1 && (timeFrame + "s")}
                {typeof amount === "number" && amount === 1 && (timeFrame)}
                {typeof amount === "string" && (timeFrame + "s")}
            </span>
        </div>
    )
}

export default Results
