

const saveRiderUrl = "http://localhost:8080/api/riders";



let options = {
  method : "POST",
  headers:{
    "content-type": "application/json"
  }, body:""
}
let riderJson = {
  "riderName" : ""
}

function createRider(){
  let inputValue = document.getElementById("riderName")

  riderJson.riderName=inputValue.value;
  //console.log("test")
  //console.log(inputValue.value)
  //console.log(JSON.stringify(riderJson))
  options.body = JSON.stringify(riderJson)
  fetch(saveRiderUrl, options).catch((error) => console.log(error));
  location.reload();

}

const createRiderName = document.getElementById("createRiderName")
createRiderName.addEventListener("click", createRider)

