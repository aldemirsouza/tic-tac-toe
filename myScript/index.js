//leia o README

const marcosScript = (scenery, myMove) => {
  // script teste
  let moveIndex = null

  const move = () => {
    const randomNumber = Math.floor(Math.random() * 9)
    
    if (scenery[randomNumber]) return move()

    moveIndex = randomNumber
  }

  move()
  //script teste

  // your script here

  return -1
}


export default marcosScript