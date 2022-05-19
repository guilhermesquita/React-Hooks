import { useEffect } from "react"
function Effects(){

    useEffect(() => {
        console.log("O Use Effect rodou");
    }, [])
}


export default Effects