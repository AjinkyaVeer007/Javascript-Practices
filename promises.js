function inti(isTrue) {
  if (isTrue) {
    return Promise.resolve("Hey from resolve");
  } else {
    return Promise.reject("Hey from reject");
  }
}

// inti(true).then((e) => console.log(e));
// inti(false).then((e) => console.log(e));

function promise1() {
  console.log("promise 1 entered");
  return Promise.resolve(1);
}
function promise2() {
  console.log("promise 2 entered");
  return Promise.resolve(2);
}
function promise3() {
  console.log("promise 3 entered");
  return Promise.resolve(3);
}
function promise4() {
  console.log("promise 4 entered");
  return Promise.reject(4);
}

// resolve when all promises are solved and reject when any one is reject
Promise.all([promise1(), promise2(), promise3(), promise4()])
  .then((e) => console.log("resolve ", e))
  .catch((err) => console.log("reject ", err));

// resolve when 1st promise resolve and that of the reject
Promise.race([promise1(), promise2(), promise3(), promise4()])
  .then((e) => console.log("resolve ", e))
  .catch((err) => console.log("reject ", err));

// resolve when 1st promise resolve and reject when all promises rejects
Promise.any([promise4(), promise2(), promise3(), promise1()])
  .then((e) => console.log("resolve ", e))
  .catch((err) => console.log("reject ", err));
