

const saveTeamUrl = "http://localhost:8080/api/teams";

let postTeam = {
  method : "POST",
  headers:{
    "content-type": "application/json"
  }, body:""
}
let teamJson = {
  "teamName" : ""
}

function createTeam(){
  let inputValue = document.getElementById("teamName")

  teamJson.teamName=inputValue.value;
  postTeam.body = JSON.stringify(teamJson)

  fetch(saveTeamUrl, postTeam).catch((error) => console.log(error));

  location.reload();

}

const createTeamName = document.getElementById("createTeamName")
createTeamName.addEventListener("click", createTeam)

