let btn = document.querySelector("button");
let btn2 = document.querySelector(".b");

btn.addEventListener("click", () => {
  console.log("Btn Clicked");
})
// btn2.addEventListener("dblclick", () => {
//   console.log("Btn double Clicked");
// })
// btn2.addEventListener("mouseenter", () => {
//   console.log("Btn double Clicked");
// })
btn2.addEventListener("keydown", () => {
  console.log("Btn double Clicked");
})