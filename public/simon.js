/*
1. start() function starts game on the click of the start button
2. nextLevel() function selects random buttons at an increasingly difficult level
3. storeClicks() function stores user's pattern of clicks in array
4. validate() compares user's moves to AI moves and checks if the user advances to next level or fails
5. If user fails the gameOver() function ends the game and returns game state to original page
6. If it's the last level and player wins call win() function
*/
var playerMoves = [];
var aiMoves = [];
var playerTurn = false;
var lastLevel = false;
var level = 1;
var strictMode = false;

function randomNumber() {
    var num = Math.floor((Math.random() * 4) + 1);
    aiMoves.push(num);
    return aiMoves;
}

// loop over the array using the iteratee function
// at the specified interval
function intervalForEach(array, iteratee, delay) {
    let current = 0

    let interval = setInterval(() => {
        if (current === array.length) {
            clearInterval(interval)
        } else {
            iteratee(array[current])
            current++
        }
    }, delay)
}

// this will be applied to each item in the array
function handleMove(move) {
    if (move === 1) {
        sound1();
        $('#green').addClass('active')
        setTimeout(() => {
            $('#green').removeClass('active')
        }, 1000)
    } else if (move === 2) {
        sound2();
        $('#red').addClass('active')
        setTimeout(() => {
            $('#red').removeClass('active')
        }, 1000)
    } else if (move === 3) {
        sound3();
        $('#yellow').addClass('active')
        setTimeout(() => {
            $('#yellow').removeClass('active')
        }, 1000)
    } else if (move === 4) {
        sound4();
        $('#blue').addClass('active')
        setTimeout(() => {
            $('#blue').removeClass('active')
        }, 1000)
    }
    playerTurn = true;
}


function storeClicks() {
    $('.button').each(function() {
        $(this).click(function() {
            playerMoves.push($(this).attr('data-simonButton'));
            //console.log("Player moves: " + playerMoves);
            if(playerMoves.length === aiMoves.length){
              validate(playerMoves, aiMoves);
            }
        });
    });
}


function runNextLevel(){
  randomNumber();
  intervalForEach(aiMoves, handleMove, 1000);
  playerTurn = true;
}

function runPreviousLevel(){
  playerMoves = [];
  intervalForEach(aiMoves, handleMove, 1000);
  //storeClicks();
}

// runNextLevel runs before checking ALL the elements of the array. Runs after the first iteration. arr.Prototype.every can fix this I think
function validate(userMoves, computerMoves) {
    var compare =  userMoves.every(function(element, index){
                    return element == computerMoves[index];
                  });

    if(compare){
      level++;
      win();
      playerMoves = [];
      setTimeout(function(){
        runNextLevel();
      }, 1500)
    }
    else {
      if(strictMode === true){
        gameOver();
        level = 0;
      }
      else {
        $('#level p').text('!');
        setTimeout(function(){
          runPreviousLevel();
        }, 2000);

      }
    }
}


function win() {
    if(level === 20) {
      alert("You beat the game!");
    }

    $('#level p').text(level);

    aiTurn = true;
    playerTurn = false;
}

function gameOver() {
    aiTurn = true;
    playerTurn = false;
    aiMoves = [];
    playerMoves = [];
    $('#level p').text('!');
    $('#game-over-container').show();
    $("#container").css({ opacity: 0.5 });

    setTimeout(function(){
      gameOverSound();
    },1000);

}

 function restart(){
   aiTurn = true;
   playerTurn = false;
   aiMoves = [];
   playerMoves = [];
   $('#game-over-container').hide();
   $('#container').css({opacity: 1.0});
   level++;
   runNextLevel();
 }


// Sounds  ********************************************************************/
function sound1() {
    var audio = new Audio();
    audio.src = "https://s3.amazonaws.com/freecodecamp/simonSound1.mp3";
    audio.play();
}

function sound2() {
    var audio = new Audio();
    audio.src = "https://s3.amazonaws.com/freecodecamp/simonSound2.mp3";
    audio.play();
}

function sound3() {
    var audio = new Audio();
    audio.src = "https://s3.amazonaws.com/freecodecamp/simonSound3.mp3";
    audio.play();
}

function sound4() {
    var audio = new Audio();
    audio.src = "https://s3.amazonaws.com/freecodecamp/simonSound4.mp3";
    audio.play();
}

function gameOverSound(){
  var audio = new Audio();
  audio.src = "gameover.mp3";
  audio.play();
}

$('#close-x').on('click', notificationClose);

function notificationClose(){
  $(this).parent('#game-over-lose').hide();
  $('#container').css({opacity: 1.0});

}

function toggleStrictMode() {
  if(strictMode){
    strictMode = false;
  }
  else {
    strictMode = true;
  }
}


$(document).ready(function() {

    runNextLevel();
    storeClicks();

    $('#strict-button').on('click', function(){
      toggleStrictMode();
    })

   $('#reset-button').on('click', function(){
     aiTurn = true;
     playerTurn = false;
     aiMoves = [];
     playerMoves = [];
     level = 1;
     $('#level p').text('1');
     
     if(strictMode){
       $('#strict-button').click();
        strictMode = false;
     }

     runNextLevel();
   })

    $('#green').click(function() {
        sound1();
    })

    $('#red').click(function() {
        sound2();
    })

    $('#yellow').click(function() {
        sound3();
    })

    $('#blue').click(function() {
        sound4();
    })

});
