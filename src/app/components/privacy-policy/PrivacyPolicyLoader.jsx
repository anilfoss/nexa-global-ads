"use client";

import React, { useEffect, useState } from "react";
import PrivacyPolicy from "./PrivacyPolicy";

const PrivacyPolicyLoader = () => {
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
                <PrivacyPolicy />
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

export default PrivacyPolicyLoader;
