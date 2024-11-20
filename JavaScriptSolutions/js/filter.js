document.querySelector("#search").addEventListener("keyup", () => {
  const filter = document.querySelector("#search").value.toUpperCase();
  const tableRows = document.querySelector("table").querySelectorAll("tr");

  Array.from(tableRows).forEach(row => {
    const cells = row.querySelectorAll("td");

    // Search all fields:
     row.style.display = (cells.length && row.innerHTML.toUpperCase().includes(filter)) ? "" : "none";

    // Search name field only:
   // row.style.display = (cells.length && cells[0].innerHTML.toUpperCase().includes(filter)) ? "" : "none"; 
  });
});
//es5
/*
document.querySelector("#search").addEventListener("keyup", function() {
  var filter = document.getElementById("search").value.toUpperCase();
  var tr = document.getElementById("infoTable").getElementsByTagName("tr");

  for (var i = 0; i < tr.length; i++) {
    var td = tr[i].getElementsByTagName("td");
    //searches all fields
    tr[i].style.display = (td.length && tr[i].innerHTML.toUpperCase().indexOf(filter) > -1) ? "" : "none";
    //0 for name field only
    //tr[i].style.display = (td.length && td[0].innerHTML.toUpperCase().indexOf(filter) > -1) ? "" : "none"; 
  }
});
*/