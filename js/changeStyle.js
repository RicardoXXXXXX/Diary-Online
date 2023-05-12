let cuurentStyle = 0; //The original css tyle.

//Change the css file of the pages.
function changeStyle(cssLinkIndex) {
  //The current css file address
  var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

  //If the current css file is the original one, add the dark css file address as the new link.
  if (cuurentStyle == 0) {
    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", "../css/dark_style.css");
    cuurentStyle = 1; //Change the css file statement.
    document.getElementById("changeCssBtn").innerHTML = "Activate Light Mode"; //Change the button content.
    document.getElementsByClassName("navbar-brand")[0].innerHTML = "<span>&#127773;</span>";  //Change the logo to moon.
  }
  //If the current css file is the dark one, add the original css file address as the new link.
  else if (cuurentStyle == 1) {
    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", "../css/style.css");
    cuurentStyle = 0; //Change the css file statement
    document.getElementById("changeCssBtn").innerHTML = "Activate Dark Mode"; //Change the button content.
    document.getElementsByClassName("navbar-brand")[0].innerHTML = "<span>&#127774;</span>";  //Change the logo to sun.
  }

  //Apply the new css file.
  document
    .getElementsByTagName("head")
    .item(cssLinkIndex)
    .replaceChild(newlink, oldlink);
}

//Change the css file of the homepage.
function changeHomeStyle(cssLinkIndex) {
  var oldlink = document.getElementsByTagName("link").item(cssLinkIndex); //The current css file address
  //If the current css file is the original one, add the dark css file address as the new link.
  if (cuurentStyle == 0) {
    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", "css/dark_style.css");
    cuurentStyle = 1; //Change the css file statement.
    document.getElementById("changeCssBtn").innerHTML = "Activate Light Mode"; //Change the button content.
    document.getElementsByClassName("navbar-brand")[0].innerHTML = "<span>&#127773;</span>";  //Change the logo to moon.
  }
  //If the current css file is the dark one, add the original css file address as the new link.
  else if (cuurentStyle == 1) {
    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", "css/style.css");
    cuurentStyle = 0; //Change the css file statement.
    document.getElementById("changeCssBtn").innerHTML = "Activate Dark Mode"; //Change the button content.
    document.getElementsByClassName("navbar-brand")[0].innerHTML = "<span>&#127774;</span>";  //Change the logo to sun.
  }
  //Apply the new css file.
  document
    .getElementsByTagName("head")
    .item(cssLinkIndex)
    .replaceChild(newlink, oldlink);
}
