const btns = document.querySelectorAll('.btn');
const content = document.querySelector('.content');
const modal = document.querySelector('.modal');

btns.forEach(function (btn) {
  btn.addEventListener('click', function () {
    content.classList.toggle('.active');
    modal.classList.toggle('.active');
  });
});

console.log(btns);
