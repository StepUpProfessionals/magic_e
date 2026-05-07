    const vowelData = {
      A: {
        label: "Long A",
        sound: "/eɪ/",
        theme: "A",
        families: {
          "-ake": ["cake", "fake", "lake", "make", "rake", "take", "wake", "bake", "shake", "snake", "brake", "flake", "stake", "quake"],
          "-ale": ["bale", "gale", "male", "pale", "sale", "tale", "whale", "scale", "stale", "vale"],
          "-ame": ["came", "dame", "fame", "game", "lame", "name", "same", "tame", "blame", "flame", "frame", "shame"],
          "-ane": ["bane", "cane", "lane", "mane", "pane", "sane", "vane", "crane", "plane", "insane"],
          "-ape": ["cape", "drape", "gape", "grape", "scrape", "shape", "tape", "escape"],
          "-ate": ["date", "fate", "gate", "hate", "late", "mate", "rate", "grate", "plate", "skate", "state", "crate", "create"],
          "-ave": ["brave", "cave", "gave", "pave", "rave", "save", "shave", "slave", "wave", "crave", "engrave"],
          "-aze": ["blaze", "daze", "gaze", "glaze", "graze", "haze", "maze", "phase"],
          "-ade": ["blade", "fade", "grade", "jade", "made", "shade", "spade", "trade", "wade", "cascade", "parade", "arcade", "upgrade"],
          "-ace": ["face", "grace", "lace", "pace", "place", "race", "space", "trace", "brace"],
          "-age": ["age", "cage", "page", "rage", "sage", "stage", "wage"],
          "-are": ["bare", "care", "dare", "fare", "hare", "rare", "share", "spare", "stare", "square", "ware", "compare", "prepare"]
        },
        sentences: [
          "The snake is by the lake.",
          "Take the cake to the gate.",
          "A brave whale can make a wave.",
          "Grace made a cake and a plate.",
          "The plane came late.",
          "The flame is by the gate.",
          "The name is on the page.",
          "A crane can take a frame."
        ],
        twisters: [
          "Grace made a cake at the gate.",
          "The brave snake made a wave by the lake.",
          "Take the plate, make a cake, and skate late."
        ],
        builder: {
          bank: ["the", "snake", "is", "by", "the", "lake", "take", "cake", "to", "gate", "plane", "came", "late"],
          expected: ["The snake is by the lake.", "Take the cake to the gate.", "The plane came late."]
        }
      },
      E: {
        label: "Long E",
        sound: "/iː/",
        theme: "E",
        families: {
          "-ere": ["here", "mere", "sphere", "sincere", "severe", "adhere", "atmosphere", "hemisphere"],
          "-ene": ["gene", "scene", "serene", "convene", "intervene"],
          "-eme": ["theme", "scheme", "extreme", "supreme"],
          "-ete": ["athlete", "complete", "compete", "delete", "concrete", "obsolete", "discrete"],
          "-ede": ["cede", "precede", "concede", "recede", "stampede", "impede", "centipede", "intercede"]
        },
        sentences: [
          "The athlete can compete.",
          "Here is a complete scene.",
          "The theme is extreme.",
          "A severe scheme can impede.",
          "The sphere is here.",
          "The serene scene is complete.",
          "The supreme theme is here.",
          "The athlete can delete the theme."
        ],
        twisters: [
          "The complete theme is extreme.",
          "Here, the severe athlete can compete.",
          "The serene scene is here."
        ],
        builder: {
          bank: ["the", "athlete", "can", "compete", "here", "is", "a", "complete", "scene", "the", "theme", "is", "extreme"],
          expected: ["The athlete can compete.", "Here is a complete scene.", "The theme is extreme."]
        }
      },
      I: {
        label: "Long I",
        sound: "/aɪ/",
        theme: "I",
        families: {
          "-ine": ["dine", "fine", "line", "mine", "nine", "pine", "vine", "wine", "shine", "shrine", "spine", "divine", "decline", "define", "refine", "recline", "combine", "confine", "outline", "intertwine", "whine"],
          "-ide": ["bride", "glide", "hide", "pride", "ride", "side", "slide", "stride", "tide", "wide", "abide", "decide", "divide", "confide", "provide", "reside", "inside", "outside", "override"],
          "-ike": ["bike", "hike", "like", "spike", "strike", "pike"],
          "-ile": ["file", "mile", "pile", "tile", "vile", "while", "smile", "exile", "profile"],
          "-ime": ["crime", "dime", "lime", "prime", "time", "chime", "grime", "slime", "sublime"],
          "-ipe": ["pipe", "ripe", "stripe", "swipe", "wipe", "gripe", "snipe"],
          "-ire": ["fire", "hire", "tire", "wire", "admire", "aspire", "desire", "entire", "expire", "inspire", "require", "retire", "empire"],
          "-ite": ["bite", "cite", "kite", "quite", "spite", "white", "write", "excite", "ignite", "invite", "polite", "recite", "unite", "despite"],
          "-ive": ["drive", "five", "hive", "thrive", "strive", "arrive", "survive", "deprive", "derive", "revive", "contrive"],
          "-ise": ["rise", "wise", "advise", "arise", "comprise", "sunrise", "surprise", "enterprise", "paradise"]
        },
        sentences: [
          "I ride a bike in a wide line.",
          "The white kite can glide.",
          "Five vines shine in a line.",
          "I will write a fine line.",
          "The bride can smile with pride.",
          "The file is inside.",
          "The tire is by the bike.",
          "I like the white stripe."
        ],
        twisters: [
          "Five fine vines shine in a wide line.",
          "The white kite can glide by the bike.",
          "I write nine lines inside the file."
        ],
        builder: {
          bank: ["i", "ride", "a", "bike", "in", "a", "wide", "line", "the", "white", "kite", "can", "glide", "the", "file", "is", "inside"],
          expected: ["I ride a bike in a wide line.", "The white kite can glide.", "The file is inside."]
        }
      },
      O: {
        label: "Long O",
        sound: "/oʊ/",
        theme: "O",
        families: {
          "-one": ["bone", "cone", "lone", "stone", "tone", "zone", "drone", "phone", "throne", "clone", "alone", "ozone", "postpone", "trombone"],
          "-oke": ["broke", "choke", "joke", "poke", "smoke", "spoke", "stroke", "woke", "yoke", "evoke", "invoke", "provoke"],
          "-ole": ["mole", "pole", "role", "sole", "whole", "console", "parole"],
          "-ome": ["dome", "home", "chrome", "gnome", "genome", "syndrome"],
          "-ope": ["cope", "hope", "mope", "rope", "slope", "scope", "grope", "elope"],
          "-ore": ["bore", "core", "more", "pore", "score", "shore", "snore", "sore", "store", "adore", "explore", "ignore", "restore"],
          "-ose": ["chose", "close", "dose", "nose", "pose", "prose", "rose", "those", "compose", "expose", "propose", "suppose", "dispose"],
          "-ote": ["note", "quote", "vote", "devote", "remote", "promote", "antidote"],
          "-ove": ["cove", "drove", "grove", "stove", "wove", "clove", "trove"],
          "-ogue": ["vogue", "rogue"]
        },
        sentences: [
          "The phone is at home.",
          "The stone is close to the rose.",
          "A drone can go to the zone.",
          "I hope to vote by remote note.",
          "The smoke rose from the stove.",
          "The cone is by the stone.",
          "The rose is close to the phone.",
          "The note is at home."
        ],
        twisters: [
          "The stone phone is close to the rose.",
          "I hope the drone is at home.",
          "The smoke rose from the stove."
        ],
        builder: {
          bank: ["the", "phone", "is", "at", "home", "the", "stone", "is", "close", "to", "the", "rose", "the", "note", "is", "at", "home"],
          expected: ["The phone is at home.", "The stone is close to the rose.", "The note is at home."]
        }
      },
      U: {
        label: "Long U",
        sound: "/juː/ or /uː/",
        theme: "U",
        families: {
          "-ube": ["cube", "lube", "tube"],
          "-ude": ["crude", "dude", "nude", "rude", "exclude", "include", "intrude", "conclude", "exude", "prelude", "interlude"],
          "-uke": ["duke", "fluke", "nuke"],
          "-ule": ["mule", "rule", "yule"],
          "-une": ["dune", "tune", "prune", "commune", "immune"],
          "-use": ["fuse", "muse", "use", "abuse", "accuse", "amuse", "confuse", "excuse", "refuse"],
          "-ute": ["brute", "cute", "flute", "mute", "astute", "compute", "dispute", "execute", "pollute", "salute", "substitute"]
        },
        sentences: [
          "The cute mule can use a tube.",
          "A rude dude can refuse.",
          "The flute is in the cube.",
          "We include a tune and a rule.",
          "Do not confuse the mute tune.",
          "The duke can use a flute.",
          "The cube is by the tube.",
          "A cute mule can salute."
        ],
        twisters: [
          "The cute mule can use a tube.",
          "The rude dude can refuse the tune.",
          "Use the flute, mute the rule, and compute."
        ],
        builder: {
          bank: ["the", "cute", "mule", "can", "use", "a", "tube", "a", "rude", "dude", "can", "refuse", "the", "flute", "is", "in", "the", "cube"],
          expected: ["The cute mule can use a tube.", "A rude dude can refuse.", "The flute is in the cube."]
        }
      }
    };

    const state = {
      active: "A",
      completed: new Set(),
      quiz: { current: null, score: 0, total: 0, answered: false },
      builder: { selected: [], activeBank: [], expected: [] }
    };

    function titleCaseSentence(words) {
      const text = words.join(" ").replace(/\s+/g, " ").trim();
      if (!text) return "";
      return text.charAt(0).toUpperCase() + text.slice(1) + ".";
    }

    function normalizeSentence(sentence) {
      return sentence.toLowerCase().replace(/[^a-z\s]/g, "").replace(/\s+/g, " ").trim();
    }

    function allQuizWords() {
      const items = [];
      Object.entries(vowelData).forEach(([key, data]) => {
        Object.entries(data.families).forEach(([family, words]) => {
          words.forEach(word => items.push({ word, vowel: key, family }));
        });
      });
      return items;
    }

    function init() {
      renderTabs();
      renderGarden(state.active);
      renderChecklist();
      initBuilderSelect();
      newBuilderSet();
      nextQuizWord();
    }

    function renderTabs() {
      const tabs = document.getElementById("tabs");
      tabs.innerHTML = "";
      Object.entries(vowelData).forEach(([key, data]) => {
        const btn = document.createElement("button");
        btn.className = "tab-btn" + (key === state.active ? " active" : "");
        btn.textContent = `${data.label} ${data.sound}`;
        btn.onclick = () => {
          state.active = key;
          renderTabs();
          renderGarden(key);
        };
        tabs.appendChild(btn);
      });
    }

    function renderGarden(key) {
      const data = vowelData[key];
      const mount = document.getElementById("gardenMount");
      const families = Object.entries(data.families).map(([family, words]) => `
        <article class="family-card">
          <div class="family-name">${family}</div>
          <div class="word-list">${words.map(word => `<span class="word-chip">${word}</span>`).join("")}</div>
        </article>
      `).join("");

      const sentences = data.sentences.map(sentence => `<li>${sentence}</li>`).join("");
      const twisters = data.twisters.map(sentence => `<li>${sentence}</li>`).join("");
      const completed = state.completed.has(key);

      mount.innerHTML = `
        <div class="garden-panel" data-vowel="${key}">
          <div class="garden-top">
            <div>
              <h2>${data.label} Garden</h2>
              <p>Read the families aloud. Notice how the final silent E supports the long vowel sound.</p>
            </div>
            <div class="sound-badge">${data.sound}</div>
          </div>

          <div class="family-grid">${families}</div>

          <div class="practice-grid">
            <article class="practice-card">
              <h3>Sentence Practice</h3>
              <ul class="sentence-list">${sentences}</ul>
            </article>
            <article class="practice-card">
              <h3>Tongue Twister Challenge</h3>
              <ul class="twister-list">${twisters}</ul>
              <div class="mini-actions">
                <button class="mini-btn" onclick="showHint('slow')">Read slowly</button>
                <button class="mini-btn" onclick="showHint('fast')">Read faster</button>
                <button class="mini-btn" onclick="showHint('repeat')">Repeat 3 times</button>
              </div>
              <div class="hint-box" id="twisterHint"></div>
            </article>
          </div>

          <div class="complete-row">
            <button class="btn btn-teal" onclick="markCompleted('${key}')">Mark as completed</button>
            <span class="completion-note ${completed ? "show" : ""}" id="completeNote">✓ ${data.label} completed</span>
          </div>
        </div>
      `;
    }

    function showHint(type) {
      const hint = document.getElementById("twisterHint");
      const messages = {
        slow: "Read each word slowly. Stretch the long vowel sound clearly.",
        fast: "Now read with a natural rhythm. Keep the final E silent.",
        repeat: "Repeat the same line 3 times. Aim for clarity before speed."
      };
      hint.textContent = messages[type];
      hint.classList.add("show");
    }

    function markCompleted(key) {
      state.completed.add(key);
      renderGarden(key);
      renderChecklist();
    }

    function renderChecklist() {
      const checklist = document.getElementById("checklist");
      checklist.innerHTML = "";
      Object.entries(vowelData).forEach(([key, data]) => {
        const item = document.createElement("div");
        item.className = "check-item" + (state.completed.has(key) ? " done" : "");
        item.textContent = `${state.completed.has(key) ? "✓ " : "○ "}${data.label}`;
        checklist.appendChild(item);
      });
      const percent = (state.completed.size / Object.keys(vowelData).length) * 100;
      document.getElementById("progressFill").style.width = `${percent}%`;
      document.getElementById("finalMessage").classList.toggle("show", percent === 100);
    }

    function nextQuizWord() {
      const words = allQuizWords();
      const item = words[Math.floor(Math.random() * words.length)];
      state.quiz.current = item;
      state.quiz.answered = false;
      document.getElementById("quizWord").textContent = item.word;
      document.getElementById("quizFeedback").textContent = "Choose the long vowel sound.";
      renderQuizOptions();
      updateScore();
    }

    function renderQuizOptions() {
      const options = document.getElementById("quizOptions");
      options.innerHTML = "";
      Object.entries(vowelData).forEach(([key, data]) => {
        const btn = document.createElement("button");
        btn.className = "option-btn";
        btn.textContent = `${data.label} ${data.sound}`;
        btn.onclick = () => answerQuiz(key, btn);
        options.appendChild(btn);
      });
    }

    function answerQuiz(choice, button) {
      if (state.quiz.answered) return;
      const current = state.quiz.current;
      state.quiz.total += 1;
      state.quiz.answered = true;
      const buttons = [...document.querySelectorAll(".option-btn")];
      if (choice === current.vowel) {
        state.quiz.score += 1;
        button.classList.add("correct");
        document.getElementById("quizFeedback").textContent = `Correct! “${current.word}” has the ${vowelData[current.vowel].label} sound.`;
      } else {
        button.classList.add("incorrect");
        buttons.forEach(btn => {
          if (btn.textContent.startsWith(vowelData[current.vowel].label)) btn.classList.add("correct");
        });
        document.getElementById("quizFeedback").textContent = `Try again. Look at the word family: ${current.family}.`;
      }
      updateScore();
    }

    function updateScore() {
      document.getElementById("scoreText").textContent = `Score: ${state.quiz.score} / ${state.quiz.total}`;
    }

    function initBuilderSelect() {
      const select = document.getElementById("builderSelect");
      select.innerHTML = "";
      Object.entries(vowelData).forEach(([key, data]) => {
        const option = document.createElement("option");
        option.value = key;
        option.textContent = `${data.label} ${data.sound}`;
        select.appendChild(option);
      });
      select.value = state.active;
    }

    function newBuilderSet() {
      const key = document.getElementById("builderSelect").value || "A";
      const builder = vowelData[key].builder;
      state.builder.selected = [];
      state.builder.activeBank = builder.bank.map((word, index) => ({ word, index, used: false }));
      state.builder.expected = builder.expected;
      document.getElementById("builderFeedback").textContent = "Build a sentence from the word bank.";
      renderBuilder();
    }

    function renderBuilder() {
      const bank = document.getElementById("builderBank");
      const board = document.getElementById("sentenceBoard");
      bank.innerHTML = "";
      board.innerHTML = "";

      state.builder.activeBank.forEach(item => {
        const btn = document.createElement("button");
        btn.className = "builder-word" + (item.used ? " used" : "");
        btn.textContent = item.word;
        btn.onclick = () => {
          if (!item.used) {
            item.used = true;
            state.builder.selected.push(item.word);
            renderBuilder();
          }
        };
        bank.appendChild(btn);
      });

      state.builder.selected.forEach(word => {
        const chip = document.createElement("span");
        chip.className = "word-chip";
        chip.textContent = word;
        board.appendChild(chip);
      });
    }

    function clearBuilder() {
      state.builder.selected = [];
      state.builder.activeBank.forEach(item => item.used = false);
      document.getElementById("builderFeedback").textContent = "Build a sentence from the word bank.";
      renderBuilder();
    }

    function checkBuilder() {
      const attempt = titleCaseSentence(state.builder.selected);
      const normalizedAttempt = normalizeSentence(attempt);
      const valid = state.builder.expected.some(sentence => normalizeSentence(sentence) === normalizedAttempt);
      const feedback = document.getElementById("builderFeedback");
      if (!state.builder.selected.length) {
        feedback.textContent = "Choose words first.";
        return;
      }
      if (valid) {
        feedback.textContent = `Correct sentence: ${attempt}`;
      } else {
        feedback.textContent = `Good practice. Try one of these patterns: ${state.builder.expected.join(" / ")}`;
      }
    }

    init();

// 48-hour mission timer
const MISSION_DURATION_HOURS = 48;
const MISSION_TIMER_KEY = "stepUpMagicEMissionStart";

function startMissionTimer() {
  const timerElement = document.getElementById("missionTimer");
  if (!timerElement) return;

  let missionStart = localStorage.getItem(MISSION_TIMER_KEY);

  if (!missionStart) {
    missionStart = Date.now().toString();
    localStorage.setItem(MISSION_TIMER_KEY, missionStart);
  }

  function updateMissionTimer() {
    const startTime = Number(missionStart);
    const endTime = startTime + MISSION_DURATION_HOURS * 60 * 60 * 1000;
    const remaining = endTime - Date.now();

    const expiredMessage = document.getElementById("expiredMessage");

    if (remaining <= 0) {
      timerElement.textContent = "Expired";

      if (expiredMessage) {
        expiredMessage.classList.add("is-visible");
      }

      document.body.classList.add("mission-expired");

      return;
    }

    if (expiredMessage) {
      expiredMessage.classList.remove("is-visible");
    }

    document.body.classList.remove("mission-expired");

    const totalSeconds = Math.floor(remaining / 1000);
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    timerElement.textContent =
      String(hours).padStart(2, "0") + ":" +
      String(minutes).padStart(2, "0") + ":" +
      String(seconds).padStart(2, "0");
  }

  updateMissionTimer();
  setInterval(updateMissionTimer, 1000);
}

startMissionTimer();