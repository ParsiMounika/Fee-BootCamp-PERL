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
}
function emptyField () {
    document.getElementById("textval").value="";
}

function addElement(inputElement) {
    document.getElementById("textval").value += inputElement;
}