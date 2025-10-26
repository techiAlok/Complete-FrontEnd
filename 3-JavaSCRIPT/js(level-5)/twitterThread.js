// Create object literal that have following property

const post = {
  username:"@singhalok",
  content: "This is my #firstPost.",
  likes: 150,
  reposts: 5,
  tags: ["@singh","@apnacollege"]
};

console.log(post["username"]);
console.log(post["content"]);
console.log(post.tags);

let prop = "reposts";

console.log(post[prop]);