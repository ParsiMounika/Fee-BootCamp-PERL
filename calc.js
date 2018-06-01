calculator_array = new Array();

document.getElementById("textval").onkeypress=function () {
    var key = event.which;
    if( (key>=40 && key<58) || ( key==13) )
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
    //setTimeout(()=>{document.getElementById("textval").value=""},2000);
}
function emptyField () {
    document.getElementById("textval").value="";
}

function addElement(inputElement) {
    document.getElementById("textval").value += inputElement;
}

function removeOneElement()
{
    var valu = document.getElementById("textval").value;
    document.getElementById("textval").value= valu.substr(0,valu.length-1)
    ;
    
}