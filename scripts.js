// - - - - - - - - - QUERY SELECTORS - - - - - - - - - - //
const buttonViewPage = document.querySelector(".center");
const button = document.querySelector(".button");
const essayViewPage = document.querySelector(".essay-view-page");
const articleSection = document.querySelector(".article-section");
const essay = document.querySelector(".essay");
const footer = document.querySelector(".nav-buttons-footer");

// - - - - - - - - - - EVENT LISTENERS - - - - - - - - - - //
button.addEventListener("click", (e) => goToEssayOnePage());
button.addEventListener("click", (e) => goToEssayTwoPage());
button.addEventListener("click", (e) => goToEssayThreePage());
button.addEventListener("click", (e) => goToEssayFourPage());
button.addEventListener("click", (e) => goToEssayFivePage());

// - - - - - - - - - - FUNCTIONS - - - - - - - - - - //

const goToEssayOnePage = () => {
  hideElement([buttonViewPage]);
  showElement([essayViewPage, articleSection]);
};

const goToEssayTwoPage = () => {
  hideElement([buttonViewPage]);
  showElement([essayViewPage, articleSection]);
};

const goToEssayThreePage = () => {
  hideElement([buttonViewPage]);
  showElement([essayViewPage, articleSection]);
};

const goToEssayFourPage = () => {
  hideElement([buttonViewPage]);
  showElement([essayViewPage, articleSection]);
};

const goToEssayFivePage = () => {
  hideElement([buttonViewPage]);
  showElement([essayViewPage, articleSection]);
};

const showElement = (domItems) => {
  domItems.forEach((domItem) => {
    domItem.classList.remove("hidden");
  });
};

const hideElement = (domItems) => {
  domItems.forEach((domItem) => {
    domItem.classList.add("hidden");
  });
};
