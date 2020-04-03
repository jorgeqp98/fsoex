import React from "react"

const Message = ({addedMessage}) => {
    
    const messageStyle = {
        backgroundColor: 'lightgray',
        color: 'blue',
        height: 50, 
        width: 400,
        border: "7px solid green",
        paddingLeft: 20,
        borderRadius: "35px", 
        display: "flex",
        alignItems: "center",
        fontSize: 20
    }
    
    if (addedMessage === null) {
        return null
    }
    
    return (
        <div
            style={messageStyle} 
            className="messageAdded">
            {addedMessage}
        </div>
    )
}

export default Message