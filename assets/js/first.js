fetch('./assets/js/json/data.json') 
  .then(response => response.json())
  .then(Mydata => { 


    const personalInformation = Mydata.data; 

    function createTable(Mydata) { var table = document.createElement("table");
      var thead = document.createElement("thead");
      var tbody = document.createElement("tbody");
      var tfoot = document.createElement("tfoot"); 


       var headerRow = document.createElement("tr");

      var headerNames = ["სახელი", "პროფესია", "დაბადების ადგილი", 'ზიპ კოდი', "კარიერის დაწყება", "სასურველი ხელფასი"];


       headerNames.forEach(function (headerName) { var th = document.createElement("th");

        th.textContent = headerName;
        
        headerRow.appendChild(th);


 });


 thead.appendChild(headerRow);
  Mydata.forEach(function (obj) { 
        var row = document.createElement("tr");
        Object.keys(obj).forEach(function (key) { 


          var cell = document.createElement("td"); 

          cell.textContent = obj[key]; 
          row.appendChild(cell);   });

        tbody.appendChild(row); 
        tbody.appendChild(row); 
        
       

      });






  var footerRow = document.createElement("tr");
  var footerCell = document.createElement("td");

  footerCell.style.textAlign = "center";
  footerCell.textContent = "სტატუსი: აქტიურია!";
  footerRow.appendChild(footerCell);
  tfoot.appendChild(footerRow);














     
      table.appendChild(thead);
      table.appendChild(tbody);
      table.appendChild(tfoot);

      return table; 
    }

  
    var tableContainer = document.getElementById("tableContainer");

   tableContainer.appendChild(createTable(personalInformation));

  })


  .catch(error => { 
    console.error('Error:', error);
  });