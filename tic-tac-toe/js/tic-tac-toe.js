const tic_tac_toe = {

    board: ['','','','','','','','',''],
    symbols: {
                options: ['O','X'],
                turn_index: 0,
                change(){
                    this.turn_index = ( this.turn_index === 0 ? 1:0 );
                }
            },
    container_element: null,
    gameover: false,
    winning_sequences: [
                        [0,1,2],
                        [3,4,5],
                        [6,7,8],
                        [0,3,6],
                        [1,4,7],
                        [2,5,8],
                        [0,4,8],
                        [2,4,6]
                    ],

                  
    init(container) {
        this.container_element = container;
    },

    make_play(position) {
        if (this.gameover || this.board[position] !== '') return false;

        const currentSymbol = this.symbols.options[this.symbols.turn_index];
        this.board[position] = currentSymbol;
        this.draw();

        const winning_sequences_index = this.check_winning_sequences(currentSymbol);
        if (this.is_game_over()){
            this.game_is_over();
        }
        if (winning_sequences_index >= 0) {
            this.game_is_over();
            this.stylize_winner_sequence(this.winning_sequences[winning_sequences_index]);
        } else {
            this.symbols.change();
        }

        return true;
    },

    stylize_winner_sequence(winner_sequence) {
        winner_sequence.forEach((position) => {
          this
            .container_element
            .querySelector(`div:nth-child(${position + 1})`)
            .classList.add('winner');
        });
      },

    check_winning_sequences(symbol) {

        for ( i in this.winning_sequences ) {
            if (this.board[ this.winning_sequences[i][0] ] == symbol  &&
                this.board[ this.winning_sequences[i][1] ] == symbol &&
                this.board[ this.winning_sequences[i][2] ] == symbol) {
                console.log('winning sequences INDEX:' + i);
                return i;
            }
        };
        return -1;
    },

    game_is_over() {
        this.gameover = true;
        console.log('GAME OVER');
    },

    is_game_over() {
        return !this.board.includes('');
    },

    start() {
        this.board.fill('');
        this.draw();
        this.gameover = false;   
        
        if (playerType == 'Two'){
            if (player == 'X'){player = 'O'}else if (player == 'O'){player = 'X'};
            if (tie != -1){playState = !playState;};
          }else if (playerType == 'One'){
              playCount += 1;
                if (difficulty == 'Easy'){
                  setTimeout(dumbAI,1000);  
                }else if (difficulty == 'Hard'){
                  setTimeout(expertAI,1000);
                } 
          }
    },

    restart() {
        this.getData
       
        if (this.is_game_over() || this.gameover) {
            this.start();
            console.log('this game has been restarted!')
        } else if (confirm('Are you sure you want to restart this game?')) {
            this.start();
            console.log('this game has been restarted!')
        }
        if (playerType == 'Two'){
          if (player == 'X'){player = 'O'}else if (player == 'O'){player = 'X'};
          if (tie != -1){playState = !playState;};
        }else if (playerType == 'One'){
            playCount += 1;
              if (difficulty == 'Easy'){
                setTimeout(dumbAI,1000);  
              }else if (difficulty == 'Hard'){
                setTimeout(expertAI,1000);
              } 
        }
    },


    draw() {
        this.container_element.innerHTML = this.board.map((element, index) => `<div onclick="tic_tac_toe.make_play('${index}')"> ${element} </div>`).reduce((content, current) => content + current);
    },

    myFunction() {
        var x = document.getElementById("myDIV");
        if (x.style.display === "none") {
          x.style.display = "block";
        } else {
          x.style.display = "none";
        }
    },






    
     getData() {
        playerType = document.querySelector('input[name=player]:checked').value;
        player = document.querySelector('input[name=token]:checked').value;
        difficulty = document.querySelector('input[name=diff]:checked').value;

        
    



      function dumbAI() {
      
          if ((playCount < 9) &&(playState == false)){
            
              while (true) {
                var a = '#c' + (Math.floor(Math.random() * 3)).toString() + (Math.floor(Math.random() * 3)).toString();
                if ($(a).text() == ' '){            
                    $(a).text(comp);
                    grid[a.charAt(2)][a.charAt(3)] = comp;
                    var state = checkGameState(grid);
                    if (state != false){
                      $(n.toString()).css(neon);
                      setTimeout(function(){xtz(state);},500);     
                    } 
                    playCount += 1;
                    break;
                }
              }
            playState = !playState;
           }

    function expertAI(){
        var gridArray= minmax(grid,0,comp);
        var gridLocation = ('#c' + gridArray[0] + gridArray[1]);
        $(gridLocation).text(comp);
        grid[gridArray[0]][gridArray[1]] = comp;
        var state = checkGameState(grid);
        if (state != false){
          $(n.toString()).css(neon);
          setTimeout(function(){xtz(state);},500); 
        }
      }
    }
  }
}