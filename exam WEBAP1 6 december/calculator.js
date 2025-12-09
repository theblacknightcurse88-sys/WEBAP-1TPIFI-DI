$(start);

function start() {

    let savedValue = null;
    let savedOperator = null;

    const partialDiv = $("<div>");
    $("body").append(partialDiv);

    const valueInput = $("<input>");
    valueInput.attr("placeholder", "0");
    $("body").append(valueInput);
    $("body").append("<br>");



    let btnCLEAR = $("<button>");
    btnCLEAR.html("CLEAR");
    btnCLEAR.on("click", function () {
        if(valueInput.val() != "") {
            valueInput.val("");
            savedValue = null;
            savedOperator = null;
            partialDiv.html("");
        }
    });
    $("body").append(btnCLEAR);


    let btnPLUS = $("<button>");
    btnPLUS.html("PLUS");
    btnPLUS.on("click", function () {
        savedValue = Number(valueInput.val());
        savedOperator = "+";
        partialDiv.html(savedValue + " +");
        valueInput.val("");
    })
    $("body").append(btnPLUS);


    let btnMINUS = $("<button>");
    btnMINUS.html("MINUS");
    btnMINUS.on("click", function () {
        savedValue = Number(valueInput.val());
        savedOperator = "-";
        partialDiv.html(savedValue + " -");
        valueInput.val("");
    })
    $("body").append(btnMINUS);


    let btnEQUAL = $("<button>");
    btnEQUAL.html("EQUAL");
    btnEQUAL.on("click", function () {
        let currentValue = Number(valueInput.val());
        if (savedOperator === "+") valueInput.val(savedValue + currentValue);
        if (savedOperator === "-") valueInput.val(savedValue - currentValue);

        savedValue = null;
        savedOperator = null;
        partialDiv.html("");
    });
    $("body").append(btnEQUAL);
    $("body").append("<br>");
    


    function makeDigitButton(digit) {
        let btn = $("<button>");
        btn.html(digit);
        btn.on("click", function() {
            valueInput.val(valueInput.val() + digit);
        });
        $("body").append(btn);
    }

    makeDigitButton("7");
    makeDigitButton("8");
    makeDigitButton("9");
    $("body").append("<br>");
    makeDigitButton("4");
    makeDigitButton("5");
    makeDigitButton("6");
    $("body").append("<br>");
    makeDigitButton("1");
    makeDigitButton("2");
    makeDigitButton("3");
    $("body").append("<br>");
}