var binaryArea = $("textarea[name*='binaryArea']");
var hexArea = $("textarea[name*='hexArea']");
var octalArea = $("textarea[name*='octalArea']");

$("button[name*='submitBtn']").click(function(){
    //getting the value from the input
    var decimal = parseInt($("input[name*='decimalInput']").val());

    // converting decimal to hex
    var hexString = decimal.toString(16);

    // converting decimal to octal
    var octalString = decimal.toString(8);

    // converting decimal to binary
    var binaryString = parseInt($("input[name*='decimalInput']").val()).toString(2);

    // Displaying the converted decimal to the textAreas
    binaryArea.val(binaryString);
    hexArea.val(hexString.toUpperCase());
    octalArea.val(octalString.toUpperCase());
});

// Event listener for the reset button
$("button[name*='resetBtn']").click(function(){
    // resetting the value of all the textarea and input
    $("input[name*='decimalInput']").val("");
    binaryArea.val("");
    hexArea.val("");
    octalArea.val("");

});






