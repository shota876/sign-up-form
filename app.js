var signup = document.getElementById("signUp")
var signin = document.getElementById("signIn")
var eyeIc = document.getElementById("eyeicon")
var inPut = document.getElementById("input1")

function showSignup(){
    debugger
    signin.style.display = "none"
    signup.style.display = "block"
}
function hideSignup(){
    debugger
    signin.style.display = "block"
    signup.style.display = "none"
}
function togglePassword() {
    if (inPut.hasAttribute("type")) {
      inPut.removeAttribute("type");
    } else {
      inPut.setAttribute("type", "password");
    }
  }