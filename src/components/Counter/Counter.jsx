
import { useState } from 'react'
import './Counter.css'
import CounterButton from './CounterButton';
import ResetButton from './ResetButton';



export default function Counter(){


    const [countParent, setCountparent] = useState(0);

    function incrementParentCount(by){
        setCountparent(countParent+by)
    }

    function decrementParentCount(by){
        setCountparent(countParent-by)
    }

    function resetFunction(){
        setCountparent(0);
    }


    return(
        <>
            <span className="countParent">{countParent}</span>
            <CounterButton by={1} incrementParent={incrementParentCount} decrementParent={decrementParentCount}></CounterButton>
            <CounterButton by={2} incrementParent={incrementParentCount} decrementParent={decrementParentCount}></CounterButton>
            <CounterButton by={5} incrementParent={incrementParentCount} decrementParent={decrementParentCount}></CounterButton>
            <ResetButton resetFunction= {resetFunction}></ResetButton>
        </>
    )
}



