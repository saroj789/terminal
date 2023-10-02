// terminal
var terminal_location = "/terminal/";
if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
  terminal_location="/index.html";
}

// if (window.location.pathname === "/" || window.location.pathname === "/index.html" || window.location.pathname === "/terminal/" || window.location.pathname === "/terminal") {

if (window.location.pathname === terminal_location) {
  new Terminal({
    container: document.querySelector(".terminal .card-body"),
    typingSpeed: 75,
    commands: [
      {
        text: 'load profile -firstName "Saroj Kumar" -lastName "Vaishya"',
        typing: true,
      },
      {
        text: "loading...",
        typing: false,
      },
    ],
    done: function () {
      setTimeout(function () {
        terminalWrap.style.display = "none";
        cardsContainer.style.visibility = "visible";

        setTimeout(function () {
          cardsContainer.classList.add("loaded");
        });
      }, 1000);
    },
  });
} else {
  new Terminal({
    container: document.querySelector(".terminal .card-body"),
    typingSpeed: 75,
    commands: [
      {
        text: "The page you were looking for does not exist",
        typing: true,
      },
      {
        text: "How did you even get here?",
        typing: true,
      },
      {
        text: '<a href='+ terminal_location +'> Go Home</a>',
        typing: false,
      },
    ],
  });
}
