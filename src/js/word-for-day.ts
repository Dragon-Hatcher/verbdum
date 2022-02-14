import {possibleAnswers} from "./constants/possible-answers";
import {getRNGInRange, setSeed} from "./generate-seed";

function randomizeWordOrder() {
    setSeed("Verbdum");
    for (let i = 0; i < possibleAnswers.length; i++) {
        let swapWith = getRNGInRange(i, possibleAnswers.length - 1);
        let hold = possibleAnswers[i];
        possibleAnswers[i] = possibleAnswers[swapWith];
        possibleAnswers[swapWith] = hold;
    }
}

randomizeWordOrder();

export function verbdumIdForDay(date: Date): number {
    // if (date < new Date(2022, 2, 15)) {
    //     return date.getFullYear() * 373 + date.getMonth() * 31 + date.getDay() + 100;
    // } else {
        return dayjs(date).diff(dayjs(new Date(2022, 1, 8)), 'day');
    // }
}

window.verbdumIdForDay = verbdumIdForDay;
window.possibleAnswers = possibleAnswers;

export function verbdumIdForToday(): number {
    return verbdumIdForDay(new Date());
}

export function verbdumForDay(date: Date): string {
    return possibleAnswers[(verbdumIdForDay(date) + 410) % possibleAnswers.length];
}

export function verbdumForToday(): string {
    return verbdumForDay(new Date());
}