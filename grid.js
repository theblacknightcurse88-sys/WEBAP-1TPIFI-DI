$(start);

function start() {
    let Label_ROW_Element = $("<label>");
    Label_ROW_Element.html("Rows:");
    $("body").append(Label_ROW_Element);

    let ROW_Input = $("<input>");
    ROW_Input.attr("placeholder", "Rows")
    ROW_Input.attr("type", "number");
    
    $("body").append(ROW_Input);


    let BreakElement1 = $("<br>");
    $("body").append(BreakElement1);

    
    let Label_COLUMNS_Element = $("<label>");
    Label_COLUMNS_Element.html("Columns:");
    $("body").append(Label_COLUMNS_Element);
    
    let COLUMNS_Input = $("<input>");
    COLUMNS_Input.attr("number", "number");
    $("body").append(COLUMNS_Input);
    

    let Label_TargetX_Element = $("<label>");
    Label_TargetX_Element.html("X axis:");
    $("body").append(Label_TargetX_Element);
    
    let TargetX_Input = $("<input>");
    TargetX_Input.attr("type", "number");
    $("body").append(TargetX_Input);

    let BreakElement2 = $("<br>");
    $("body").append(BreakElement2);

    let Label_TargetY_Element = $("<label>");
    Label_TargetY_Element.html("Y axis:");
    $("body").append(Label_TargetY_Element);
    
    let TargetY_Input = $("<input>");
    TargetY_Input.attr("type", "number");
    $("body").append(TargetY_Input);

    
    let BreakElement3 = $("<br>");
    let BreakElement4 = $("</br>");
    $("body").append(BreakElement3);
    $("body").append(BreakElement4);

    let CreateGrid_Button = $("<button>");
    CreateGrid_Button.attr("id", "create");
    CreateGrid_Button.html("create");
    $("body").append(CreateGrid_Button);


}
