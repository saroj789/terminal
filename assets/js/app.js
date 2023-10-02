// terminal
if (window.location.pathname === "/" || window.location.pathname === "/index.html" || window.location.pathname === "/terminal") {
  new Terminal({
    container: document.querySelector(".terminal .card-body"),
    typingSpeed: 75,
    commands: [
      {
        text: 'load profile -firstName "saroj" -lastName "kumar"',
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
        text: '<a href="/">Go Home</a>',
        typing: false,
      },
    ],
  });
}
