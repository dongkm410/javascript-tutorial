// emailjs.send("service_mikrrus","template_ejk9wsj");
// sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', '#myForm')
// emailjs.send("contact_service","contact_form", #contact-form);
// emailjs.send("contact_service","contact_form", this);

const form = document.querySelector('#contact-form');
const dimm = document.querySelector('.dimm');
const modal = document.querySelector('.modal');
const closeBtn = document.querySelector('.closeBtn');
const inputs = document.querySelectorAll('input');
const userName = document.querySelector('#userName');
const email = document.querySelector('#email');
const message = document.querySelector('#message');

console.log(inputs);

function sendEmail() {
  form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (userName.value === '' || email.value === '' || message.value === '') {
      alert('이름, 이메일, 내용을 확인하세요');
      return;
    }

    // generate a five digit number for the contact_number variable
    this.contact_number.value = (Math.random() * 100000) | 0;

    dimm.classList.add('active');

    // these IDs from the previous steps
    emailjs.sendForm('service_mikrrus', 'template_ejk9wsj', this).then(
      function () {
        // console.log('SUCCESS!');
        modal.classList.add('active');
      },
      function (error) {
        console.log('FAILED...', error);
      }
    );
  });

  closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
    dimm.classList.remove('active');

    inputs.forEach((item) => (item.value = ''));
    message.value = '';
  });
}

sendEmail();
//window.onload = function () {};
