/******** Voir plus ***********/

function showHideParagraph() {
    let isParaDisplayed = false;
    const linkToClick = document.querySelector(".see-more");
    //   const defaultButtonText = document.querySelector(".see-more").textContent;
    const defaultButtonText = linkToClick.innerText;
    const paragraph = document.querySelector(".show-hide-para");
    linkToClick.addEventListener("click", function (event) {
      event.preventDefault();
      if (isParaDisplayed == false) {
        paragraph.style.display = "block";
        this.textContent = "Cacher";
        isParaDisplayed = true;
      } else {
        paragraph.style.display = "none";
        this.textContent = defaultButtonText;
        isParaDisplayed = false;
      }
    });
  }
  showHideParagraph();


  