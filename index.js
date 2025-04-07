import React from 'react'

function Home() {
    const listItems = [1,2,3,4]

*/
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

export default Home
