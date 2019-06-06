export const render = (template) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = template.trim();
  return wrapper;
};

export function changeScreen(element) {
  const main = document.querySelector(`.main`);
  main.innerHTML = ``;
  main.appendChild(element);
}

export const randomNumber = (min, max) => Math.round(Math.random() * (+max - +min) + +min);


export const countPoint = function (answers, restNotes) {
  if (restNotes > 0) {
    return -1;
  }
  let counts = 0;

  answers.forEach((answer) => {
    if (answer.correct) {
      if (answer.time < 30) {
        counts += 2;
      } else {
        counts++;
      }
    }
  });
  return counts;
};

export const getPlayerResult = function (allResults, playerResult) {
  const allResultsCloned = [];
  allResults.forEach((obj) => {
    allResultsCloned.push(Object.assign({}, obj));
  });
  if (playerResult.restNotes > 0) {
    if (playerResult.timer > 0) {
      return `У вас закончились все попытки. Ничего, повезёт в следующий раз!`;
    }
    return `Время вышло! Вы не успели отгадать все мелодии`;
  }

  allResultsCloned.push(playerResult);
  allResultsCloned.sort((left, right) => left.points - right.points);
  const players = allResultsCloned.length;
  let position;
  let percentage;
  allResultsCloned.forEach((item, index) => {
    if (item.points === playerResult.points && item.restNotes === playerResult.restNotes && item.timer === playerResult.timer) {
      position = players - index;
      percentage = (players - position + 1) / players * 100;
    }
  });
  return `Вы заняли ${position} место из ${players} игроков. Это лучше, чем у ${percentage}% игроков`;
};
