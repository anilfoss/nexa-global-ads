"use client";

import React, { useEffect, useState } from "react";
import Cookies from "./Cookies";

const CookiesLoader = () => {
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
                <Cookies />
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

export default CookiesLoader;
