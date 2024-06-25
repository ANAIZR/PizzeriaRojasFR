import { useState } from "react"
import { VacioPizzas } from "../../Components/VacioPizzas"
import ImgMediaCard from "../../Components/Card"
export default function VistaPizza ()  {

    const [hasContent, setHasContent] = useState (true)

    const checkContent = () =>{
        return hasContent
    }
    return (
        <>
                {checkContent() ? <ImgMediaCard /> : <VacioPizzas />}
        </>
    )
}
