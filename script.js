document.addEventListener("DOMContentLoaded", () => {
  const donorForm = document.getElementById("donorForm");

  if (donorForm) {
    donorForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("donorName").value;
      const age = document.getElementById("donorAge").value;
      const bloodGroup = document.getElementById("donorBloodGroup").value;
      const phone = document.getElementById("donorPhone").value;
      const available = document.getElementById("donorAvailable").checked;

      const donor = { name, age, bloodGroup, phone, available };

      let donors = JSON.parse(localStorage.getItem("donors")) || [];
      donors.push(donor);
      localStorage.setItem("donors", JSON.stringify(donors));

      const message = document.getElementById("donorMessage");
      message.textContent = `Thanks ${name}, your info has been saved!`;

      donorForm.reset();
      clearMessage(message);
    });
  }

  function clearMessage(msgElement) {
    setTimeout(() => {
      msgElement.textContent = "";
    }, 5000);
  }
});
