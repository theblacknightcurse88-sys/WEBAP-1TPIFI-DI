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
        if (!validInput(rows.val(), columns.val(), tx.val(), ty.val())){
            alert("Error validating Input");
        }
        else {
            alert("Input is valid");
        }
    });

/*  let ROW_Input = $("<input>");
    ROW_Input.attr("placeholder", "Rows")
    ROW_Input.attr("type", "number");
    $("body").append(ROW_Input);
    
    let COLUMNS_Input = $("<input>");
    COLUMNS_Input.attr("placeholder", "Columns")
    COLUMNS_Input.attr("number", "number");
    $("body").append(COLUMNS_Input);
    

    $("body").append("<br>");


    let TargetX_Input = $("<input>");
    TargetX_Input.attr("placeholder", "X axis")
    TargetX_Input.attr("type", "number");
    $("body").append(TargetX_Input);

    
    let TargetY_Input = $("<input>");
    TargetY_Input.attr("placeholder", "Y axis")
    TargetY_Input.attr("type", "number");
    $("body").append(TargetY_Input);


    let CreateGrid_Button = $("<button>");
    CreateGrid_Button.attr("id", "create");
    CreateGrid_Button.html("create");
    $("body").append(CreateGrid_Button); 
*/
}
