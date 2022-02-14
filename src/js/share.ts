import {getColors, isPlaying} from "./game";
import {romanize} from "./roman-numerals";
import {getCurrentTextForId} from "./translate";

let shareElement = document.getElementById("share-button");
shareElement.addEventListener("click", share);

interface CustomWindow extends Window {
    currentWordNumber: number;
    currentLetterNumber: number;
    currentlyGuessingWord: string;
    currentlyPlayingWord: string;
    pastGuesses: Array<string>;
    currentlyPlayingId: number;
}

declare let window: CustomWindow;

function share(event: Event) {
    console.log("running");
    event.stopPropagation();
    copyTextToClipboard(getText());
}

function modalToastWithMessage(messageId: string, fades: boolean = true) {
    let toastBag = document.getElementById("modal-toast-bag");
    let toast = document.createElement("div");
    toast.innerText = getCurrentTextForId(messageId);
    toast.classList.add("toast");
    toast.classList.add("toast-fade");
    toast.setAttribute("data-trans", messageId);
    toastBag.prepend(toast);
    if (fades) setTimeout(() => toastBag.removeChild(toastBag.lastElementChild), 2000)
}

function fallbackCopyTextToClipboard(text) {
    let textArea = document.createElement("textarea");
    textArea.value = text;

    // Avoid scrolling to bottom
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";

    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();

    try {
        let successful = document.execCommand('copy');
        let msg = successful ? 'successful' : 'unsuccessful';
        document.body.removeChild(textArea);
        modalToastWithMessage("copy-success");
    } catch (err) {
        document.body.removeChild(textArea);
        modalToastWithMessage("copy-fail");
    }

}

function copyTextToClipboard(text) {
    if (!navigator.clipboard) {
        fallbackCopyTextToClipboard(text);
    }
    navigator.clipboard.writeText(text).then(function() {
        modalToastWithMessage("copy-success");
    }, function(err) {
        modalToastWithMessage("copy-fail");
    });
}

function getText(): string | null {
    if (!isPlaying()) {
        let colors = window.pastGuesses.map( (x) => getColors(x, window.currentlyPlayingWord));
        let emojiMap = {
            "correct": "🟩",
            "present": "🟨",
            "absent": "⬜",
        };

        let emojis = colors.map(((row) => row.map((x) => emojiMap[x]).join(""))).join("\n");
        let id = romanize(window.currentlyPlayingId);
        let attempts = window.pastGuesses.includes(window.currentlyPlayingWord) ? romanize(window.pastGuesses.length) : '-';

        return `verbdum ${id} ${attempts}/VI\n\n${emojis}`
    }
    return null
}