let arr = [
  {
    name : "Alok",
    marks:95
  },
  {
    name : "Aish",
    marks:96
  },
  {
    name : "shradha",
    marks:97
  }
]

let ans = arr.map((el) => {
  return el.marks/10;
})
console.log(ans);