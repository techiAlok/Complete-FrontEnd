let res = '{"fact":"The oldest cat to give birth was Kitty who, at the age of 30, gave birth to two kittens. During her life, she gave birth to 218 kittens.","length":136}';
// console.log(res);
let validRes = JSON.parse(res);
console.log(validRes.fact);
let valid = JSON.stringify(validRes);
console.log(valid);