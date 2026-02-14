function a() {
  console.log(this);
}

const fn = () => {
  console.log(this);
};

let obj = {
  name: "ajinkya",
  b() {
    console.log(this);
  },
};

obj.b();
