import {verbdumForDay, verbdumForToday, verbdumIdForDay, verbdumIdForToday} from "./word-for-day";
import {allowedGuesses} from "./constants/allowed-guesses";
import {getCurrentNumber, getCurrentTextForId} from "./translate";
import {showStatsModal} from "./modal";

interface CustomWindow extends Window {
    currentWordNumber: number;
    currentLetterNumber: number;
    currentlyGuessingWord: string;
    currentlyPlayingWord: string;
    pastGuesses: Array<string>;
    currentlyPlayingId: number;
}

declare let window: CustomWindow;

function clearLetter(element: Element, text: boolean = true) {
    if (text) {
        element.textContent = "";
    }
    element.classList.remove("guessing");
    element.classList.remove("absent");
    element.classList.remove("present");
    element.classList.remove("correct");
}

function clearGameBoard() {
    let gameBoardElement = document.getElementById("game-board");
    for (let i = 0; i < gameBoardElement.children.length; i++) {
        for (let j = 0; j < gameBoardElement.children[i].children.length; j++) {
            clearLetter(gameBoardElement.children[i].children[j]);
        }
    }
}

function getLetterElement(wordNumber: number, letterNumber: number): Element {
    let gameBoardElement = document.getElementById("game-board");
    let rowElement = gameBoardElement.children[wordNumber];
    return rowElement.children[letterNumber];
}

function setGuessingLetterInGameBoard(wordNumber: number, letterNumber: number, letter: string) {
    let letterElement = getLetterElement(wordNumber, letterNumber);
    letterElement.textContent = letter.toUpperCase();
    if (letter == "") {
        letterElement.classList.remove("guessing");
        letterElement.setAttribute("data-animation", "")
    } else {
        letterElement.classList.add("guessing");
        letterElement.setAttribute("data-animation", "pop")
    }
}

function getKeyboardKey(key: string): Element {
    return document.querySelectorAll(`[data-key='${key}']`)[0];
}

function clearKeyboardKey(key: string) {
    let element = getKeyboardKey(key);
    element.classList.remove("correct");
    element.classList.remove("present");
    element.classList.remove("absent");
}

function clearKeyboard() {
    for (let i = 0; i < 26; i++) {
        clearKeyboardKey(String.fromCharCode(97 + i));
    }
}

function setKeyboardKeyState(key: string, state: "correct" | "present" | "absent") {
    let keyElement = getKeyboardKey(key);
    if (
        state == "correct" ||
        (state == "present" && !keyElement.classList.contains("correct")) ||
        (state == "absent" && !keyElement.classList.contains("correct") && !keyElement.classList.contains("present"))
    ) {
        clearKeyboardKey(key);
        getKeyboardKey(key).classList.add(state);
    }
}

function toastWithMessage(messageId: string, fades: boolean = true) {
    let toastBag = document.getElementById("main-toast-bag");
    let toast = document.createElement("div");
    toast.innerText = getCurrentTextForId(messageId);
    toast.classList.add("toast");
    toast.classList.add("toast-fade");
    toast.setAttribute("data-trans", messageId);
    toastBag.prepend(toast);
    if (fades) setTimeout(() => toastBag.removeChild(toastBag.lastElementChild), 2000)
}

function showAnswer() {
    let toastBag = document.getElementById("main-toast-bag");
    let toast = document.createElement("div");
    toast.innerText = getCurrentTextForId("answer-was") + window.currentlyPlayingWord.toUpperCase();
    toast.classList.add("toast");
    toast.setAttribute("data-trans", "answer-was");
    toastBag.prepend(toast);
}

function shakeWord(wordNumber: number) {
    for (let i = 0; i < 5; i++) {
        let letterElement = getLetterElement(wordNumber, i);
        letterElement.setAttribute("data-animation", "shake");
        setTimeout(() => letterElement.setAttribute("data-animation", ""), 600);
    }
}

const flipGap = 250;
const bounceGap = 100;

function bounceWord(wordNumber: number) {
    for (let i = 0; i < 5; i++) {
        let letterElement = getLetterElement(wordNumber, i);
        setTimeout(() => letterElement.setAttribute("data-animation", "bounce"), bounceGap * i);
    }
}

function setClueForLetter(wordNumber: number, letterNumber: number, letterValue: string, clue: "correct" | "present" | "absent") {
    let letterElement = getLetterElement(wordNumber, letterNumber);
    letterElement.setAttribute("data-animation", "flip");
    setTimeout(() => {
        letterElement.textContent = letterValue.toUpperCase();
        letterElement.classList.add(clue);
        setKeyboardKeyState(letterValue, clue);
    }, flipGap);
}

export function getColors(word: string, answer: string): ("correct" | "absent" | "present")[] {
    let colors: ("correct" | "absent" | "present")[] = ["absent", "absent", "absent", "absent", "absent"];
    let answerLetters = answer;
    for (let i = 0; i < 5; i++) {
        if (word[i] == answer[i]) {
            colors[i] = "correct";
            answerLetters = answerLetters.replace(word[i], "");
        } else if (!answer.includes(word[i])) {
            colors[i] = "absent";
        }
    }
    for (let i = 0; i < 5; i++) {
        if (word[i] != answer[i] && answerLetters.includes(word[i])) {
            colors[i] = "present";
            answerLetters = answerLetters.replace(word[i], "");
        } else if (word[i] != answer[i]) {
            colors[i] = "absent";
        }
    }
    return colors;
}

function guessWordInRow(word: string, answer: string, row: number, isInitialLoad: boolean = false) {
    if (!allowedGuesses.includes(word)) {
        toastWithMessage("toast-invalid-word");
        shakeWord(window.currentWordNumber);
        return
    }

    window.pastGuesses.push(word);
    const letterFlipDelay = isInitialLoad ? 100 : 300;
    if (!isInitialLoad) {
        appendGuess(window.currentlyPlayingId, word);
        if (word == answer || row == 5) {
            updateStatsFromSolve();
            setTimeout(showStatsModal, flipGap * 5 + 550 + 2000);
        }
        if (word == answer) {
            setTimeout(() => toastWithMessage(`congrats-${window.pastGuesses.length}`), flipGap * 5 + 550);
            setTimeout(() => bounceWord(window.pastGuesses.length - 1), flipGap * 5 + 550);
        }
    }
    if (row == 5 && word != answer) {
        setTimeout(showAnswer, letterFlipDelay * 5 + 550);
    }
    if (word == answer) {
        setTimeout(showStatsModal, letterFlipDelay * 5 + 550);
    } else if (row == 5) {
        setTimeout(showStatsModal, letterFlipDelay * 5 + 550 + 1000);
    }

    window.currentWordNumber++;
    window.currentLetterNumber = 0;
    window.currentlyGuessingWord = "";

    let colors = getColors(word, answer);
    for (let i = 0; i < 5; i++) {
        let letterElement = getLetterElement(row, i);
        clearLetter(letterElement, false);
        setTimeout(() => setClueForLetter(row, i, word[i], colors[i]), i * letterFlipDelay);
    }
}

function appendGuess(id: number, guess: string) {
    let currentGuessesText = localStorage.getItem(`guesses-${id}`);
    if (currentGuessesText == null) {
        localStorage.setItem(`guesses-${id}`, JSON.stringify([guess]))
    } else {
        let currentGuesses: Array<string> = JSON.parse(currentGuessesText);
        currentGuesses.push(guess);
        localStorage.setItem(`guesses-${id}`, JSON.stringify(currentGuesses))
    }
}

function loadGuesses(id: number) {
    let currentGuessesText = localStorage.getItem(`guesses-${id}`);
    if (currentGuessesText != null) {
        let currentGuesses: Array<string> = JSON.parse(currentGuessesText);
        for (let i = 0; i < currentGuesses.length; i++) {
            guessWordInRow(currentGuesses[i], window.currentlyPlayingWord, window.currentWordNumber, true);
        }
    }
}

export function isPlaying(): boolean {
    return window.currentWordNumber != 6 && !window.pastGuesses.includes(window.currentlyPlayingWord);
}

interface Stats {
    roundsPlayed: number,
    roundsWon: number,
    currentStreak: number,
    maxStreak: number,
    solveNumbers: number[]
}

export function readStats(): Stats {
    let currentStatsString = localStorage.getItem("stats");
    return currentStatsString != null ? JSON.parse(currentStatsString) : {
        roundsPlayed: 0,
        roundsWon: 0,
        currentStreak: 0,
        maxStreak: 0,
        solveNumbers: [0, 0, 0, 0, 0, 0]
    }
}

export function updateStatsPage() {
    let currentStats = readStats();

    document.getElementById("stat-played").innerText = getCurrentNumber(currentStats.roundsPlayed);
    document.getElementById("stat-win-percent").innerText = getCurrentNumber(Math.round((currentStats.roundsWon / currentStats.roundsPlayed) * 100 || 0));
    document.getElementById("stat-current-streak").innerText = getCurrentNumber(currentStats.currentStreak);
    document.getElementById("stat-max-streak").innerText = getCurrentNumber(currentStats.maxStreak);

    let solveNumbers = currentStats.solveNumbers;
    let maxSolveNum = Math.max.apply(null, solveNumbers);

    for (let i = 0; i < 6; i++) {
        let graph = document.querySelectorAll(`[data-graph-num='${i + 1}']`)[0] as HTMLElement;
        graph.style.width = ((solveNumbers[i] / maxSolveNum) * 100).toString() + "%";
        graph.children[0].textContent = getCurrentNumber(solveNumbers[i]);
        graph.classList.remove("most-recent");
        if (window.pastGuesses[i] == window.currentlyPlayingWord) graph.classList.add("most-recent");
    }
}

function updateStatsFromSolve() {
    if (verbdumIdForToday() == window.currentlyPlayingId) {
        let currentStats = readStats();
        currentStats.roundsPlayed++;
        if (window.pastGuesses.includes(window.currentlyPlayingWord)) {
            currentStats.roundsWon++;
            currentStats.currentStreak++;
            currentStats.maxStreak = Math.max(currentStats.currentStreak, currentStats.maxStreak);
            currentStats.solveNumbers[window.pastGuesses.length - 1]++;
        } else {
            currentStats.currentStreak = 0;
        }

        localStorage.setItem("stats", JSON.stringify(currentStats));
        updateStatsPage();
    }
}

export function addLetter(letter: string) {
    if (window.currentLetterNumber != 5 && isPlaying()) {
        setGuessingLetterInGameBoard(window.currentWordNumber, window.currentLetterNumber, letter);
        window.currentlyGuessingWord += letter;
        window.currentLetterNumber++;
    }
}

export function backspaceLetter() {
    if (window.currentLetterNumber != 0 && isPlaying()) {
        window.currentlyGuessingWord = window.currentlyGuessingWord.slice(0, -1);
        window.currentLetterNumber--;
        setGuessingLetterInGameBoard(window.currentWordNumber, window.currentLetterNumber, "");
    }
}

export function submit() {
    if (isPlaying()) {
        if (window.currentLetterNumber == 5) {
            guessWordInRow(window.currentlyGuessingWord, window.currentlyPlayingWord, window.currentWordNumber);
        } else {
            toastWithMessage("toast-too-few-letters");
            shakeWord(window.currentWordNumber);
        }
    }
}

export function loadGameForDate(date: Date) {
    window.currentWordNumber = 0;
    window.currentLetterNumber = 0;
    window.currentlyGuessingWord = "";
    window.pastGuesses = [];
    window.currentlyPlayingWord = verbdumForDay(date);
    window.currentlyPlayingId = verbdumIdForDay(date);
    clearGameBoard();
    clearKeyboard();
    loadGuesses(window.currentlyPlayingId);
}
