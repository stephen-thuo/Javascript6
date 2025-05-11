let userform = document.getElementById("userform");

userform.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("submitted");
});