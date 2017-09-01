const PLAYER_TOKEN = 'X'
const COMPUTER_TOKEN = 'O'

$(document).ready(function(){
  const grid = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
  ];

  function isGameOver(){
    //Check if horizontal winner
    for(var i = 0; i < 3; i++){
      if(grid[i][0] !== ' ' && grid[i][0] === grid[i][1] && grid[i][0] === grid[i][2]){
        return grid[i][0];
      }
    }
    //Check if vertical winner
    for(var j = 0; j < 3; j++){
      if(grid[0][j] !== ' ' && grid[0][j] === grid[1][j] && grid[0][j] === grid[2][j]){
        return grid[0][j];
      }
    }

    // Check diagnoal top left to bottom right
      if(grid[0][0] !== ' ' && grid[0][0] === grid[1][1] && grid[0][0] === grid[2][2]){
        return grid[0][0];
      }

      // Check diagnoal top right to bottom left
      if(grid[2][0] !== ' ' && grid[2][0] === grid[1][1] && grid[2][0] === grid[0][2]){
        return grid[2][0];
      }

      //Check if all spaces on board are full
      for(var i = 0; i < 3; i++){
        for(var j = 0; j < 3; j++){
          if([i][j] === ' '){
            return false;
          }
        }
      }

      return null;
  }

  function moveAI(){
    for(var i = 0; i < 3; i++){
      for(var j = 0; j < 3; j++){
        if(grid[i][j] === ' '){
          return {
          i: i,
          j: j
        };
      }
    }
  }
    return null;
  }

  $('.col').click(function(){
    $this = $(this);
    $this.html(PLAYER_TOKEN);
    const i = $this.data('i');
    const j = $this.data('j');
    grid[i][j] = PLAYER_TOKEN;
    console.log(grid);

    let gameState = isGameOver()
    if(gameState){
      alert('Game over' + gameState + ' wins');
      return;
    } else {
      // It's the AI's turn
      const move = moveAI();
      grid[move.i][move.j] = COMPUTER_TOKEN;
      $('.col[data-i=' + move.i + '][data-j=' + move.j + ']').html(COMPUTER_TOKEN);
    }

    gameState = isGameOver()
    if(gameState){
      alert('Game over' + gameState + ' wins');
    }
  });

  $('#restart').click(function(){
    for(var i = 0; i < 3; i++){
      for(var j = 0; j < 3; j++){
        grid[i][j] = ' ';
        $('.col[data-i=' + i + '][data-j=' + j + ']').html(' ');
      }
    }
  });

});
