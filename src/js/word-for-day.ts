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
    return dayjs(date).diff(dayjs(new Date(2022, 1, 8)), 'day');
}

export function verbdumIdForToday(): number {
    return verbdumIdForDay(new Date());
}

export function verbdumForDay(date: Date): string {
    let id = verbdumIdForDay(date);
    return possibleAnswers[(id <= 8 ? id + 410 : id) % possibleAnswers.length];
}

export function verbdumForToday(): string {
    return verbdumForDay(new Date());
}