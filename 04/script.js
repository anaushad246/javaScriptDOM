const form = document.getElementById("form");

function onSubmit(event) {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;
  
  if (name.length >= 3 && password.length >= 8) {
    alert("Form Validation Successful");
  } else {
    alert("Form validation failed");
  }
}

form.addEventListener('submit', onSubmit);
console.log("thank you for coding");
