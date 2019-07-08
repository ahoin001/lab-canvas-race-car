window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  function startGame() {

    // // reference canvas
    let myCanvas = document.querySelector('#canvas');

    // // prepare 2d context 
    let myContext = myCanvas.getContext('2d');

    /*****    draw green background      *****/ 

    // make pen green
    myContext.fillStyle = "green";

    // draw in rect with this size (x,y,width,height)
    myContext.fillRect(0, 0, 1000, 900);

    /*****    draw grey road      *****/ 
    
    // make pen grey
    myContext.fillStyle = "rgb(128,128,128)";

    // draw in rect with this size
    myContext.fillRect(100, 0, 400, 900);


    /*****    draw white lines on road      *****/ 
    
    // make pen white
    myContext.fillStyle = "white";

    // draw in rect with this size
    myContext.fillRect(300, 10, 10, 40);
    myContext.fillRect(300, 70, 10, 40);

    // did math to get numbers for this to work
    let whiteLinesSpaceY = 10;
    

  }

};


