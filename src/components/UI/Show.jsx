import React , {useState} from "react";
import '../Style/Style.css';
import BoardElement from "../Board/BoardElement";
function Show() {

    const [nextPlayer, setNextPlayer] = useState('X');
    const nextHandler = (event) => {
        const next = nextPlayer === 'X'? 'Y':'X';
        setNextPlayer(next);
    }
   
  return (

    <div className="show">
      <h1>Tic Tac Toe By NatourTech</h1>
      <h1>Next Player: {nextPlayer}</h1>
        <div onClick={nextHandler}>
          <BoardElement next ={nextPlayer}  />
        </div>
       

      

    </div>
  );
}

export default Show;
