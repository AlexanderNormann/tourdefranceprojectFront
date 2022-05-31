
let rider;

document.getElementById("get-btn").onclick = ()=>{
  const selectid = document.getElementById("selected-id").value
  fetch("http://localhost:8080/api/riders/byid/"+ selectid)
    .then(a => {
      rider = a
      document.getElementById("name").value= a.riderName
    })

}

document.getElementById("save-btn").onclick = (event)=>{
  event.preventDefault()

  const updatedRider = {}

  updatedRider.riderName = document.getElementById("name").value

  const options = {
    method: "PUT",
    headers : {
      'Content-Type' : 'application/json'
    },
    body: JSON.stringify(updatedRider)
  }

  fetch("http://localhost:8080/api/riders/" + document.getElementById("selected-id").value, options)
    .then(res => {
      if(res.ok){
        document.getElementById("status").innerHTML = "Rider has been updates"}
      else {
        document.getElementById("status").innerHMTL = "Error"}
    })
}

