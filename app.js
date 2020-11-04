const screen = document.querySelector(".screen");
const btnClear = document.querySelector(".btn-clear");
const btnEqual = document.querySelector(".btn-equal");
const btns = document.querySelectorAll(".btn");
const regex = new RegExp(/[+\-\*/]/, "g");

const isError = (btn) => {
  const lastChar = screen.value.charAt(screen.value.length - 1);

  if (
    btn.classList.value.match("btn-yellow") &&
    (!screen.value || lastChar.match(regex))
  )
    return true;
  const amountOfOperator = screen.value.match(regex)
    ? screen.value.match(regex).length
    : 0;
  const amountOfdot = screen.value.match(/\./)
    ? screen.value.match(/\./).length
    : 0;
  console.log(screen.value, { amountOfOperator, amountOfdot });
  if (
    btn.dataset.num === "." &&
    (lastChar === "." || amountOfdot > amountOfOperator)
  )
    return true;

  return false;
};
const updateScreenValue = ({ target }) => {
  if (isError(target)) return false;
  if (!screen.value && target.dataset.num === ".") screen.value = "0";
  if (screen.value.match(/\w/)) screen.value = "";
  screen.value += target.dataset.num;
};
btns.forEach((btn) => {
  btn.addEventListener("click", updateScreenValue);
});
btnClear.addEventListener("click", () => {
  screen.value = "";
});
btnEqual.addEventListener("click", () => {
  if (!screen.value) {
    screen.value = "Please Enter a Value";
    return false;
  }
  screen.value = eval(screen.value);
});
