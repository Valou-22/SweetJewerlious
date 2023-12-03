const contents = document.querySelectorAll(".content");
contents[0].classList.add("active");

const btn_collier = document.getElementById("btn_collier");
const btn_bracelet = document.getElementById("btn_bracelet");

let type_bijoux;

function SetIndexWidget(x) {
  contents.forEach((content) => {
    content.classList.remove("active");
  });
  contents[x].classList.add("active");
}

function setType_Bijoux(type) {
  type_bijoux = type;
  switch (type_bijoux) {
    case "bracelet":
      SetIndexWidget(2);
      break;
    case "collier":
      SetIndexWidget(1);
      break;
  }
}

btn_bracelet.addEventListener("click", () => {
  setType_Bijoux("bracelet");
});

btn_collier.addEventListener("click", () => {
  setType_Bijoux("collier");
});
