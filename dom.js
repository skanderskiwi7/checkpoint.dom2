let arrBtnPlus = document.getElementsByClassName("btn-plus");
let prixAtls = [20, 32, 56];

for (let i = 0; i < arrBtnPlus.length; i++) {
  arrBtnPlus[i].addEventListener("click", function () {
    arrBtnPlus[i].nextElementSibling.innerText++;

    arrBtnPlus[
      i
    ].parentElement.previousElementSibling.children[0].children[0].innerHTML =
      prixAtls[i] * arrBtnPlus[i].nextElementSibling.innerText;
  });
  console.log("ssss", prixAtls);
}

let btminus = document.getElementsByClassName("btn-minus");

for (let i = 0; i < btminus.length; i++) {
  btminus[i].addEventListener("click", () => {
    if (btminus[i].previousElementSibling.innerText == 1) {
      btminus[i].parentElement.parentElement.remove();
      // console.log("minus", btminus[i].parentElement.parentElement.remove());
    }
    if (btminus[i].previousElementSibling.innerText > 0) {
      btminus[i].previousElementSibling.innerText--;

      btminus[
        i
      ].parentElement.previousElementSibling.children[0].children[0].innerHTML -=
        prixAtls[i];
    }
  });
}

let btdelete = document.getElementsByClassName("del");
for (let dell of btdelete) {
  dell.addEventListener("click", function () {
    dell.parentElement.parentElement.remove();
  });
}
//changement de couleur

let hearts = document.getElementsByClassName("fa-heart");

// console.log(hearts, "hearts");

for (let colors of hearts) {
  colors.addEventListener("click", function () {
    if (colors.style.color === "black") {
      colors.style.color = "red";
    } else {
      colors.style.color = "black";
    }
  });
}
