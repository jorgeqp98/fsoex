import React from "react"

const ErrorMessage = ({errorMessage}) => {
    
    const messageStyle = {
        backgroundColor: 'lightgray',
        color: 'blue',
        height: 50, 
        width: 400,
        border: "7px solid red",
        paddingLeft: 20,
        borderRadius: "35px", 
        display: "flex",
        alignItems: "center",
        fontSize: 20
    }
    
    if (errorMessage === null) {
        return null
    }
    
    return (
        <div
            style={messageStyle} 
        >
            {errorMessage}
        </div>
    )
}

export default ErrorMessage