let name = {
  firstName: "Ajinkya",
  lastName: "Veer",
};

function printName(hometown, state) {
  console.log(`${this.firstName} ${this.lastName}, ${hometown} ${state}`);
}

function printFullName(hometown, state) {
  console.log(`${this.firstName} ${this.lastName}, ${hometown} ${state}`);
}

printName.call(name, "Koparkhairane", "Maharashtra");

printName.apply(name, ["Koparkhairane", "Maharashtra"]);

const print = printName.bind(name, "Koparkhairane", "Maharashtra");
print();

Function.prototype.myBind = function (...args) {
  let obj = this;
  let params = args.slice(1);
  return function (...args2) {
    obj.apply(args[0], [...params, ...args2]);
  };
};

const print1 = printFullName.myBind(name, "Koparkhairane");

print1("Maharashtra");
