interface Translation {
    english: string,
    latin: string
}

type TranslationSet = {
    [key: string]: Translation
}

export const translations: TranslationSet = {
    "title": {
        "english": "Verbdum - A daily word game",
        "latin": "Verbdum - Ludus verborum cotidianus",
    },
    "htp-title": {
        "english": "HOW TO PLAY",
        "latin": "QUOMODO LUSUS EST",
    },
    "htp-1": {
        "english": "Guess the <b>VERBDUM</b> in 6 tries or fewer.",
        "latin": "Inveni <b>VERBDUM</b> sex conatis.",
    },
    "htp-2": {
        "english": "Each guess must be a five letter Latin word.",
        "latin": "Quodque verbum continet verbum Latīnum quinque litterarum.",
    },
    "htp-3": {
        "english": "After each guess, the color of the tiles will change to show how close your guess was to the word.",
        "latin": "Post quodque conatum, litterae tingentur ut demonstrent partes rectas conati.",
    },
    "htp-ex": {
        "english": "Examples",
        "latin": "Exempla",
    },
    "htp-ex-1": {
        "english": "The letter A is in the word and in the right place.",
        "latin": "Littera A est in verbō et in locō propio.",
    },
    "htp-ex-2": {
        "english": "The letter T is in the word but not in the right place.",
        "latin": "Littera T est in verbō sed non in locō propio.",
    },
    "htp-ex-3": {
        "english": "The letter E is not in the word.",
        "latin": "Littera E non est in verbō.",
    },
    "htp-4": {
        "english": "There is a new <b>VERBDUM</b> each day.",
        "latin": "Est novum <b>VERBDUM</b> cotidiē.",
    },
    "htp-5": {
        "english": "See acknowledgments.",
        "latin": "Spectā grātiās."
    },
    "stat-title": {
        "english": "STATISTICS",
        "latin": "STATISTICAE",
    },
    "stat-played": {
        "english": "Played",
        "latin": "Lūsus Est",
    },
    "stat-win": {
        "english": "Win %",
        "latin": "% Victoriae",
    },
    "stat-cstreak": {
        "english": "Current Streak",
        "latin": "Ordo Hactenus",
    },
    "stat-mstreak": {
        "english": "Max Streak",
        "latin": "Ordo Maximus",
    },
    "stat-dist": {
        "english": "GUESS DISTRIBUTION",
        "latin": "DISTRIBŪTIО̄ CONATORUM",
    },
    "stat-next": {
        "english": "NEXT VERBDUM",
        "latin": "VERBDUM SEQUENS",
    },
    "current-lang": {
        "english": "English",
        "latin": "Latine",
    },
    "toast-invalid-word": {
        "english": "Not in word list.",
        "latin": "Non in indice verbōrum.",
    },
    "toast-too-few-letters": {
        "english": "Not enough letters.",
        "latin": "Non satis litterarum.",
    },
    "congrats-1": {
        "english": "Genius!",
        "latin": "Optime!",
    },
    "congrats-2": {
        "english": "Magnificent!",
        "latin": "Pulcherrime!",
    },
    "congrats-3": {
        "english": "Impressive!",
        "latin": "Macte!",
    },
    "congrats-4": {
        "english": "Splendid!",
        "latin": "Sophos!",
    },
    "congrats-5": {
        "english": "Great!",
        "latin": "Bene!",
    },
    "congrats-6": {
        "english": "Phew!",
        "latin": "Euge!",
    },
    "answer-was": {
        "english": "The word was: ",
        "latin": "Verbum erat: "
    },
    "share": {
        "english": "SHARE",
        "latin": "COMMŪNICĀ"
    },
    "copy-success": {
        "english": "Copied to clipboard.",
        "latin": "Copied to clipboard."
    },
    "copy-fail": {
        "english": "Couldn't copy to clipboard.",
        "latin": "Couldn't copy to clipboard."
    },
    "now": {
        "english": "Now!",
        "latin": "Nunc!"
    },
    "thanks": {
        "english": `
<div class="modal-title">THANKS</div>
<span class="modal-close-button">
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path fill="#878a8c"
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
    </svg>
</span>
<p>I would like to thank the following people for making this website possible:</p>
<ul>
    <li>Wordle for creating the original game</li>
    <li>My teacher Keegan for help with all things Latin</li>
    <li>My friend Tomás for help with translations</li>
    <li><a target="_blank" rel="noopener noreferrer" href="https://wiktionary.org">wiktionary.org</a> and Wiliam Whitaker’s Words for their excellent Latin dictionaries</li>
    <li><a target="_blank" rel="noopener noreferrer" href="https://thelatinlibrary.com">thelatinlibrary.com</a> for their complete catalog of Latin literature</li>
</ul>
        `,
        "latin": `
<div class="modal-title">GRĀTIAE</div>
<span class="modal-close-button">
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path fill="#878a8c"
              d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"></path>
    </svg>
</span>
<p>Grātiās maximās ago hominibus qui mihi auxilio fuerunt ut facerem pāginam hanc:</p>
<ul>
    <li>Wordle quod fēcit lūdum prīmum</li>
    <li>Magister mihi Cicero quod adiūvit cum omnibus rēbus Latīnīs</li>
    <li>Amicus mihi Tomás quod adiūvit convertere</li>
    <li><a target="_blank" rel="noopener noreferrer" href="https://wiktionary.org">wiktionary.org</a> et William Whitaker’s Words quod habent optima lexicona</li>
    <li><a target="_blank" rel="noopener noreferrer" href="https://thelatinlibrary.com">thelatinlibrary.com</a> quod continet totum corpus Linguae Latinae</li>
</ul>
        `
    }
};