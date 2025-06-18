const questions = [
  {
    category: "sports",
    question: "What is your favorite sport?",
    choices: ["football", "soccer", "baseball"],
    answer: "baseball",
  },
  {
    category: "computers",
    question:
      "What company did Jobs create when he left Apple for the first time?",
    choices: ["Dell", "Tandy", "NeXT"],
    answer: "NeXT",
  },
  {
    category: "networking",
    question: "What protocol is the upgrade for IPv4?",
    choices: ["NDP", "HTTP", "IPv6"],
    answer: "IPv6",
  },
  {
    category: "food",
    question: "Is type of food is a tomatoe?",
    choices: ["vegatable", "meat", "fruit"],
    answer: "fruit",
  },
  {
    category: "programming",
    question: "Are Java and JavaScript the same language?",
    choices: ["yes", "no", "maybe"],
    answer: "no",
  },
];
function getRandomQuestion(arr) {
  const randomQuestion = Math.floor(Math.random() * arr.length);
  return questions[randomQuestion];
}
function getRandomComputerChoice(arr) {
  const randomChoice = Math.floor(Math.random() * arr.length);
  return arr[randomChoice];
}
function getResults(question, compChoice) {
  if (question.answer === compChoice) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${question.answer}`;
  }
}
console.log(getRandomComputerChoice(questions));
