const getResults = () => {
  if (computerChoice === questions[randomQ].answer) {
    return "The computer's choice is correct!";
  } else {
    return `The computer's choice is wrong. The correct answer is: ${questions[randomQ].answer}`;
  }
};
