// step 01 : add click event handler with submit button
document.getElementById("btn-submit").addEventListener("click", function () {
  //  step 02: get the email address inside the email input field
  // always remember to use .value to get text from an input field
  const emailField = document.getElementById("user-email");
  const email = emailField.value;
  //   step 03:
  // * get password
  // *set id on HTML element
  // * get the value from the element

  const passwordField = document.getElementById("user-password");
  const password = passwordField.value;
  console.log(email, password);

  // Never try this on clint side
  //  verifing email & password
  if (email === "baaperbank@pola.com" && password === "takadeo") {
    window.location.href = "bank.html";
  } else {
    alert("thik moto password de");
  }
});
