window.onload = function () {
  document.getElementById("start-button").onclick = function () {
    startGame();
  };

  function startGame() {
    
    /*****    draw grey road      *****/ 

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

    /*****    draw white columns on road      *****/ 
    
    // make pen white
    myContext.fillStyle = "white";

    // draw in columns on sides of road
    myContext.fillRect(120, 0, 15, 900);
    myContext.fillRect(466, 0, 15, 900);


    /*****    draw white dash lines on road      *****/ 
    
    // make pen white
    myContext.fillStyle = "white";

    // draw in rect with this size
    myContext.fillRect(300, 10, 10, 50);
    // myContext.fillRect(300, 90, 10, 50);

    // start at first created white dash, and keep drawing white dashes
    //spaced 80 apart until we reach the end of canvas 
    // (rough number to determine end for design reasons)
    for(whiteLinesSpaceY = 10; whiteLinesSpaceY < 1100; whiteLinesSpaceY += 80)
    {
      //draw new dashed white line
      myContext.fillRect(300, whiteLinesSpaceY, 10, 50);
    }
    

  }

};


