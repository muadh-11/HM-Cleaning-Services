
  (function() {
    emailjs.init("AcETmgZCwN3aZxnds"); // from EmailJS
  })();

  document.getElementById("contact-form").addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_u2lmfni",
      "template_tk4ujli",
      this
    )
    .then(() => {
      alert("Message sent successfully!");
      this.reset();
    })
    .catch((error) => {
      alert("Failed to send message");
      console.log(error);
    });
  });
