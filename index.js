import { elementFactory, generateShareComponent } from "./helper.js";

window.addEventListener("DOMContentLoaded", () => {
  const cardArticleDetailElement = document.getElementById(
    "card__article__detail"
  );
  const cardArticleShareButtonElement = document.getElementById(
    "card__article__detail__share__button"
  );
  const cardArticleShareButtonIconElement = document.getElementById(
    "card__share__button__icon"
  );

  const shareComponent = generateShareComponent();

  cardArticleDetailElement.append(shareComponent);

  // event handler

  cardArticleShareButtonElement.addEventListener("click", (evt) => {
    evt.preventDefault();

    shareComponent.classList.toggle("hidden");
    cardArticleShareButtonElement.classList.toggle("bg-lightgrayishblue");
    cardArticleShareButtonElement.classList.toggle("bg-desaturateddarkblue");
    cardArticleShareButtonIconElement.classList.toggle("filter-white");
  });
});
