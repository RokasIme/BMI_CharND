const textAreaDOM = document.getElementById("textarea");
const totalCharDOM = document.getElementById("total-counter");
const remainCharDOM = document.getElementById("remaining-counter");

textAreaDOM.addEventListener("keyup", () => {
  totalCharDOM.innerText = textAreaDOM.value.length;
  remainCharDOM.innerText = 50 - textAreaDOM.value.length;
});
