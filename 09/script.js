const logInButton = document.getElementById("logIn");
const logOutButton = document.getElementById("logOut");
const msgBox = document.getElementById("msgBox");

logInButton.addEventListener("click", () => {
  const logInMsg = "User logged in ";
  msgBox.innerText = logInMsg;
  localStorage.setItem("inMsg", logInMsg);
});

logOutButton.addEventListener("click", () => {
  const logOutMsg = "User logged Out ";
  msgBox.innerText = logOutMsg;
  localStorage.removeItem(inMsg);
}); 