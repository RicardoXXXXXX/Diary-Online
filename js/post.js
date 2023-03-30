//Get time
function getDate() {
  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return today.toLocaleDateString("en-AU", options);
}

//Print date
function printDate() {
  document.getElementById("date").innerHTML =
    "<h2> Today is " + getDate() + "</h2>" + "<h3>How is your day?</h3>";
}

//Read and print posts
//The structure of post
function Post(date, subject, content) {
  this.date = date;
  this.subject = subject;
  this.content = content;
}

//Store posts
const posts = []; //Array of post
function addPost() {
  const input = document.getElementById("post");
  let date = getDate();
  let post = new Post(date, input.elements[0].value, input.elements[1].value);
  posts.push(post);
  console.log("submitted");
  printPost();
}

//Print posts
//Print posts
function printPost() {
  //Clear previous posts
  document.getElementById("postList").innerHTML = "";
  //Show posts
  for (i = 0; i < posts.length; i++) {
    document.getElementById("postList").innerHTML +=
      "<hr><h3>" +
      posts[i].subject +
      "<span> ---Written at" +
      posts[i].date +
      "</span> </h3>" +
      "<p>" +
      posts[i].content +
      "</p> ";
  }
}
