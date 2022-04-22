import * as React from "react"

const Vector = ({ progress = 0, ...props }) => {

    return (
        <svg
            viewBox="0 0 43 1024"
            fill={props.fill || "none"}

            {...props}
        >
            <path strokeWidth="2px" className="svg-path" d="M22.5 0v487L1 499.5v25L22.5 537 44 524.5v-25H22.5V1024" stroke="white"/>

        </svg>
    )
}

export default Vector;