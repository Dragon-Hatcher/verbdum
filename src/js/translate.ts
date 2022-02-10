import {translations} from "./constants/translations";
import {deromanize, romanize} from "./roman-numerals";

interface CustomWindow extends Window {
    currentLanguage: "latin" | "english";
    currentlyPlayingWord: string;
}

declare let window: CustomWindow;

export function translatePage(language: "latin" | "english") {
    window.currentLanguage = language;
    localStorage.setItem("language", language);
    let translatable = document.querySelectorAll(`[data-trans]`);
    for (let i = 0; i < translatable.length; i++) {
        let transId = translatable[i].getAttribute("data-trans");
        if (transId == "number") {
            if (/\d+/.test(translatable[i].textContent)) {
                if (language == "latin") translatable[i].textContent = romanize(+translatable[i].textContent)
            } else {
                if (language == "english") translatable[i].textContent = deromanize(translatable[i].textContent).toString()
            }
        } else {
            let text = translations[transId][language];
            let word = window.currentlyPlayingWord;
            if (transId == "answer-was") text += `<a target="_blank" rel="noopener noreferrer" href="https://en.wiktionary.org/wiki/${word.toLowerCase()}#Latin">${word.toUpperCase()}</a>`;
            translatable[i].innerHTML = text;
        }
    }
}

export function getCurrentTextForId(id: string): string {
    return translations[id][window.currentLanguage]
}

export function getCurrentNumber(number: number): string {
    if (window.currentLanguage == "latin") {
        return romanize(number);
    } else {
        return number.toString();
    }
}

export function loadPreferredLanguage() {
    let preferredLanguage = localStorage.getItem("language") as ("latin" | "english" | null);
    translatePage(preferredLanguage ?? "latin");
}

export function toggleTranslation() {
    translatePage(window.currentLanguage == "latin" ? "english" : "latin")
}