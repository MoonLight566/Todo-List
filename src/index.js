import { Pop, div_hide, div_hideTwo } from "./home";
import { save } from "./create";
import "./style.css";

(function change() {
  let allTitle = document.querySelectorAll(".title");
  allTitle.forEach((title) => {
    title.addEventListener("click", function () {
      if (!title.classList.contains("titleChanged")) {
        allTitle.forEach((title2) => {
          if (!(title === title2)) {
            title2.classList.remove("titleChanged");
          }
        });
        title.classList.add("titleChanged");
      }
    });
  });
  let menu = document.getElementById("menu");
  let leftPanel = document.querySelector(".leftPanel");
  menu.addEventListener("click", function () {
    if (!leftPanel.classList.contains("menuChanged")) {
      leftPanel.classList.remove("leftPanel");
      leftPanel.classList.add("menuChanged");
    } else {
      leftPanel.classList.remove("menuChanged");
      leftPanel.classList.add("leftPanel");
    }
  });
})();
document.querySelector("#button").addEventListener("click", Pop);
document.querySelector("#close").addEventListener("click", div_hide);
document.querySelector("#One").addEventListener("submit", save().Project);
document.querySelector("#close2").addEventListener("click", div_hideTwo);
document.querySelector("#form").addEventListener("submit", save().addListToDo);
// document.querySelector(".PopupBtn").addEventListener("click", function (event) {
//   const projectNameInput = document.getElementById("ProjectName");
//   if (projectNameInput.value.trim() === "") {
//     return alert("Please fill the filed");
//   }

//   save().Project(event);
// });
// document.querySelector("#Add1").addEventListener("click", PopTwo);
