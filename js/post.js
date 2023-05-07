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
    "<h2> Today is " + getDate() + "</h2>" + "<h3>Ready to write something?</h3>";
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
  //Check is subject is empty.
  //If so, show error message, don't make chanegs.
  if (input.elements[0].value == "") {
    alert("Subject cannot be empty!");
    return;
  }

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
  //Check if the order is valid
  //If invalid, show error message, don't make chanegs.
  if (order < 1 || order > posts.length) {
    alert("Invalid Diary Number!");
    return;
  }
  //Check is subject is empty
  //If so, show error message, don't make chanegs.
  if (input.elements[1].value == "") {
    alert("Subject cannot be empty!");
    return;
  }

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
      "<span> ---Written at " +
      posts[i].date +
      "</span> </h3>" +
      "<p>" +
      posts[i].content +
      "</p> ";
  }
}

//Read and store user feedback
//The constructor of feedback.
function Feedback(name, email, likeMark, recMark, reason, advise) {
  this.name = name;
  this.email = email;
  this.likeMark = likeMark;
  this.recMark = recMark;
  this.reason = reason;
  this.advise = advise;
}

//Store feedback.
const feedback = []; //Array of feedback.
function addFeedback() {
  const input = document.getElementById("feedback");
  //Generate a new Feedback.
  let singleFeedback = new Feedback(
    input.elements[0].value,
    input.elements[1].value,
    input.elements[2].value,
    input.elements[3].value,
    input.elements[4].value,
    input.elements[5].value
  );
  //Add new feedback to feedback[].
  feedback.push(singleFeedback);
  printFeedback();
}

//Print the feedback list.
function printFeedback() {
  //Clear previous feedback list.
  document.getElementById("feedbackList").innerHTML = "";
  //Show feedback list. Only display the non-empty content.
  for (i = 0; i < feedback.length; i++) {
    let order = i + 1;
    document.getElementById("feedbackList").innerHTML +=
      "<hr><h3>(" + order + ")  </h3>";
    if (feedback[i].name) {
      document.getElementById("feedbackList").innerHTML +=
        "<h4>Name: " + feedback[i].name;
    }
    if (feedback[i].email) {
      document.getElementById("feedbackList").innerHTML +=
        "<h4> Email: " + feedback[i].email + "</h4>";
    }
    if (feedback[i].likeMark) {
      document.getElementById("feedbackList").innerHTML +=
        "<h5>Like Mark: " + feedback[i].likeMark + "</h5>";
    }
    if (feedback[i].recMark) {
      document.getElementById("feedbackList").innerHTML +=
        "<h5>Recommand Mark: " + feedback[i].recMark + "</h5>";
    }
    if (feedback[i].reason) {
      document.getElementById("feedbackList").innerHTML +=
        "<h5>Reason:" + feedback[i].reason + "</h5>";
    }
    if (feedback[i].advise) {
      document.getElementById("feedbackList").innerHTML +=
        "<h5>Advise: " + feedback[i].advise + "</h5>";
    }
  }
}
