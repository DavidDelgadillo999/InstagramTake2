var table = document.createElement("table");
var tbody = document.createElement("tbody");
var tr = document.createElement("tr");
var td = document.createElement("td");
var label = document.createElement("label");
label.innerHTML = "First Name: ";
td.appenChild(label);
tr.appendChild(td);

td = document.createElement("td");
var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholde", "Add your first name");
td.appendChild(input(input);
tr.appendChild(td);

td = document.createElement("td")
var label = document.createElement("label");
label.innerHTML = "Las Name: ";
td.appenChild(label);
tr.appendChild(td);

td = document.createElement("td");
var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("placeholde", "Add your Last name");
td.appendChild(input(input);
tr.appendChild(td);
tbody.appendChild(tr);

tr = document.createElement("tr");
td = document.createElement("td");
label = document.createelement("label");
label.innerHTML = "Gender: ";
td.appenChild(label);
tr.appendChild(td);

td = document.createElement("td");
td.setAttribute("colspan", "3");
input = document.createElement("input");
input.setAttribute("type", "radio");
input.setAttribute("name", "Gender");
input.setAttribute("id", "Male");
td.appendChild(input);

label = document.createelement("label");
label.innerHTML = "Male: ";
label.setAttribute("for", "Male")
td.appenChild(label);
td.setAttribute("colspan", "3");
input = document.createElement("input");
input.setAttribute("type", "radio");
input.setAttribute("name", "Gender");
input.setAttribute("id", "Female");
td.appendChild(input);

label = document.createelement("label");
label.innerHTML = "Female: ";
label.setAttribute("for", "Female")
td.appenChild(label);

input = document.createElement("input");
input.setAttribute("type", "radio");
input.setAttribute("name", "NoResponse");
input.setAttribute("id", "Male");
td.appendChild(input);

label = document.createelement("label");
label.innerHTML = "Prefer not to Respond: ";
label.setAttribute("for", "NoResponse")
td.appenChild(label);
tr.appendChild(td);
tbody.appendChild(tr);

tr = document.createElement("tr");
td = document.createElement("td");
label = document.createelement("label");
label.innerHTML = "Email: "; 
td.appenChild(label);
tr.appendChild(td);

td = document.createElement("td");
td.setAttribute("colspan", "3");
input = document.createElement("input");
input.setAttribute("id", "Email");
input.setAttribute("type", "Email");
input.setAttribute("playceholder", "Add your email address");
td.appenChild(input);
tr.appendChild(td);
tbody.appendChild(tr);

tr = document.createElement("tr");
td = document.createElement("td");
label = document.createelement("label");
label.innerHTML = "Country of Residence: ";
td.appenChild(label);
tr.appendChild(td);

td = document.createElement("td");
td.setAttribute("colspan", "3");
var select = document.createElement("select");
select.setAttribute("id", "Country");
var option = document.createElement("option");
option.innerHTM = "USA";
select.appendChild(option);
option = document.createElement("option");
option.innerHTM = "Mexico";
select.appendChild(option);
td.appenChild(input);
tr.appendChild(td);
tbody.appendChild(tr);

tr = document.createElement("tr");
td = document.createElement("td");
td.setAttribute("colspan", "4");
var button = document.createElement("button");
button.innerHTML = "Update User Information";
td.appendChild(button);
tr.appendChild(td);
tbody.appendChild(tr);
table.appendChild(tbody);

var div = document.getElementById("MyRegisterContainer")
div.appendChild(table);