import React from 'react'

function Home() {
    const listItems = [1,2,3,4,5,6,7,8,9,10,11]

/* se corrigio este comentario*/

    const addItems = () => {
        const variableA = 1;
        const variableB = 2;
        const variableC = 3;
        const variableD = 4;

        return variableA * 3 + variableB + variableC * variableD
    }
    return (
        <><div>Home</div><button onclick={addItems}/></>
    )
}
/* otro comentario */
/* Hola Mundo */
export default Home
