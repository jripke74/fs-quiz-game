const questions = [
  {
    category: "",
    question: "What is HTML?",
    choices: [
      "A. Styling for websites",
      "B. scripting language",
      "C. a database",
    ],
    answer: "A. Styling for websites",
  },
  {
    category: "",
    question: "What is CSS?",
    choices: [
      "A. Styling for websites",
      "B. scripting language",
      "C. a database",
    ],
    answer: "A. Styling for websites",
  },
  {
    category: "",
    question: "What is JavaScript?",
    choices: [
      "A. Styling for websites",
      "B. scripting language",
      "C. a database",
    ],
    answer: "C. a database",
  },
  {
    category: "",
    question: "What is an array?",
    choices: [
      "A. Styling for websites",
      "B. scripting language",
      "C. a database",
    ],
    answer: "A. Styling for websites",
  },
  {
    category: "",
    question: "What is an object?",
    choices: [
      "A. Styling for websites",
      "B. scripting language",
      "C. a database",
    ],
    answer: "B. scripting language",
  },
];

function getRandomQuestion(questions) {
  const randomIndex = Math.floor(Math.random() * questions.length);
  return questions[randomIndex];
}

function getRandomComputerChoice(choices) {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

const computerChoice = getRandomComputerChoice(questions);
const randomQuestion = getRandomQuestion(questions);

function getResults(answer) {
  if (answer === computerChoice) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${answer}`;
  }
}

console.log(getResults(randomQuestion.answer));
