const teamsURl = "http://localhost:8080/api/teams";


fetch(teamsURl).then(res=>{
  res.json().then(teamData=>{
    console.log((teamData))


    if (teamData.length > 0){
      let temp = "";
      teamData.forEach((i)=>{
        temp += "<tr>";
        temp += "<td>"+i.teamName+"</td>"
        temp += "<td>"+i.id+"</td></tr>"
      })
      document.getElementById("teamData").innerHTML = temp;
    }
  })
})



