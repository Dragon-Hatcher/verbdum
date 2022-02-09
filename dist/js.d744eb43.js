// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../js/constants/possible-answers.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.possibleAnswers = void 0;
exports.possibleAnswers = ["atque", "etiam", "autem", "neque", "tamen", "nihil", "causa", "omnia", "illud", "omnis", "solum", "posse", "saepe", "satis", "quasi", "multa", "inter", "ipsum", "genus", "verum", "magis", "minus", "nulla", "nomen", "tanta", "summa", "animo", "animi", "aliud", "eadem", "certe", "eodem", "ratio", "multo", "magna", "civis", "locum", "simul", "bello", "locus", "pater", "belli", "vitae", "forte", "urbis", "antea", "virum", "utrum", "paene", "paulo", "prope", "video", "totum", "alter", "prima", "viris", "ferre", "longe", "credo", "multi", "licet", "manus", "recte", "domus", "usque", "legis", "sicut", "primo", "caput", "dicis", "palam", "facti", "nonne", "secum", "adhuc", "nimis", "agere", "poena", "plane", "copia", "velle", "nuper", "ausus", "talis", "prius", "natus", "scire", "caelo", "bella", "forum", "fides", "amici", "motus", "artis", "odium", "terra", "extra", "ullum", "semel", "pacis", "porro", "honos", "sacra", "nulli", "opera", "bonum", "casus", "super", "summi", "parum", "alias", "certa", "culpa", "loqui", "plena", "aetas", "quoad", "medio", "salus", "datum", "tecta", "regis", "novum", "mater", "valde", "navis", "falsa", "solus", "aequo", "actum", "ferri", "longa", "pedes", "quale", "auris", "turpe", "metus", "visum", "bonus", "forma", "media", "munus", "natum", "brevi", "dolor", "malum", "certo", "alius", "hodie", "visus", "valet", "decem", "secus", "sermo", "ultro", "verbi", "acies", "alium", "pauca", "finis", "mirum", "quare", "potui", "supra", "tueri", "vocis", "labor", "sequi", "regno", "parva", "vetus", "grave", "orbis", "sedes", "otium", "curia", "ignis", "aeque", "divum", "telis", "caeli", "digna", "utile", "istuc", "virgo", "debeo", "pudor", "liber", "servi", "imago", "decus", "modus", "stare", "solis", "regia", "nefas", "harum", "hasta", "vitio", "spero", "levis", "audio", "heres", "fundo", "habeo", "telum", "turba", "lumen", "soleo", "aurum", "comes", "mille", "regio", "grata", "furor", "actio", "necne", "facio", "pueri", "annus", "queri", "pauci", "illuc", "amens", "primi", "timor", "cupio", "poeta", "capta", "pugna", "miser", "lucri", "aedis", "fidei", "aurea", "dudum", "eques", "fatum", "libro", "totus", "dicto", "istud", "intra", "agmen", "oculi", "amico", "velut", "mitto", "datus", "legio", "augur", "varia", "falso", "dubia", "coram", "intus", "minor", "error", "facis", "artus", "prior", "nimia", "curae", "servo", "volui", "soror", "famae", "latus", "numen", "acute", "regni", "dives", "recta", "laeta", "umbra", "tergo", "venti", "aptum", "demum", "filia", "venio", "felix", "exire", "funus", "vates", "pedum", "simus", "vulgi", "signo", "firma", "clara", "ratum", "audax", "heros", "libri", "ortus", "aedes", "amnis", "vulgo", "fanum", "emere", "silva", "tenui", "noctu", "doceo", "nemus", "altum", "adire", "fundi", "nasci", "foris", "teneo", "summe", "aequa", "nolle", "decet", "sinus", "gener", "actor", "novus", "natio", "audeo", "litus", "notus", "vivus", "aeris", "corda", "ardua", "saeva", "gessi", "fames", "fugae", "tutum", "donec", "penes", "ortum", "miror", "volgo", "fraus", "laeva", "retro", "memor", "equus", "aequi", "tecti", "miles", "nudus", "muris", "caeca", "digni", "laudo", "pudet", "certi", "vasto", "ponto", "sonus", "clari", "volgi", "labes", "curis", "maris", "lucis", "socer", "villa", "morum", "vivum", "salva", "senex", "vacua", "socio", "pubes", "atqui", "durum", "campi", "acris", "breve", "cruor", "probo", "ultra", "belua", "ducis", "aquae", "falsi", "saxum", "ullus", "missi", "venia", "morae", "sitis", "ocius", "nepos", "ampla", "metuo", "risus", "freta", "emori", "inops", "debui", "notae", "sella", "absit", "timeo", "novem", "agens", "ardor", "quies", "redeo", "nolui", "doleo", "lacus", "notum", "rudis", "porta", "veris", "inane", "furti", "nudum", "libet", "minae", "galea", "divae", "celsa", "opaca", "aptus", "lecta", "arcus", "ludus", "morbi", "ficta", "ruina", "limen", "moneo", "plaga", "verus", "beati", "imber", "lecti", "donum", "socia", "egens", "tutor", "malle", "color", "nempe", "sensi", "habui", "aurae", "ensis", "letum", "umida", "paean", "asper", "pedis", "tarda", "posui", "medii", "tenus", "egere", "lepos", "manis", "sacer", "circo", "anima", "robur", "vario", "actus", "capti", "frugi", "pecus", "nummi", "passi", "latum", "probe", "missa", "canes", "recti", "trans", "altus", "densa", "fulva", "vasta", "obvia", "origo", "acuta", "mundi", "moles", "moror", "natae", "salis", "caeco", "salsa", "vadis", "aegra", "impia", "carum", "amare", "exsul", "fixum", "testi", "obire", "sacro", "orare", "cella", "serva", "circa", "litis", "coepi", "malae", "solvi", "nimbi", "orsus", "pavor", "parce", "fetus", "fusum", "ferox", "raeda", "senis", "undae", "malui", "ultor", "carus", "menti", "aeger", "dicti", "metui", "caeno", "dulce", "togae", "ruere", "illic", "hiems", "pulla", "sacri", "vacuo", "malus", "sedis", "bonae", "tenue", "ferum", "ausum", "firmo", "infra"];
},{}],"../js/generate-seed.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getRNGInRange = exports.setSeed = void 0; //https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript

function xmur3(str) {
  var h = 1779033703 ^ str.length;

  for (var i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353);
    h = h << 13 | h >>> 19;
  }

  return function () {
    h = Math.imul(h ^ h >>> 16, 2246822507);
    h = Math.imul(h ^ h >>> 13, 3266489909);
    return (h ^= h >>> 16) >>> 0;
  };
}

function sfc32(a, b, c, d) {
  return function () {
    a >>>= 0;
    b >>>= 0;
    c >>>= 0;
    d >>>= 0;
    var t = a + b | 0;
    a = b ^ b >>> 9;
    b = c + (c << 3) | 0;
    c = c << 21 | c >>> 11;
    d = d + 1 | 0;
    t = t + d | 0;
    c = c + t | 0;
    return (t >>> 0) / 4294967296;
  };
}

var seedMaker = xmur3("");
var currentRNG = sfc32(seedMaker(), seedMaker(), seedMaker(), seedMaker());

function setSeed(seed) {
  seedMaker = xmur3(seed);
  currentRNG = sfc32(seedMaker(), seedMaker(), seedMaker(), seedMaker());
}

exports.setSeed = setSeed;

function getRNGInRange(min, max) {
  var rng = currentRNG();
  var diff = max - min;
  return min + Math.round(diff * rng);
}

exports.getRNGInRange = getRNGInRange;
},{}],"../js/word-for-day.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.verbdumForToday = exports.verbdumForDay = exports.verbdumIdForToday = exports.verbdumIdForDay = void 0;

var possible_answers_1 = require("./constants/possible-answers");

var generate_seed_1 = require("./generate-seed");

function randomizeWordOrder() {
  (0, generate_seed_1.setSeed)("Verbdum");

  for (var i = 0; i < possible_answers_1.possibleAnswers.length; i++) {
    var swapWith = (0, generate_seed_1.getRNGInRange)(i, possible_answers_1.possibleAnswers.length - 1);
    var hold = possible_answers_1.possibleAnswers[i];
    possible_answers_1.possibleAnswers[i] = possible_answers_1.possibleAnswers[swapWith];
    possible_answers_1.possibleAnswers[swapWith] = hold;
  }
}

randomizeWordOrder();

function verbdumIdForDay(date) {
  var millisInDay = 1000 * 60 * 60 * 24;
  var time = date.getTime();
  return Math.round(time / millisInDay);
}

exports.verbdumIdForDay = verbdumIdForDay;

function verbdumIdForToday() {
  return verbdumIdForDay(new Date());
}

exports.verbdumIdForToday = verbdumIdForToday;

function verbdumForDay(date) {
  return possible_answers_1.possibleAnswers[verbdumIdForDay(date) % possible_answers_1.possibleAnswers.length];
}

exports.verbdumForDay = verbdumForDay;

function verbdumForToday() {
  return verbdumForDay(new Date());
}

exports.verbdumForToday = verbdumForToday;
},{"./constants/possible-answers":"../js/constants/possible-answers.ts","./generate-seed":"../js/generate-seed.ts"}],"../js/constants/allowed-guesses.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.allowedGuesses = void 0;
exports.allowedGuesses = ["abace", "abaci", "abaco", "abave", "abavi", "abavo", "abbas", "abdam", "abdar", "abdas", "abdat", "abdes", "abdet", "abdic", "abdis", "abdit", "abdor", "abduc", "abeam", "abeas", "abeat", "abegi", "abero", "abest", "abibo", "abice", "abici", "abies", "abiga", "abige", "abigi", "abigo", "abiit", "abire", "abiri", "abite", "abito", "abitu", "abivi", "ablue", "ablui", "abluo", "abnue", "abnui", "abnuo", "abole", "abrae", "abram", "abras", "abris", "absae", "absam", "absas", "absim", "absis", "absit", "absos", "absta", "absto", "absum", "absus", "abuio", "abujo", "abusa", "abuse", "abusi", "abuso", "abusu", "abuti", "acate", "acati", "acato", "accie", "accio", "accis", "accit", "accum", "aceam", "aceas", "aceat", "acebo", "acens", "acent", "acera", "acere", "aceri", "acero", "aceta", "acete", "aceti", "aceto", "achor", "aciae", "aciam", "acias", "acida", "acide", "acidi", "acido", "aciei", "aciem", "acies", "aciis", "acina", "acine", "acini", "acino", "aclys", "acnua", "acona", "acope", "acopi", "acopo", "acora", "acore", "acori", "acoro", "acrem", "acres", "acria", "acris", "acrus", "actae", "actam", "actas", "acten", "actes", "actio", "actis", "actor", "actos", "actua", "actui", "actum", "actuo", "actus", "acuam", "acuar", "acuas", "acuat", "acues", "acuet", "acuis", "acuit", "acula", "acuor", "acuta", "acute", "acuti", "acuto", "acutu", "acuum", "adama", "adamo", "adara", "adaro", "addam", "addar", "addas", "addat", "addax", "addes", "addet", "addic", "addis", "addit", "addor", "adduc", "adeam", "adear", "adeas", "adeat", "adede", "adedi", "adedo", "adegi", "ademi", "adeor", "adeps", "adero", "adesa", "adese", "adesi", "adeso", "adest", "adesu", "adfer", "adfla", "adfle", "adflo", "adfor", "adfui", "adhoc", "adhuc", "adibo", "adice", "adici", "adige", "adigi", "adigo", "adiit", "adime", "adimi", "adimo", "adipe", "adipi", "adips", "adire", "adiri", "adita", "adite", "aditi", "adito", "aditu", "adivi", "adlue", "adlui", "adluo", "admeo", "adnas", "adnat", "adnem", "adnes", "adnet", "adnue", "adnui", "adnuo", "adole", "adoni", "adora", "adore", "adori", "adoro", "adque", "adsim", "adsis", "adsit", "adsta", "adsto", "adsue", "adsui", "adsum", "adsuo", "adubi", "adulo", "aduna", "aduno", "adure", "aduri", "aduro", "adusa", "aduse", "adusi", "aduso", "adusu", "aduti", "adyta", "adyti", "adyto", "adytu", "aecor", "aedem", "aedes", "aedis", "aedon", "aeger", "aegis", "aegra", "aegre", "aegri", "aegro", "aenae", "aenam", "aenas", "aenea", "aenee", "aenei", "aeneo", "aenis", "aenos", "aenum", "aenus", "aequa", "aeque", "aequi", "aequo", "aerea", "aeree", "aerei", "aerem", "aereo", "aeres", "aeria", "aerie", "aerii", "aerio", "aeris", "aeros", "aerum", "aesis", "aestu", "aesum", "aetas", "aevis", "aevom", "aevum", "aevus", "affer", "affla", "affle", "afflo", "affor", "afrae", "afram", "afras", "afris", "afros", "afrum", "afuit", "agaga", "agama", "agame", "agami", "agamo", "agant", "agape", "agare", "agaso", "agema", "agens", "agent", "agere", "agger", "agile", "agili", "agina", "agita", "agite", "agito", "agmen", "agnae", "agnam", "agnas", "agnis", "agnos", "agnum", "agnus", "agone", "agoni", "agora", "agris", "agros", "agrum", "agunt", "aiant", "aiens", "aiere", "aiunt", "aivom", "alant", "alapa", "alare", "alata", "alate", "alati", "alato", "albae", "albam", "albas", "albat", "albem", "albeo", "alber", "albes", "albet", "albis", "albor", "albos", "album", "albus", "alcea", "alcem", "alces", "alcis", "alcum", "aleae", "aleam", "aleas", "aleis", "aleno", "alens", "alent", "alere", "algae", "algam", "algas", "algeo", "alges", "alget", "algis", "algor", "algus", "aliae", "aliam", "alias", "alibi", "alica", "aliis", "alima", "alios", "alita", "alite", "aliti", "alito", "alitu", "aliud", "alium", "alius", "allec", "allex", "allia", "allii", "allio", "allue", "allui", "alluo", "almae", "almam", "almas", "almis", "almos", "almum", "almus", "alnis", "alnos", "alnum", "alnus", "aloae", "aloas", "aloen", "aloes", "alois", "alosa", "alpha", "alsit", "altae", "altam", "altar", "altas", "alter", "altio", "altis", "altor", "altos", "altum", "altus", "aluit", "alunt", "aluta", "alvee", "alvei", "alveo", "alvis", "alvos", "alvum", "alvus", "amabo", "amans", "amant", "amara", "amare", "amari", "amaro", "amasi", "amata", "amate", "amati", "amato", "amatu", "amavi", "ambae", "ambas", "ambeo", "ambii", "ambio", "ambis", "ambit", "ambos", "ambra", "amens", "ament", "amere", "amica", "amice", "amici", "amico", "amisi", "amita", "amite", "amiti", "amixi", "amnem", "amnes", "amnis", "amodo", "amoma", "amomi", "amomo", "amone", "amoni", "amore", "amori", "amota", "amote", "amoti", "amoto", "amotu", "amove", "amovi", "ampla", "ample", "ampli", "amplo", "amula", "amyla", "amyli", "amylo", "anale", "anali", "anate", "anati", "ancon", "ancta", "ancte", "ancti", "ancto", "anctu", "ancus", "andes", "anesa", "anesi", "aneso", "angam", "angar", "angas", "angat", "anges", "anget", "angis", "angit", "angor", "angue", "angui", "anile", "anili", "anima", "anime", "animi", "animo", "anisa", "anisi", "aniso", "annas", "annat", "annem", "annes", "annet", "annis", "annon", "annos", "annua", "annue", "annui", "annum", "annuo", "annus", "ansae", "ansam", "ansas", "anser", "ansis", "antae", "antas", "antea", "antei", "antes", "anthe", "anthi", "antho", "antra", "antri", "antro", "anule", "anuli", "anulo", "anuos", "anuum", "anxia", "anxie", "anxii", "anxio", "anxit", "aorta", "apage", "apant", "apare", "apens", "apent", "apere", "aperi", "apero", "aphya", "apica", "apice", "apici", "apiis", "apite", "apito", "apium", "apode", "apodi", "apris", "apros", "aprum", "aptae", "aptam", "aptas", "aptat", "aptem", "apter", "aptes", "aptet", "aptis", "aptor", "aptos", "aptra", "aptum", "aptus", "apunt", "aquae", "aquai", "aquam", "aquas", "aquea", "aquee", "aquei", "aqueo", "aquer", "aquis", "aquor", "arabo", "arans", "arant", "arare", "arari", "araro", "arata", "arate", "arati", "arato", "aratu", "aravi", "arbor", "arbos", "arcae", "arcam", "arcas", "arcem", "arceo", "arces", "arcet", "arcio", "arcis", "arcta", "arcte", "arcti", "arcto", "arcua", "arcui", "arcum", "arcuo", "arcus", "ardae", "ardam", "ardas", "ardea", "ardeo", "ardes", "ardet", "ardis", "ardor", "ardos", "ardua", "ardue", "ardui", "ardum", "arduo", "ardus", "areae", "aream", "areas", "areat", "arebo", "arefi", "areis", "arena", "arens", "arent", "arere", "arete", "areto", "argis", "argon", "argue", "argui", "arguo", "argus", "arida", "aride", "aridi", "arido", "aries", "armas", "armat", "armem", "armer", "armes", "armet", "armis", "armor", "armos", "armum", "armus", "aroma", "arrha", "arsae", "arsam", "arsas", "arsio", "arsis", "arsit", "arsos", "arsum", "arsus", "artae", "artam", "artas", "artat", "artem", "arter", "artes", "artet", "artis", "artor", "artos", "artui", "artum", "artus", "aruit", "arula", "arura", "arvae", "arvam", "arvas", "arvis", "arvix", "arvos", "arvum", "arvus", "asara", "asari", "asaro", "ascia", "ascie", "ascii", "ascio", "ascla", "ascle", "asile", "asili", "asilo", "asina", "asine", "asini", "asino", "asota", "asote", "asoti", "asoto", "asper", "aspis", "aspue", "aspui", "aspuo", "assae", "assam", "assas", "assat", "assem", "asser", "asses", "asset", "assim", "assis", "assit", "assor", "assos", "assue", "assui", "assum", "assuo", "assus", "astas", "astat", "astem", "aster", "astes", "astet", "astra", "astri", "astro", "astui", "astum", "astur", "astus", "asyla", "asyli", "asylo", "atave", "atavi", "atavo", "athee", "athei", "atheo", "atoma", "atome", "atomi", "atomo", "atque", "atqui", "atrae", "atram", "atras", "atria", "atrii", "atrio", "atris", "atros", "atrox", "atrum", "attae", "attam", "attas", "attat", "attis", "aucta", "aucte", "aucti", "aucto", "auctu", "audax", "audeo", "audes", "audet", "audio", "audis", "audit", "aufer", "augeo", "auges", "auget", "augur", "aulae", "aulai", "aulam", "aulas", "aulax", "aulis", "aurae", "auram", "auras", "aurat", "aurea", "auree", "aurei", "aurem", "aureo", "aurer", "aures", "auret", "auris", "auror", "aurum", "ausae", "ausam", "ausas", "ausim", "ausis", "ausos", "ausum", "ausus", "autae", "autam", "autas", "autem", "autis", "autos", "autum", "autus", "auxit", "avara", "avare", "avari", "avaro", "avcta", "avcte", "avcti", "avcto", "aveam", "aveas", "aveat", "avebo", "avehe", "avehi", "aveho", "avena", "avens", "avent", "avere", "avete", "aveto", "avexi", "aviae", "aviam", "avias", "avida", "avide", "avidi", "avido", "aviis", "avios", "avita", "avite", "aviti", "avito", "avium", "avius", "avoca", "avoco", "avola", "avolo", "avtae", "avtam", "avtas", "avtis", "avtos", "avtum", "avtus", "axium", "axone", "axoni", "axula", "aymae", "aymam", "aymas", "aymis", "azota", "azoti", "azoto", "azyma", "azyme", "azymi", "azymo", "bacae", "bacam", "bacar", "bacas", "bacca", "bacis", "badia", "badie", "badii", "badio", "baeto", "balas", "balat", "balba", "balbe", "balbi", "balbo", "balco", "balem", "bales", "balet", "ballo", "banna", "banni", "banno", "banos", "banum", "banus", "barba", "barbi", "barca", "barda", "barde", "bardi", "bardo", "baria", "barii", "bario", "barra", "barre", "barri", "barro", "basem", "bases", "basia", "basii", "basim", "basio", "basis", "bassa", "basse", "bassi", "basso", "basto", "batem", "bates", "batia", "batis", "batos", "batum", "batus", "baxea", "beabo", "beans", "beant", "beare", "beari", "bearo", "beata", "beate", "beati", "beato", "beavi", "beber", "bebra", "bebri", "bebro", "becce", "becci", "becco", "beent", "beere", "begus", "belbe", "belbi", "belbo", "bella", "belle", "belli", "bello", "belua", "belue", "belui", "beluo", "benna", "berae", "beram", "beras", "beris", "beros", "berum", "berus", "betam", "betas", "betat", "betes", "betet", "betis", "betit", "bibam", "bibar", "bibas", "bibat", "bibax", "bibes", "bibet", "bibio", "bibis", "bibit", "bibor", "bidua", "bidue", "bidui", "biduo", "bifax", "bifer", "bigae", "bigam", "bigas", "bigis", "bilem", "biles", "bilis", "bilix", "bimae", "bimam", "bimas", "bimis", "bimos", "bimum", "bimus", "binae", "binam", "binas", "binio", "binis", "binos", "binum", "binus", "bipes", "biria", "birra", "bison", "bivia", "bivie", "bivii", "bivio", "blada", "bladi", "blado", "blida", "boabo", "boans", "boant", "boare", "boari", "boate", "boato", "boatu", "boavi", "bobus", "boent", "boere", "bolis", "bombe", "bombi", "bombo", "bonae", "bonam", "bonas", "bonis", "bonos", "bonum", "bonus", "borea", "boria", "borii", "borio", "bosce", "bosci", "bosco", "botre", "botri", "botro", "bovem", "boves", "bovis", "braca", "brado", "brate", "brati", "brato", "breve", "brevi", "briae", "briam", "brias", "briis", "brisa", "brome", "bromi", "bromo", "bruce", "bruci", "bruco", "bruma", "bruta", "brute", "bruti", "bruto", "bubus", "bucca", "bucco", "bufus", "bulbe", "bulbi", "bulbo", "bulga", "bulla", "bulli", "bullo", "bunia", "bunii", "bunio", "burae", "buram", "buras", "burdo", "burge", "burgi", "burgo", "buris", "burra", "burre", "burri", "burro", "bursa", "busta", "busti", "busto", "buteo", "butio", "buxis", "buxos", "buxum", "buxus", "bysse", "byssi", "bysso", "cabis", "cabos", "cabum", "cabus", "cacas", "cacat", "cacem", "cacer", "caces", "cacet", "cacis", "cacor", "cacos", "cacte", "cacti", "cacto", "cacum", "cacus", "cadam", "cadas", "cadat", "cadeo", "cades", "cadet", "cadis", "cadit", "cados", "cadum", "cadus", "caeca", "caece", "caeci", "caeco", "caede", "caedi", "caedo", "caela", "caele", "caeli", "caelo", "caena", "caeni", "caeno", "caepa", "caepe", "caepi", "caesa", "caese", "caesi", "caeso", "caesu", "cafea", "caium", "calae", "calam", "calas", "calat", "calca", "calce", "calci", "calco", "calda", "calde", "caldi", "caldo", "calem", "caleo", "caler", "cales", "calet", "calfi", "calis", "calix", "calla", "calle", "calli", "callo", "callu", "calor", "calui", "calva", "calve", "calvi", "calvo", "calyx", "camas", "camba", "cambi", "camis", "camos", "campe", "campi", "campo", "camum", "camur", "camus", "canae", "canam", "canar", "canas", "canat", "cande", "candu", "canem", "caneo", "canes", "canet", "canis", "canit", "canna", "canoa", "canon", "canor", "canos", "canta", "cante", "canti", "canto", "cantu", "canua", "canui", "canum", "canus", "capax", "caper", "capio", "capis", "capit", "cappa", "capra", "capri", "capro", "capsa", "capta", "capte", "capti", "capto", "captu", "capus", "caput", "carae", "caram", "caras", "carbo", "cardo", "careo", "cares", "caret", "carex", "carie", "caris", "carne", "carni", "caron", "caros", "carpa", "carpe", "carpi", "carpo", "carre", "carri", "carro", "carta", "carui", "carum", "carus", "casae", "casam", "casas", "casco", "casee", "casei", "caseo", "casia", "casis", "casme", "casmi", "casmo", "cassa", "casse", "cassi", "casso", "casta", "caste", "casti", "casto", "castu", "casui", "casum", "casus", "catae", "catam", "catas", "catis", "catos", "catta", "catte", "catti", "catto", "catum", "catus", "cauda", "caula", "caule", "cauli", "cauma", "caumo", "caupo", "caure", "cauri", "cauro", "causa", "cauta", "caute", "cauti", "cauto", "cautu", "cavae", "cavam", "cavas", "cavat", "cavea", "cavem", "caveo", "caver", "caves", "cavet", "cavia", "cavis", "cavit", "cavor", "cavos", "cavum", "cavus", "cedam", "cedar", "cedas", "cedat", "cedes", "cedet", "cedis", "cedit", "cedor", "cedre", "cedri", "cedro", "celas", "celat", "celem", "celer", "celes", "celet", "celia", "cella", "celor", "celox", "celsa", "celse", "celsi", "celso", "celta", "cenae", "cenam", "cenas", "cenat", "cenem", "cener", "cenes", "cenet", "cenis", "cenit", "ceniz", "cenor", "censa", "cense", "censi", "censo", "censu", "cento", "ceola", "cepae", "cepam", "cepas", "cepis", "cepit", "cerae", "ceram", "ceras", "cerat", "cerdo", "cerea", "ceree", "cerei", "cerem", "cereo", "cerer", "ceres", "ceret", "ceria", "cerii", "cerio", "ceris", "cerne", "cerni", "cerno", "ceror", "cerre", "cerri", "cerro", "certa", "certe", "certi", "certo", "cerui", "cerva", "cerve", "cervi", "cervo", "cessa", "cesse", "cessi", "cesso", "cessu", "ceste", "cesti", "cesto", "cestu", "cetis", "cetos", "cetra", "cette", "cetum", "cetus", "cevae", "cevam", "cevas", "ceveo", "ceves", "cevet", "cevis", "cevit", "cevum", "chala", "chalo", "chama", "chaos", "chara", "chele", "chely", "chema", "cheme", "chore", "chori", "choro", "ciant", "ciare", "cibas", "cibat", "cibem", "ciber", "cibes", "cibet", "cibis", "cibor", "cibos", "cibum", "cibus", "cicer", "cicla", "cicur", "cieam", "ciear", "cieas", "cieat", "ciebo", "ciens", "cient", "cieor", "ciere", "cieri", "ciete", "cieto", "cifra", "cilia", "cilii", "cilio", "cimex", "cimur", "cimus", "cinge", "cingi", "cingo", "cinis", "cinxi", "cipis", "cipos", "cippe", "cippi", "cippo", "cipum", "cipus", "circa", "circe", "circi", "circo", "cirem", "cirer", "cires", "ciret", "ciris", "cirre", "cirri", "cirro", "cisia", "cisii", "cisio", "cista", "citae", "citam", "citas", "citat", "citem", "citer", "cites", "citet", "citis", "citor", "citos", "citra", "citri", "citro", "citum", "citur", "citus", "ciunt", "civem", "cives", "civis", "civit", "clade", "cladi", "clama", "clamo", "clapo", "clara", "clare", "clari", "claro", "clava", "clave", "clavi", "clavo", "clepe", "clepi", "clepo", "clere", "cleri", "clero", "clima", "clina", "clino", "clive", "clivi", "clivo", "cloda", "clode", "clodi", "clodo", "cluam", "cluar", "cluas", "cluat", "clude", "cludi", "cludo", "clueo", "clues", "cluet", "cluis", "cluit", "clune", "cluni", "cluor", "clura", "clusa", "cluse", "clusi", "cluso", "clusu", "cluum", "cnisa", "coale", "coali", "coalo", "coaxa", "coaxo", "cocam", "cocar", "cocas", "cocat", "cocca", "cocci", "cocco", "coces", "cocet", "cocio", "cocis", "cocit", "cocor", "cocos", "cocta", "cocte", "cocti", "cocto", "coctu", "cocum", "cocus", "codae", "codam", "codas", "codex", "codia", "codis", "codon", "coeam", "coear", "coeas", "coeat", "coegi", "coela", "coele", "coeli", "coelo", "coeme", "coemi", "coemo", "coena", "coeno", "coens", "coeor", "coepe", "coepi", "coetu", "cogam", "cogar", "cogas", "cogat", "coges", "coget", "cogis", "cogit", "cogor", "cohis", "cohum", "coibo", "coice", "coiit", "coire", "coiri", "coite", "coito", "coitu", "coivi", "colam", "colar", "colas", "colat", "colee", "colei", "colem", "coleo", "coler", "coles", "colet", "colis", "colit", "colla", "colle", "colli", "collo", "colon", "color", "colos", "colui", "colum", "colus", "colyx", "comae", "comam", "comar", "comas", "comat", "comem", "comes", "comet", "comia", "comis", "comit", "comma", "commi", "comor", "conca", "conci", "conde", "condi", "condo", "coner", "confi", "conis", "conor", "conos", "conte", "conti", "conto", "conum", "conus", "copia", "copis", "copta", "copte", "copti", "copto", "coqua", "coque", "coqui", "coquo", "corae", "coram", "corax", "corbe", "corbi", "corda", "corde", "cordi", "cordo", "corem", "cores", "coria", "corii", "corio", "coris", "corna", "corne", "corni", "corno", "cornu", "coros", "corru", "corsa", "corse", "corsi", "corso", "corte", "corti", "corum", "corus", "corve", "corvi", "corvo", "cosio", "cosse", "cossi", "cosso", "costa", "cotem", "cotes", "cotho", "cotis", "cotta", "cotum", "cousa", "couse", "cousi", "couso", "cousu", "couti", "coxae", "coxam", "coxas", "coxis", "coxit", "coxus", "crama", "crami", "cramo", "crate", "crati", "creas", "creat", "crede", "credi", "credo", "creem", "creer", "crees", "creet", "crema", "cremo", "crena", "creor", "crepa", "crepo", "creta", "crete", "creti", "creto", "cretu", "crevi", "crina", "crine", "crini", "crino", "crisa", "criso", "croca", "croce", "croci", "croco", "cruce", "cruci", "cruda", "crude", "crudi", "crudo", "cruor", "crura", "crure", "cruri", "cubas", "cubat", "cubem", "cubes", "cubet", "cubis", "cubos", "cubui", "cubum", "cubus", "cucio", "cucus", "cudam", "cudar", "cudas", "cudat", "cudes", "cudet", "cudis", "cudit", "cudor", "cuiae", "cuiam", "cuias", "cuiis", "cuios", "cuium", "cuius", "cujus", "culee", "culei", "culeo", "culex", "culis", "culme", "culmi", "culmo", "culos", "culpa", "culpo", "culta", "culte", "culti", "culto", "cultu", "culum", "culus", "cumba", "cummi", "cunae", "cunam", "cunas", "cunea", "cunee", "cunei", "cuneo", "cunio", "cunis", "cunne", "cunni", "cunno", "cupae", "cupam", "cupas", "cupio", "cupis", "cupit", "cuppa", "cupra", "cupri", "cupro", "curae", "curam", "curas", "curat", "curem", "curer", "cures", "curet", "curia", "curii", "curio", "curis", "curor", "curre", "curri", "curro", "curru", "cursa", "curse", "cursi", "curso", "cursu", "curta", "curte", "curti", "curto", "curva", "curve", "curvi", "curvo", "cusae", "cusam", "cusas", "cusis", "cusos", "cusum", "cusus", "cutem", "cutes", "cutim", "cutis", "cyate", "cyati", "cyato", "cycle", "cycli", "cyclo", "cycne", "cycni", "cycno", "cygne", "cygni", "cygno", "cymae", "cymam", "cymas", "cymba", "cymis", "cyphi", "dabam", "dabar", "dabas", "dabat", "dabis", "dabit", "dabla", "dabor", "dacra", "damia", "damii", "damio", "damma", "damna", "damni", "damno", "damur", "damus", "danda", "dande", "dandi", "dando", "dante", "danti", "danto", "dapem", "dapes", "dapis", "dapum", "darem", "darer", "dares", "daret", "daris", "dasea", "datae", "datam", "datas", "datio", "datis", "dator", "datos", "datui", "datum", "datur", "datus", "dauca", "dauci", "dauco", "debeo", "debes", "debet", "debui", "decas", "decem", "decet", "decor", "decus", "dedam", "dedar", "dedas", "dedat", "dedes", "dedet", "dedis", "dedit", "dedor", "deduc", "dedux", "deeam", "deeas", "deeat", "deero", "deest", "defer", "defio", "defis", "defit", "defle", "defui", "degam", "degas", "degat", "deges", "deget", "degis", "degit", "deibo", "deice", "deici", "deire", "deite", "deito", "deiva", "deleo", "deles", "delet", "demam", "demar", "demas", "demat", "demes", "demet", "demis", "demit", "demon", "demor", "demos", "demum", "demur", "demus", "denae", "denas", "denis", "denos", "densa", "dense", "densi", "denso", "dente", "denti", "denum", "denuo", "deple", "depse", "depsi", "depso", "deris", "deses", "desii", "desim", "desis", "desit", "desum", "detis", "detur", "deunx", "deure", "deuri", "deuro", "deusa", "deuse", "deusi", "deuso", "deusu", "deuti", "devia", "devie", "devii", "devio", "dicam", "dicar", "dicas", "dicat", "dicax", "dicem", "dices", "dicet", "dicio", "dicis", "dicit", "dicor", "dicta", "dicte", "dicti", "dicto", "dictu", "didam", "didar", "didas", "didat", "dides", "didet", "didis", "didit", "didor", "diduc", "dieta", "digma", "digna", "digne", "digni", "digno", "dilue", "dilui", "diluo", "dirae", "diram", "diras", "diris", "diros", "dirue", "dirui", "dirum", "diruo", "dirus", "disce", "disci", "disco", "dista", "disto", "ditas", "ditat", "ditem", "diter", "dites", "ditet", "ditia", "ditio", "ditis", "ditor", "divae", "divam", "divas", "dives", "divis", "divos", "divum", "divus", "dixit", "dixti", "doana", "doceo", "doces", "docet", "docis", "docta", "docte", "docti", "docto", "doctu", "docui", "dogma", "dolas", "dolat", "dolba", "dolem", "doleo", "doler", "doles", "dolet", "dolia", "dolii", "dolio", "dolis", "dolor", "dolos", "dolsa", "dolui", "dolum", "dolus", "domas", "domat", "domem", "domer", "domes", "domet", "domis", "domna", "domne", "domni", "domno", "domor", "domos", "domui", "domum", "domus", "donas", "donat", "donax", "donec", "donem", "doner", "dones", "donet", "donis", "donor", "donum", "doris", "dormi", "dorsa", "dorsi", "dorso", "dosem", "dosim", "dosis", "dotas", "dotat", "dotem", "doter", "dotes", "dotet", "dotis", "dotor", "dotum", "draco", "drama", "drino", "dromo", "drupa", "duale", "duali", "dubia", "dubie", "dubii", "dubio", "ducam", "ducar", "ducas", "ducat", "ducem", "duces", "ducet", "ducis", "ducit", "ducor", "ducta", "ducte", "ducti", "ducto", "ductu", "ducum", "dudum", "dulca", "dulce", "dulci", "dulco", "dumis", "dumos", "dumum", "dumus", "duona", "duone", "duoni", "duono", "dupla", "duple", "dupli", "duplo", "durae", "duram", "duras", "durat", "durem", "durer", "dures", "duret", "duris", "duror", "duros", "durui", "durum", "durus", "duxit", "duxti", "eadem", "eamur", "eamus", "eapse", "earis", "earum", "eatis", "eatur", "ebene", "ebeni", "ebeno", "ebibe", "ebibi", "ebibo", "ebora", "ebore", "ebori", "ebria", "ebrie", "ebrii", "ebrio", "ebula", "ebuli", "ebulo", "eccui", "eccum", "ecfer", "echui", "echum", "echus", "ecqua", "ecqui", "ecquo", "edaci", "edant", "edare", "edens", "edent", "edere", "edero", "edice", "edici", "edico", "edidi", "edint", "edita", "edite", "editi", "edito", "editu", "edixi", "edoce", "educa", "educe", "educi", "educo", "edule", "eduli", "edunt", "eduxi", "effer", "effla", "effle", "efflo", "effor", "egeam", "egeas", "egeat", "egebo", "egena", "egene", "egeni", "egeno", "egens", "egent", "egere", "egeri", "egero", "egete", "egeto", "egitu", "eguit", "egula", "eicio", "eicis", "eicit", "eidem", "eieci", "eiera", "eiero", "eiius", "eiula", "eiulo", "eiura", "eiuro", "ejeci", "ejice", "ejici", "elabi", "elata", "elate", "elati", "elato", "elatu", "elegi", "eleva", "elevo", "elice", "elici", "elide", "elidi", "elido", "elige", "eligi", "eligo", "elima", "elimo", "elisa", "elise", "elisi", "eliso", "elisu", "elixa", "elixe", "elixi", "elixo", "ellum", "eloca", "eloco", "eluam", "eluar", "eluas", "eluat", "eluce", "elucu", "elude", "eludi", "eludo", "elues", "eluet", "eluge", "elugu", "eluis", "eluit", "eluor", "elusa", "eluse", "elusi", "eluso", "elusu", "eluxi", "emaci", "emana", "emane", "emano", "emant", "emare", "emens", "ement", "emere", "emero", "emica", "emico", "emine", "eminu", "emisi", "emite", "emito", "emone", "emori", "emota", "emote", "emoti", "emoto", "emotu", "emove", "emovi", "empta", "empte", "empti", "empto", "emptu", "emuni", "emunt", "emuta", "emuto", "emyda", "emyde", "emydi", "enata", "enate", "enati", "enato", "enatu", "eneca", "eneco", "enite", "eniti", "enixa", "enixe", "enixi", "enixo", "enixu", "enoda", "enodo", "enota", "enoto", "ensem", "enses", "ensis", "entem", "entes", "entia", "entis", "entum", "enube", "enubi", "enubo", "enula", "eocle", "eodem", "eorum", "epica", "epice", "epici", "epico", "epope", "epopi", "epops", "epota", "epote", "epoti", "epoto", "epotu", "epula", "epuli", "epulo", "equae", "equam", "equas", "eques", "equis", "equos", "equum", "equus", "erade", "eradi", "erado", "erant", "erasa", "erase", "erasi", "eraso", "erasu", "erbia", "erbii", "erbio", "erema", "ereme", "eremi", "eremo", "erepe", "erepo", "erexi", "erica", "erice", "erige", "erigi", "erigo", "erile", "erint", "eripe", "eripi", "erode", "erodi", "erodo", "eroga", "erogo", "erosa", "erose", "erosi", "eroso", "erosu", "erras", "errat", "errem", "errer", "erres", "erret", "error", "eruam", "eruar", "eruas", "eruat", "eruca", "erudi", "erues", "eruet", "erugo", "eruis", "eruit", "erunt", "eruor", "erupi", "eruta", "erute", "eruti", "eruto", "erutu", "ervis", "ervum", "escae", "escam", "escas", "escis", "essem", "esses", "esset", "estis", "estur", "esura", "esure", "esuri", "esuro", "ethos", "etiam", "etyma", "etymi", "etymo", "euhoe", "eunda", "eunde", "eundi", "eundo", "eunte", "eunti", "eunto", "euris", "euroa", "euroe", "euroi", "euroo", "euros", "eurum", "eurus", "evade", "evadi", "evado", "evasa", "evase", "evasi", "evaso", "evasu", "evehe", "evehi", "eveho", "eveni", "evexa", "evexe", "evexi", "evexo", "evici", "evira", "eviro", "evita", "evito", "evoca", "evoco", "evola", "evolo", "evome", "evomi", "evomo", "exara", "exaro", "excie", "excio", "excis", "excit", "exeam", "exear", "exeas", "exeat", "exede", "exedi", "exedo", "exegi", "exemi", "exeor", "exere", "exeri", "exero", "exesa", "exese", "exeso", "exesu", "exibo", "exies", "exiet", "exige", "exigi", "exigo", "exiit", "exile", "exili", "exime", "eximi", "eximo", "exire", "exiri", "exita", "exite", "exiti", "exito", "exitu", "exivi", "exlex", "exora", "exoro", "exosa", "exose", "exosi", "exoso", "expia", "expio", "exple", "expue", "expui", "expuo", "exsta", "exsto", "exsul", "extas", "extat", "extem", "exter", "extes", "extet", "extis", "extra", "extum", "exuam", "exuar", "exuas", "exuat", "exues", "exuet", "exuis", "exuit", "exula", "exule", "exuli", "exulo", "exuor", "exure", "exuri", "exuro", "exuta", "exute", "exuti", "exuto", "exutu", "fabae", "fabam", "fabar", "fabas", "faber", "fabis", "fabor", "fabra", "fabri", "fabro", "facem", "faces", "facia", "facie", "facio", "facis", "facit", "facta", "facte", "facti", "facto", "factu", "facum", "faece", "faeci", "faele", "faeli", "faena", "faeni", "faeno", "faete", "faetu", "fagea", "fagis", "fagos", "fagum", "fagus", "faice", "faici", "falae", "falam", "falas", "falce", "falci", "falco", "falis", "falle", "falli", "fallo", "falsa", "false", "falsi", "falso", "famae", "famam", "famas", "famem", "fames", "famex", "famis", "famur", "fanda", "fande", "fandi", "fando", "fanis", "fante", "fanti", "fanum", "farci", "farer", "fario", "faris", "farne", "farni", "farno", "farra", "farre", "farri", "farsi", "farta", "farte", "farti", "farto", "fartu", "fasce", "fasci", "fassa", "fasse", "fassi", "fasso", "fassu", "fasta", "faste", "fasti", "fasto", "fastu", "fatae", "fatam", "fatas", "fatis", "fator", "fatos", "fatua", "fatue", "fatui", "fatum", "fatuo", "fatur", "fatus", "fauce", "fauci", "fauta", "faute", "fauti", "fauto", "fautu", "faveo", "faves", "favet", "favis", "favit", "favor", "favos", "favum", "favus", "febre", "febri", "fecem", "feces", "fecis", "fecit", "fecum", "felem", "feles", "felio", "felis", "felit", "felix", "fella", "felle", "felli", "fello", "femur", "fendo", "fenis", "fenum", "fenus", "feoda", "feodi", "feodo", "ferae", "feram", "ferar", "feras", "ferat", "ferax", "feres", "feret", "feria", "ferio", "feris", "ferit", "ferma", "ferme", "feror", "feros", "ferox", "ferra", "ferre", "ferri", "ferro", "ferta", "ferte", "ferti", "ferto", "ferum", "ferus", "ferve", "fessa", "fesse", "fessi", "fesso", "festa", "feste", "festi", "festo", "fetae", "fetam", "fetas", "fetat", "fetem", "feteo", "feter", "fetes", "fetet", "fetis", "fetor", "fetos", "fetui", "fetum", "fetur", "fetus", "feuda", "feudi", "feudo", "fiala", "fiant", "fiber", "fibra", "fibri", "fibro", "ficco", "ficem", "fices", "ficis", "ficos", "ficta", "ficte", "ficti", "ficto", "fictu", "ficui", "ficum", "ficus", "fidae", "fidam", "fidas", "fidat", "fidei", "fidem", "fides", "fidet", "fidis", "fidit", "fidos", "fidum", "fidus", "fient", "fieri", "figam", "figar", "figas", "figat", "figes", "figet", "figis", "figit", "figor", "filia", "filie", "filii", "filio", "filis", "filix", "filum", "fimis", "fimos", "fimum", "fimus", "finde", "findi", "findo", "finem", "fines", "finge", "fingi", "fingo", "finio", "finis", "finit", "finxi", "fiola", "firma", "firme", "firmi", "firmo", "fisae", "fisam", "fisas", "fisce", "fisci", "fisco", "fisis", "fisos", "fissa", "fisse", "fissi", "fisso", "fissu", "fisum", "fisus", "fitis", "fiunt", "fixae", "fixam", "fixas", "fixis", "fixit", "fixos", "fixum", "fixus", "flabo", "flans", "flant", "flare", "flari", "flaro", "flata", "flate", "flato", "flatu", "flava", "flave", "flavi", "flavo", "flavu", "fleam", "fleas", "fleat", "flebo", "flens", "flent", "flere", "fleri", "fleta", "flete", "fleti", "fleto", "fletu", "flevi", "flexa", "flexe", "flexi", "flexo", "flexu", "fligo", "flore", "flori", "floru", "fluam", "fluas", "fluat", "flues", "fluet", "fluis", "fluit", "fluor", "fluta", "fluvi", "fluxa", "fluxe", "fluxi", "fluxo", "fluxu", "focis", "focos", "focum", "focus", "fodio", "fodis", "fodit", "foeda", "foede", "foedi", "foedo", "foena", "foeni", "foeno", "foeta", "foete", "foeti", "foeto", "foetu", "folia", "folii", "folio", "folle", "folli", "fomes", "fonte", "fonti", "foras", "forat", "forda", "forem", "forer", "fores", "foret", "foria", "foris", "forma", "forme", "formi", "formo", "forne", "forni", "forno", "foror", "forte", "forti", "forum", "forus", "fossa", "fosse", "fossi", "fosso", "fossu", "fotae", "fotam", "fotas", "fotis", "fotos", "fotum", "fotus", "fovea", "foveo", "foves", "fovet", "fovit", "fraga", "fragi", "frago", "fraus", "fraxo", "fregi", "freme", "fremi", "fremo", "frena", "freni", "freno", "fresa", "frese", "fresi", "freso", "fresu", "freta", "frete", "freti", "freto", "fretu", "frias", "friat", "frica", "frico", "friem", "frier", "fries", "friet", "frige", "frigi", "frigo", "frior", "frixa", "frixe", "frixi", "frixo", "frons", "fruar", "fruge", "frugi", "fruor", "fucas", "fucat", "fucem", "fucer", "fuces", "fucet", "fucis", "fucor", "fucos", "fucum", "fucus", "fudit", "fuere", "fuero", "fufae", "fugae", "fugam", "fugas", "fugat", "fugax", "fugem", "fuger", "fuges", "fuget", "fugia", "fugii", "fugio", "fugis", "fugit", "fugor", "fulci", "fulge", "fulgo", "fulgu", "fullo", "fulsi", "fulta", "fulte", "fulti", "fulto", "fultu", "fulva", "fulve", "fulvi", "fulvo", "fumas", "fumat", "fumea", "fumee", "fumei", "fumem", "fumeo", "fumer", "fumes", "fumet", "fumis", "fumor", "fumos", "fumum", "fumus", "funda", "funde", "fundi", "fundo", "funem", "funes", "funge", "fungi", "fungo", "funis", "funus", "furam", "furas", "furat", "furax", "furca", "furem", "furer", "fures", "furet", "furia", "furio", "furis", "furit", "furne", "furni", "furno", "furor", "furta", "furti", "furto", "furui", "furum", "furva", "furve", "furvi", "furvo", "fusae", "fusam", "fusas", "fusca", "fusce", "fusci", "fusco", "fusio", "fusis", "fusos", "fusta", "fuste", "fusti", "fusum", "fusus", "futis", "futue", "futui", "futuo", "gaesa", "gaesi", "gaeso", "galba", "galbe", "galbi", "galbo", "galea", "galeo", "galla", "galle", "galli", "gallo", "gamba", "ganea", "ganei", "ganeo", "ganni", "ganta", "garba", "garis", "garra", "garri", "garum", "gasia", "gasii", "gasio", "gasis", "gasum", "gaude", "gavia", "gazae", "gazam", "gazas", "gazis", "gelas", "gelat", "gelem", "geler", "geles", "gelet", "gelor", "gelum", "gelus", "gemam", "gemar", "gemas", "gemat", "gemes", "gemet", "gemis", "gemit", "gemma", "gemmo", "gemor", "gemui", "genae", "genam", "genas", "gener", "genii", "genio", "genis", "gente", "genti", "genua", "genui", "genus", "geram", "gerar", "geras", "gerat", "geres", "geret", "geris", "gerit", "geror", "gerro", "gessi", "gesta", "geste", "gesti", "gesto", "gestu", "gibba", "gibbe", "gibbi", "gibbo", "gigas", "gigne", "gigni", "gigno", "gillo", "gilva", "gilve", "gilvi", "gilvo", "girba", "gladi", "glans", "gleba", "glena", "glire", "gliri", "globe", "globi", "globo", "gloci", "glore", "glori", "glosa", "glube", "glubi", "glubo", "gluma", "gluti", "gnara", "gnare", "gnari", "gnaro", "gnata", "gnate", "gnati", "gnato", "gnatu", "gnava", "gnave", "gnavi", "gnavo", "gnota", "gnote", "gnoti", "gnoto", "gnotu", "gnovi", "gobii", "gobio", "gomor", "gotha", "gothe", "gothi", "gotho", "grabo", "gradi", "gradu", "grana", "grani", "grano", "grata", "grate", "grati", "grato", "grava", "grave", "gravi", "gravo", "grega", "grege", "gregi", "grego", "groma", "grosa", "gruem", "grues", "gruis", "grume", "grumi", "grumo", "gruum", "grype", "grypi", "gryps", "gufus", "gulae", "gulam", "gulas", "gulis", "gumia", "gummi", "gunna", "gurde", "gurdi", "gurdo", "gurui", "gurum", "gurus", "gusta", "gusto", "gustu", "gutis", "gutos", "gutta", "gutte", "gutti", "gutto", "gutum", "gutus", "gyras", "gyrat", "gyrem", "gyrer", "gyres", "gyret", "gyris", "gyror", "gyros", "gyrum", "gyrus", "habeo", "habes", "habet", "habui", "hadra", "haede", "haedi", "haedo", "haere", "haesi", "haesu", "hahae", "haima", "hairo", "halas", "halat", "halem", "haler", "hales", "halet", "halla", "halle", "halli", "hallo", "halor", "hamae", "hamam", "hamas", "hamis", "hamos", "hamum", "hamus", "harae", "haram", "haras", "haris", "harpa", "harpe", "harum", "hasta", "hauri", "hausi", "haveo", "hebeo", "hebes", "hebet", "hedis", "hedos", "hedum", "hedus", "helia", "helii", "helio", "helix", "helme", "helmi", "helmo", "helva", "helve", "helvi", "helvo", "hendo", "hepar", "herae", "herai", "heram", "heras", "herba", "hereo", "heres", "heret", "heris", "herna", "heroa", "heroe", "heroi", "heroo", "heros", "herus", "hesae", "hesam", "hesas", "hesis", "hesit", "hesos", "hesum", "hesus", "hexas", "hiabo", "hians", "hiant", "hiare", "hiari", "hiate", "hiato", "hiatu", "hiavi", "hibix", "hibus", "hiema", "hieme", "hiemi", "hiemo", "hiems", "hient", "hilis", "hilum", "hilus", "hinne", "hinni", "hinno", "hirce", "hirci", "hirco", "hirpe", "hirpi", "hirpo", "hirri", "hirta", "hirte", "hirti", "hirto", "hisce", "hisci", "hisco", "hodie", "hoede", "hoedi", "hoedo", "holus", "honor", "honos", "honta", "horae", "horam", "horas", "horia", "horis", "horna", "horno", "horre", "horte", "horti", "horto", "hortu", "horum", "hosae", "hosce", "hoste", "hosti", "huias", "huius", "hujas", "hujus", "humas", "humat", "humem", "humeo", "humer", "humes", "humet", "humis", "humor", "humos", "humum", "humus", "hyale", "hyali", "hyalo", "hydra", "hyeme", "hyemi", "hyems", "hygra", "hylae", "hylas", "hylen", "hyles", "hylis", "hymne", "hymni", "hymno", "iacea", "iaceo", "iaces", "iacet", "iacio", "iacis", "iacit", "iacta", "iacte", "iacti", "iacto", "iactu", "iacui", "iambe", "iambi", "iambo", "ianis", "ianos", "ianua", "ianum", "ianus", "ibant", "ibare", "ibere", "ibice", "ibici", "ibide", "ibidi", "ibium", "ibunt", "icant", "icare", "icens", "icent", "icere", "icero", "iciam", "iciar", "icias", "iciat", "icies", "iciet", "icior", "icite", "icito", "icone", "iconi", "ictae", "ictam", "ictas", "ictis", "ictos", "ictui", "ictum", "ictus", "icunt", "ideae", "ideam", "ideas", "ideis", "idola", "idoli", "idolo", "iduum", "iduus", "iecit", "iecto", "iecur", "ienta", "iento", "ieram", "ieras", "ierat", "ierim", "ieris", "ierit", "ignea", "ignee", "ignei", "ignem", "igneo", "ignes", "ignia", "ignio", "ignis", "ignit", "iidem", "iimus", "iisse", "ileos", "ileum", "ilice", "ilici", "ilico", "ilium", "illac", "illae", "illam", "illas", "illic", "illim", "illis", "illoc", "illos", "illuc", "illud", "illui", "illum", "imago", "imber", "imbre", "imbri", "imbue", "imbui", "imbuo", "imini", "imita", "imito", "impar", "impes", "impia", "impie", "impii", "impio", "imple", "impos", "imula", "imule", "imuli", "imulo", "inane", "inani", "inara", "inaro", "incae", "incam", "incas", "incis", "incos", "incum", "incus", "indae", "indam", "indar", "indas", "indat", "indes", "indet", "index", "india", "indic", "indii", "indio", "indis", "indit", "indor", "indos", "induc", "indue", "indui", "indum", "induo", "indus", "ineam", "inear", "ineas", "ineat", "ineor", "inero", "iners", "inest", "infer", "infla", "inflo", "infra", "infui", "inger", "inhia", "inhio", "inibi", "inibo", "inice", "inici", "iniet", "iniit", "inire", "iniri", "inita", "inite", "initi", "inito", "initu", "inivi", "innue", "innui", "innuo", "inope", "inopi", "inops", "inpar", "inpes", "inple", "inque", "inrue", "inrui", "inruo", "insim", "insis", "insit", "insta", "insto", "insue", "insui", "insum", "insuo", "inter", "intra", "intro", "intus", "inula", "inure", "inuri", "inuro", "invia", "invie", "invii", "invio", "iocas", "iocat", "iocem", "iocer", "ioces", "iocet", "iocis", "iocor", "iocos", "iocum", "iocur", "iocus", "iodia", "iodii", "iodio", "iodis", "iodum", "ipsae", "ipsam", "ipsas", "ipsis", "ipsos", "ipsum", "irata", "irate", "irati", "irato", "iratu", "irent", "irere", "irier", "irina", "irine", "irini", "irino", "irrue", "irrui", "irruo", "isdem", "issem", "isses", "isset", "istac", "istae", "istam", "istas", "istic", "istis", "istoc", "istos", "istuc", "istud", "istum", "itala", "itale", "itali", "italo", "itera", "itero", "itote", "itura", "iture", "ituri", "ituro", "ituum", "iubae", "iubam", "iubar", "iubas", "iubeo", "iubes", "iubet", "iubis", "iudex", "iugas", "iugat", "iugem", "iuger", "iuges", "iuget", "iugia", "iugis", "iugor", "iugum", "iugus", "iulia", "iulie", "iulii", "iulio", "iulis", "iulos", "iulum", "iulus", "iunce", "iunci", "iunco", "iunge", "iungi", "iungo", "iunia", "iunie", "iunii", "iunio", "iunix", "iunxi", "iuras", "iurat", "iurem", "iurer", "iures", "iuret", "iurga", "iurgi", "iurgo", "iuris", "iuror", "iurum", "iussa", "iusse", "iussi", "iusso", "iussu", "iusta", "iuste", "iusti", "iusto", "iusum", "iutae", "iutam", "iutas", "iutis", "iutos", "iutum", "iutus", "iuvas", "iuvat", "iuvem", "iuver", "iuves", "iuvet", "iuvit", "iuvor", "iuxta", "iynge", "iyngi", "jacea", "jaceo", "jaces", "jacet", "jacio", "jacis", "jacit", "jacta", "jacte", "jacti", "jacto", "jactu", "jacui", "janua", "jecit", "jecur", "jenta", "jento", "jocas", "jocat", "jocem", "jocer", "joces", "jocet", "jocis", "jocor", "jocos", "jocum", "jocur", "jocus", "jubar", "jubeo", "jubes", "jubet", "judex", "jugas", "jugat", "jugem", "juger", "juges", "juget", "jugis", "jugor", "jugum", "jugus", "julis", "julos", "julum", "julus", "junce", "junci", "junco", "junge", "jungi", "jungo", "junix", "junxi", "juras", "jurat", "jurem", "jurer", "jures", "juret", "juris", "juror", "jurum", "jussa", "jusse", "jussi", "jusso", "jussu", "justa", "juste", "justi", "justo", "jutae", "jutam", "jutas", "jutis", "jutos", "jutum", "jutus", "juvas", "juvat", "juvem", "juver", "juves", "juvet", "juvit", "juvor", "juxta", "kalia", "kalii", "kalio", "koppa", "labar", "labas", "labat", "labda", "labem", "labeo", "laber", "labes", "labet", "labia", "labii", "labio", "labis", "labor", "labra", "labri", "labro", "lacca", "lacer", "lacio", "lacis", "lacit", "lacta", "lacte", "lacti", "lacto", "lacui", "lacum", "lacus", "laede", "laedi", "laedo", "laena", "laesa", "laese", "laesi", "laeso", "laesu", "laeta", "laete", "laeti", "laeto", "laeva", "laeve", "laevi", "laevo", "laica", "laice", "laici", "laico", "laina", "lallo", "lamae", "lamam", "lamas", "lambe", "lambi", "lambo", "lamia", "lamis", "lampo", "lanae", "lanam", "lanas", "lance", "lanci", "lanea", "lanee", "lanei", "laneo", "langa", "lania", "lanie", "lanii", "lanio", "lanis", "lapis", "lappa", "lapsa", "lapse", "lapsi", "lapso", "lapsu", "larda", "lardi", "lardo", "larem", "lares", "larga", "large", "largi", "largo", "laris", "larix", "laros", "larum", "larus", "larva", "larvo", "lasar", "laser", "lassa", "lasse", "lassi", "lasso", "latae", "latam", "latas", "lateo", "later", "lates", "latet", "latex", "latio", "latis", "lator", "latos", "latra", "latro", "latui", "latum", "latus", "lauda", "laude", "laudi", "laudo", "laura", "laure", "lauri", "lauro", "lausa", "lauta", "laute", "lauti", "lauto", "lavas", "lavat", "lavem", "laver", "laves", "lavet", "lavit", "lavor", "laxae", "laxam", "laxas", "laxat", "laxem", "laxer", "laxes", "laxet", "laxis", "laxor", "laxos", "laxum", "laxus", "lebes", "lecta", "lecte", "lecti", "lecto", "lectu", "legam", "legar", "legas", "legat", "legem", "leger", "leges", "leget", "legio", "legis", "legit", "legor", "legum", "lemma", "lemme", "lemmi", "lemmo", "lenae", "lenam", "lenas", "lenem", "lenes", "lenia", "lenio", "lenis", "lenit", "lenta", "lente", "lenti", "lento", "leone", "leoni", "lepor", "lepos", "lepra", "lepta", "lepte", "lepti", "lepto", "lepus", "leria", "leros", "letas", "letat", "letem", "leter", "letes", "letet", "letis", "letor", "letum", "leuca", "leuga", "levae", "levam", "levas", "levat", "levem", "lever", "leves", "levet", "levia", "levir", "levis", "levit", "levor", "levos", "levum", "levus", "lexis", "liabo", "lians", "liant", "liare", "liari", "liata", "liate", "liati", "liato", "liatu", "liavi", "libas", "libat", "libem", "liber", "libes", "libet", "libis", "libor", "libos", "libra", "libri", "libro", "libum", "libus", "liceo", "lices", "licet", "licia", "licii", "licio", "licui", "liene", "lieni", "lient", "liere", "ligas", "ligat", "ligem", "liger", "liges", "liget", "ligna", "ligni", "ligno", "ligor", "lilia", "lilii", "lilio", "limae", "limam", "limas", "limat", "limax", "limbe", "limbi", "limbo", "limem", "limen", "limer", "limes", "limet", "limis", "limma", "limor", "limos", "limum", "limus", "linam", "linar", "linas", "linat", "linea", "linee", "linei", "lineo", "lines", "linet", "linge", "lingi", "lingo", "linio", "linis", "linit", "linna", "linor", "linui", "linum", "linxi", "lipio", "lippa", "lippi", "lippo", "liqua", "lique", "liqui", "liquo", "liquu", "lirae", "liram", "liras", "liris", "litas", "litat", "litem", "liter", "lites", "litet", "litis", "litor", "litue", "litui", "litum", "lituo", "litus", "liveo", "lives", "livet", "livia", "livor", "lixae", "lixam", "lixas", "lixis", "lobae", "lobam", "lobas", "lobis", "lobos", "lobum", "lobus", "locar", "locas", "locat", "locem", "locer", "loces", "locet", "locis", "locor", "locos", "locum", "locus", "lodix", "logea", "logei", "logeo", "logia", "logii", "logio", "longa", "longe", "longi", "longo", "loqui", "lorae", "loram", "loras", "loris", "lorum", "lotae", "lotam", "lotas", "lotia", "lotii", "lotio", "lotis", "loton", "lotor", "lotos", "lotui", "lotum", "lotus", "luant", "lubet", "lucar", "lucem", "luceo", "luces", "lucet", "lucie", "lucii", "lucio", "lucis", "lucos", "lucra", "lucri", "lucro", "lucta", "lucte", "lucti", "lucto", "luctu", "lucum", "lucus", "ludam", "ludar", "ludas", "ludat", "ludes", "ludet", "ludie", "ludii", "ludio", "ludis", "ludit", "ludor", "ludos", "ludum", "ludus", "luent", "luere", "luero", "lugeo", "luges", "luget", "luite", "luito", "lumae", "lumam", "lumbe", "lumbi", "lumbo", "lumen", "lunae", "lunai", "lunam", "lunas", "lunat", "lunem", "luner", "lunes", "lunet", "lunis", "lunor", "lupae", "lupam", "lupas", "luper", "lupis", "lupor", "lupos", "lupum", "lupus", "lurca", "lurco", "lurda", "lurde", "lurdi", "lurdo", "luria", "luror", "lusae", "lusam", "lusas", "lusca", "lusce", "lusci", "lusco", "lusio", "lusis", "lusit", "lusor", "lusos", "lusui", "lusum", "lusus", "lutea", "lutee", "lutei", "luteo", "luter", "lutis", "lutra", "lutri", "lutro", "lutum", "luunt", "luxae", "luxam", "luxas", "luxis", "luxit", "luxos", "luxti", "luxui", "luxum", "luxus", "lygos", "lynce", "lynci", "lyrae", "lyram", "lyras", "lyris", "lysem", "lyses", "lysim", "lysis", "lytra", "lytta", "macce", "macci", "macco", "macea", "maceo", "macer", "macie", "macio", "macir", "macla", "macra", "macri", "macro", "macta", "macte", "macti", "macto", "madeo", "mades", "madet", "mador", "madui", "madum", "maena", "maere", "maeru", "magae", "magam", "magas", "magia", "magis", "magna", "magne", "magni", "magno", "magos", "magro", "magum", "magus", "maior", "maius", "major", "majus", "malae", "malam", "malas", "males", "malet", "malim", "malis", "malit", "malle", "mallo", "malos", "malui", "malum", "malus", "malva", "mamma", "manas", "manat", "manca", "mance", "manci", "manco", "manda", "mande", "mandi", "mando", "manem", "maneo", "maner", "manes", "manet", "mango", "mania", "manis", "manna", "manne", "manni", "manno", "manor", "mansa", "manse", "mansi", "manso", "mansu", "manui", "manum", "manus", "mappa", "marca", "marce", "marcu", "marem", "mares", "marga", "margo", "maria", "maris", "marra", "marte", "marti", "marum", "masca", "massa", "mater", "matia", "matre", "matri", "matta", "matus", "maumo", "maura", "maure", "mauri", "mauro", "mavis", "meabo", "means", "meant", "meare", "meari", "mearo", "meata", "meate", "meati", "meato", "meatu", "meavi", "mecum", "media", "medie", "medii", "medio", "medus", "meent", "meere", "meiam", "meias", "meiat", "meies", "meiet", "meiis", "meiit", "melca", "melem", "meles", "melis", "mella", "melle", "melli", "mello", "melum", "melus", "memet", "memor", "menda", "mendi", "mendo", "mensa", "mense", "mensi", "menso", "mensu", "menta", "mente", "menti", "mento", "merae", "meram", "meras", "merce", "merci", "merda", "mereo", "meres", "meret", "merge", "mergi", "mergo", "meris", "meros", "mersa", "merse", "mersi", "merso", "mersu", "merui", "merum", "merus", "mesae", "mesas", "mesen", "meses", "mesis", "messa", "messe", "messi", "messo", "messu", "metae", "metam", "metar", "metas", "metat", "meter", "metes", "metet", "metio", "metis", "metit", "metor", "metra", "metri", "metro", "metue", "metui", "metum", "metuo", "metus", "micae", "micam", "micas", "micat", "micem", "mices", "micet", "michi", "micis", "micta", "micte", "micti", "micto", "mictu", "micui", "migma", "migra", "migro", "miles", "milia", "milii", "milio", "mille", "milli", "milve", "milvi", "milvo", "mimae", "mimam", "mimas", "mimis", "mimos", "mimum", "mimus", "minae", "minam", "minas", "minat", "minax", "minem", "miner", "mines", "minet", "minge", "mingi", "mingo", "minia", "minii", "minio", "minis", "minor", "minue", "minui", "minuo", "minus", "minxi", "mirae", "miram", "miras", "mirat", "mirem", "mirer", "mires", "miret", "mirio", "miris", "miror", "miros", "mirum", "mirus", "misce", "miser", "misit", "missa", "misse", "missi", "misso", "missu", "mista", "miste", "misti", "misto", "mistu", "mitat", "mitem", "mites", "mitia", "mitis", "mitra", "mitte", "mitti", "mitto", "mixit", "mixta", "mixte", "mixti", "mixto", "mixtu", "modie", "modii", "modio", "modis", "modos", "modum", "modus", "moene", "moere", "moeru", "molae", "molam", "molar", "molas", "molat", "molem", "moles", "molet", "molio", "molis", "molit", "molle", "molli", "molor", "molto", "molui", "monas", "moneo", "mones", "monet", "monor", "monte", "monti", "monto", "monui", "morae", "moram", "moras", "morbe", "morbi", "morbo", "morde", "mordo", "morem", "morer", "mores", "morio", "moris", "moror", "moros", "morsa", "morse", "morsi", "morso", "morsu", "morte", "morti", "morum", "morus", "motae", "motam", "motas", "motat", "motem", "moter", "motes", "motet", "motio", "motis", "motor", "motos", "motui", "motum", "motus", "moveo", "moves", "movet", "movit", "mucco", "mucis", "mucor", "mucos", "mucro", "mucum", "mucus", "muger", "mugil", "mugio", "mugis", "mugit", "mulae", "mulam", "mulas", "mulca", "mulce", "mulco", "mulge", "mulgo", "mulio", "mulis", "mulle", "mulli", "mullo", "mulos", "mulsa", "mulse", "mulsi", "mulso", "mulsu", "multa", "multe", "multi", "multo", "mulum", "mulus", "mumia", "munda", "munde", "mundi", "mundo", "munia", "munii", "munio", "munis", "munit", "munus", "murem", "mures", "murex", "muria", "muris", "muros", "murra", "murri", "murum", "murus", "musae", "musam", "musas", "musca", "musce", "musci", "musco", "musea", "musei", "museo", "musio", "musis", "mussa", "musso", "musta", "muste", "musti", "musto", "mutae", "mutam", "mutas", "mutat", "mutem", "muter", "mutes", "mutet", "mutis", "mutor", "mutos", "mutti", "mutua", "mutue", "mutui", "mutum", "mutuo", "mutus", "myrra", "myrta", "myrte", "myrti", "myrto", "mythe", "mythi", "mytho", "myxae", "myxam", "myxas", "myxis", "myxum", "nabam", "nabas", "nabat", "nabis", "nabit", "nabla", "nabli", "nablo", "nabun", "nacca", "nacta", "nacte", "nacti", "nacto", "nactu", "naeve", "naevi", "naevo", "namus", "nanae", "nanam", "nanas", "nanda", "nande", "nandi", "nando", "nanis", "nanos", "nanto", "nanum", "nanus", "napis", "napos", "napum", "napus", "narde", "nardi", "nardo", "narem", "nares", "naret", "naris", "narra", "narro", "narta", "nasci", "nasis", "nasos", "nassa", "nasse", "nasum", "nasus", "natae", "natam", "natas", "natat", "natem", "nater", "nates", "natet", "natio", "natis", "nator", "natos", "natui", "natum", "natus", "nauci", "naula", "nauli", "naulo", "nauta", "navae", "navam", "navas", "navat", "navem", "naver", "naves", "navet", "navim", "navis", "navit", "navor", "navos", "navum", "navus", "neant", "neare", "nebam", "nebar", "nebas", "nebat", "nebis", "nebit", "nebor", "necas", "necat", "necem", "necer", "neces", "necet", "necis", "necne", "necor", "necte", "necti", "necto", "necum", "nedum", "nefas", "negas", "negat", "negem", "neger", "neges", "neget", "negor", "nempe", "nemur", "nemus", "nenda", "nende", "nendi", "nendo", "nenia", "nente", "nenti", "nento", "nepos", "nepte", "nepti", "neque", "nequi", "nequo", "nerem", "nerer", "neres", "neret", "neris", "nerve", "nervi", "nervo", "nesci", "netae", "netam", "netas", "netis", "netor", "netos", "netum", "netur", "netus", "nevit", "nexae", "nexam", "nexas", "nexio", "nexis", "nexit", "nexos", "nexui", "nexum", "nexus", "nicta", "nicto", "nidis", "nidor", "nidos", "nidum", "nidus", "niger", "nigra", "nigri", "nigro", "nihil", "nilis", "nilos", "nilum", "nilus", "nimbe", "nimbi", "nimbo", "nimia", "nimie", "nimii", "nimio", "nimis", "ninge", "ningi", "ningo", "ninxi", "nisae", "nisam", "nisas", "nisis", "nisos", "nisui", "nisum", "nisus", "nitar", "niteo", "nites", "nitet", "nitor", "nitra", "nitri", "nitro", "nitui", "nitum", "nivea", "nivee", "nivei", "nivem", "niveo", "nives", "nivis", "nixae", "nixam", "nixas", "nixer", "nixis", "nixor", "nixos", "nixui", "nixum", "nixus", "nobis", "noceo", "noces", "nocet", "nocte", "nocti", "noctu", "nocua", "nocui", "nocuo", "nodas", "nodat", "nodem", "noder", "nodes", "nodet", "nodia", "nodis", "nodor", "nodos", "nodum", "nodus", "nolam", "noles", "nolet", "nolim", "nolis", "nolit", "nolle", "nolui", "nomen", "nonae", "nonam", "nonas", "nonis", "nonna", "nonne", "nonni", "nonno", "nonos", "nonum", "nonus", "noram", "norat", "noris", "norit", "norma", "normo", "nosce", "nosci", "nosco", "nosse", "nosti", "notae", "notam", "notas", "notat", "notem", "noteo", "noter", "notes", "notet", "notha", "nothe", "nothi", "notho", "notio", "notis", "notor", "notos", "notui", "notum", "notus", "novae", "novam", "novas", "novat", "novem", "nover", "noves", "novet", "novis", "novit", "novor", "novos", "novum", "novus", "noxae", "noxam", "noxas", "noxia", "noxie", "noxii", "noxio", "noxis", "nubam", "nubar", "nubas", "nubat", "nubem", "nubes", "nubet", "nubis", "nubit", "nubor", "nucem", "nuces", "nucha", "nucis", "nucum", "nudae", "nudam", "nudas", "nudat", "nudem", "nuder", "nudes", "nudet", "nudis", "nudor", "nudos", "nudum", "nudus", "nugae", "nugam", "nugas", "nuger", "nugis", "nugor", "nulla", "nulle", "nulli", "nullo", "numen", "numis", "numme", "nummi", "nummo", "numos", "numum", "numus", "nunci", "nunti", "nuper", "nupsi", "nupta", "nupte", "nupti", "nupto", "nuptu", "nurui", "nurum", "nurus", "nutas", "nutat", "nutem", "nuter", "nutes", "nutet", "nutor", "nutri", "nutui", "nutum", "nutus", "obara", "obaro", "obbae", "obbam", "obbas", "obbis", "obcas", "obcat", "obcem", "obcer", "obces", "obcet", "obcor", "obdam", "obdar", "obdas", "obdat", "obdes", "obdet", "obdis", "obdit", "obdor", "obduc", "obeam", "obear", "obeas", "obeat", "obedi", "obedo", "obeor", "obero", "obesa", "obese", "obesi", "obeso", "obest", "obfui", "obibo", "obice", "obici", "obiit", "obire", "obiri", "obita", "obite", "obiti", "obito", "obitu", "obivi", "objex", "obole", "oboli", "obolo", "obolu", "obrue", "obrui", "obruo", "obses", "obsim", "obsis", "obsit", "obsta", "obsto", "obsum", "obvia", "obvie", "obvii", "obvio", "occas", "occat", "occem", "occer", "occes", "occet", "occor", "ocior", "ocius", "oclis", "oclos", "oclum", "oclus", "ocrea", "ocrem", "ocres", "ocris", "ocule", "oculi", "oculo", "odere", "odero", "odiam", "odiar", "odiis", "odior", "odire", "odiri", "odite", "odito", "oditu", "odium", "odivi", "odora", "odore", "odori", "odoro", "oephi", "oetum", "offae", "offam", "offas", "offer", "offex", "offis", "offla", "oinos", "oleae", "oleam", "oleas", "oleat", "olebo", "oleis", "olens", "olent", "olera", "olere", "oleri", "oleta", "olete", "oleti", "oleto", "oleum", "olfac", "olfio", "olfis", "olfit", "olida", "olide", "olidi", "olido", "oliva", "ollae", "ollam", "ollas", "ollis", "ollud", "olore", "olori", "oluit", "olyra", "omasa", "omasi", "omaso", "omina", "omine", "omini", "omisi", "omnem", "omnes", "omnia", "omnis", "onera", "onere", "oneri", "onero", "onoma", "opaca", "opace", "opaci", "opaco", "opale", "opali", "opalo", "opera", "opere", "operi", "opero", "opiis", "opima", "opime", "opimi", "opimo", "opium", "opple", "optas", "optat", "optem", "opter", "optes", "optet", "optio", "optor", "opule", "opuli", "opulo", "opupa", "orabo", "orale", "orali", "orans", "orant", "orare", "orari", "oraro", "orata", "orate", "orati", "orato", "oratu", "oravi", "orbae", "orbam", "orbas", "orbat", "orbem", "orber", "orbes", "orbet", "orbis", "orbor", "orbos", "orbum", "orbus", "orcae", "orcam", "orcas", "orcis", "orcos", "orcum", "orcus", "ordio", "oreae", "oreis", "orent", "orere", "orexe", "orexi", "orgia", "oriar", "origo", "orior", "orire", "oriri", "ornas", "ornat", "ornem", "orner", "ornes", "ornet", "ornis", "ornor", "ornos", "ornum", "ornus", "orsae", "orsam", "orsas", "orsis", "orsos", "orsum", "orsus", "ortae", "ortam", "ortas", "ortis", "ortos", "ortui", "ortum", "ortus", "ortyx", "orulo", "oryge", "orygi", "oryza", "oscen", "osmia", "osmii", "osmio", "ossis", "ossum", "ostes", "ostia", "ostii", "ostio", "ostra", "ostri", "ostro", "osura", "osure", "osuri", "osuro", "otiis", "otion", "otior", "otium", "ovabo", "ovale", "ovali", "ovans", "ovant", "ovare", "ovari", "ovaro", "ovata", "ovate", "ovati", "ovato", "ovatu", "ovavi", "ovent", "overe", "ovica", "ovico", "ovile", "ovili", "ovina", "ovine", "ovini", "ovino", "ovium", "oxida", "oxidi", "oxido", "pacas", "pacat", "pacem", "pacer", "paces", "pacet", "pacio", "pacis", "pacor", "pacta", "pacte", "pacti", "pacto", "pactu", "pacum", "paean", "paene", "paeon", "paeta", "paete", "paeti", "paeto", "pagis", "pagos", "pagum", "pagus", "palae", "palam", "palas", "palat", "palea", "palem", "paler", "pales", "palet", "palis", "palla", "palle", "pallu", "palma", "palme", "palmi", "palmo", "palor", "palos", "palpa", "palpe", "palpi", "palpo", "palum", "palus", "panax", "panda", "pande", "pandi", "pando", "panem", "panes", "pange", "pangi", "pango", "panis", "panne", "panni", "panno", "panos", "pansa", "panta", "panti", "panto", "panum", "panus", "panxi", "papae", "papam", "papas", "papat", "papem", "papes", "papet", "papis", "pappa", "pappo", "paras", "parat", "parca", "parce", "parci", "parco", "parde", "pardi", "pardo", "parem", "pareo", "parer", "pares", "paret", "paria", "pario", "paris", "parit", "parma", "paror", "paros", "parra", "parsa", "parse", "parsi", "parso", "parsu", "parta", "parte", "parti", "parto", "partu", "parui", "parum", "parus", "parva", "parve", "parvi", "parvo", "pasce", "pasci", "pasco", "passa", "passe", "passi", "passo", "passu", "pasta", "paste", "pasti", "pasto", "pastu", "pateo", "pater", "pates", "patet", "patio", "pator", "patra", "patre", "patri", "patro", "patta", "patui", "patum", "pauca", "pauce", "pauci", "pauco", "paula", "paule", "pauli", "paulo", "pausa", "pauso", "pavae", "pavam", "pavas", "paveo", "paves", "pavet", "pavio", "pavis", "pavit", "pavor", "pavos", "pavum", "pavus", "pecca", "pecco", "pecte", "pecti", "pecto", "pecua", "pecus", "pedam", "pedas", "pedat", "pedem", "peder", "pedes", "pedet", "pedis", "pedit", "pedor", "pedum", "pegit", "pegma", "peior", "peius", "pejor", "pejus", "pelax", "pelex", "pella", "pelle", "pelli", "pello", "pelta", "pelve", "pelvi", "pemma", "penae", "penam", "penas", "pende", "pendi", "pendo", "pendu", "penem", "penes", "penis", "penna", "pensa", "pense", "pensi", "penso", "pensu", "penui", "penum", "penus", "perae", "peram", "peras", "perca", "perci", "perde", "perdi", "perdo", "pereo", "perge", "pergi", "pergo", "perii", "peris", "perit", "perla", "perna", "perne", "pessa", "pessi", "pesso", "peste", "pesti", "petam", "petar", "petas", "petat", "petes", "petet", "petii", "petio", "petis", "petit", "petor", "petra", "petro", "pexae", "pexam", "pexas", "pexis", "pexit", "pexos", "pexum", "pexus", "phago", "phase", "phoca", "phure", "phuri", "phyla", "phyli", "phylo", "phyma", "piabo", "pians", "piant", "piare", "piari", "piaro", "piata", "piate", "piati", "piato", "piatu", "piavi", "picae", "picam", "picas", "picca", "picco", "picea", "picee", "picei", "picem", "piceo", "pices", "picis", "picos", "picta", "picte", "picti", "picto", "pictu", "picum", "picus", "pient", "piere", "pigeo", "piger", "piges", "piget", "pigra", "pigri", "pigro", "pigua", "pigue", "pigui", "piguo", "pilae", "pilam", "pilas", "pilat", "pilax", "pilem", "piler", "piles", "pilet", "pilis", "pillo", "pilor", "pilos", "pilum", "pilus", "pinae", "pinam", "pinas", "pinax", "pinea", "pinee", "pinei", "pineo", "pinge", "pingi", "pingo", "pinis", "pinna", "pinos", "pinsa", "pinse", "pinsi", "pinso", "pinsu", "pinui", "pinum", "pinus", "pinxi", "piper", "pipia", "pipio", "piris", "piros", "pirum", "pirus", "pisce", "pisci", "pisco", "pisis", "pista", "piste", "pisti", "pisto", "pistu", "pisum", "placa", "place", "placo", "plaga", "plago", "plana", "plane", "plani", "plano", "pleam", "plear", "pleas", "pleat", "plebe", "plebi", "plebo", "plebs", "plena", "plene", "pleni", "pleno", "plens", "plent", "pleor", "plera", "plere", "pleri", "plero", "pleta", "plete", "pleti", "pleto", "pletu", "plevi", "plexa", "plexe", "plexi", "plexo", "plexu", "plica", "plico", "plode", "plodi", "plodo", "plora", "ploro", "plosa", "plose", "plosi", "ploso", "plosu", "plovo", "pluam", "pluas", "pluat", "plues", "pluet", "pluis", "pluit", "pluma", "plumo", "plura", "plure", "pluvi", "podeo", "podes", "podet", "podex", "podia", "podio", "podui", "poema", "poena", "poeni", "poese", "poesi", "poeta", "polea", "polia", "polii", "polio", "polis", "polit", "polle", "pollu", "polos", "polsi", "polum", "polus", "pomis", "pompa", "pompo", "pomum", "pomus", "ponam", "ponar", "ponas", "ponat", "pondo", "pones", "ponet", "ponis", "ponit", "ponor", "ponte", "ponti", "ponto", "popae", "popam", "popas", "popis", "porca", "porce", "porci", "porco", "porod", "porra", "porri", "porro", "porta", "porto", "portu", "porus", "posca", "posce", "posci", "posco", "posse", "posso", "poste", "posti", "posui", "potae", "potam", "potas", "potat", "potem", "poter", "potes", "potet", "potio", "potis", "potor", "potos", "potui", "potum", "potus", "praei", "praes", "prata", "prati", "prato", "pratu", "prava", "prave", "pravi", "pravo", "prece", "preci", "preco", "preme", "premi", "premo", "preti", "price", "prici", "prima", "prime", "primi", "primo", "prine", "prini", "prino", "prior", "prius", "priva", "prive", "privi", "privo", "proba", "probe", "probi", "probo", "proca", "proce", "proci", "proco", "prode", "prodi", "prodo", "proin", "prole", "proli", "prome", "promi", "promo", "prona", "prone", "proni", "prono", "prope", "prora", "prosa", "prout", "pruna", "prune", "pruni", "pruno", "pruri", "psila", "psora", "ptate", "ptera", "ptere", "pteri", "ptero", "ptyas", "pubem", "pubes", "pubis", "pubui", "pubum", "pudeo", "pudes", "pudet", "pudor", "pudui", "puera", "puere", "pueri", "puero", "pugae", "pugam", "pugas", "pugil", "pugio", "pugis", "pugna", "pugne", "pugni", "pugno", "pulex", "pulla", "pulle", "pulli", "pullo", "pulmo", "pulpa", "pulpo", "pulsa", "pulse", "pulsi", "pulso", "pulsu", "pulte", "pulti", "pumex", "punge", "pungi", "pungo", "punio", "punis", "punit", "pupae", "pupam", "pupas", "pupis", "pupos", "puppa", "puppe", "puppi", "puppo", "pupum", "pupus", "purae", "puram", "puras", "purem", "pures", "purga", "purgo", "puris", "puros", "purum", "purus", "pusca", "pusio", "pusis", "pusos", "pusum", "pusus", "putae", "putam", "putas", "putat", "putee", "putei", "putem", "puteo", "puter", "putes", "putet", "putio", "putis", "putor", "putos", "putre", "putri", "putum", "putus", "pycta", "pylae", "pyrae", "pyram", "pyras", "pyren", "pyria", "pyrie", "pyrii", "pyrio", "pyris", "pyrum", "pyxis", "quala", "quale", "quali", "qualo", "quare", "quasi", "quate", "quati", "quaxo", "queam", "quear", "queas", "queat", "queor", "queri", "quibo", "quies", "quiit", "quina", "quini", "quire", "quiri", "quite", "quito", "quitu", "quivi", "quoad", "quomo", "quota", "quote", "quoti", "quoto", "rabbi", "rabia", "rabie", "rabio", "racco", "radam", "radar", "radas", "radat", "rades", "radet", "radia", "radie", "radii", "radio", "radis", "radit", "radix", "radon", "rador", "raeda", "raiae", "raiam", "raias", "raiis", "ralla", "ralle", "ralli", "rallo", "ramex", "ramis", "ramna", "ramni", "ramno", "ramos", "ramum", "ramus", "ranae", "ranam", "ranas", "ranco", "ranis", "rapax", "raphe", "rapio", "rapis", "rapit", "rapta", "rapte", "rapti", "rapto", "raptu", "rapui", "rapum", "rarae", "raram", "raras", "raris", "raros", "rarum", "rarus", "rasae", "rasam", "rasas", "rasis", "rasit", "rasos", "raspo", "rasum", "rasus", "ratae", "ratam", "ratas", "ratem", "rates", "ratio", "ratis", "rator", "ratos", "ratte", "ratti", "ratto", "rattu", "ratum", "ratus", "raubo", "rauca", "rauce", "rauci", "rauco", "ravae", "ravam", "ravas", "ravis", "ravos", "ravum", "ravus", "reago", "reale", "reali", "reama", "reamo", "reare", "reatu", "rebar", "reboa", "reboo", "rebor", "rebus", "recta", "recte", "recti", "recto", "redde", "reddi", "reddo", "redeo", "redii", "redis", "redit", "reduc", "redux", "refer", "regam", "regar", "regas", "regat", "regem", "reges", "reget", "regia", "regie", "regii", "regio", "regis", "regit", "regna", "regni", "regno", "regor", "regum", "reice", "reici", "remea", "remeo", "remex", "remis", "remos", "remum", "remur", "remus", "renda", "rende", "rendi", "rendo", "renem", "reneo", "renes", "renio", "renis", "rente", "renti", "renue", "renui", "renum", "renuo", "repam", "repas", "repat", "repes", "repet", "repis", "repit", "repla", "reple", "repli", "replo", "repsi", "repta", "repto", "rerer", "reris", "rerum", "resta", "reste", "resti", "resto", "retae", "retas", "retia", "retis", "retor", "retro", "retur", "reuni", "rexit", "rhexe", "rhexi", "rhina", "ricae", "ricam", "ricas", "ricio", "ricis", "ricta", "ricti", "ricto", "rideo", "rides", "ridet", "ridio", "rigas", "rigat", "rigem", "rigeo", "riger", "riges", "riget", "rigor", "rigua", "rigue", "rigui", "rigum", "riguo", "rimae", "rimam", "rimas", "rimer", "rimis", "rimor", "ripae", "ripam", "ripas", "ripis", "risae", "risam", "risas", "risce", "risci", "risco", "risis", "risit", "risor", "risos", "risui", "risum", "risus", "ritui", "ritum", "ritus", "rivas", "rivat", "rivem", "river", "rives", "rivet", "rivis", "rivor", "rivos", "rivum", "rivus", "rixae", "rixam", "rixas", "rixem", "rixer", "rixes", "rixis", "rixor", "robea", "robee", "robei", "robeo", "robur", "robus", "rodam", "rodar", "rodas", "rodat", "rodes", "rodet", "rodis", "rodit", "rodor", "rogas", "rogat", "rogem", "roger", "roges", "roget", "rogis", "rogor", "rogos", "rogum", "rogus", "ronce", "ronci", "ronco", "roras", "rorat", "rorem", "rorer", "rores", "roret", "roris", "roror", "rorum", "rosae", "rosam", "rosas", "rosea", "rosee", "rosei", "roseo", "rosis", "rosit", "rosos", "rossa", "rosum", "rosus", "rotae", "rotam", "rotas", "rotat", "rotem", "roter", "rotes", "rotet", "rotis", "rotor", "ruant", "ruare", "rubea", "rubee", "rubei", "rubeo", "ruber", "rubes", "rubet", "rubia", "rubis", "rubor", "rubos", "rubra", "rubri", "rubro", "rubui", "rubum", "rubus", "ructa", "ructo", "ructu", "rudam", "rudar", "rudas", "rudat", "rudem", "rudes", "rudet", "rudia", "rudis", "rudit", "rudor", "rudus", "ruens", "ruent", "ruere", "ruero", "rufae", "rufam", "rufas", "rufis", "rufos", "rufum", "rufus", "rugae", "rugam", "rugas", "rugio", "rugis", "rugit", "ruina", "ruino", "ruite", "ruito", "rumen", "rumex", "rumor", "rumpe", "rumpi", "rumpo", "runca", "runco", "rupem", "rupes", "rupex", "rupis", "rupit", "rupta", "rupte", "rupti", "rupto", "ruptu", "rupum", "ruris", "rurum", "rusca", "rusci", "rusco", "russa", "russe", "russi", "russo", "rusum", "rutae", "rutam", "rutas", "rutis", "rutos", "rutra", "rutri", "rutro", "rutum", "rutus", "ruunt", "ryxem", "ryxes", "ryxis", "sacal", "sacce", "sacci", "sacco", "sacer", "sacra", "sacri", "sacro", "saepe", "saepi", "saeta", "saeva", "saeve", "saevi", "saevo", "sagae", "sagam", "sagas", "sagax", "sagda", "sagia", "sagio", "sagis", "sagit", "sagma", "sagos", "sagum", "sagus", "salar", "salax", "salem", "sales", "salio", "salis", "salit", "salix", "salli", "salmo", "salor", "salpa", "salsa", "salse", "salsi", "salso", "salta", "salte", "salti", "salto", "saltu", "salui", "salum", "salus", "salva", "salve", "salvi", "salvo", "samia", "samie", "samii", "samio", "sanae", "sanam", "sanas", "sanat", "sanci", "sanem", "saner", "sanes", "sanet", "sanie", "sanis", "sanna", "sanor", "sanos", "sanum", "sanus", "sanxi", "sapeo", "sapio", "sapis", "sapit", "sapor", "sappa", "sapsa", "sapse", "sarci", "sarda", "sarde", "sardi", "sardo", "sarge", "sargi", "sargo", "sario", "saris", "sarit", "sarna", "sarpe", "sarpi", "sarpo", "sarri", "sarsi", "sarta", "sarte", "sarti", "sarto", "sartu", "satae", "satam", "satia", "satin", "satio", "satis", "sator", "satui", "satum", "satur", "satus", "saver", "saxea", "saxee", "saxei", "saxeo", "saxis", "saxum", "scabe", "scabi", "scabo", "scaci", "scala", "scape", "scapi", "scapo", "scate", "scato", "scatu", "scena", "sciae", "sciam", "sciar", "scias", "sciat", "scida", "scidi", "scies", "sciet", "sciis", "scine", "scini", "scino", "scior", "scios", "scire", "sciri", "scita", "scite", "sciti", "scito", "scitu", "scium", "scius", "scivi", "scobe", "scobi", "scopa", "scope", "scopi", "scopo", "screa", "scuma", "scuta", "scuti", "scuto", "sebax", "sebis", "sebum", "secas", "secat", "secem", "secer", "seces", "secet", "secla", "secli", "seclo", "secor", "secta", "secte", "secti", "secto", "sectu", "secui", "secum", "secus", "sedas", "sedat", "sedem", "sedeo", "seder", "sedes", "sedet", "sedim", "sedis", "sedit", "sedor", "seduc", "sedum", "seges", "segne", "segni", "sella", "semel", "semen", "semet", "semis", "senae", "senam", "senas", "senem", "seneo", "senes", "senex", "senia", "senii", "senio", "senis", "senos", "sensa", "sense", "sensi", "senso", "sensu", "sente", "senti", "senui", "senum", "senus", "separ", "sepem", "sepes", "sepia", "sepio", "sepis", "sepit", "sepsi", "septa", "septe", "septi", "septo", "septu", "sequi", "serae", "seram", "serar", "seras", "serat", "serem", "serer", "seres", "seret", "seria", "serie", "serii", "serio", "seris", "serit", "sermo", "seror", "seros", "serpe", "serpo", "serra", "serro", "serta", "sertu", "serui", "serum", "serus", "serva", "serve", "servi", "servo", "sessu", "setae", "setam", "setas", "setis", "sevio", "sevir", "sevit", "sexta", "sexte", "sexti", "sexto", "sexui", "sexum", "sexus", "siban", "sibus", "sicae", "sicam", "sicas", "sicca", "sicce", "sicci", "sicco", "sicis", "sicle", "sicli", "siclo", "sicut", "sidam", "sidas", "sidat", "sides", "sidet", "sidis", "sidit", "sidus", "sient", "sigla", "sigli", "siglo", "signa", "signi", "signo", "sileo", "siles", "silet", "silex", "silui", "silus", "silva", "simae", "simam", "simas", "simia", "simii", "simio", "simis", "simos", "simul", "simum", "simus", "sinam", "sinar", "sinas", "sinat", "sines", "sinet", "sinis", "sinit", "sinor", "sinos", "sinua", "sinui", "sinum", "sinuo", "sinus", "sipho", "siris", "sirpe", "sirpo", "siser", "siste", "sisti", "sisto", "sitae", "sitam", "sitas", "sitim", "sitio", "sitis", "sitit", "sitos", "situa", "situi", "situm", "situo", "situs", "sivit", "skina", "socce", "socci", "socco", "socer", "socia", "socie", "socii", "socio", "socra", "socru", "sodes", "solae", "solam", "solas", "solda", "solde", "soldi", "soldo", "solea", "solem", "solen", "soleo", "soler", "soles", "solet", "solia", "solii", "solio", "solis", "solla", "solle", "solli", "sollo", "solor", "solos", "solox", "solui", "solum", "solus", "solve", "solvi", "solvo", "somne", "somni", "somno", "sonas", "sonat", "sonax", "sonem", "soner", "sones", "sonet", "sonis", "sonor", "sonos", "sonte", "sonti", "sonui", "sonum", "sonus", "sopha", "sophe", "sophi", "sopho", "sopio", "sopis", "sopit", "sopor", "sorbe", "sorde", "sordi", "sordu", "sorex", "soror", "sorte", "sorti", "sorus", "spado", "spare", "spari", "sparo", "spece", "speci", "specu", "spera", "spero", "spexi", "spica", "spice", "spici", "spina", "spine", "spini", "spino", "spinu", "spira", "spiro", "splen", "spons", "spuam", "spuar", "spuas", "spuat", "spues", "spuet", "spuis", "spuit", "spuma", "spumo", "spuor", "sputa", "spute", "sputi", "sputo", "stabo", "staca", "stans", "stant", "stare", "stari", "stata", "state", "stati", "stato", "statu", "stega", "stela", "stent", "steti", "stile", "stili", "stilo", "stipa", "stipe", "stipo", "stips", "stiti", "stiva", "stola", "stoli", "stolo", "stria", "strix", "strue", "strui", "struo", "stude", "studu", "stuno", "stupe", "stupu", "suada", "suade", "suadi", "suado", "suant", "suasa", "suase", "suasi", "suaso", "suasu", "suave", "suavi", "subas", "subat", "subde", "subdi", "subdo", "subem", "subeo", "suber", "subes", "subet", "subex", "subii", "subis", "subit", "subor", "subus", "succe", "succi", "succo", "sucis", "sucos", "sucta", "sucte", "sucti", "sucto", "suctu", "sucum", "sucus", "sudae", "sudam", "sudas", "sudat", "sudem", "suder", "sudes", "sudet", "sudis", "sudor", "sudos", "sudum", "sudus", "suebe", "suebi", "suebo", "suens", "suent", "suere", "suero", "sueta", "suete", "sueti", "sueto", "suetu", "sueve", "suevi", "suevo", "sufes", "suffi", "sugam", "sugar", "sugas", "sugat", "suges", "suget", "sugis", "sugit", "sugor", "suile", "suili", "suina", "suine", "suini", "suino", "suite", "suito", "suium", "sulca", "sulce", "sulci", "sulco", "sumam", "sumar", "sumas", "sumat", "sumen", "sumes", "sumet", "sumis", "sumit", "summa", "summe", "summi", "summo", "sumor", "sumus", "sunto", "super", "suppa", "supra", "surae", "suram", "suras", "surda", "surde", "surdi", "surdo", "surge", "surgi", "surgo", "suris", "surus", "susum", "sutae", "sutam", "sutas", "sutis", "sutor", "sutos", "sutum", "sutus", "suunt", "suxit", "sylva", "syrae", "syram", "syras", "syris", "syrma", "syros", "syrti", "syrum", "syrus", "tabem", "tabeo", "tabes", "tabet", "tabis", "tabla", "tabui", "tabum", "taceo", "taces", "tacet", "tacta", "tacte", "tacti", "tacto", "tactu", "tacui", "taeda", "taede", "taesa", "taese", "taesi", "taeso", "taesu", "tagax", "talca", "talci", "talco", "talea", "talem", "tales", "talia", "talio", "talis", "talla", "talos", "talpa", "talum", "talus", "tamen", "tange", "tangi", "tango", "tanos", "tanta", "tante", "tanti", "tanto", "tapes", "tarda", "tarde", "tardi", "tardo", "tarse", "tarsi", "tarso", "tarum", "tarve", "tarvi", "tarvo", "tasto", "tatae", "tatam", "tatas", "tatis", "taura", "taure", "tauri", "tauro", "taxas", "taxat", "taxea", "taxee", "taxei", "taxem", "taxeo", "taxer", "taxes", "taxet", "taxis", "taxor", "taxos", "taxum", "taxus", "tecta", "tecte", "tecti", "tecto", "tectu", "tecum", "tegam", "tegar", "tegas", "tegat", "teges", "teget", "tegis", "tegit", "tegor", "telae", "telam", "telas", "telis", "telum", "temet", "temno", "tenax", "tende", "tendi", "tendo", "teneo", "tener", "tenes", "tenet", "tenio", "tenon", "tenor", "tensa", "tense", "tensi", "tenso", "tenta", "tente", "tenti", "tento", "tenua", "tenue", "tenui", "tenuo", "tenus", "tepeo", "tepes", "tepet", "tepor", "tepui", "tepum", "teram", "terar", "teras", "terat", "teres", "teret", "terga", "terge", "tergi", "tergo", "teris", "terit", "terna", "terne", "terni", "terno", "teror", "terra", "terre", "tersa", "terse", "tersi", "terso", "tersu", "tesca", "tesci", "tesco", "testa", "teste", "testi", "testo", "testu", "teter", "tetra", "tetri", "tetro", "texam", "texar", "texas", "texat", "texes", "texet", "texis", "texit", "texor", "texta", "texte", "texti", "texto", "textu", "texui", "theae", "theam", "theas", "theca", "theis", "thema", "theos", "these", "thesi", "thiae", "thiam", "thias", "thiis", "thios", "thium", "thius", "thole", "tholi", "tholo", "thore", "thori", "thoro", "thrax", "thura", "thure", "thuri", "thyme", "thymi", "thymo", "tiara", "tibia", "tigna", "tigni", "tigno", "tigri", "tilia", "timeo", "times", "timet", "timor", "timui", "tinae", "tinam", "tinas", "tinca", "tinea", "tineo", "tinge", "tingi", "tingo", "tinis", "tinni", "tinos", "tinum", "tinus", "tinxi", "tiras", "tirat", "tirem", "tirer", "tires", "tiret", "tiror", "titio", "titus", "tmese", "tmesi", "tocco", "todus", "tofis", "tofos", "tofum", "tofus", "togae", "togam", "togas", "togis", "toles", "tolle", "tolli", "tollo", "tomis", "tomos", "tomum", "tomus", "tonas", "tonat", "tonde", "tonem", "toner", "tones", "tonet", "tonge", "tongu", "tonis", "tonna", "tonor", "tonos", "tonsa", "tonse", "tonsi", "tonso", "tonsu", "tonui", "tonum", "tonus", "topia", "torax", "torco", "toris", "torna", "torne", "torni", "torno", "toros", "torpe", "torpu", "torre", "torri", "torro", "torsi", "torta", "torte", "torti", "torto", "tortu", "torum", "torus", "torva", "torve", "torvi", "torvo", "tosta", "toste", "tosti", "tosto", "tostu", "totae", "totam", "totas", "totis", "totos", "totum", "totus", "trabe", "trabi", "trabs", "trade", "tradi", "trado", "trago", "traha", "trahe", "trahi", "traho", "trama", "trana", "trano", "trans", "traxi", "treme", "tremi", "tremo", "trias", "tribu", "trico", "triga", "trima", "trime", "trimi", "trimo", "trina", "trine", "trini", "trino", "trita", "trite", "triti", "trito", "tritu", "trium", "trivi", "troca", "troco", "trope", "tropi", "tropo", "truci", "trude", "trudi", "trudo", "trusa", "truse", "trusi", "truso", "trusu", "tubae", "tubam", "tubas", "tuber", "tubis", "tubos", "tubum", "tubus", "tucca", "tucco", "tudes", "tuear", "tuens", "tueor", "tuere", "tueri", "tuita", "tuite", "tuiti", "tuito", "tuitu", "tulit", "tumba", "tumeo", "tumes", "tumet", "tumor", "tumui", "tumum", "tunde", "tundi", "tundo", "tunna", "tunsa", "tunse", "tunsi", "tunso", "tunsu", "turba", "turbo", "turde", "turdi", "turdo", "turge", "turgu", "turio", "turis", "turma", "turpa", "turpe", "turpi", "turpo", "turre", "turri", "tursi", "turum", "tusca", "tusce", "tusci", "tusco", "tusse", "tussi", "tutae", "tutam", "tutas", "tutat", "tutem", "tuter", "tutes", "tutet", "tutis", "tutor", "tutos", "tutum", "tutus", "tylos", "typis", "typos", "typum", "typus", "tyria", "tyrie", "tyrii", "tyrio", "tyrse", "tyrsi", "tyrso", "uacua", "uacue", "uacui", "uacuo", "ubera", "ubere", "uberi", "ubero", "ubius", "udare", "uerae", "ueram", "ueras", "ueris", "ueros", "uerum", "uerus", "uiuae", "uiuam", "uiuas", "uiuis", "uiuos", "uiuum", "uiuus", "ulcus", "ulice", "ulici", "uligo", "ullae", "ullam", "ullas", "ullis", "ullos", "ullum", "ullus", "ulmea", "ulmee", "ulmei", "ulmeo", "ulmis", "ulmos", "ulmum", "ulmus", "ulnae", "ulnam", "ulnas", "ulnis", "ultae", "ultam", "ultas", "ulter", "ultio", "ultis", "ultor", "ultos", "ultra", "ultri", "ultro", "ultum", "ultus", "ulula", "ululo", "ulvae", "ulvam", "ulvas", "ulvis", "umber", "umbra", "umbro", "umens", "umere", "umeri", "umero", "umida", "umide", "umidi", "umido", "umore", "umori", "uncae", "uncam", "uncas", "uncia", "uncis", "uncos", "uncta", "uncte", "uncti", "uncto", "unctu", "uncum", "uncus", "undae", "undam", "undas", "undat", "undem", "under", "undes", "undet", "undis", "undor", "unedo", "ungam", "ungar", "ungas", "ungat", "unges", "unget", "ungis", "ungit", "ungor", "ungue", "ungui", "unguo", "uniam", "uniar", "unias", "uniat", "unica", "unice", "unici", "unico", "unies", "uniet", "unior", "unire", "uniri", "unita", "unite", "uniti", "unito", "unitu", "unius", "unxit", "uocas", "uocat", "upupa", "urant", "urare", "urbem", "urbes", "urbis", "urcee", "urcei", "urceo", "uredo", "urens", "urent", "urere", "urgeo", "urges", "urget", "urgue", "uriae", "uriam", "urias", "urigo", "uriis", "urina", "urino", "urite", "urito", "urium", "urnae", "urnam", "urnas", "urnis", "ursae", "ursam", "ursas", "ursis", "ursit", "ursos", "ursum", "ursus", "urunt", "usare", "usito", "usque", "ussit", "ustae", "ustam", "ustas", "ustio", "ustis", "ustor", "ustos", "ustum", "ustus", "usura", "usure", "usuri", "usuro", "usuum", "utare", "utens", "utera", "utere", "uteri", "utero", "utile", "utili", "utque", "utrae", "utram", "utras", "utrem", "utres", "utria", "utris", "utros", "utrum", "uvida", "uvide", "uvidi", "uvido", "uvula", "uxore", "uxori", "vacas", "vacat", "vacca", "vacem", "vacer", "vaces", "vacet", "vacor", "vacua", "vacue", "vacui", "vacuo", "vadam", "vadas", "vadat", "vadem", "vader", "vades", "vadet", "vadis", "vadit", "vador", "vadum", "vafer", "vafra", "vafre", "vafri", "vafro", "vagae", "vagam", "vagas", "vagat", "vagem", "vager", "vages", "vaget", "vagio", "vagis", "vagit", "vagor", "vagos", "vagum", "vagus", "valde", "valeo", "vales", "valet", "valga", "valge", "valgi", "valgo", "valla", "valle", "valli", "vallo", "valor", "valui", "valva", "vanae", "vanam", "vanas", "vanga", "vanis", "vanne", "vanni", "vanno", "vanos", "vanum", "vanus", "vapor", "vappa", "vappo", "varae", "varam", "varas", "varge", "vargi", "vargo", "varia", "varie", "varii", "vario", "varis", "varix", "varos", "varro", "varum", "varus", "vasco", "vasem", "vases", "vasis", "vasit", "vasta", "vaste", "vasti", "vasto", "vasum", "vatem", "vates", "vatis", "vatum", "vecla", "vecle", "vecli", "veclo", "vecta", "vecte", "vecti", "vecto", "vectu", "vegeo", "veges", "veget", "veglo", "vegui", "vegum", "veham", "vehar", "vehas", "vehat", "vehes", "vehet", "vehis", "vehit", "vehor", "velae", "velam", "velas", "velat", "velem", "veler", "veles", "velet", "velim", "velis", "velit", "velle", "velli", "vello", "velor", "velox", "velum", "velut", "venae", "venam", "venas", "vende", "vendi", "vendo", "veneo", "vener", "venia", "venii", "venio", "venis", "venit", "venor", "vente", "venti", "vento", "venui", "venum", "venus", "vepre", "vepri", "verae", "veram", "veras", "verat", "verax", "verba", "verbi", "verbo", "verem", "veres", "veret", "verge", "vergi", "vergo", "veris", "verme", "vermi", "verna", "verne", "verni", "verno", "veros", "verpa", "verpe", "verpi", "verpo", "verre", "verri", "verro", "versa", "verse", "versi", "verso", "versu", "verte", "verti", "verto", "verua", "verum", "verus", "vesca", "vesce", "vesci", "vesco", "vespa", "vespe", "vespi", "veste", "vesti", "vetas", "vetat", "vetem", "veter", "vetes", "vetet", "vetor", "vetui", "vetus", "vexas", "vexat", "vexem", "vexer", "vexes", "vexet", "vexit", "vexor", "viabo", "vians", "viant", "viare", "viari", "viata", "viate", "viati", "viato", "viatu", "viavi", "vibex", "vibia", "vibra", "vibro", "vicem", "vices", "vicia", "vicis", "vicit", "vicos", "victa", "victe", "victi", "victo", "victu", "vicum", "vicus", "viden", "video", "vides", "videt", "vidit", "vidua", "vidue", "vidui", "viduo", "vieam", "viear", "vieas", "vieat", "viebo", "viens", "vient", "vieor", "viere", "vieri", "viete", "vieto", "vietu", "vigeo", "viges", "viget", "vigia", "vigil", "vigor", "vigui", "vigum", "vilem", "viles", "vilia", "vilis", "villa", "ville", "villi", "villo", "vimen", "vince", "vinci", "vinco", "vinea", "vinee", "vinei", "vineo", "vinis", "vinos", "vinum", "vinus", "vinxi", "viola", "violo", "vipio", "virae", "viram", "viras", "virco", "vireo", "vires", "viret", "virga", "virgo", "viria", "viris", "viror", "viros", "virui", "virum", "virus", "visae", "visam", "visar", "visas", "visat", "visca", "visci", "visco", "vises", "viset", "visio", "visis", "visit", "visor", "visos", "visui", "visum", "visus", "vitae", "vitam", "vitas", "vitat", "vitea", "vitee", "vitei", "vitem", "viteo", "viter", "vites", "vitet", "vitex", "vitia", "vitii", "vitio", "vitis", "vitor", "vitra", "vitri", "vitro", "vitta", "vitus", "vivae", "vivam", "vivas", "vivat", "vivax", "vives", "vivet", "vivis", "vivit", "vivos", "vivum", "vivus", "vixit", "vobis", "vocas", "vocat", "vocem", "vocer", "voces", "vocet", "vocis", "vocor", "vocum", "volam", "volas", "volat", "volem", "voles", "volet", "volga", "volge", "volgi", "volgo", "volpe", "volpi", "volta", "volti", "volto", "voltu", "volui", "volup", "volve", "volvi", "volvo", "vomam", "vomar", "vomas", "vomat", "vomax", "vomer", "vomes", "vomet", "vomis", "vomit", "vomor", "vomui", "voras", "vorat", "vorax", "vorem", "vorer", "vores", "voret", "voror", "votae", "votam", "votas", "votis", "votos", "votum", "votus", "voveo", "voves", "vovet", "vovit", "vulga", "vulge", "vulgi", "vulgo", "vulpe", "vulpi", "vulsa", "vulse", "vulsi", "vulso", "vulsu", "vulta", "vulti", "vulto", "vultu", "vulva", "wacta", "wacto", "wadio", "warda", "wardo", "werra", "witam", "witta", "xenia", "xenii", "xenio", "xenis", "xenon", "xylon", "xyste", "xysti", "xysto", "ymber", "ymbre", "ymbri", "zacon", "zaeta", "zamia", "zanca", "zanga", "zebra", "zelas", "zelat", "zelem", "zeler", "zeles", "zelet", "zelis", "zelor", "zelos", "zelum", "zelus", "zeris", "zeron", "zeros", "zerum", "zetae", "zetam", "zetas", "zetis", "zinca", "zinci", "zinco", "zirbe", "zirbi", "zirbo", "zonae", "zonam", "zonas", "zonis", "zurae", "zuram", "zuras", "zuris", "zygia", "zytha", "zythi", "zytho"];
},{}],"../js/constants/translations.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.translations = void 0;
exports.translations = {
  "title": {
    "english": "Verbdum - A daily word game",
    "latin": "Verbdum - Ludus verborum cotidianus"
  },
  "htp-title": {
    "english": "HOW TO PLAY",
    "latin": "QUOMODO LUSUS EST"
  },
  "htp-1": {
    "english": "Guess the <b>VERBDUM</b> in 6 tries or fewer.",
    "latin": "Inveni <b>VERBDUM</b> sex conatis."
  },
  "htp-2": {
    "english": "Each guess must be a five letter Latin word.",
    "latin": "Quodque verbum continet verbum Latīnum quinque litterarum."
  },
  "htp-3": {
    "english": "After each guess, the color of the tiles will change to show how close your guess was to the word.",
    "latin": "Post quodque conatum, litterae tingentur ut demonstrent partes rectas conati."
  },
  "htp-ex": {
    "english": "Examples",
    "latin": "Exempla"
  },
  "htp-ex-1": {
    "english": "The letter A is in the word and in the right place.",
    "latin": "Littera A est in verbō et in locō propio."
  },
  "htp-ex-2": {
    "english": "The letter T is in the word but not in the right place.",
    "latin": "Littera T est in verbō sed non in locō propio."
  },
  "htp-ex-3": {
    "english": "The letter E is not in the word.",
    "latin": "Littera E non est in verbō."
  },
  "htp-4": {
    "english": "There is a new <b>VERBDUM</b> each day.",
    "latin": "Est novum <b>VERBDUM</b> cotidiē."
  },
  "stat-title": {
    "english": "STATISTICS",
    "latin": "STATISTICAE"
  },
  "stat-played": {
    "english": "Played",
    "latin": "Lūsus Est"
  },
  "stat-win": {
    "english": "Win %",
    "latin": "% Victoriae"
  },
  "stat-cstreak": {
    "english": "Current Streak",
    "latin": "Ordo Hactenus"
  },
  "stat-mstreak": {
    "english": "Max Streak",
    "latin": "Ordo Maximus"
  },
  "stat-dist": {
    "english": "GUESS DISTRIBUTION",
    "latin": "DISTRIBŪTIО̄ CONATORUM"
  },
  "stat-next": {
    "english": "NEXT VERBDUM",
    "latin": "VERBDUM SEQUENS"
  },
  "current-lang": {
    "english": "English",
    "latin": "Latine"
  },
  "toast-invalid-word": {
    "english": "Not in word list.",
    "latin": "Non in inventāriō verbōrum."
  },
  "toast-too-few-letters": {
    "english": "Not enough letters.",
    "latin": "Non satis litterarum."
  },
  "congrats-1": {
    "english": "Genius!",
    "latin": "Optime!"
  },
  "congrats-2": {
    "english": "Magnificent!",
    "latin": "Pulcherrime!"
  },
  "congrats-3": {
    "english": "Impressive!",
    "latin": "Macte!"
  },
  "congrats-4": {
    "english": "Splendid!",
    "latin": "Sophos!"
  },
  "congrats-5": {
    "english": "Great!",
    "latin": "Bene!"
  },
  "congrats-6": {
    "english": "Phew!",
    "latin": "Euge!"
  },
  "answer-was": {
    "english": "The word was: ",
    "latin": "Verbum erat: "
  }
};
},{}],"../js/translate.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.toggleTranslation = exports.loadPreferredLanguage = exports.getCurrentTextForId = exports.translatePage = void 0;

var translations_1 = require("./constants/translations");

function translatePage(language) {
  window.currentLanguage = language;
  localStorage.setItem("language", language);
  var translatable = document.querySelectorAll("[data-trans]");

  for (var i = 0; i < translatable.length; i++) {
    var transId = translatable[i].getAttribute("data-trans");
    var text = translations_1.translations[transId][language];
    if (transId == "answer-was") text += window.currentlyPlayingWord.toUpperCase();
    translatable[i].innerHTML = text;
  }
}

exports.translatePage = translatePage;

function getCurrentTextForId(id) {
  return translations_1.translations[id][window.currentLanguage];
}

exports.getCurrentTextForId = getCurrentTextForId;

function loadPreferredLanguage() {
  var preferredLanguage = localStorage.getItem("language");
  translatePage(preferredLanguage !== null && preferredLanguage !== void 0 ? preferredLanguage : "latin");
}

exports.loadPreferredLanguage = loadPreferredLanguage;

function toggleTranslation() {
  translatePage(window.currentLanguage == "latin" ? "english" : "latin");
}

exports.toggleTranslation = toggleTranslation;
},{"./constants/translations":"../js/constants/translations.ts"}],"../js/modal.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.showStatsModal = exports.showHelpModal = void 0;

var translate_1 = require("./translate");

var modalBagElement = document.getElementById("modal-bag");
modalBagElement.addEventListener("click", function () {
  modalBagElement.classList.add("hidden");
  setTimeout(function () {
    return modalBagElement.classList.remove("shown");
  }, 200);
});
var helpElement = document.getElementById("header-help");
helpElement.addEventListener("click", showHelpModal);
var statsElement = document.getElementById("header-stats");
statsElement.addEventListener("click", showStatsModal);
var langSwitches = document.getElementsByClassName("lang-switch");

for (var i = 0; i < langSwitches.length; i++) {
  langSwitches[i].addEventListener("click", translate_1.toggleTranslation);
}

var helpModal = document.getElementById("help-modal");
var statsModal = document.getElementById("stats-modal");

function hideAllModals() {
  helpModal.classList.remove("shown");
  statsModal.classList.remove("shown");
}

function showModal(modal) {
  modalBagElement.classList.remove("hidden");
  modalBagElement.classList.add("shown");
  hideAllModals();
  modal.classList.add("shown");
}

function showHelpModal() {
  showModal(helpModal);
}

exports.showHelpModal = showHelpModal;

function showStatsModal() {
  showModal(statsModal);
}

exports.showStatsModal = showStatsModal;
},{"./translate":"../js/translate.ts"}],"../js/game.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadGameForDate = exports.submit = exports.backspaceLetter = exports.addLetter = exports.updateStatsPage = exports.readStats = void 0;

var word_for_day_1 = require("./word-for-day");

var allowed_guesses_1 = require("./constants/allowed-guesses");

var translate_1 = require("./translate");

var modal_1 = require("./modal");

function clearLetter(element) {
  var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

  if (text) {
    element.textContent = "";
  }

  element.classList.remove("guessing");
  element.classList.remove("absent");
  element.classList.remove("present");
  element.classList.remove("correct");
}

function clearGameBoard() {
  var gameBoardElement = document.getElementById("game-board");

  for (var i = 0; i < gameBoardElement.children.length; i++) {
    for (var j = 0; j < gameBoardElement.children[i].children.length; j++) {
      clearLetter(gameBoardElement.children[i].children[j]);
    }
  }
}

function getLetterElement(wordNumber, letterNumber) {
  var gameBoardElement = document.getElementById("game-board");
  var rowElement = gameBoardElement.children[wordNumber];
  return rowElement.children[letterNumber];
}

function setGuessingLetterInGameBoard(wordNumber, letterNumber, letter) {
  var letterElement = getLetterElement(wordNumber, letterNumber);
  letterElement.textContent = letter.toUpperCase();

  if (letter == "") {
    letterElement.classList.remove("guessing");
    letterElement.setAttribute("data-animation", "");
  } else {
    letterElement.classList.add("guessing");
    letterElement.setAttribute("data-animation", "pop");
  }
}

function getKeyboardKey(key) {
  return document.querySelectorAll("[data-key='".concat(key, "']"))[0];
}

function clearKeyboardKey(key) {
  var element = getKeyboardKey(key);
  element.classList.remove("correct");
  element.classList.remove("present");
  element.classList.remove("absent");
}

function clearKeyboard() {
  for (var i = 0; i < 26; i++) {
    clearKeyboardKey(String.fromCharCode(97 + i));
  }
}

function setKeyboardKeyState(key, state) {
  var keyElement = getKeyboardKey(key);

  if (state == "correct" || state == "present" && !keyElement.classList.contains("correct") || state == "absent" && !keyElement.classList.contains("correct") && !keyElement.classList.contains("present")) {
    clearKeyboardKey(key);
    getKeyboardKey(key).classList.add(state);
  }
}

function toastWithMessage(messageId) {
  var fades = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var toastBag = document.getElementById("toast-bag");
  var toast = document.createElement("div");
  toast.innerText = (0, translate_1.getCurrentTextForId)(messageId);
  toast.classList.add("toast");
  toast.classList.add("toast-fade");
  toast.setAttribute("data-trans", messageId);
  toastBag.prepend(toast);
  if (fades) setTimeout(function () {
    return toastBag.removeChild(toastBag.lastElementChild);
  }, 2000);
}

function showAnswer() {
  var toastBag = document.getElementById("toast-bag");
  var toast = document.createElement("div");
  toast.innerText = (0, translate_1.getCurrentTextForId)("answer-was") + window.currentlyPlayingWord.toUpperCase();
  toast.classList.add("toast");
  toast.setAttribute("data-trans", "answer-was");
  toastBag.prepend(toast);
}

function shakeWord(wordNumber) {
  var _loop = function _loop(i) {
    var letterElement = getLetterElement(wordNumber, i);
    letterElement.setAttribute("data-animation", "shake");
    setTimeout(function () {
      return letterElement.setAttribute("data-animation", "");
    }, 600);
  };

  for (var i = 0; i < 5; i++) {
    _loop(i);
  }
}

var flipGap = 250;
var bounceGap = 100;

function bounceWord(wordNumber) {
  var _loop2 = function _loop2(i) {
    var letterElement = getLetterElement(wordNumber, i);
    setTimeout(function () {
      return letterElement.setAttribute("data-animation", "bounce");
    }, bounceGap * i);
  };

  for (var i = 0; i < 5; i++) {
    _loop2(i);
  }
}

function setClueForLetter(wordNumber, letterNumber, letterValue, clue) {
  var letterElement = getLetterElement(wordNumber, letterNumber);
  letterElement.setAttribute("data-animation", "flip");
  setTimeout(function () {
    letterElement.textContent = letterValue.toUpperCase();
    letterElement.classList.add(clue);
    setKeyboardKeyState(letterValue, clue);
  }, flipGap);
}

function guessWordInRow(word, answer, row) {
  var isInitialLoad = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;

  if (!allowed_guesses_1.allowedGuesses.includes(word)) {
    toastWithMessage("toast-invalid-word");
    shakeWord(window.currentWordNumber);
    return;
  }

  window.pastGuesses.push(word);

  if (!isInitialLoad) {
    appendGuess(window.currentlyPlayingId, word);

    if (word == answer || row == 5) {
      updateStatsFromSolve();
      setTimeout(function () {
        return toastWithMessage("congrats-".concat(window.pastGuesses.length));
      }, flipGap * 5 + 550);
      setTimeout(function () {
        return bounceWord(window.pastGuesses.length - 1);
      }, flipGap * 5 + 550);
      setTimeout(modal_1.showStatsModal, flipGap * 5 + 550 + 2000);
    }
  }

  if (row == 5 && word != answer) {
    showAnswer();
  }

  window.currentWordNumber++;
  window.currentLetterNumber = 0;
  window.currentlyGuessingWord = "";
  var answerLetters = answer;
  var letterFlipDelay = isInitialLoad ? 100 : 300;

  var _loop3 = function _loop3(i) {
    var letterElement = getLetterElement(row, i);
    clearLetter(letterElement, false);

    if (word[i] == answer[i]) {
      setTimeout(function () {
        return setClueForLetter(row, i, word[i], "correct");
      }, i * letterFlipDelay);
      answerLetters = answerLetters.replace(word[i], "");
    } else if (!answer.includes(word[i])) {
      setTimeout(function () {
        return setClueForLetter(row, i, word[i], "absent");
      }, i * letterFlipDelay);
    }
  };

  for (var i = 0; i < 5; i++) {
    _loop3(i);
  }

  var _loop4 = function _loop4(_i) {
    if (word[_i] != answer[_i] && answerLetters.includes(word[_i])) {
      setTimeout(function () {
        return setClueForLetter(row, _i, word[_i], "present");
      }, _i * letterFlipDelay);
      answerLetters = answerLetters.replace(word[_i], "");
    } else if (word[_i] != answer[_i]) {
      setTimeout(function () {
        return setClueForLetter(row, _i, word[_i], "absent");
      }, _i * letterFlipDelay);
    }
  };

  for (var _i = 0; _i < 5; _i++) {
    _loop4(_i);
  }
}

function appendGuess(id, guess) {
  var currentGuessesText = localStorage.getItem("guesses-".concat(id));

  if (currentGuessesText == null) {
    localStorage.setItem("guesses-".concat(id), JSON.stringify([guess]));
  } else {
    var currentGuesses = JSON.parse(currentGuessesText);
    currentGuesses.push(guess);
    localStorage.setItem("guesses-".concat(id), JSON.stringify(currentGuesses));
  }
}

function loadGuesses(id) {
  var currentGuessesText = localStorage.getItem("guesses-".concat(id));

  if (currentGuessesText != null) {
    var currentGuesses = JSON.parse(currentGuessesText);

    for (var i = 0; i < currentGuesses.length; i++) {
      guessWordInRow(currentGuesses[i], window.currentlyPlayingWord, window.currentWordNumber, true);
    }
  }
}

function isPlaying() {
  return window.currentWordNumber != 6 && !window.pastGuesses.includes(window.currentlyPlayingWord);
}

function readStats() {
  var currentStatsString = localStorage.getItem("stats");
  return currentStatsString != null ? JSON.parse(currentStatsString) : {
    roundsPlayed: 0,
    roundsWon: 0,
    currentStreak: 0,
    maxStreak: 0,
    solveNumbers: [0, 0, 0, 0, 0, 0]
  };
}

exports.readStats = readStats;

function updateStatsPage() {
  var currentStats = readStats();
  document.getElementById("stat-played").innerText = currentStats.roundsPlayed.toString();
  document.getElementById("stat-win-percent").innerText = Math.round(currentStats.roundsWon / currentStats.roundsPlayed * 100 || 0).toString();
  document.getElementById("stat-current-streak").innerText = currentStats.currentStreak.toString();
  document.getElementById("stat-max-streak").innerText = currentStats.maxStreak.toString();
  var solveNumbers = currentStats.solveNumbers;
  var maxSolveNum = Math.max.apply(null, solveNumbers);

  for (var i = 0; i < 6; i++) {
    var graph = document.querySelectorAll("[data-graph-num='".concat(i + 1, "']"))[0];
    graph.style.width = (solveNumbers[i] / maxSolveNum * 100).toString() + "%";
    graph.children[0].textContent = solveNumbers[i].toString();
  }
}

exports.updateStatsPage = updateStatsPage;

function updateStatsFromSolve() {
  if ((0, word_for_day_1.verbdumIdForToday)() == window.currentlyPlayingId) {
    var currentStats = readStats();
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

function addLetter(letter) {
  if (window.currentLetterNumber != 5 && isPlaying()) {
    setGuessingLetterInGameBoard(window.currentWordNumber, window.currentLetterNumber, letter);
    window.currentlyGuessingWord += letter;
    window.currentLetterNumber++;
  }
}

exports.addLetter = addLetter;

function backspaceLetter() {
  if (window.currentLetterNumber != 0 && isPlaying()) {
    window.currentlyGuessingWord = window.currentlyGuessingWord.slice(0, -1);
    window.currentLetterNumber--;
    setGuessingLetterInGameBoard(window.currentWordNumber, window.currentLetterNumber, "");
  }
}

exports.backspaceLetter = backspaceLetter;

function submit() {
  if (isPlaying()) {
    if (window.currentLetterNumber == 5) {
      guessWordInRow(window.currentlyGuessingWord, window.currentlyPlayingWord, window.currentWordNumber);
    } else {
      toastWithMessage("toast-too-few-letters");
      shakeWord(window.currentWordNumber);
    }
  }
}

exports.submit = submit;

function loadGameForDate(date) {
  window.currentWordNumber = 0;
  window.currentLetterNumber = 0;
  window.currentlyGuessingWord = "";
  window.pastGuesses = [];
  window.currentlyPlayingWord = (0, word_for_day_1.verbdumForDay)(date);
  window.currentlyPlayingId = (0, word_for_day_1.verbdumIdForDay)(date);
  clearGameBoard();
  clearKeyboard();
  loadGuesses(window.currentlyPlayingId);
}

exports.loadGameForDate = loadGameForDate;
},{"./word-for-day":"../js/word-for-day.ts","./constants/allowed-guesses":"../js/constants/allowed-guesses.ts","./translate":"../js/translate.ts","./modal":"../js/modal.ts"}],"../js/keyboard.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var game_1 = require("./game");

var keys = document.getElementsByClassName("keyboard-key");

var _loop = function _loop(i) {
  var keyCode = keys[i].getAttribute("data-key");
  keys[i].addEventListener("click", function () {
    return typeKey(keyCode);
  });
};

for (var i = 0; i < keys.length; i++) {
  _loop(i);
}

document.addEventListener("keydown", function (e) {
  var typedLetter = e.key.toLowerCase();

  switch (typedLetter) {
    case "enter":
      typeKey("enter");
      return;

    case "backspace":
    case "delete":
      typeKey("backspace");
      return;

    default:
      if (/^[a-z]$/.test(typedLetter)) {
        typeKey(typedLetter);
      }

      return;
  }
});

function typeKey(key) {
  switch (key) {
    case "enter":
      (0, game_1.submit)();
      return;

    case "backspace":
      (0, game_1.backspaceLetter)();
      return;

    default:
      (0, game_1.addLetter)(key);
      return;
  }
}
},{"./game":"../js/game.ts"}],"../js/load-todays-word.ts":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var game_1 = require("./game");

var translate_1 = require("./translate");

var modal_1 = require("./modal");

function startTimer(duration, display) {
  var start = Date.now(),
      diff,
      hours,
      minutes,
      seconds,
      intervalId;

  function timer() {
    // get the number of seconds that have elapsed since
    // startTimer() was called
    diff = duration - ((Date.now() - start) / 1000 | 0);

    if (diff >= 0) {
      // does the same job as parseInt truncates the float
      hours = diff / 3600 | 0;
      minutes = diff / 60 % 60 | 0;
      seconds = diff % 60 | 0;
      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;
      display.textContent = hours + ":" + minutes + ":" + seconds;
    } else {
      display.textContent = "Now!";
      clearInterval(intervalId);
    }
  } // we don't want to wait a full second before the timer starts


  timer();
  intervalId = setInterval(timer, 1000);
}

function getSecondsTillTomorrow() {
  var now = new Date();
  var tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  var diff = tomorrow.getTime() - now.getTime(); // difference in ms

  return Math.round(diff / 1000); // convert to seconds
}

function checkShouldShowHelp() {
  if (localStorage.getItem("first-visit") == null) {
    localStorage.setItem("first-visit", "true");
    (0, modal_1.showHelpModal)();
  }
}

(0, game_1.loadGameForDate)(new Date());
(0, game_1.updateStatsPage)();
startTimer(getSecondsTillTomorrow(), document.getElementById("countdown-timer"));
(0, translate_1.loadPreferredLanguage)();
checkShouldShowHelp();
},{"./game":"../js/game.ts","./translate":"../js/translate.ts","./modal":"../js/modal.ts"}],"../js/index.ts":[function(require,module,exports) {
require('./keyboard.ts');

require('./load-todays-word.ts');

require('./modal.ts');
},{"./keyboard.ts":"../js/keyboard.ts","./load-todays-word.ts":"../js/load-todays-word.ts","./modal.ts":"../js/modal.ts"}],"../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "56690" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","../js/index.ts"], null)
//# sourceMappingURL=/js.d744eb43.js.map