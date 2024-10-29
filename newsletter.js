const submit = document.querySelector(".submit");
const dismiss = document.querySelector(".success-button");

const input = document.querySelector("#mails");
const mail = document.querySelector(".mail");
const container = document.querySelector(".container");

const contents = document.querySelector(".contents");
const successContent = document.querySelector(".success-message");

const errorMessage = document.querySelector(".error-message");

// Function to show the success message
function showSuccessMessage() {
  mail.textContent = input.value;
  contents.style.display = "none";
  successContent.style.display = "flex";
  container.style.width = window.innerWidth < 768 ? "100%" : "19rem";
}

// Function to reset the form and show main content
function resetForm() {
  input.value = "";
  mail.textContent = "";
  successContent.style.display = "none";
  contents.style.display = "flex";
  container.style.width = "38rem";
}

// Validate email format
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Event listener for submit button
submit.addEventListener("click", () => {
  if (!isValidEmail(input.value)) {
    errorMessage.textContent = "Please enter a valid email!";
  } else {
    errorMessage.textContent = "";
    container.style.animation = "smoothEntry 1s ease";

    setTimeout(() => {
      showSuccessMessage();
    }, 1000);
  }
});

// Event listener for dismiss button
dismiss.addEventListener("click", () => {
  container.style.animation = "smoothEntry 1s ease reverse";

  setTimeout(() => {
    resetForm();
  }, 1000);
});
