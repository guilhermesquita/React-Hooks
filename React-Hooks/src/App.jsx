//Neste exemplo faremos um CONTADOR. Que irá diminiur / subtrair

import { useState } from 'react'


function App() {
 const [counter, setCounter] = useState(0); //Ou seja, o valor de counter = 0. o SetCounter serve apenas para alterar o valor de counter futuramente.

 function handlePlus(){
   setCounter ((prevState) => prevState +1); //
 }

 function handleMinus(){
  setCounter (counter - 1);
}

  return (

 <div>
  <h1>{counter}</h1>
  <button onClick={handlePlus}>+</button>
  <button onClick= {handleMinus}>-</button>
 </div>

 )
}

export default App
