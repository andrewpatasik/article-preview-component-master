// helper

export const elementFactory = () => {
  const generateElement = (elName, elAttributes, elClasses) => {
    let element = document.createElement(elName);

    if (elAttributes) {
      for (let attributeName in elAttributes) {
        element.setAttribute(attributeName, elAttributes[attributeName]);
      }
    }

    if (elClasses) {
      for (let className of elClasses) {
        element.classList.add(className);
      }
    }

    return element;
  };

  return { generateElement };
};

// generate Element

export const generateShareComponent = () => {
  const element = elementFactory();
  const icons = ["facebook", "twitter", "pinterest"];

  const shareContainerElement = element.generateElement(
    "div",
    {
      id: "card__article__detail__share__content",
    },
    ["absolute", "bg-verydarkgrayishblue", "flex", "items-center", "hidden", "animate-smooth"]
  );

  const shareArticleParagraphElement = element.generateElement(
    "p",
    {
      id: "card__article__detail__share__label",
    },
    ["spacing-loose"]
  );
    shareArticleParagraphElement.textContent = "share".toUpperCase();

  const shareArticleListContainerElement = element.generateElement(
    "ul",
    {
      id: "card__article__detail__share__link__list",
    },
    ["flex"]
  );

  for (let index = 0; index < icons.length; index++) {
    const shareArticleListElement = element.generateElement("li");
    const shareArticleListImageElement = element.generateElement("img", {
      src: `./images/icon-${icons[index]}.svg`
    }, [
      "share-icon",
    ]);

    shareArticleListElement.appendChild(shareArticleListImageElement);
    shareArticleListContainerElement.append(shareArticleListElement);
  }

  shareContainerElement.append(
    shareArticleParagraphElement,
    shareArticleListContainerElement
  );

  return shareContainerElement;
};
