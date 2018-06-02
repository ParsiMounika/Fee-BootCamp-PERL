var a1=0,a2=0,a3=0,b1=0,b2=0,b3=0,c1=0,c2=0,c3=0;
var count=0;
function call(a) {

    switch (parseInt(a)) {
        case 1:
            if (count % 2 == 0) {
                document.getElementById("person_choice").value = 'Player2';
                a1 = 1;
                console.log(a1);
                document.getElementById("a1").innerHTML = 'x';
             
                document.getElementById('a1').style.pointerEvents = 'none';
                if (check(1) == 1) {
                    // alert("player 1 has won");
                    document.getElementById("status").value = "player 1 has won";
                    disable();

                } else if (count >= 8) {
                    // alert("draw");
                    document.getElementById("status").value = "The game is drawn";
                }
            } else {
                document.getElementById("person_choice").value = 'Player1';
                a1 = 2;
                console.log(a1);

                document.getElementById("a1").innerHTML = '0';
        
                document.getElementById('a1').style.pointerEvents = 'none';
                if (check(2) == 2) {

                    // alert("player 2 has won");
                    document.getElementById("status").value = "player 2 has won";
                    disable();
                } else if (count >= 8) {
                    // alert("draw");
                    document.getElementById("status").value = "The game is drawn";
                }
            }
            break;
        case 2:
            if (count % 2 == 0) {
                document.getElementById("person_choice").value = 'Player2';
                a2 = 1;
                document.getElementById("a2").innerHTML = 'X';
                document.getElementById('a2').style.pointerEvents = 'none';
                if (check(1) == 1) {
                    //alert("player 1 has won");
                    document.getElementById("status").value = "player 1 has won";
                    disable();
                } else if (count >= 8) {
                    // alert("draw");
                    document.getElementById("status").value = "The game is drawn";
                }
            } else {
                document.getElementById("person_choice").value = 'Player1';
                a2 = 2;
                document.getElementById("a2").innerHTML = '0';
                document.getElementById('a2').style.pointerEvents = 'none';
                if (check(2) == 2) {
                    // alert("player 2 has won");
                    document.getElementById("status").value = "player 2 has won";
                    disable();
                } else if (count >= 8) {
                    // alert("draw");
                    document.getElementById("status").value = "The game is drawn";
                }
            }
            break;
        case 3:
            if (count % 2 == 0) {
                document.getElementById("person_choice").value = 'Player2';
                a3 = 1;
                document.getElementById("a3").innerHTML = 'X';
                document.getElementById('a3').style.pointerEvents = 'none';
                if (check(1) == 1) {
                    //alert("player 1 has won");
                    document.getElementById("status").value = "player 1 has won";
                    disable();
                } else if (count >= 8) {
                    // alert("draw");
                    document.getElementById("status").value = "The game is drawn";
                }
            } else {
                document.getElementById("person_choice").value = 'Player1';
                a3 = 2;
                document.getElementById("a3").innerHTML = '0';
                document.getElementById('a3').style.pointerEvents = 'none';
                if (check(2) == 2) {
                    // alert("player 2 has won");
                    document.getElementById("status").value = "player 2 has won";
                    disable();
                } else if (count >= 8) {
                    //alert("draw");
                    document.getElementById("status").value = "The game is drawn";
                }
            }
            break;
        case 4:
            if (count % 2 == 0) {
                document.getElementById("person_choice").value = 'Player2';
                b1 = 1;
                document.getElementById("b1").innerHTML = 'X';
                document.getElementById('b1').style.pointerEvents = 'none';
                if (check(1) == 1) {
                    //alert("player 1 has won");
                    document.getElementById("status").value = "player 1 has won";
                    disable();
                } else if (count >= 8) {
                    //alert("draw");
                    document.getElementById("status").value = "The game is drawn";
                }
            } else {
                document.getElementById("person_choice").value = 'Player1';
                b1 = 2;
                document.getElementById("b1").innerHTML = '0';
                document.getElementById('b1').style.pointerEvents = 'none';
                if (check(2) == 2) {
                    //alert("player 2 has won");
                    document.getElementById("status").value = "player 2 has won";
                    disable();
                } else if (count >= 8) {
                    //alert("draw");
                    document.getElementById("status").value = "The game is drawn";
                }
            }
            break;
        case 5:
            if (count % 2 == 0) {
                document.getElementById("person_choice").value = 'Player2';

                b2 = 1;
                document.getElementById("b2").innerHTML = 'X';
                document.getElementById('b2').style.pointerEvents = 'none';
                if (check(1) == 1) {
                    //alert("player 1 has won");
                    document.getElementById("status").value = "player 1 has won";
                    disable();
                } else if (count >= 8) {
                    //alert("draw");
                    document.getElementById("status").value = "The game is drawn";
                }
            } else {
                document.getElementById("person_choice").value = 'Player1';
                b2 = 2;
                document.getElementById("b2").innerHTML = '0';
                document.getElementById('b2').style.pointerEvents = 'none';
                if (check(2) == 2) {
                    // alert("player 2 has won");
                    document.getElementById("status").value = "player 2 has won";
                    disable();
                } else if (count >= 8) {
                    //alert("draw");
                    document.getElementById("status").value = "The game is drawn";
                }
            }
            break;
        case 6:
            if (count % 2 == 0) {
                document.getElementById("person_choice").value = 'Player2';
                b3 = 1;
                document.getElementById("b3").innerHTML = 'X';
                document.getElementById('b3').style.pointerEvents = 'none';
                if (check(1) == 1) {
                    //alert("player 1 has won");
                    document.getElementById("status").value = "player 1 has won";
                    disable();
                } else if (count >= 8) {
                    //alert("draw");
                    document.getElementById("status").value = "The game is drawn";
                }
            } else {
                document.getElementById("person_choice").value = 'Player1';
                b3 = 2;
                document.getElementById("b3").innerHTML = '0';
                document.getElementById('b3').style.pointerEvents = 'none';
                if (check(2) == 2) {
                    //alert("player 2 has won");
                    document.getElementById("status").value = "player 2 has won";
                    disable();
                } else if (count >= 8) {
                    // alert("draw");
                    document.getElementById("status").value = "The game is drawn";
                }
            }
            break;
        case 7:
            if (count % 2 == 0) {
                document.getElementById("person_choice").value = 'Player2';
                c1 = 1;
                document.getElementById("c1").innerHTML = 'X';
                document.getElementById('c1').style.pointerEvents = 'none';
                if (check(1) == 1) {
                    // alert("player 1 has won");
                    document.getElementById("status").value = "player 1 has won";
                    disable();
                } else if (count >= 8) {
                    // alert("draw");
                    document.getElementById("status").value = "The game is drawn";
                }
            } else {
                document.getElementById("person_choice").value = 'Player1';
                c1 = 2;
                document.getElementById("c1").innerHTML = '0';
                document.getElementById('c1').style.pointerEvents = 'none';
                if (check(2) == 2) {
                    // alert("player 2 has won");
                    document.getElementById("status").value = "player 2 has won";
                    disable();
                } else if (count >= 8) {
                    //alert("draw");
                    document.getElementById("status").value = "The game is drawn";
                }
            }
            break;
        case 8:
            if (count % 2 == 0) {
                document.getElementById("person_choice").value = 'Player2';
                c2 = 1;
                document.getElementById("c2").innerHTML = 'X';
                document.getElementById('c2').style.pointerEvents = 'none';
                if (check(1) == 1) {
                    //alert("player 1 has won");
                    document.getElementById("status").value = "player 1 has won";
                    disable();
                } else if (count >= 8) {
                    //  alert("draw");
                    document.getElementById("status").value = "The game is drawn";
                }
            } else {
                document.getElementById("person_choice").value = 'Player1';
                c2 = 2;
                document.getElementById("c2").innerHTML = '0';
                document.getElementById('c2').style.pointerEvents = 'none';
                if (check(2) == 2) {
                    //("player 2 has won");
                    document.getElementById("status").value = "player 2 has won";
                    disable();
                } else if (count >= 8) {
                    // alert("draw");
                    document.getElementById("status").value = "The game is drawn";
                }
            }
            break;
        case 9:
            if (count % 2 == 0) {
                document.getElementById("person_choice").value = 'Player2';
                c3 = 1;
                document.getElementById("c3").innerHTML = 'X';
                document.getElementById('c3').style.pointerEvents = 'none';
                if (check(1) == 1) {
                    //alert("player 1 has won");
                    document.getElementById("status").value = "player 1 has won";
                    disable();
                } else if (count >= 8) {
                    //alert("draw");
                    document.getElementById("status").value = "The game is drawn";
                }
            } else {
                document.getElementById("person_choice").value = 'Player1';
                c3 = 2;
                document.getElementById("c3").innerHTML = '0';
                document.getElementById('c3').style.pointerEvents = 'none';
                if (check(2) == 2) {
                    //alert("player 2 has won");
                    document.getElementById("status").value = "player 2 has won";
                    disable();
                } else if (count >= 8) {
                    // alert("draw");
                    document.getElementById("status").value = "The game is drawn";
                }
            }
            break;

    }
    count++;
}
function disable() {

    document.getElementById('a1').style.pointerEvents = 'none';
    document.getElementById('a2').style.pointerEvents = 'none';
    document.getElementById('a3').style.pointerEvents = 'none';
    document.getElementById('b1').style.pointerEvents = 'none';
    document.getElementById('b2').style.pointerEvents = 'none';
    document.getElementById('b3').style.pointerEvents = 'none';
    document.getElementById('c1').style.pointerEvents = 'none';
    document.getElementById('c2').style.pointerEvents = 'none';
    document.getElementById('c3').style.pointerEvents = 'none';

}
function check(v)
{
    var player = 0;
    if(a1==v && a2==v && a3==v) 
    {
     player = v;
    }
    else if(b1==v && b2==v && b3==v)
  {
      player = v;
  }
  else if(c1==v && c2==v && c3==v)
  {
      player =v;
  }
  else if(a1==v && b1==v && c1==v)
  {
      player = v;
  }
  else if(a2==v && b2==v && c2==v)
  {
      player = v;
  }
  else if(a3==v && b3==v && c3==v)
  {
      player = v;
  }
  else if(a1==v && b2==v && c3==v)
  {
      player = v;
  }
  else  if(a3==v && b2==v && c1==v)
  {
      player = v;
  }

  return player;
}
function reset(){
    document.getElementById("a1").innerHTML = "" ;
    document.getElementById("a2").innerHTML = "";
    document.getElementById("a3").innerHTML = "";
    document.getElementById("b1").innerHTML = "";
    document.getElementById("b2").innerHTML = "";
    document.getElementById("b3").innerHTML = "";
    document.getElementById("c1").innerHTML = "";
    document.getElementById("c2").innerHTML = "";
    document.getElementById("c3").innerHTML = "";

    document.getElementById('a1').style.pointerEvents = 'auto';
    document.getElementById('a2').style.pointerEvents = 'auto';
    document.getElementById('a3').style.pointerEvents = 'auto';
    document.getElementById('b1').style.pointerEvents = 'auto';
    document.getElementById('b2').style.pointerEvents = 'auto';
    document.getElementById('b3').style.pointerEvents = 'auto';
    document.getElementById('c1').style.pointerEvents = 'auto';
    document.getElementById('c2').style.pointerEvents = 'auto';
    document.getElementById('c3').style.pointerEvents = 'auto';

    document.getElementById("status").value = "";
    document.getElementById("person_choice").value = 'Player1';
    count=0;
    a1=0,a2=0,a3=0,b1=0,b2=0,b3=0,c1=0,c2=0,c3=0;
}