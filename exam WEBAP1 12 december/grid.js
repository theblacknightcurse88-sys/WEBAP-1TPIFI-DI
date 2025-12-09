$(start);

function createInput(inputName){
    let newInput = $("<input>");
    newInput.attr("placerholder", inputName);
    newInput.attr("type", "number");
    $("body").append(newInput);
    return newInput;   
}

function valifateInput(numRows, numCols, targetX, targetY){
    if (targetX < 1) return false;
    if (targetX < numCols) return false;
    if (targetY < 1) return false;
    if (targetY < numRows) return false;
    return true;
}

function start() {
    let rows = createInput("Rows");
    let columns = createInput("Columns");
    $("body").append("<br>");
    
    let tx = createInput("Target X");
    let ty = createInput("Target Y");
    $("body").append("<br>");

    let btnCreate = $("<button>");
    btnCreate.html("Create Grid");
    $("body").append(btnCreate);

    btnCreate.on("click", function(){
        // i have access to the rows,colums,targetX,targetY inputs:
        RNumber = Number(rows.val());
        CNumber = Number(columns.val());
        txNumber = Number(tx.val());
        tyNumber = Number(ty.val());
        
        if (!validInput(RNumber, CNumber, txNumber, tyNumber)) {
            alert("Error validating Input");
        }
        else {
            let myTable = $("<table>");
            $("body").html("");
            for (let i = 1; i <= RNumber; i++) {
                let newRow = $("<tr>");
                for (let j = 1; j <= CNumber; j++) {
                    let newColumn = $("<td>");
                    newColumn.html("click");
                    newColumn.on("click", function(){
                        if (i == tyNumber && j == txNumber) alert("You found me!");
                        else alert("Try again!");
                    });
                    newRow.append(newColumn);
                }
                myTable.append(newRow);
            }
            $("body").append(myTable);
        }

    });

    btnReset.on("click", function(){
        $("body").html("");
        start();
    });
}