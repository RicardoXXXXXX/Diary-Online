//Get time
function getDate() {
  const today = new Date();

  const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  };

  document.getElementById("date").innerHTML =
    "<h2> Today is " +
    today.toLocaleDateString("en-AU", options) +
    "</h2>" +
    "<h3>How is your day?</h3>";
}
