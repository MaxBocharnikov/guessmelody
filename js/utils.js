export const render = (template) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = template.trim();
  return wrapper;
};

const main = document.querySelector(`.main`);

export function changeScreen(element) {
  main.innerHTML = ``;
  main.appendChild(element);
}

export const randomNumber = (min, max) => Math.round(Math.random() * (+max - +min) + +min);

