"use client";

import React, { useEffect, useState } from "react";
import Terms from "./Terms";

const TermsLoader = () => {
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
                <Terms />
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

export default TermsLoader;
