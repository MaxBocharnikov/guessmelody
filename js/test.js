import {countPoint, getPlayerResult} from "./utils";
import {assert} from 'chai';


describe(`check point counter`, () => {
  const testAnswers = [
    {correct: true, time: 30},
    {correct: true, time: 31},
    {correct: true, time: 40},
    {correct: true, time: 51},
    {correct: true, time: 61},
    {correct: true, time: 66},
    {correct: true, time: 31},
    {correct: true, time: 100},
    {correct: true, time: 129},
    {correct: true, time: 30}
  ];

  it(`should return -1 when testNotes > 0`, () => {
    assert.equal(-1, countPoint(testAnswers, 5));
  });

  it(`should return 10 when all answers are correct and time > 30`, () => {
    assert.equal(10, countPoint(testAnswers, 0));
  });

  it(`should return 10 when all answers are correct and time > 30 but one answer is wrong and another one got one fast correct answer.`, () => {
    testAnswers[5].correct = false;
    testAnswers[5].time = 24;
    testAnswers[6].time = 22;
    assert.equal(10, countPoint(testAnswers, 0));
  });

  it(`should return 0 when all answers are incorrect`, () => {
    testAnswers.forEach(function (it) {
      it.correct = false;
    });
    assert.equal(0, countPoint(testAnswers, 0));
  });

});

describe(`check getting game result`, () => {
  const results = [
    {points: 16, restNotes: 0, timer: 10},
    {points: 10, restNotes: 0, timer: 84},
    {points: 7, restNotes: 0, timer: 160},
    {points: 6, restNotes: 0, timer: 19}
  ];
  it(`should return the message that player doesn't have any attempt and he lost`, () => {
    const playerResult = {points: 7, restNotes: 5, timer: 50};
    assert.equal(`У вас закончились все попытки. Ничего, повезёт в следующий раз!`, getPlayerResult(results, playerResult));
  });

  it(`should return the message that time is over and player lost`, () => {
    const playerResult = {points: 10, restNotes: 5, timer: 0};
    assert.equal(`Время вышло! Вы не успели отгадать все мелодии`, getPlayerResult(results, playerResult));
  });

  it(`should return success message`, () => {
    const playerResult = {points: 25, restNotes: 0, timer: 5};
    assert.equal(`Вы заняли 1 место из 5 игроков. Это лучше, чем у 100% игроков`, getPlayerResult(results, playerResult));
  });

  it(`should return success message`, () => {
    const playerResult = {points: 9, restNotes: 0, timer: 16};
    assert.equal(`Вы заняли 3 место из 5 игроков. Это лучше, чем у 60% игроков`, getPlayerResult(results, playerResult));
  });

  it(`should return success message`, () => {
    const playerResult = {points: 2, restNotes: 0, timer: 55};
    assert.equal(`Вы заняли 5 место из 5 игроков. Это лучше, чем у 20% игроков`, getPlayerResult(results, playerResult));
  });

});


