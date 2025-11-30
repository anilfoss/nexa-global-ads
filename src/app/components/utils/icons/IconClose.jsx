import React from "react";

const IconClose = (props) => {
    return (
        <svg
            aria-hidden="true"
            fill="none"
            height="1em"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            width="1em"
            {...props}
        >
            <path d="M18 6L6 18M6 6l12 12" />
        </svg>
    );
};

export default IconClose;
