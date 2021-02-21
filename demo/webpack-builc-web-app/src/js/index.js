import obj from "@/js/a.js";
let a = 1;
const fn = async () => {
  [1, 2, 3].map((v) => v);
  return a;
};
const promise = new Promise((a, b) => {
   console.log(123);
  a("promise");
});
fn()
  .then((res) => {
    console.log(res, obj.name, " obj.name");
  })
  .catch((err) => {
    throw new Error(err);
  });
promise
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    throw new Error(err);
  });
