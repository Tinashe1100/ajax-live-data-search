const search = document
  .getElementById("search")
  .addEventListener("input", () => {
    const searchVal = document.getElementById("search").value; // input values
    if (searchVal > "") {
      $.ajax({
        method: "post",
        url: "includes/search.php",
        data: { input: searchVal },
        dataType: "json",
        success: (data) => {
          var html = "";
          if (data.length > 0) {
            data.forEach((item) => {
              html += "<tr>";
              html += "<td>" + item.CustomerName + "</td>";
              html += "<td>" + item.Gender + "</td>";
              html += "<td>" + item.Address + "</td>";
              html += "<td>" + item.City + "</td>";
              html += "<td>" + item.PostalCode + "</td>";
              html += "<td>" + item.Country + "</td></tr>";
            });
          }
          $("tbody").html(html);
        },
      });
    }
  });
