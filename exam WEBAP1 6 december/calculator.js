$(start);

function start() {

    let input = "";
    const valueInput = $("<input>");
    valueInput.attr("placeholder", "0");
    $("body").append(valueInput);
    $("body").append("<br>");

    let btnCLEAR = $("<button>");
    btnCLEAR.html("CLEAR");
    btnCLEAR.on("click", function () {
        if(valueInput.val() != "") {
            valueInput.val("");
        }
    });
    $("body").append(btnCLEAR);


    let btnPLUS = $("<button>");
    btnPLUS.html("PLUS");
    btnPLUS.on("click", function () {

    })
    $("body").append(btnPLUS);


    let btnMINUS = $("<button>");
    btnMINUS.html("MINUS");
    btnMINUS.on("click", function () {
        
    })
    $("body").append(btnMINUS);


    let btnEQUAL = $("<button>");
    btnEQUAL.html("EQUAL");
    btnEQUAL.on("click", function () {

    })
    $("body").append(btnEQUAL);
    $("body").append("<br>");
    


    let btn7 = $("<button>");
    btn7.html("__7__");
    btn7.on("click", function () {
        valueInput.val(input += "7");
    })
    $("body").append(btn7);
    
    let btn8 = $("<button>");
    btn8.html("__8__");
    btn8.on("click", function () {
        valueInput.val(input += "8");
    })
    $("body").append(btn8);

    let btn9 = $("<button>");
    btn9.html("__9__");
    btn9.on("click", function () {
        valueInput.val(input += "9");
    })
    $("body").append(btn9);
    $("body").append("<br>");



    let btn4 = $("<button>");
    btn4.html("__4__");
    btn4.on("click", function () {
        valueInput.val(input += "4");
    })
    $("body").append(btn4);

    let btn5 = $("<button>");
    btn5.html("__5__");
    btn5.on("click", function () {
        valueInput.val(input += "5");
    })
    $("body").append(btn5);

    let btn6 = $("<button>");
    btn6.html("__6__");
    btn6.on("click", function () {
        valueInput.val(input += "6");
    })
    $("body").append(btn6);
    $("body").append("<br>");



    let btn1 = $("<button>");
    btn1.html("__1__");
    btn1.on("click", function () {
        valueInput.val(input += "1");
    })
    $("body").append(btn1);

    let btn2 = $("<button>");
    btn2.html("__2__");
    btn2.on("click", function () {
        valueInput.val(input += "2");
    })
    $("body").append(btn2);

    let btn3 = $("<button>");
    btn3.html("__3__");
    btn3.on("click", function () {
        valueInput.val(input += "3");
    })
    $("body").append(btn3);
}