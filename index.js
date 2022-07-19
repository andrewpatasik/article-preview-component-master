import { elementFactory, generateShareComponent } from "./helper.js";

window.addEventListener("DOMContentLoaded", () => {
  const cardArticleDetailElement = document.getElementById(
    "card__article__detail"
  );
  const cardArticleShareButtonElement = document.getElementById(
    "card__article__detail__share__button"
  );

  const shareComponent = generateShareComponent();

  cardArticleDetailElement.append(shareComponent);

  // event handler

  cardArticleShareButtonElement.addEventListener("click", (evt) => {
    evt.preventDefault();

    shareComponent.classList.toggle("hidden");
  })
});
