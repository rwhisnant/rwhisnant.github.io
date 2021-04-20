   var rIndex,
                table = document.getElementById("table");
            
            /*this function checks the empty input*/
            function checkEmptyInput()
            {
                var isEmpty = false,
                    carManufacturer = document.getElementById("carManufacturer").value,
                    carYear = document.getElementById("carYear").value,
                    carModel = document.getElementById("carModel").value;
                    carVIN = document.getElementById("carVIN").value;
                    carBodyStyle = document.getElementById("carBodyStyle").value;
                    carValue = document.getElementById("carValue").value;

            
                if(carManufacturer === ""){
                    alert("Car Manufacturer Cannot Be Empty");
                    isEmpty = true;
                }
                else if(carYear === ""){
                    alert("Car Year Cannot Be Empty");
                    isEmpty = true;
                }
                else if(carModel === ""){
                    alert("Car Model Cannot Be Empty");
                    isEmpty = true;
                }
                else if(carVIN === ""){
                    alert("Car VIN Cannot Be Empty");
                    isEmpty = true;
                }
                else if(carBodyStyle === ""){
                    alert("Car Body Style Cannot Be Empty");
                    isEmpty = true;
                }
                else if(carValue === ""){
                    alert("Car Value Cannot Be Empty");
                    isEmpty = true;
                }
                return isEmpty;
            }
            
            /*This function adds a row in the table*/
            function addHtmlTableRow()
            {
                /* This will get the table by id
                // create a new row and cells
                // get value from input text
                // set the values into row cell's*/
                if(!checkEmptyInput()){
                var newRow = table.insertRow(table.length),
                    cell1 = newRow.insertCell(0),
                    cell2 = newRow.insertCell(1),
                    cell3 = newRow.insertCell(2),
                    cell4 = newRow.insertCell(3),
                    cell5 = newRow.insertCell(4),
                    cell6 = newRow.insertCell(5),
                    carManufacturer = document.getElementById("carManufacturer").value,
                    carYear = document.getElementById("carYear").value,
                    carModel = document.getElementById("carModel").value;
                    carVIN = document.getElementById("carVIN").value;
                    carBodyStyle = document.getElementById("carBodyStyle").value;
                    carValue = document.getElementById("carValue").value;
                cell1.innerHTML = carManufacturer;
                cell2.innerHTML = carYear;
                cell3.innerHTML = carModel;
                    cell4.innerHTML = carVIN;
                    cell5.innerHTML = carBodyStyle;
                    cell6.innerHTML = carValue;
                /*This will call the function to set the event to the new row*/
                selectedRowToInput();
            }
            }
            
            /*Displays selected row data into input text*/
            function selectedRowToInput()
            {
                
                for(var i = 1; i < table.rows.length; i++)
                {
                    table.rows[i].onclick = function()
                    {
                      /* This gets the selected row index*/
                      rIndex = this.rowIndex;
                      document.getElementById("carManufacturer").value = this.cells[0].innerHTML;
                      document.getElementById("carYear").value = this.cells[1].innerHTML;
                      document.getElementById("carModel").value = this.cells[2].innerHTML;
                        document.getElementById("carVIN").value = this.cells[3].innerHTML;
                        document.getElementById("carBodyStyle").value = this.cells[4].innerHTML;
                        document.getElementById("carValue").value = this.cells[5].innerHTML;
                    };
                }
            }
            selectedRowToInput();
            /*This functions edits the selected row*/
            function editHtmlTbleSelectedRow()
            {
                var carManufacturer = document.getElementById("carManufacturer").value,
                    carYear = document.getElementById("carYear").value,
                    carModel = document.getElementById("carModel").value;
                    carVIN = document.getElementById("carVIN").value;
                    carBodyStyle = document.getElementById("carBodyStyle").value;
                    carValue = document.getElementById("carValue").value;
               if(!checkEmptyInput()){
                table.rows[rIndex].cells[0].innerHTML = carManufacturer;
                table.rows[rIndex].cells[1].innerHTML = carYear;
                table.rows[rIndex].cells[2].innerHTML = carModel;
                   table.rows[rIndex].cells[3].innerHTML = carVIN;
                   table.rows[rIndex].cells[4].innerHTML = carBodyStyle;
                   table.rows[rIndex].cells[5].innerHTML = carValue;
              }
            }
            
            function removeSelectedRow()
            {
                table.deleteRow(rIndex);
                /* This clears input text*/
                document.getElementById("carManufacturer").value = "";
                document.getElementById("carYear").value = "";
                document.getElementById("carModel").value = "";
                document.getElementById("carVIN").value = "";
                document.getElementById("carBpdyStyle").value = "";
                document.getElementById("carValue").value = "";
            }