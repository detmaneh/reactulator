import React, { useState } from 'react';
import * as styles from './CustomButton';
import { CustomButtonProps } from "../../util/types";


export default function CustomButton({ value, textValue, size, onClick, isDoubleSize, isRedColored, isColored }: CustomButtonProps) {

    const [isHovering, setIsHovering] = useState(false);

    const handleMouseEnter = () => {
        setIsHovering(true);
    };

    const handleMouseLeave = () => {
        setIsHovering(false);
    };


    const ogStyle = {
        justifyContent: "center",
        cursor: "pointer",
        backgroundColor: isHovering ? '#cacfd2' : '#ecf0f1',
        display: "block",
        fontSize: "4vh",
        height: "90%",
        width: "90%",
        borderRadius: '25%',
    };

    const doubleStyle = {
        fontSize: "6vh",
        width: "95%",
        borderRadius: '10%',
    };

    const redStyle = {
        fontSize: "2vh",
        backgroundColor: isHovering ? '#6e2c00' : '#d35400',
        color: "ivory",
    };

    const coloredStyle = {
        fontSize: "2vh",
        backgroundColor: isHovering ? '#34495e' : '#1a5276',
        color: "ivory",
    };

    const dosStyle = { ...ogStyle, ...doubleStyle };
    const redColoredStyle = { ...ogStyle, ...redStyle };
    const diffColoredStyle = { ...ogStyle, ...coloredStyle };



    return (
        <button onClick={onClick} value={value} title={textValue} onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
            style={isDoubleSize ? dosStyle : isRedColored ? redColoredStyle : isColored ? diffColoredStyle : ogStyle}>
            {value}
        </button>
    );


}
