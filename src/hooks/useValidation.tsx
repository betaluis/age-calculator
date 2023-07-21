import { BirthdayType } from "../App";

export interface ValidType {
    isValid: boolean | undefined;
    day: {
        success: boolean;
        error: string;
    },
    month: {
        success: boolean;
        error: string;
    },
    year: {
        success: boolean;
        error: string;
    }
}

const is31DayMonth = (month: number): boolean => {
    return month === 1 || month === 3 || month === 5 || month === 7 || month === 8 || month === 10 || month === 12;
}

const isFebruary = (month: number): boolean => month === 2;


export const useValidation = (birthday: BirthdayType[]) => {

    const isValid: ValidType = {
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
    };

    const validate = () => {

        const today = new Date();
        const currentYear = today.getFullYear();
        const currentMonth = today.getMonth() + 1;
        const currentDay = today.getDate();

        const day = birthday.find(date => date.timeFrame === "day");
        const month = birthday.find(date => date.timeFrame === "month");
        const year = birthday.find(date => date.timeFrame === "year");

        if (year !== undefined) {
            if (
                typeof year.value !== "string" && isNaN(year.value) ||
                typeof year.value !== "string" && year.value < 0 ||
                year.value === ""
            ) {
                isValid.year.success = false;
                isValid.year.error = "Please enter a valid year";
            } else if (typeof year.value !== "string" && year.value > currentYear) {
                isValid.year.success = false;
                isValid.year.error = "You can't be born in the future!";
            } else {
                isValid.year.success = true;
                isValid.year.error = "";
            }
        }

        if (month !== undefined && year !== undefined) {
            if (
                typeof month.value !== "string" && isNaN(month.value) ||
                typeof month.value !== "string" && month.value < 0 ||
                month.value === ""
            ) {
                isValid.month.success = false;
                isValid.month.error = "Please enter a valid month";
                console.log("got here")
            } else if (typeof month.value !== "string" && month.value > 12) {
                isValid.month.success = false;
                isValid.month.error = "There are only 12 months in a year";
            } else if (typeof month.value !== "string" && typeof year.value !== "string" && year.value === currentYear && month.value > currentMonth) {
                isValid.month.success = false;
                isValid.month.error = "You can't be born in the future!";
            } else {
                isValid.month.success = true;
                isValid.month.error = "";
            }
        }

        if (day !== undefined && month !== undefined && year !== undefined) {
            if (
                typeof day.value !== "string" && isNaN(day.value) || 
                typeof day.value !== "string" && day.value < 0 ||
                day.value === ""
            ){
                isValid.day.success = false;
                isValid.day.error = "Please enter a valid date";
            } else if (
                typeof day.value !== "string" && 
                typeof month.value !== "string"
            ) {
                if (is31DayMonth(month.value) && day.value > 31) {
                    isValid.day.success = false;
                    isValid.day.error = "There are only 31 days in this month";
                } else if (isFebruary(month.value) && day.value > 28) {
                    isValid.day.success = false;
                    isValid.day.error = "There are only 28 days in February";
                } else if (!is31DayMonth(month.value) && day.value > 30) {
                    isValid.day.success = false;
                    isValid.day.error = "There are only 30 days in this month";
                } else if (typeof day.value !== "string" && year.value !== "string" && year.value === currentYear && month.value === currentMonth && day.value > currentDay) {
                    isValid.day.success = false;
                    isValid.day.error = "You can't be born in the future!";
                } else {
                    isValid.day.success = true;
                    isValid.day.error = "";
                }
            }
        }

        if (isValid.day.success && isValid.month.success && isValid.year.success) {
            isValid.isValid = true;
        } else {
            isValid.isValid = false;
        }
    }

    return { validate, isValid }
}

