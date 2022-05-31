const riderURl = "http://localhost:8080/api/riders";


  fetch(riderURl).then(res => {
    res.json().then(riderData => {
      console.log((riderData))


      if (riderData.length > 0) {
        let temp = "";
        riderData.forEach((i) => {
          temp += "<tr>";
          temp += "<td>" + i.riderName + "</td>"
          temp += "<td>" + i.id + "</td>"
          temp += "<td>" + i.generalClassification + "</td>"
          temp += "<td>" + i.teamName + "</td></tr>"
        })
        document.getElementById("riderData").innerHTML = temp;
      }
    })
  })




