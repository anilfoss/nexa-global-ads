import React from "react";

const RadioTitle = ({ className, color, title }) => {
    return (
        <div
            className={`radio-title flex items-center gap-3 ${
                className ? className : ""
            }`}
        >
            <span
                className={`bg-opacity-20 flex justify-center items-center w-5 aspect-square rounded-full ${
                    color === "white" ? "bg-white" : "bg-[#637E53]"
                }`}
            >
                <span
                    className={`radio w-2.5 aspect-square rounded-full ${
                        color === "white" ? "bg-white" : "bg-[#637E53]"
                    }`}
                ></span>
            </span>

            <span className="text">{title}</span>
        </div>
    );
};

export default RadioTitle;
