var span = document.createElement("span");
span.innerHTML = "My Gram";
var div =
    document.getElementById("MyInstagramContainer");

div.appendChild(span);

var loginButton =
    document.createElement("button");
loginButton.innerHTML = "Log In";
div.appendChild(loginButton);
var signUpButton =
    document.createElement("button");
signUpButton.innerHTML = "Sign Up";
div.appendChild(signUpButton);
var lineBreak =
    document.createElement("br");
div.appendChild(lineBreak);





var table = document.createElement("table")
var tbody = document.createElement("tbody")
var trow = null;
var td = null;
var imageSpan = null;
var counter = 0; 


for (var i = 1; i <= 25; i++) {
    if (counter == 5) {
        tbody.appendChild(trow);
        trow = document.createElement("tr");
        counter = 0;
    }

    td = document.createElement("td");
    imageSpan = document.createElement("span");
    imageSpan.innerHTML = "Image " + i;

    td.appendChild(imageSpan);
    trow.appendChild(td);
    counter++;
}
    tbody.appendChild(trow);
    table.appendChild(tbody);
    div.appendChild(table);


    var image1Span =
        document.createElement("span");
    image1Span.innerHTML = "Image 1 ";
    div.appendChild(image1Span);