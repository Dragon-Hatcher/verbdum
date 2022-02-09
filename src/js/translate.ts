import {translations} from "./constants/translations";

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
        let text = translations[transId][language];
        if (transId == "answer-was") text += window.currentlyPlayingWord.toUpperCase();
        translatable[i].innerHTML = text;
    }
}

export function getCurrentTextForId(id: string): string {
    return translations[id][window.currentLanguage]
}

export function loadPreferredLanguage() {
    let preferredLanguage = localStorage.getItem("language") as ("latin" | "english" | null);
    translatePage(preferredLanguage ?? "latin");
}

export function toggleTranslation() {
    translatePage(window.currentLanguage == "latin" ? "english" : "latin")
}