//leia o README

const marcosScript = (scenery, myMove) => {
  /*
  RL- 0   1   2 
  0   0 - 1 - 2 
  1   3 - 4 - 5
  2   6 - 7 - 8
  */
  // your script here
  const nextTurn = {
    X: "O",
    O: "X"
  }

  function nextMove(scenery, myMove, attack){
    myMove = attack ? myMove : nextTurn[myMove]

    function checkRow(scenery, row) {
      if ((scenery[row * 3 + 0] == myMove) && (scenery[row * 3 + 1] == myMove) && (scenery[row * 3 + 2] == "")) {
        return row * 3 + 2
      } else if ((scenery[row * 3 + 0] == myMove) && (scenery[row * 3 + 1] == "") && (scenery[row * 3 + 2] == myMove)) {
        return row * 3 + 1
      } else if ((scenery[row * 3 + 0] == "") && (scenery[row * 3 + 1] == myMove) && (scenery[row * 3 + 2] == myMove)) {
        return row * 3 + 0
      } else {
        return -1
      }
    }

    //Checks lines
    for (var i = 0; i < 3; i++) {
      const move = checkRow(scenery, i)

      if (move != -1) {
        return move
      }
    }

    function checkColumn(scenery, column) {
      if ((scenery[column + 0] == myMove) && (scenery[column + 3] == myMove) && (scenery[column + 6] == "")) {
        return column + 6
      } else if ((scenery[column + 0] == myMove) && (scenery[column + 3] == "") && (scenery[column + 6] == myMove)) {
        return column + 3
      } else if ((scenery[column + 0] == "") && (scenery[column + 3] == myMove) && (scenery[column + 6] == myMove)) {
        return column + 0
      } else {
        return -1
      }
    }

    //Check columns 
    for (var j = 0; j < 3; j++) {
      const move = checkColumn(scenery, j)

      if (move != -1) {
        return move
      }
    }
  }


  //Random play
  const freeCells = scenery.map((cell, index) => {
    if (cell === "") {
      return index
    } else {
      return -1
    }
  }).filter(index => {
    return index != -1
  })

  const index = freeCells[Math.floor(Math.random() * freeCells.length)]

  return index
}


export default marcosScript