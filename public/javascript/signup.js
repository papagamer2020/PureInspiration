// signup modal
const signupButton = document.querySelector("#signup");
const modalSignUp = document.querySelector("#modal-sign-up");
const modalBgSignup = document.querySelector("#modal-background-signup");
const modalCloseSignup = document.querySelector("#modal-close-signup");
console.log(signupButton);
//display signup modal when signup button is clicked
signupButton.addEventListener("click", () => {
    modalSignUp.classList.add("is-active");
});

//close signup modal when bacground is clicked
modalBgSignup.addEventListener("click", () => {
    modalSignUp.classList.remove("is-active");
});