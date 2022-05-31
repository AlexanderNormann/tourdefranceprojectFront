document.getElementById("delete-btn").onclick = (event)=>{
  event.preventDefault()
  const idToDelete = document.getElementById("input-id").value

  const testDelete = {
    method: "DELETE",
    headers : {
      'Content-Type' : 'application/json'
    },
    body : ""
  }

  fetch("http://localhost:8080/api/riders/" + idToDelete, testDelete)
    .then(res => {
        if(res.ok){
          document.getElementById("msg").innerHTML = "Rider has been deleted"}
        else {
          document.getElementById("msg").innerHTML = "Error, check correct ID"}
      }
    )
}
//location.reload()

