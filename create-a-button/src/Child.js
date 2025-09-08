import { useState } from 'react'

function Child({onChildClick}) {
    const [childCounter, increaseChildCounter] = useState(0)


    const handleClick = () => {
        increaseChildCounter(prev => prev + 1)
    }

    const handleChildUpdate = () => {
        onChildClick(childCounter)
    }



    return (
        <div>
            <h1>{childCounter}</h1>
            <button onClick={handleClick}>Click Child!</button>
            <button onClick={handleChildUpdate}>Send Child Count!</button>

        </div>
    )
}

export default Child