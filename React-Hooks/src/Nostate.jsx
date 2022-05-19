// Vamos simular agora Como seria o MESMO CONTADOR SEM O USESTATE
function Nostate(){

    let num = 0;

    function handlePlus(){
        num += 1;
        document.getElementById('numprint').innerHTML  = num
    }

    function handleMinus(){
        num = num - 1;
        document.getElementById('numprint').innerHTML  = num
    }

    return (

    <>
        <h1 id="numprint">{num}</h1>
        <button onClick={handlePlus}>+</button>
        <button onClick={handleMinus}>-</button>
    </>

    )
}


//Qual o problema? É MUIIITO MANUAL. Com os states tem mais inteligencia e menos trabalho manual

export default Nostate