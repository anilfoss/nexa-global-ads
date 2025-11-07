import React from "react";

const SectionHeader = ({ title, subtitle, className }) => {
    return (
        <div
            className={`text-center flex flex-col gap-5 mb-10 ${
                className ? className : ""
            }`}
        >
            {title && <h2>{title}</h2>}
            {subtitle && <h4 className="text-muted">{subtitle}</h4>}
        </div>
    );
};

export default SectionHeader;
