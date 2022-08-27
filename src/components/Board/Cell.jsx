import React , {useState} from 'react'

function Cell(props) {

    const [stateOfCell_1, setStateOfCell_1] = useState('');

     
  const stateHandeller = (event) => {
    event.preventDefault();
    // console.log(event);
    if(event.target.innerText === ''){
        setStateOfCell_1(props.next);
        
    }

   
    
  
   }
  return (
    <div data-cell-index="0" className="cell" onClick={stateHandeller}>
        <h1 className="XY">{stateOfCell_1}</h1>
      </div>
  )
}

export default Cell;