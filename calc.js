calculator_array = new Array();

document.getElementById("textval").onkeypress=function () {
    var key = event.which;
    if(key>=42 && key<58)
    {
        return true;
    }
    else{
        return false;
    }
}
function calculate () {

    var textvaluue = document.getElementById("textval").value;
    //alert(textvaluue);
    var answer = eval(textvaluue);
    document.getElementById("textval").value=answer;
    setTimeout(()=>{document.getElementById("textval").value=""},2000);
}
function emptyField () {
    document.getElementById("textval").value="";
}

function addElement(inputElement) {
    document.getElementById("textval").value += inputElement;
}

function removeOneElement()
{
    calculator_array = document.getElementById("textval").value;
    var modified_array = new Array();
    var summation = 0;
    var modified_length = calculator_array.length-1;
    for(var i = 0 ; i<modified_length;i++)
    {
        modified_array[i]= calculator_array[i];
        summation = parseInt(modified_array[i])+summation*10;
    }
    document.getElementById("textval").value = summation;

}