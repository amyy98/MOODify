import React, { Component } from "react";

// Each individual box will have functionality when clicked. This functionality is passed down from state

const Box = (props) => {
    const { content, handleClick, rowNum, columnNum, currColor, button_class, style, color } = props;

    return (
        <button
        className="buttons"
        id={`r${rowNum}c${columnNum}`}
        onClick={handleClick}
        style={{backgroundColor: content.id}}
        >
            
            {content[`r${rowNum}c${columnNum}`]}
        </button>
    )
}

export default Box;