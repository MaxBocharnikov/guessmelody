import {changeScreen} from "./utils";
import welcome from "./welcome";
import gameGenre from "./game-genre";
import gameArtist from "./game-artist";
import resultSuccess from "./result-success";
import failTime from "./fail-time";
import failTries from "./fail-tries";

const answerChecker = function () {
  const submit = document.querySelector(`button[type=submit]`);
  const answers = document.querySelectorAll(`input[type=checkbox]:checked`);
  if (answers.length > 0) {
    submit.removeAttribute(`disabled`);
  } else {
    submit.setAttribute(`disabled`, `disabled`);
  }

};

const welcomeHandler = () => {
  const play = document.querySelector(`.main-play`);
  play.addEventListener(`click`, function () {
    changeScreen(gameGenre);
    gameGenreHandler();
  });
};

const gameGenreHandler = () => {
  const form = document.querySelector(`.genre`);
  const submit = document.querySelector(`.genre-answer-send`);

  form.addEventListener(`change`, () => {
    answerChecker();
  });

  submit.addEventListener(`click`, function () {
    changeScreen(gameArtist);
    gameArtistHandler();
  });

};

const gameArtistHandler = () => {
  const answers = document.querySelectorAll(`input[type=radio]`);
  answers.forEach((answer) => {
    answer.addEventListener(`click`, () => {
      changeScreen(resultSuccess);
    });
  });
};

changeScreen(welcome);
welcomeHandler();






