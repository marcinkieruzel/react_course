document.addEventListener("DOMContentLoaded", function () {
  console.log("TEST");

  const state = [];

  function addElementToFirstList(text) {
    console.log(text);

    const ul = document.getElementById("list1");
    const li = document.createElement("li");
    li.textContent = text;
    ul.appendChild(li);

    console.log(ul.children.length, ul.querySelectorAll("li").length); // as HTML about the state of the app
  }

  function addElementToSecondList(text) {
    state.push(text);

    const ul = document.getElementById("list2");

    ul.innerHTML = `
        ${state.map((item) => `<li>${item}</li>`).join("")}
    `;

    // "sadasda" + "dasdasdas" + "asdasdasdasd"
  }

  const form = document.getElementById("form");

  console.log("FORM", form);

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const input = document.getElementById("input1");

    addElementToFirstList(input.value);
    addElementToSecondList(input.value);
  });
});
