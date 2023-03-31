//Get time.
function getDate() {
  const today = new Date();
  //Set time constructure.
  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  return today.toLocaleDateString("en-AU", options);
}

//Print date.
function printDate() {
  document.getElementById("date").innerHTML =
    "<h2> Today is " + getDate() + "</h2>" + "<h3>How is your day?</h3>";
}

//Read and print posts.
//The constructor of post.
function Post(date, subject, content) {
  this.date = date;
  this.subject = subject;
  this.content = content;
}

//Store posts.
const posts = []; //Array of post.
function addPost() {
  const input = document.getElementById("post");
  let date = getDate();
  let post = new Post(date, input.elements[0].value, input.elements[1].value); //Generate a new Post.
  //Add new post to posts[].
  posts.push(post);
  printPost();
}

//Edit Post.
function editPost() {
  const input = document.getElementById("editPost");
  let date = getDate();
  let order = input.elements[0].value;
  let post = new Post(date, input.elements[1].value, input.elements[2].value); //Generate a new Post.

  //Replace current post with the new post.
  posts[order - 1] = post;
  console.log("Edited");
  printPost();
}

//Print posts.
function printPost() {
  //Clear previous posts.
  document.getElementById("postList").innerHTML = "";
  //Show posts.
  for (i = 0; i < posts.length; i++) {
    let order = i + 1;
    document.getElementById("postList").innerHTML +=
      "<hr><h3>(" +
      order +
      ") " +
      posts[i].subject +
      "<span> ---Written at" +
      posts[i].date +
      "</span> </h3>" +
      "<p>" +
      posts[i].content +
      "</p> ";
  }
}
