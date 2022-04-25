// - - - - - - - - - QUERY SELECTORS - - - - - - - - - - //
const buttonViewPage = document.querySelector(".center");
const button = document.querySelector(".button");
const essayOneViewPage = document.querySelector(".essay-one-view-page");
const firstButton = document.querySelector(".first-button");
const essayTwoViewPage = document.querySelector(".essay-two-view-page");
const secondButton = document.querySelector(".second-button");
const essayThreeViewPage = document.querySelector(".essay-three-view-page");
const thirdButton = document.querySelector(".third-button");
const essayFourViewPage = document.querySelector(".essay-four-view-page");
const fourthButton = document.querySelector(".fourth-button");
const essayFiveViewPage = document.querySelector(".essay-five-view-page");
const fifthButton = document.querySelector(".fifth-button");
const articleSection = document.querySelector(".article-section");
const essay = document.querySelector(".essay");
const footer = document.querySelector(".nav-buttons-footer");

// - - - - - - - - - - EVENT LISTENERS - - - - - - - - - - //
button.addEventListener("click", (e) => goToEssayOnePage());
firstButton.addEventListener("click", (e) => goToEssayTwoPage());
secondButton.addEventListener("click", (e) => goToEssayThreePage());
thirdButton.addEventListener("click", (e) => goToEssayFourPage());
fourthButton.addEventListener("click", (e) => goToEssayFivePage());
fifthButton.addEventListener("click", (e) => goToButtonViewPage());
// - - - - - - - - - - FUNCTIONS - - - - - - - - - - //

const goToEssayOnePage = () => {
  hideElement([buttonViewPage]);
  showElement([essayOneViewPage, articleSection]);
};

const goToEssayTwoPage = () => {
  hideElement([buttonViewPage, essayOneViewPage]);
  showElement([essayTwoViewPage, articleSection]);
};

const goToEssayThreePage = () => {
  hideElement([buttonViewPage, essayOneViewPage, essayTwoViewPage]);
  showElement([essayThreeViewPage, articleSection]);
};

const goToEssayFourPage = () => {
  //pick me button
  hideElement([
    buttonViewPage,
    essayOneViewPage,
    essayTwoViewPage,
    essayThreeViewPage,
  ]);
  showElement([essayFourViewPage, articleSection]);
};

const goToEssayFivePage = () => {
  hideElement([
    buttonViewPage,
    essayOneViewPage,
    essayTwoViewPage,
    essayThreeViewPage,
    essayFourViewPage,
  ]);
  showElement([essayFiveViewPage, articleSection]);
};

const goToButtonViewPage = () => {
  hideElement([
    essayOneViewPage,
    essayTwoViewPage,
    essayThreeViewPage,
    essayFourViewPage,
    essayFiveViewPage,
  ]);
  showElement([buttonViewPage]);
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
