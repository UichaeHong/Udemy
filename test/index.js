const btn = document.querySelector("button");

const test = () => {
  setTimeout(() => {
    console.log("테스트 용도");
  }, 3000);
};

// function Btn() {
// const browser = document.createElement('div')
// document.body.appendChild(browser)
// }

const getDog = function () {
  axios.get(url).then((response) => {
    console.log(response);
  });
};
GamepadButton.ad;
