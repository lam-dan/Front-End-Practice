import {useState} from 'react'
import Child from './Child.js'

function Parent() {
    const [parentCounter, setParentCounter] = useState(0)
    
    const handleClick = () => {
        setParentCounter(prev => prev + 1)
    }   

    const handleChildClick = (counter) => {
        setParentCounter(counter)
    }

    return (
        <div>
            <h1>{parentCounter}</h1>
            <button onClick={handleClick}>Click Parent!</button>
            <Child onChildClick={handleChildClick}></Child>
        </div>
    )
}

export default Parent
