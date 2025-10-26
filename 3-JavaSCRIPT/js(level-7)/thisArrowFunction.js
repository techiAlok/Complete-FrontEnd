const student = {
  name: "shradha",
  age: 23,
  marks:94,
  getName:() => {
    console.log(this);
    console.log(this.marks);
  },
  getMarks:function (){
    console.log(this);
    console.log(this.marks);
  }
}

console.log(student.getName());
console.log(student.getMarks());