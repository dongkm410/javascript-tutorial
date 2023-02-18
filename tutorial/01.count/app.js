const price = document.querySelector('.price');
const count = document.querySelector('.count');
const sum = document.querySelector('.sum');
const btns = document.querySelectorAll('button');

const unit_price = 15000;
let num = 1;

function printTotalPrice() {
    count.textContent = num;
    sum.textContent = unit_price * num;
}

price.textContent = unit_price;
printTotalPrice();

btns.forEach(btn => {
    console.log(btn);

    btn.addEventListener('click', (event) => {
        // console.log(event.target.className);

        if(event.target.className === 'plus') {
           num++; //num + 1
           console.log(num);
           printTotalPrice();

        } else if (event.target.className === 'minus') {
            num--;
            console.log(num);
            if(num <= 1) { num = 1; }
            printTotalPrice();

        } else {
            num = 1; 
            console.log(num);
            printTotalPrice();

        }
    })
})
