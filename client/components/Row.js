import React, { Component } from "react";
import Box from "./Box";

const Row = (props) => {

  const { content, handleClick, rowNum, currColor, currentMood, style, color } = props;
  console.log(`row`, color)
    const boxes = [];
    
    //Columns
    for (let i = 0; i < 6; i++) {
      boxes.push(<Box 
        key={`c${i}`}
        content={content}
        rowNum={rowNum}
        columnNum={i}
        handleClick={handleClick}
        // currColor = {currColor}
        // className={button_class}
        // color={color}
        />
      );
    }  
    return (
    <div>{boxes}</div>
    );
}

export default Row;
