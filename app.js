const missions = [
  {
    title: "Vocabulary Explorer",
    icon: "🧭",
    color: "cyan",
    description: "Temukan arti kata penting dari narrative text.",
    type: "quiz",
    questions: [
      [
        "What does “brave” mean?",
        ["scared", "courageous", "lazy", "angry"],
        1,
        "A brave character is courageous and is not afraid to face a challenge.",
      ],
      [
        "The word “forest” means ...",
        [
          "a large area with trees",
          "a small house",
          "a deep ocean",
          "a busy market",
        ],
        0,
        "Forest berarti hutan, yaitu area luas yang dipenuhi pepohonan.",
      ],
      [
        "A “cunning” fox is ...",
        ["very clever", "very sleepy", "very noisy", "very kind"],
        0,
        "Cunning berarti cerdik, terutama saat mencari cara untuk mendapatkan sesuatu.",
      ],
      [
        "What is the opposite of “weak”?",
        ["tiny", "strong", "quiet", "slow"],
        1,
        "Strong adalah lawan kata dari weak.",
      ],
      [
        "To “escape” means to ...",
        ["run away from danger", "fall asleep", "tell a joke", "build a house"],
        0,
        "Escape berarti melarikan diri dari tempat atau bahaya.",
      ],
      [
        "A “giant” is usually ...",
        ["very small", "very tall or large", "very young", "very funny"],
        1,
        "Giant berarti raksasa, sesuatu yang berukuran sangat besar.",
      ],
      [
        "The moral value of a story is its ...",
        ["lesson", "setting", "character", "title"],
        0,
        "Moral value adalah pesan atau pelajaran dari sebuah cerita.",
      ],
      [
        "“Once upon a time” is often used to ...",
        [
          "end a story",
          "start a fairy tale",
          "ask a question",
          "describe food",
        ],
        1,
        "Frasa ini sering mengawali cerita dongeng atau narrative.",
      ],
      [
        "If a character is “honest”, they ...",
        [
          "tell the truth",
          "hide everything",
          "fight everyone",
          "sleep all day",
        ],
        0,
        "Honest berarti jujur atau selalu mengatakan kebenaran.",
      ],
      [
        "A “villain” is usually the ...",
        [
          "main problem-maker",
          "story narrator",
          "helpful friend",
          "place in a story",
        ],
        0,
        "Villain biasanya menjadi tokoh yang menyebabkan konflik dalam cerita.",
      ],
    ],
  },
  {
    title: "Grammar Challenge",
    icon: "🚀",
    color: "purple",
    description: "Kelompokkan kata kerja narrative ke bentuk yang tepat.",
    type: "quiz",
    questions: [
      [
        "Which verb is in the simple past form?",
        ["go", "went", "going", "goes"],
        1,
        "Went adalah bentuk lampau dari go.",
      ],
      [
        "Choose the past verb: “The mouse ___ the lion.”",
        ["help", "helped", "helping", "helps"],
        1,
        "Narasi kejadian lampau memakai helped.",
      ],
      [
        "“The princess was sleeping.” The word was shows ...",
        ["simple present", "past continuous", "future tense", "an adjective"],
        1,
        "Was + sleeping membentuk past continuous.",
      ],
      [
        "Which verb is irregular?",
        ["walk - walked", "play - played", "catch - caught", "clean - cleaned"],
        2,
        "Catch berubah menjadi caught, bukan catch-ed.",
      ],
      [
        "Complete: “The fox ___ the grapes yesterday.”",
        ["sees", "see", "saw", "seeing"],
        2,
        "Saw adalah bentuk lampau dari see.",
      ],
      [
        "“They lived happily.” Lived is a ...",
        ["past verb", "present verb", "noun", "connector"],
        0,
        "Lived adalah kata kerja bentuk lampau.",
      ],
      [
        "Choose the correct verb: “The bird ___ over the tree.”",
        ["flew", "fly", "flies", "flying"],
        0,
        "Flew adalah past form dari fly.",
      ],
      [
        "Which sentence uses a past verb correctly?",
        [
          "The king visit the town.",
          "The king visited the town.",
          "The king visiting town.",
          "The king visits yesterday.",
        ],
        1,
        "Visited cocok untuk kejadian yang sudah terjadi.",
      ],
      [
        "The past form of “take” is ...",
        ["taked", "takes", "took", "taking"],
        2,
        "Take adalah irregular verb: take - took.",
      ],
      [
        "“Suddenly, the wolf appeared.” The word suddenly is a ...",
        ["verb", "adverb", "noun", "pronoun"],
        1,
        "Suddenly menjelaskan bagaimana sesuatu terjadi, jadi termasuk adverb.",
      ],
    ],
  },
  {
    title: "Sentence Builder",
    icon: "🏎️",
    color: "yellow",
    description: "Susun potongan kata menjadi kalimat narrative yang benar.",
    type: "builder",
    questions: [
      [
        "Susun kalimatnya:",
        ["lived", "A", "girl", "in", "a", "village"],
        "A girl lived in a village.",
      ],
      [
        "Susun kalimatnya:",
        ["the", "lion", "The", "mouse", "helped"],
        "The mouse helped the lion.",
      ],
      [
        "Susun kalimatnya:",
        ["opened", "The", "door", "slowly", "prince", "the"],
        "The prince slowly opened the door.",
      ],
      [
        "Susun kalimatnya:",
        ["found", "a", "They", "treasure", "hidden"],
        "They found a hidden treasure.",
      ],
      [
        "Susun kalimatnya:",
        ["ran", "The", "forest", "fox", "through", "the"],
        "The fox ran through the forest.",
      ],
      [
        "Susun kalimatnya:",
        ["was", "The", "very", "old", "castle"],
        "The castle was very old.",
      ],
      [
        "Susun kalimatnya:",
        ["promised", "never", "She", "to", "lie"],
        "She promised never to lie.",
      ],
      [
        "Susun kalimatnya:",
        ["helped", "kind", "A", "farmer", "the", "stranger"],
        "A kind farmer helped the stranger.",
      ],
      [
        "Susun kalimatnya:",
        ["escaped", "The", "from", "giant", "the", "boy"],
        "The boy escaped from the giant.",
      ],
      [
        "Susun kalimatnya:",
        ["lived", "They", "happily", "ever", "after"],
        "They lived happily ever after.",
      ],
    ],
  },
  {
    title: "Vocabulary Battle",
    icon: "🏰",
    color: "pink",
    description: "Gunakan vocabulary narrative untuk menaklukkan arena.",
    type: "quiz",
    questions: [
      [
        "The hero felt ___ before entering the cave. (not afraid)",
        ["brave", "greedy", "lonely", "cruel"],
        0,
        "Brave berarti berani.",
      ],
      [
        "The dragon guarded a ___ of gold. (a large amount)",
        ["pile", "whisper", "path", "shadow"],
        0,
        "Pile berarti tumpukan.",
      ],
      [
        "The princess ___ the prisoner. (set free)",
        ["rescued", "tricked", "chased", "hid"],
        0,
        "Rescued berarti menyelamatkan.",
      ],
      [
        "The old man gave the boy some wise ___.",
        ["advice", "danger", "forest", "enemy"],
        0,
        "Advice berarti nasihat.",
      ],
      [
        "The rabbit was ___ because it could not find its family.",
        ["lonely", "famous", "enormous", "honest"],
        0,
        "Lonely berarti kesepian.",
      ],
      [
        "The king was ___ and shared food with everyone.",
        ["generous", "cunning", "weak", "silent"],
        0,
        "Generous berarti murah hati.",
      ],
      [
        "A dark cloud was a ___ of the coming storm.",
        ["sign", "villain", "reward", "promise"],
        0,
        "Sign berarti tanda.",
      ],
      [
        "The magic spell ___ the stone into gold.",
        ["transformed", "escaped", "borrowed", "whispered"],
        0,
        "Transformed berarti mengubah.",
      ],
      [
        "The friends made a ___ to protect the village.",
        ["promise", "puzzle", "forest", "giant"],
        0,
        "Promise berarti janji.",
      ],
      [
        "The hero received a ___ for his kindness.",
        ["reward", "chase", "cave", "lie"],
        0,
        "Reward berarti hadiah atau imbalan.",
      ],
    ],
  },
  {
    title: "Story Challenge",
    icon: "📖",
    color: "green",
    description: "Baca cerita dan buktikan pemahamanmu.",
    type: "story",
    story:
      "<strong>The Lion and the Mouse</strong><br><br>One day, a lion was sleeping under a tree. A little mouse ran across his nose and woke him up. The angry lion caught the mouse, but the mouse begged for freedom. “Please let me go. One day I may help you,” he said. The lion laughed, but he released him.<br><br>A few days later, hunters caught the lion in a net. The mouse heard his roar, came quickly, and gnawed the ropes with his sharp teeth. The lion was free. He thanked the mouse and learned that even a small friend can be a great help.",
    source: "Adapted from Aesop’s Fables — public domain",
    questions: [
      [
        "Where was the lion sleeping?",
        ["Under a tree", "In a cave", "Near a river", "On a mountain"],
        0,
        "The first paragraph says the lion slept under a tree.",
      ],
      [
        "What woke the lion up?",
        ["A hunter", "A little mouse", "A loud storm", "A bird"],
        1,
        "The mouse ran across the lion's nose.",
      ],
      [
        "Why did the lion catch the mouse?",
        [
          "The mouse woke him",
          "The mouse stole food",
          "The mouse broke a net",
          "The mouse was noisy",
        ],
        0,
        "The lion became angry because the mouse woke him.",
      ],
      [
        "What did the mouse promise?",
        [
          "To bring food",
          "To help the lion one day",
          "To find the hunters",
          "To guard the tree",
        ],
        1,
        "The mouse promised that he might help the lion.",
      ],
      [
        "How did the hunters catch the lion?",
        ["With a net", "With a cage", "With a rope", "With a trapdoor"],
        0,
        "The text says hunters caught him in a net.",
      ],
      [
        "How did the mouse help?",
        [
          "It bit the hunters",
          "It gnawed the ropes",
          "It called the king",
          "It found a key",
        ],
        1,
        "The mouse gnawed the ropes with its sharp teeth.",
      ],
      [
        "What is the main idea?",
        [
          "Small friends can be helpful",
          "Lions are always kind",
          "Hunters protect animals",
          "Mice are dangerous",
        ],
        0,
        "The lion learned that even a small friend can be a great help.",
      ],
      [
        "What is the orientation of the story?",
        [
          "The lion and mouse are introduced",
          "The net is broken",
          "The lion says goodbye",
          "The hunters celebrate",
        ],
        0,
        "Orientation introduces the characters and the situation.",
      ],
      [
        "What is the complication?",
        [
          "The lion is caught in a net",
          "The mouse sleeps",
          "The tree falls",
          "The hunters leave",
        ],
        0,
        "The lion being trapped creates the problem.",
      ],
      [
        "What moral value can we learn?",
        [
          "Do not underestimate others",
          "Always run from friends",
          "Never help anyone",
          "Only big animals matter",
        ],
        0,
        "The story teaches us not to underestimate a small friend.",
      ],
    ],
  },
  {
    title: "Story Creator Studio",
    icon: "✨",
    color: "orange",
    description:
      "Tulis narrative text lengkapmu dengan clue visual dan story map.",
    type: "writer",
    questions: [
      {
        prompt: "Orientation: introduce the setting.",
        clue: "🌲 🏡 🌙",
        guide:
          "Where and when does your story happen? Describe the place and time.",
        placeholder: "Long ago, in a quiet forest...",
        minWords: 8,
      },
      {
        prompt: "Orientation: introduce your main character.",
        clue: "🧒 🎒 🦊",
        guide:
          "Who is the hero? Give your character a name and one personality trait.",
        placeholder: "There lived a brave girl named...",
        minWords: 8,
      },
      {
        prompt: "Orientation: give your character a goal.",
        clue: "🗺️ ⭐",
        guide: "What does your character want to find, save, or achieve?",
        placeholder: "She wanted to...",
        minWords: 8,
      },
      {
        prompt: "Complication: introduce the problem.",
        clue: "⚡ 🐉 🚪",
        guide: "What unexpected problem suddenly appears?",
        placeholder: "One day, suddenly...",
        minWords: 8,
      },
      {
        prompt: "Complication: show the character’s feeling.",
        clue: "😨 💭",
        guide:
          "Use a feeling word and explain why the character feels that way.",
        placeholder: "The character felt frightened because...",
        minWords: 8,
      },
      {
        prompt: "Rising action: describe the first attempt.",
        clue: "🏃‍♀️ 🔦 🌉",
        guide: "What does your character do to solve the problem?",
        placeholder: "First, the hero decided to...",
        minWords: 8,
      },
      {
        prompt: "Rising action: add a challenge or dialogue.",
        clue: "🗣️ 🧩 🔥",
        guide:
          "Add a short dialogue or another challenge to make the story exciting.",
        placeholder: "“I will...” said the hero...",
        minWords: 8,
      },
      {
        prompt: "Resolution: solve the problem.",
        clue: "🗝️ 🤝 🌈",
        guide:
          "How does the hero finally solve the problem? Use a past-tense verb.",
        placeholder: "Finally, the hero...",
        minWords: 8,
      },
      {
        prompt: "Resolution: show the result.",
        clue: "🎉 🏘️ 💛",
        guide:
          "What changed for the characters or their place after the solution?",
        placeholder: "After that, everyone...",
        minWords: 8,
      },
      {
        prompt: "Coda: write the moral and ending.",
        clue: "📖 ✨ 🏠",
        guide: "End with a lesson and a satisfying final sentence.",
        placeholder: "The story teaches us that...",
        minWords: 8,
      },
    ],
  },
];

const app = document.querySelector("#app");
const state = {
  name: localStorage.getItem("storyspark-name") || "",
  completed: JSON.parse(localStorage.getItem("storyspark-completed") || "[]"),
  scores: JSON.parse(localStorage.getItem("storyspark-scores") || "[]"),
  storyDrafts: JSON.parse(localStorage.getItem("storyspark-drafts") || "[]"),
  activeMission: null,
  index: 0,
  correct: 0,
  answered: false,
  chosenWords: [],
};

const escapeHTML = (value) =>
  String(value).replace(
    /[&<>"']/g,
    (char) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[char],
  );
const normalizeSentence = (value) =>
  String(value)
    .toLowerCase()
    .replace(/[“”"'.,!?]/g, "")
    .replace(/\s+/g, " ")
    .trim();
const save = () => {
  localStorage.setItem("storyspark-name", state.name);
  localStorage.setItem("storyspark-completed", JSON.stringify(state.completed));
  localStorage.setItem("storyspark-scores", JSON.stringify(state.scores));
  localStorage.setItem("storyspark-drafts", JSON.stringify(state.storyDrafts));
};
const totalScore = () => state.scores.reduce((sum, score) => sum + score, 0);
const canStart = (index) => index === 0 || state.completed.includes(index - 1);

function topbar(label = "NARRA-QUEST") {
  return `<header class="topbar"><a class="brand" href="#" onclick="renderHome(); return false"><span class="brand-mark">✦</span><span>NARRA-QUEST<small>${label}</small></span></a>${state.name ? `<span class="pill">👤 ${escapeHTML(state.name)}</span>` : ""}</header>`;
}

function renderWelcome() {
  app.innerHTML = `<div class="screen">${topbar("NARRATIVE TEXT ADVENTURE")}
    <section class="hero">
      <div class="hero-copy"><div class="eyebrow">ENGLISH MISSION • GRADE 9</div><h1>Turn stories into <span>superpowers.</span></h1><p class="lead">Jelajahi dunia narrative text melalui enam misi seru. Kumpulkan vocabulary, taklukkan grammar, dan bangun ceritamu sendiri.</p><button class="btn" onclick="renderNameForm()">Mulai petualangan <span aria-hidden="true">→</span></button></div>
      <div class="hero-card"><div class="eyebrow">YOUR QUEST MAP</div><h3>6 missions · 60 challenges</h3><div class="quest-map">${missions.map((m, i) => `<div class="mini-mission"><span class="mini-number">${i + 1}</span><div><strong>${m.icon} ${m.title}</strong><span>${i === 5 ? "Create your story" : "Master the next skill"}</span></div></div>`).join("")}</div></div>
    </section><footer class="footer">Belajar • Bermain • Bercerita</footer></div>`;
}

function renderNameForm() {
  app.innerHTML = `<div class="screen">${topbar("PLAYER SETUP")}<section class="form-card panel"><div class="mission-icon">🪪</div><div class="eyebrow">BEFORE THE QUEST</div><h2>Siapa nama petualang?</h2><p class="muted">Masukkan nama kamu agar hasil misi tersimpan di perangkat ini.</p><form onsubmit="startGame(event)"><input class="name-input" id="player-name" required maxlength="24" autocomplete="name" placeholder="Contoh: Raka" value="${escapeHTML(state.name)}" /><button class="btn btn-wide" type="submit">Masuk ke Quest Map →</button></form><p class="form-note">Tidak perlu akun. Progress tersimpan otomatis di browser.</p></section></div>`;
  document.querySelector("#player-name").focus();
}

function startGame(event) {
  event.preventDefault();
  state.name = document.querySelector("#player-name").value.trim();
  if (!state.name) return;
  save();
  renderHome();
}

function renderHome() {
  if (!state.name) return renderWelcome();
  app.innerHTML = `<div class="screen">${topbar("QUEST MAP")}<div class="dashboard-header"><div><div class="eyebrow">WELCOME BACK, ${escapeHTML(state.name).toUpperCase()}</div><h2>Choose your mission</h2><p>Selesaikan misi dan raih skor minimal 80 untuk membuka misi berikutnya.</p></div><div class="pill">🏆 Total: <strong>${totalScore()}</strong></div></div>
    <div class="mission-grid">${missions
      .map((m, i) => {
        const done = state.completed.includes(i),
          unlocked = canStart(i);
        return `<article class="mission-card ${!unlocked ? "locked" : ""} ${done ? "completed" : ""}"><span class="mission-badge">${done ? "✓ CLEARED" : unlocked ? `MISSION ${i + 1}` : "🔒 LOCKED"}</span><div class="mission-icon">${m.icon}</div><h3>${m.title}</h3><p>${m.description}</p><button class="btn ${unlocked ? "" : "btn-secondary"}" ${unlocked ? `onclick="startMission(${i})"` : "disabled"}>${done ? "Replay mission" : unlocked ? "Start mission" : "Clear previous"}</button></article>`;
      })
      .join(
        "",
      )}</div><footer class="footer">Tip: baca feedback setiap tantangan untuk memahami alasannya.</footer></div>`;
}

function startMission(index) {
  if (!canStart(index)) return;
  state.activeMission = index;
  state.index = 0;
  state.correct = 0;
  state.answered = false;
  state.chosenWords = [];
  renderQuestion();
}

function renderQuestion() {
  const mission = missions[state.activeMission],
    item = mission.questions[state.index];
  const isBuilder = mission.type === "builder";
  const isWriter = mission.type === "writer";
  const choices =
    isBuilder || isWriter
      ? ""
      : `<div class="choices">${item[1].map((choice, i) => `<button class="choice" id="choice-${i}" onclick="answerQuiz(${i})">${escapeHTML(choice)}</button>`).join("")}</div>`;
  const builder = isBuilder
    ? `<div class="sort-zone" id="sort-zone"><span class="muted">${state.chosenWords.length ? "" : "Tap words below to build your sentence..."}</span>${state.chosenWords.map((word, i) => `<button type="button" class="word-chip" onclick="removeWord(${i})">${escapeHTML(word)} ×</button>`).join("")}</div><div class="word-bank">${[
        ...item[1],
      ]
        .sort(() => Math.random() - 0.5)
        .map(
          (word) =>
            `<button type="button" class="word-chip" onclick='addWord(${JSON.stringify(word)})'>${escapeHTML(word)}</button>`,
        )
        .join(
          "",
        )}</div><div class="action-row"><button type="button" class="btn btn-secondary" onclick="resetWords()">Reset</button><button type="button" class="btn" onclick="checkSentence()">Check sentence →</button></div>`
    : choices;
  const writer = isWriter
    ? `<div class="story-clue"><div class="clue-visual">${item.clue}</div><div><strong>Story clue</strong><p>${escapeHTML(item.guide)}</p></div></div><textarea id="story-input" class="story-input" minlength="20" oninput="updateWordCounter()" placeholder="${escapeHTML(item.placeholder)}">${escapeHTML(state.storyDrafts[state.index] || "")}</textarea><div class="writer-meta"><span>Minimum ${item.minWords} words</span><span id="word-counter">0 words</span></div><div class="action-row"><button type="button" class="btn" onclick="submitStoryPart()">Save paragraph →</button></div>`
    : "";
  app.innerHTML = `<div class="screen">${topbar(`MISSION ${state.activeMission + 1} / 6`)}<section class="game-panel panel"><div class="game-top"><span class="pill">${mission.icon} ${mission.title}</span><span class="question-count">${state.index + 1} / ${mission.questions.length}</span></div><div class="progress-track"><div class="progress-fill" style="width:${(state.index / mission.questions.length) * 100}%"></div></div><div class="challenge-hint">${isWriter ? "Story Creator Studio: gunakan clue untuk membangun cerita yang memiliki orientation, complication, dan resolution." : isBuilder ? "Think → Try → Get Feedback → Fix → Try Again. Susun kata-kata ini menjadi kalimat yang benar." : "Pilih jawaban terbaik. Kamu akan langsung mendapat feedback!"}</div>${mission.type === "story" ? `<div class="story-box">${mission.story}<br><small><em>${mission.source}</em></small></div>` : ""}<h2 class="question-text">${escapeHTML(isWriter ? item.prompt : item[0])}</h2>${writer}${builder}<div id="feedback"></div></section></div>`;
  if (isWriter) updateWordCounter();
}

function answerQuiz(choice) {
  if (state.answered) return;
  const item = missions[state.activeMission].questions[state.index];
  state.answered = true;
  document.querySelectorAll(".choice").forEach((button, i) => {
    button.disabled = true;
    if (i === item[2]) button.classList.add("correct");
    if (i === choice && i !== item[2]) button.classList.add("wrong");
  });
  if (choice === item[2]) state.correct++;
  showFeedback(
    choice === item[2],
    item[3],
    choice === item[2]
      ? "Correct! +10 points"
      : `Not quite. The best answer is “${item[1][item[2]]}”.`,
  );
}

function showFeedback(good, explanation, title, showNext = true) {
  document.querySelector("#feedback").innerHTML =
    `<div class="feedback ${good ? "good" : "bad"}"><strong>${good ? "✓ " : "↗ "}${title}</strong><small>${explanation}</small></div>${showNext ? `<div class="action-row"><button class="btn" onclick="nextQuestion()">${state.index === 9 ? "See mission score" : "Next challenge →"}</button></div>` : ""}`;
}
function addWord(word) {
  state.answered = false;
  state.chosenWords.push(word);
  renderQuestion();
}
function removeWord(index) {
  state.answered = false;
  state.chosenWords.splice(index, 1);
  renderQuestion();
}
function resetWords() {
  state.answered = false;
  state.chosenWords = [];
  renderQuestion();
}
function checkSentence() {
  if (state.answered) return;
  const item = missions[state.activeMission].questions[state.index],
    answer = state.chosenWords.join(" ");
  state.answered = true;
  const isCorrect = normalizeSentence(answer) === normalizeSentence(item[2]);
  if (isCorrect) state.correct++;
  showFeedback(
    isCorrect,
    `Target sentence: “${item[2]}”.`,
    isCorrect
      ? "Perfect sentence! +10 points"
      : `Keep trying! Your sentence: “${answer || "(empty)"}”`,
  );
}
function updateWordCounter() {
  const input = document.querySelector("#story-input"),
    counter = document.querySelector("#word-counter");
  if (!input || !counter) return;
  const words = input.value.trim() ? input.value.trim().split(/\s+/).length : 0;
  counter.textContent = `${words} word${words === 1 ? "" : "s"}`;
}
function submitStoryPart() {
  if (state.answered) return;
  const mission = missions[state.activeMission],
    item = mission.questions[state.index];
  const input = document.querySelector("#story-input"),
    answer = input.value.trim();
  const words = answer ? answer.split(/\s+/).length : 0;
  if (words < item.minWords) {
    showFeedback(
      false,
      `Tambahkan minimal ${item.minWords} kata agar bagian cerita ini lebih lengkap. Saat ini: ${words} kata.`,
      "Keep writing!",
      false,
    );
    state.answered = false;
    return;
  }
  state.storyDrafts[state.index] = answer;
  state.correct++;
  state.answered = true;
  save();
  showFeedback(
    true,
    "Bagian cerita tersimpan. Pastikan paragraf berikutnya tetap terhubung dengan cerita ini.",
    "Great paragraph! +10 points",
  );
}
function nextQuestion() {
  if (state.index < 9) {
    state.index++;
    state.answered = false;
    state.chosenWords = [];
    renderQuestion();
  } else finishMission();
}
function finishMission() {
  const score = state.correct * 10,
    index = state.activeMission;
  state.scores[index] = score;
  if (score > 80 && !state.completed.includes(index))
    state.completed.push(index);
  save();
  if (index === missions.length - 1 && score > 80) return renderFinal();
  const passed = score > 80;
  app.innerHTML = `<div class="screen">${topbar("MISSION COMPLETE")}<section class="game-panel panel result-card"><div class="stars">${score >= 90 ? "★ ★ ★" : score >= 70 ? "★ ★ ☆" : "★ ☆ ☆"}</div><div class="eyebrow">${passed ? "MISSION CLEARED" : "TRAINING ROUND"}</div><h2>${passed ? "You nailed it!" : "Almost there!"}</h2><div class="result-score">${score}<small>/100</small></div><p class="result-message">${passed ? `Great work, ${escapeHTML(state.name)}! Skor kamu di atas 80, jadi misi berikutnya terbuka.` : "Kamu perlu skor di atas 80 untuk membuka misi berikutnya. Coba lagi dan baca feedback-nya, ya!"}</p><div class="action-row"><button class="btn btn-secondary" onclick="renderHome()">Back to map</button><button class="btn" onclick="startMission(${index})">Play again</button></div></section></div>`;
}

function renderFinal() {
  const score = totalScore();
  app.innerHTML = `<div class="screen">${topbar("QUEST COMPLETE")}<section class="game-panel panel result-card"><div class="stars">★ ★ ★ ★ ★</div><div class="eyebrow">ALL MISSIONS CLEARED</div><h2>Story hero unlocked!</h2><p class="muted">Selamat, ${escapeHTML(state.name)}. Kamu sudah menaklukkan semua misi narrative text.</p><div class="final-score">${score}<small> / 600</small></div><p class="result-message">Kamu mengembangkan vocabulary, grammar, sentence building, reading comprehension, dan creative writing.</p><button class="btn" onclick="renderHome()">Lihat quest map lagi</button></section></div>`;
}

window.renderNameForm = renderNameForm;
window.startGame = startGame;
window.renderHome = renderHome;
window.startMission = startMission;
window.answerQuiz = answerQuiz;
window.nextQuestion = nextQuestion;
window.addWord = addWord;
window.removeWord = removeWord;
window.resetWords = resetWords;
window.checkSentence = checkSentence;
window.renderFinal = renderFinal;
if (!state.name) renderWelcome();
else renderHome();
