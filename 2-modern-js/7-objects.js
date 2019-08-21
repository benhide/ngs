const msytery = "answer";

const obj = {
  p1: 10,
  p2: 20,
  f1() {},
  f2: () => {},
  [msytery]: 42
};

console.log(obj.msytery);
console.log(obj.answer);
