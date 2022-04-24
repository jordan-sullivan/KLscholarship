// - - - - - - - - - QUERY SELECTORS - - - - - - - - - - //
const buttonViewPage = document.querySelector(".center");
const button = document.querySelector(".button");
const essayViewPage = document.querySelector(".essay-view-page");
const articleSection = document.querySelector(".article-section");
const essay = document.querySelector(".essay");

// - - - - - - - - - - EVENT LISTENERS - - - - - - - - - - //
button.addEventListener("click", (e) => goToEssayOnePage());

// - - - - - - - - - - FUNCTIONS - - - - - - - - - - //

const goToEssayOnePage = () => {
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
