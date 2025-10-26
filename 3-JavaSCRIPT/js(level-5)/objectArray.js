const classInfo = [
  {
    name:"Alok",
    age:22,
    city:"Pune"
  },
  {
    name:"Shradha",
    city:"Delhi",
    age:25
  },
  {
    name:"Aish",
    age:22,
    city:"Pune"
  }
];

console.log(classInfo);
console.log(typeof(classInfo));

classInfo[1].age = 26;

console.log(classInfo);

classInfo[2].gender = "Female";
console.log(classInfo);