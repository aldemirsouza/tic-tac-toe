//leia o README

const marcosScript = (scenery, myMove) => {
  /*
    0   1   2 linhas
  0  0 - 1 - 2 
  1  3 - 4 - 5
  2  6 - 7 - 8
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