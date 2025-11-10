//alert ("hello");

/*
// javascript version
function changeH1() {
    document.getElementById("myMessage").innerHTML = "hello";
}
addEventListener("load", changeH1);
*/

//JQuerry version
/*
$(start);

function start(){
    $("#myMessage").on("click", changeH1);
}

function changeM1(){
    //instead of changing the #myMessage I would like to READ its contents and
    //display those as an alert message
    alert( $("#myMessage").html() );
    //$("#myMessage").html("hello");
}


//EXERCISE 1 - INCREMENT and DECREMENT
$(counter); //before load page, 
function counter(){
    let value = parseInt($(".counter").html()) ; //take value from html from counter 
    $("button").on("click", function (){
    value++;
    $(".counter").html(value);
    console.log("a");
});
}

$(start);
function start() {
    $("button:nth-of-type(1)").on("click", increase);
    $("button:nth-of-type(2)").on("click", decrease);
}
function increase() {
    num = Number($(".counter").html);
    num++;
    $(".counter").html(num);
}
function decrease() {
    num = Number($(".counter").html);
    num--;
    $(".counter").html(num);
}

*/

//EXERCISE 2 - SUM TWO VALUES
$(addBtn);
function addBtn() {
    $("button:nth-of-type(3)").on("click", sumValue);
}
function sumValue() {
    let input1 = parseInt($("#numA:nth-of-type(1)").val());
    let input2 = parseInt($("#numB:nth-of-type(2)").val());
    let sum = input1 + input2;
    $("#Result").html(sum);
}