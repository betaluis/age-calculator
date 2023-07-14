import { useState } from "react";
import { BirthdayType } from "../App"

export const useAge = (birthday: BirthdayType[]) => {

    const [ age, setAge ] = useState<BirthdayType[]>([
        { timeFrame: "year", value: "" },
        { timeFrame: "month", value: "" },
        { timeFrame: "day", value: "" },
    ]);


    const calculateAge = () => {
        birthday.forEach(date => {

            console.log(date, "date from calc")

            if (date.timeFrame === "day" && typeof date.value !== "string") {
                const x = date.value * 2;
                setAge(prev => prev.map(item => item.timeFrame === "day" ? { ...item, value: x } : item ))
                console.log(age, "after day")
            } 

            if (date.timeFrame === "month" && typeof date.value !== "string") {
                const x = date.value * 2;
                setAge(prev => prev.map(item => item.timeFrame === "month" ? { ...item, value: x } : item ))
            }

            if (date.timeFrame === "year" && typeof date.value !== "string") {
                const x = date.value * 2;
                setAge(prev => prev.map(item => item.timeFrame === "year" ? { ...item, value: x } : item ))
            }

        })
    }

    return { age, calculateAge }
}
