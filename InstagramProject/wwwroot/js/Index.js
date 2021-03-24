var span = document.createElement("span");
span.innerHTML = "My Gram";
var div =
    document.getElementById("MyInstagramContainer");




div.appendChild(span);

var loginButton =
    document.createElement("button");
loginButton.innerHTML = "Log In";
a.appendChild(loginButton);

div.appendChild(a);

var signUpButton =
    document.createElement("button");
signUpButton.innerHTML = "Sign Up";
var a = document.createElement("a");
a.setAttribute("herf", "/Home/Register");
a.appendChild(signUpButton);

div.appendChild(signUpButton);
var lineBreak =
    document.createElement("br");
div.appendChild(lineBreak);



