export default function CounterButton({by, incrementParent, decrementParent}){

    /*

    const buttonStyle = {
        fontSize:"16px px",
        backgroundColor: "#00a5ab",
        width: "100px",
        margin: "10px",
        color: "white",
        padding: "15px",
        borderRadius: "30px"
    };
    */


    return (
        <div className="CounterButton">
            <div>
                 <button className="counterButton" 
                 onClick={() => incrementParent(by)}
              //   style={buttonStyle}
                 >+{by}</button>
                  <button className="counterButton" 
                 onClick={() => decrementParent(by)}
              //   style={buttonStyle}
                 >-{by}</button>
            </div>

        </div>
    )
}

