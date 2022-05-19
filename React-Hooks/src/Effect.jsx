import { useEffect } from "react"
function Effects(){

//Efeito Colateral de uma ação na aplicação

    useEffect(() => {
        console.log("O Use Effect rodou");
    }, [])
}


export default Effects