document.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".popupbackground").addEventListener("click", () => {
    document.querySelector(".visible").classList.replace("visible", "hidden");
    document.getElementById("contactForm").reset();
  });

  document.querySelector(".close").addEventListener("click", () => {
    document.querySelector(".visible").classList.replace("visible", "hidden");
    document.getElementById("contactForm").reset();
  });

  document.querySelector(".contactOpener").addEventListener("click", () => {
    document.querySelector(".hidden").classList.replace("hidden", "visible");
  });

  document
    .querySelector("#contactForm")
    .addEventListener("submit", async (event) => {
      event.preventDefault();

      const data = {
        firstname: document.querySelector("#firstname").value,
        lastname: document.querySelector("#lastname").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value,
        message: document.querySelector("#message").value,
      };

      console.log(data);
      const response = await axios.post(
        "https://tripadvisor-nab-back.herokuapp.com/submit-form",
        data
      );
      console.log(response);

      if (response.status === 200) {
        alert("Merci pour votre message ! Votre formulaire a bien été envoyé");
      } else {
        alert("Veuillez entrer toutes les informations demandées.");
      }

      document.querySelector(".visible").classList.replace("visible", "hidden");
      document.getElementById("contactForm").reset();
    });
});
