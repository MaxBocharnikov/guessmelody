(function () {
  const main = document.querySelector(`.main`);
  const templates = document.querySelector(`#templates`).content.querySelectorAll(`.main`);
  const displays = [];
  templates.forEach((template) => displays.push(template.cloneNode(true)));

  const arrows = document.querySelectorAll(`.arrow`);

  const Codes = {
    leftArrow: 37,
    rightArrow: 39
  };
  let currentDisplay = 0;

  showDisplay(0);


  function removeAllChilds(parentElement) {
    while (parentElement.firstChild) {
      parentElement.removeChild(parentElement.firstChild);
    }
  }
  function showDisplay(index) {
    removeAllChilds(main);
    main.appendChild(displays[index]);
  }

  function incrementDisplay() {
    if (currentDisplay === 5) {
      currentDisplay = 0;
    } else {
      currentDisplay++;
    }
  }

  function dicrementDisplay() {
    if (currentDisplay === 0) {
      currentDisplay = 5;
    } else {
      currentDisplay--;
    }
  }

  window.addEventListener(`keydown`, function (e) {
    if (e.keyCode === Codes.leftArrow) {
      dicrementDisplay();
    } else if (e.keyCode === Codes.rightArrow) {
      incrementDisplay();
    }
    showDisplay(currentDisplay);
  });

  arrows.forEach((arrow, index) => {
    arrow.addEventListener(`click`, function (e) {
      e.preventDefault();
      if (index === 0) { // Если левая стрелка
        dicrementDisplay();
      } else { // Есди правая стрелка
        incrementDisplay();
      }
      showDisplay(currentDisplay);
    });
  });

})();
