"use client";

import React, { useState } from "react";

const Disclaimer = ({ className }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const text =
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit blanditiis ducimus voluptates nulla perferendis totam iusto non inventore eum officia ullam obcaecati impedit sequi, est aperiam possimus, amet eos veniam! Soluta, fugit nulla! Quas voluptatum ipsa modi, quia, vero temporibus soluta voluptatibus veniam ex aspernatur, inventore deserunt? Eos deleniti dolor, adipisci nam, porro pariatur eligendi quidem cum, doloremque possimus suscipit. Harum beatae consectetur, nisi autem eius deserunt saepe itaque. Ullam, qui pariatur. Quibusdam animi voluptatem architecto quas, fugit aspernatur accusamus aperiam error dolores repellendus earum harum assumenda adipisci debitis deserunt! Fuga quibusdam optio quasi earum aut et qui error animi sunt, iste dolore rerum saepe ullam libero dicta magnam quo voluptate sequi deleniti. Excepturi labore facilis vero nostrum adipisci itaque. Placeat fugiat harum vel impedit est nesciunt vitae sunt? Cupiditate nam magni sed adipisci, beatae sequi pariatur explicabo expedita cumque, quo molestiae eveniet incidunt rerum? Quod, totam? Libero, dicta explicabo.";
    const shortText = text.slice(0, 430) + "...";

    return (
        <div
            className={`text-white text-opacity-60 ${
                className ? className : ""
            }`}
        >
            {isExpanded ? text : shortText}{" "}
            <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-white font-medium ml-1 hover:underline underline-offset-2 transition"
            >
                {isExpanded ? "Read less" : "Read more"}
            </button>
        </div>
    );
};

export default Disclaimer;
