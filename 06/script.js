const demo = document.getElementById("demo");
const label = document.createElement("label")
label.innerText = "Which is your favorite Programming language:"
demo.appendChild(label);

const listOfLanguages = ["javaScript","C++","java","C","Python"];
const select = document.createElement("select");
demo.appendChild(select)
for(let i = 0; i < listOfLanguages.length; i++){
 const option = document.createElement("option");
  option.innerText = listOfLanguages[i]
  select.appendChild(option);
  console.log(listOfLanguages[i]);
}