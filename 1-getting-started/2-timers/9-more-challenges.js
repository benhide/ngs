const timerChallengeOne = delay => {
  setTimeout(() => {
    console.log("Hello world " + delay);
    timerChallengeOne(delay + 1);
  }, delay * 1000);
};

timerChallengeOne(1);

let counter = 5;
let lastInterval = 5;

const timerChallengeTwo = delay => {
  if (counter === 5) {
    clearInterval(lastInterval);

    lastInterval = setInterval(() => {
      console.log("Hello " + delay);
      timerChallengeTwo(delay + 100);
    }, delay);
    counter = 0;
  }
  counter++;
};

timerChallengeTwo(100);
