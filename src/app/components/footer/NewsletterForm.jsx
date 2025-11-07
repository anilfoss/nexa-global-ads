"use client";

import React, { useState, useEffect } from "react";
import { Button, Form, Input } from "@heroui/react";

const NewsletterForm = ({ className }) => {
    const [email, setEmail] = useState("");
    const [isInvalid, setIsInvalid] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();

        // Basic email validation
        const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

        if (!isValidEmail) {
            setIsInvalid(true);
            return;
        }

        // Reset error and show success
        setIsInvalid(false);
        setSuccessMessage("Thank you! You’ve successfully subscribed.");
        setEmail(""); // reset input field
    };

    // Hide success message after 5 seconds
    useEffect(() => {
        if (successMessage) {
            const timer = setTimeout(() => {
                setSuccessMessage("");
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [successMessage]);

    return (
        <Form
            className={`items-stretch gap-0 ${className ? className : ""}`}
            onSubmit={onSubmit}
        >
            <div className="inner">
                <Input
                    isRequired
                    name="email"
                    placeholder="Enter your email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    isInvalid={isInvalid}
                    variant="bordered"
                    // errorMessage={isInvalid && "Please enter a valid email address"}
                    classNames={{
                        inputWrapper: isInvalid ? "error" : "",
                        input: "text-medium uppercase",
                    }}
                />

                <Button color="primary" type="submit">
                    Subscribe
                </Button>
            </div>

            {successMessage && (
                <div className="text-active text-base mt-2 transition-opacity duration-500 w-full">
                    {successMessage}
                </div>
            )}
        </Form>
    );
};

export default NewsletterForm;
