import React from 'react'

function Home() {
    const listItems = [1,2,3,4]
/*

ESTE ES EL NUEVO TEXTO

*/
    const addItems = () => {
        const variableA = 1;
        const variableB = 2;
        const variableC = 3;

        return variableA * 3 + variableB + variableC
    }
    return (
        <><div>Home</div><button onclick={addItems}/></>
    )
}

export default Home
