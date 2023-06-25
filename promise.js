function first() {
  const test = document.createElement("h1");
  document.body.appendChild(test);
  test.innerHTML = "안녕";
}
function second(first) {
  let del = document.getElementById("Header");
  setTimeout(function () {
    del.remove();
    first();
  }, 5000);
}
