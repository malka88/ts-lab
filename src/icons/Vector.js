import * as React from "react"

const Vector = ({ progress = 0, ...props }) => {

    return (
        <svg
            viewBox="0 0 43 2560"
            fill={props.fill || "none"}

            {...props}
        >
            <path
                strokeWidth="2px"
                className="svg-path"
                d="M23 0V487L1.5 499.5V524.5L23 537L44.5 524.5V499.5H23V999L1.5 1011.5V1036.5L23 1049L44.5 1036.5V1011.5H23V1511L1.5 1523.5V1548.5L23 1561L44.5 1548.5V1523.5H23V2023L1.5 2035.5V2060.5L23 2073L44.5 2060.5V2035.5H23V2560"
                stroke="white"/>
        </svg>
    )
}

export default Vector;