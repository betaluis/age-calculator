interface DateProps {
    amount: number | undefined;
    timeFrame: "years" | "months" | "days" ;
}

let days: number | undefined;
let months: number | undefined;
let years: number | undefined;

const Date = ({ amount = undefined, timeFrame }: DateProps) => {

    return (
        <div className="">
            {
                amount === undefined ? (
                    <span className="text-indigo-500 font-black text-6xl">- -</span>
                ) : (
                    <span className="text-indigo-500 font-black text-7xl">{amount}</span>
                )
            }
            <span className="inline-block pl-2 font-black text-6xl italic">{timeFrame}</span>
        </div>
    )
}

const Results = () => {
    return (
        <div>
            <Date amount={years} timeFrame="years" />
            <Date amount={months} timeFrame="months" />
            <Date amount={days} timeFrame="days" />
        </div>
    )
}

export default Results
