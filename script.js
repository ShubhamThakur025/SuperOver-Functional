//Defining Variables
const $ball = document.getElementsByClassName('ball');
const $team1score = document.getElementById('score-team1');
const $team1wickets = document.getElementById('wickets-team1');
const $team2score = document.getElementById('score-team2');
const $team2wickets = document.getElementById('wickets-team2');
const resetbutton = document.getElementById('reset');
const strikebutton = document.getElementById('strike');
const strike = new Audio("https://i1.faceprep.in/prograd-junior/bat%2Bhit%2Bball.mp3");
const cheers = new Audio("https://i1.faceprep.in/prograd-junior/Ball%2BHit%2BCheer.mp3");

var team1score = 0;
var team2score = 0;
var team1wickets = 0;
var team2wickets = 0;
var turn = 1;
var balls_faced = 0;

//Possible outcomes for each ball
const possibilities = [0,1,2,3,4,5,6,'W'];

function finished(){
    //Audio for finished game
    cheers.play()
    if(team1score>team2score){
        alert("India Wins")
    }
    else if(team1score<team2score){
        alert("Pakistan Wins")
    }
    else{
        alert("Draw!")
    }

}
//Strike Button
strikebutton.onclick=()=>{
    //Audio for start of the game
    strike.play();
    balls_faced++    
    if(turn === 1){
        //
        var score = possibilities[Math.floor(Math.random() * possibilities.length)];
        if(score === "W"){
            team1wickets++;
            $team1wickets.innerText = team1wickets;
            document.querySelector(`#team1-superover .ball:nth-child(${balls_faced})`).innerText= score;
            
        }else{
            team1score+=score;
            $team1score.innerText= team1score;
            document.querySelector(`#team1-superover .ball:nth-child(${balls_faced})`).innerHTML = score;
            if(team2score>team1score){
                finished()
            }
        }
        if(balls_faced == 6 || wickets == 0){
            turn=2;
            balls_faced =0;
            
        }
    }
    else if(turn === 2){
        var score = possibilities[Math.floor(Math.random() * possibilities.length)];
        if(score === "W"){
            team2wickets++;
            $team2wickets.innerText = team2wickets;
            document.querySelector(`#team2-superover .ball:nth-child(${balls_faced})`).innerHTML = score;
        }else{
            team2score+=score;
            document.querySelector(`#team2-superover .ball:nth-child(${balls_faced})`).innerHTML = score;
            $team2score.innerText= team2score;
            
        }
        if(team2score>team1score){
            finished()
            turn=3;
        }
        if(balls_faced == 6 || wickets == 0){
            turn = 3;
            finished()
        }
        
    }
}
//Reset button
resetbutton.onclick = () => {
    window.location.reload();
  };





