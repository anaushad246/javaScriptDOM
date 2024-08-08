
//list of items
const listOfItems = ["HTML","CSS","Tailwind CSS","Git","JavaScript","PHP"];
function showList(items){
    const list = document.getElementById("list");
    list.innerHTML = ""
items.map(item => {
  const li = document.createElement("li");
  li.textContent = item
  list.appendChild(li) })
}
showList(listOfItems)
//filter the items of array
// const filteredItems = listOfItems.filter(myFunction)
// myfunction(){
//   inputValue === 
// }
 // Filter the list as user types
    document.getElementById("input").addEventListener("input", function() {
      
      const inputValue = this.value.toLowerCase();
      const filteredItems = listOfItems.filter(item => item.toLowerCase().includes(inputValue));
      showList(filteredItems);
    });
