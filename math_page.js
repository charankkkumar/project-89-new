p1name = localStorage.getItem("player1");
p2name = localStorage.getItem("player2");
document.getElementById("player1name").innerHTML = p1name;
document.getElementById("player2name").innerHTML = p2name;
p1score = 0;
p2score = 0;
document.getElementById("player1score").innerHTML = p1score;
document.getElementById("player2score").innerHTML = p2score;
document.getElementById("player_question").innerHTML = "Question turn -" +p1name;
document.getElementById("player_answer").innerHTML = "Answer turn -" +p2name;
function send()
{
 number1=document.getElementById("number1").value;
 number2=document.getElementById("number2").value;
 actualanswer=parseInt(number1) * parseInt(number2);
 question="<h4>"+number1+"x"+number2+"</h4>";
 inputbox="<br>answer:<input type='text' id='answer' class='form-control'>";
 button="<br><br><button class='btn btn-info' onclick='check()'>Check</button>";
 row=question+inputbox+button;
 document.getElementById("output").innerHTML=row;
 document.getElementById("number1").value="";
 document.getElementById("number2").value="";

}
question_turn = "player1";
 answer_turn = "player2";
  function check() 
  { get_answer = document.getElementById("inputbox").value;
   if(get_answer == actualanswer) { if(answer_turn == "player1") 
   { p1score = p1score +1;
     document.getElementById("player1score").innerHTML = p1score;
     } else { p2score = p2score + 1;
         document.getElementById("player2score").innerHTML = p2score;
         } } if(question_turn == "player1")
          { question_turn = "player2"; document.getElementById("player_question").innerHTML = "Question Turn - " + p2name ;
         } else { question_turn = "player1";
          document.getElementById("player_question").innerHTML = "Question Turn - " + p1name ;
         } if(answer_turn == "player1") { answer_turn = "player2"; document.getElementById("player_answer").innerHTML = "Answer Turn - " + p2name ;
         } else { answer_turn = "player1";
          document.getElementById("player_answer").innerHTML = "Answer Turn - " + p1name ;}}