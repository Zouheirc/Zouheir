//jshint esversion:6
// const express = require("express");
// const bodyParser = require("body-parser");

// const app = express();

// app.set('view engine', 'ejs');


// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static("public"));


// if (typeof (document) !== "undefined") {

// Drums App

let numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (let i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    let buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}

document.addEventListener("keypress", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    default:
      console.log(key);
  }
}

function buttonAnimation(currentKey) {
  let activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
}

// Login app

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});


// app.get("/", function (req, res) {
//   res.sendFile(__dirname + "/index.html");
// });

// app.get("/about", function(req, res) {
//   res.render("about");
// });

// app.get("/contact", function(req, res) {
//   res.render("contact");
// });

// app.get("/login", function(req, res) {
//   res.render("login");
// });

// app.get("/register", function(req, res) {
//   res.render("register");
// });

// let port = process.env.PORT;
// if (port == null || port == "") {
//   port = 3000;
// }

// app.listen(port, function() {
//   console.log("Server started Successfully");
// });
