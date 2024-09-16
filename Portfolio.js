let radiobtn = document.querySelector(".form-check-input");
let body = document.querySelector("body");
radiobtn.addEventListener("click", (even) => {
  body.style.backgroundColor = "#081b29";
});
radiobtn.addEventListener("dblclick", () => {
  body.style.backgroundColor = "#121212";
});

let search = document.querySelector("#search1");
let submit = document.querySelector(".btn1");

let ra = (search.innerText = search.value);
console.log(ra);
submit.addEventListener("click", function () {
  console.log("you search was submited");
});
