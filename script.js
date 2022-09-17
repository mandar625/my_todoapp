console.log(" hellow this is me ");

function getandupdate(){

    console.log("updating");

   tit = document.getElementById("title").value;
   desc = document.getElementById("description").value;

  if (localStorage.getItem("itemJson") == null) {
    itemJsonArray = [];

    itemJsonArray.push([tit, desc]);

    localStorage.setItem("itemJson", JSON.stringify(itemJsonArray));
  } else {
    itemJsonArraystr = localStorage.getItem("itemJson");
    itemJsonArray = JSON.parse(itemJsonArraystr);
    itemJsonArray.push([tit, desc]);
    localStorage.setItem("itemJson", JSON.stringify(itemJsonArray));
  }
  update()
}



function update(){

    if (localStorage.getItem("itemJson")==null){
        itemJsonArray = []; 
        localStorage.setItem("itemJson", JSON.stringify(itemJsonArray))
    } 
    else{
        itemJsonArraystr = localStorage.getItem("itemJson")
        itemJsonArray = JSON.parse(itemJsonArraystr); 
    }
  // Populate the table
  tableBody = document.getElementById("tableBody");
  let str = "";
  itemJsonArray.forEach((element, index) => {
    str += `<tr>
        <th scope="row">${index + 1}</th>
        <td>${element[0]}</td>
        <td>${element[1]}</td> 
        <td><button class="btn btn-sm btn-danger" onclick="deleted(${index})">Delete</button></td> 
        </tr>`;
  });
  tableBody.innerHTML = str;
}

let add = document.getElementById("add");

add.addEventListener("click", getandupdate);
update()




/** deleting element  */
function deleted(itemIndex){

    console.log("Delete", itemIndex);
    
    itemJsonArraystr = localStorage.getItem("itemJson");
    itemJsonArray = JSON.parse(itemJsonArraystr);

    itemJsonArray.splice(itemIndex, 1);
    localStorage.setItem("itemJson", JSON.stringify(itemJsonArray));
    update()


}


function clearStorage(){
    if (confirm("Do you areally want to clear?")){
    console.log('Clearing the storage')
    localStorage.clear();
    update()
    }
}
