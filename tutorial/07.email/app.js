// emailjs.send("service_mikrrus","template_ejk9wsj");
// sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', '#myForm')
// emailjs.send("contact_service","contact_form", #contact-form);
// emailjs.send("contact_service","contact_form", this);

const form = document.querySelector('#contact-form');

function sendEmail() {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    // generate a five digit number for the contact_number variable
    this.contact_number.value = (Math.random() * 100000) | 0;
    // these IDs from the previous steps
    emailjs.sendForm('service_mikrrus', 'template_ejk9wsj', this).then(
      function () {
        console.log('SUCCESS!');
      },
      function (error) {
        console.log('FAILED...', error);
      }
    );
  });
}

sendEmail();
//window.onload = function () {};
