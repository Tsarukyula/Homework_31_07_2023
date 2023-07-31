import { useState } from "react"

export default function Apple():JSX.Element {

    const[apple, setApple] = useState("Apple");

    function eatApple():void{
        setApple("stub");
    }

    return (
        <>
            <h2>{apple}</h2>
            <button type="button" onClick={eatApple}>Eat apple</button>
        </>
    )

}