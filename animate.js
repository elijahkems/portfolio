let listContainer = document.querySelector("#list-container");
let languageButton = document.querySelector("#languages");
let frameworksButton = document.querySelector("#framework");
let toolsButton = document.querySelector("#tools");
let listButtons = [languageButton, frameworksButton, toolsButton];
let border = ["border-transparent", "border-lightblue"];

//arrays
let languages = ["javascript (es6)", "python", "php"];
let frameworks = [
  "react js",
  "bootstrap",
  "tailwind",
  "nodejs",
  "framer motion",
  "gsap",
];
let tools = ["vscode", "npm", "git", "vite", "cli"];

//populate functions
languageButton.addEventListener("click", () => {
  currentButton(languageButton);
  listContainer.innerHTML = "";
  languages.forEach((item, index) => {
    index++;
    createList(item, index);
  });
});
frameworksButton.addEventListener("click", () => {
  currentButton(frameworksButton);
  listContainer.innerHTML = "";
  frameworks.forEach((item, index) => {
    index++;
    createList(item, index);
  });
});
toolsButton.addEventListener("click", () => {
  currentButton(toolsButton);
  listContainer.innerHTML = "";
  tools.forEach((item, index) => {
    index++;
    createList(item, index);
  });
});

// function
function currentButton(clickedBtn) {
  listButtons.forEach((btn) => {
    if (btn.classList.contains("border-lightblue")) {
      btn.classList.remove("border-lightblue");
      btn.classList.remove("border");
    }
    if (btn.classList.contains("border-transparent")) {
      btn.classList.remove("border-transparent");
      btn.classList.remove("border");
    }
  });
  clickedBtn.classList.add("border");
  clickedBtn.classList.add("border-lightblue");
}

function createList(text, animationDelay) {
  let liCss = `my-2 group text-center flex gap-5`.split(" ");
  let pCss = "p-3 group-hover:text-lightblue".split(" ");
  let li = document.createElement("li");
  let p = document.createElement("p");
  let icon = createIcon(text);
  //animation delay
  animateList(li, animationDelay);
  //atributes
  p.textContent = text;
  liCss.forEach((css) => li.classList.add(css));
  pCss.forEach((css) => p.classList.add(css));
  //append
  li.appendChild(icon);
  li.appendChild(p);
  listContainer.appendChild(li);
}

function createIcon(text) {
  let imgCss = "m-2 w-8".split(" ");
  let img = document.createElement("img");
  img.src = `/assets/${text}-icon.png`;
  img.alt = `text icon`;
  imgCss.forEach((css) => img.classList.add(css));
  return img;
}

function animateList(element, delay) {
  gsap.fromTo(
    element,
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1,
      delay: delay / 10,
    }
  );
}
