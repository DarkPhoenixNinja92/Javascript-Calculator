const btnNum = document.querySelector(".btn-num");
const btnOther = document.querySelector(".btn-other");
let userClickedBtn;
let curentUserVal = 0;

btnNum.addEventListener('click', (e) => {
    userClickedBtn = parseInt(btnNum.textContent);
    alert(userClickedBtn);
});