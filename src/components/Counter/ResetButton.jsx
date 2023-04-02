export default function ResetButton({resetFunction}){

    return (
        <button className="resetButton" onClick={() => resetFunction()}>reset</button>
    );
}