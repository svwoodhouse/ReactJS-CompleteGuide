import React from 'react';

const userInput = (props) => {
    const style = {
        color: 'orange',
        border:"2px sold green",
        width: '60%',
        textAlign: "center",
        padding: '16px',
        margin: '16px'
    };

    return (
        <div>
            <input type="text" value={props.oldName} onChange={props.change} style={style}/>
        </div>
    );
}
  
export default userInput;