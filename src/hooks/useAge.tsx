import { useState } from "react";
import { BirthdayType } from "../App"

interface DateType {
    year: number;
    month: number;
    day: number;
}

export const useAge = (birthday: BirthdayType[]) => {

    const [ age, setAge ] = useState<BirthdayType[]>([
        { timeFrame: "year", value: "" },
        { timeFrame: "month", value: "" },
        { timeFrame: "day", value: "" },
    ]);

    const calculateAge = () => {

        const dateModel: DateType = {
            day: 0,
            month: 0,
            year: 0
        }

        birthday.forEach(date => {

            if (date.timeFrame === "day" && typeof date.value !== "string") {
                dateModel.day = date.value
            } 

            if (date.timeFrame === "month" && typeof date.value !== "string") {
                dateModel.month = date.value
            }

            if (date.timeFrame === "year" && typeof date.value !== "string") {
                dateModel.year = date.value
            }

        })

        const year = dateModel.year
        const month = dateModel.month
        const day = dateModel.day
       
        const today = new Date()
        const currentYear = today.getFullYear()
        const currentMonth = today.getMonth() + 1
        const currentDay = today.getDate()

        const is31DayMonth = (month: number): boolean => {
            return month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10;
        }

        const isFebruary = (month: number): boolean => {
            return month === 2;
        }

        if (currentMonth < month) {
            setAge((prev) => prev.map(date => date.timeFrame === "month" ? { ...date, value: (currentMonth-month)+12 } : date))
        } else {
            setAge((prev) => prev.map(date => date.timeFrame === "month" ? { ...date, value: currentMonth-month } : date))
        }

        if (currentMonth < month) {
            setAge((prev) => prev.map(date => date.timeFrame === "year" ? { ...date, value: (currentYear-year)-1 } : date))
        } else {
            setAge((prev) => prev.map(date => date.timeFrame === "year" ? { ...date, value: currentYear-year } : date))
        }

        if (currentDay < day) {
            if (is31DayMonth(month)) {
                setAge((prev) => prev.map(date => date.timeFrame === "day" ? { ...date, value: (currentDay-day)+31 } : date))
                setAge((prev) => prev.map(date => date.timeFrame === "month" ? { ...date, value: (date.value as number - 1) } : date))
            } else if (isFebruary(month)) {
                setAge((prev) => prev.map(date => date.timeFrame === "day" ? { ...date, value: (currentDay-day)+28 } : date))
                setAge((prev) => prev.map(date => date.timeFrame === "month" ? { ...date, value: (date.value as number - 1) } : date))
            } else {
                setAge((prev) => prev.map(date => date.timeFrame === "day" ? { ...date, value: (currentDay-day)+30 } : date))
                setAge((prev) => prev.map(date => date.timeFrame === "month" ? { ...date, value: (date.value as number - 1) } : date))
            }
                
        } else {
            setAge((prev) => prev.map(date => date.timeFrame === "day" ? { ...date, value: currentDay-day } : date))
        }
    }

    return { age, calculateAge }
}
