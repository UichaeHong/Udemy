function first() {
  const test = document.createElement("h1");
  document.body.appendChild(test);
  test.innerHTML = "안녕";
}
function second(first) {
  let del = document.getElementById("Header");
  setTimeout(function () {
    del.remove(); // 기존에 있는 태그 삭제
    first(); // first 함수 실행
  }, 5000); // 5초 후에 작동
}
