"use client";

import React, { useEffect, useState } from "react";
import WebsiteDisclaimer from "./WebsiteDisclaimer";

const DisclaimerLoader = () => {
    const [showTerms, setShowTerms] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowTerms(true);
        }, 1000); // 1 seconds delay

        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            {showTerms ? (
                <WebsiteDisclaimer />
            ) : (
                <div
                    style={{
                        backgroundColor: "#edefec",
                        minHeight: "100vh",
                    }}
                ></div>
            )}
        </>
    );
};

export default DisclaimerLoader;
