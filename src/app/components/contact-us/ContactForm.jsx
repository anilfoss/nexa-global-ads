"use client";

import React, { useEffect, useState } from "react";
import {
    Form,
    Input,
    Button,
    Textarea,
    Select,
    SelectItem,
} from "@heroui/react";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { CountrySelect } from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

const departmentsList = [
    { key: "global-product-support", label: "Global Product Support" },
    { key: "us-product-support", label: "US Product Support" },
    { key: "sales-or-general-enquiries", label: "Sales or General Enquiries" },
    { key: "media-enquiries", label: "Media Enquiries" },
    { key: "investor-enquiries", label: "Investor Enquiries" },
    { key: "suppliers", label: "Suppliers" },
];

const sectorsList = [
    { key: "military", label: "Military" },
    { key: "government", label: "Government" },
    { key: "public-safety", label: "Public Safety" },
    { key: "critical-infrastructure", label: "Critical Infrastructure" },
    { key: "private", label: "Private" },
];

const ContactForm = () => {
    // const [action, setAction] = useState(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);
    const [phoneValue, setPhoneValue] = useState();
    const [country, setCountry] = useState(null);
    const [countryError, setCountryError] = useState(false);
    const [countryArrow, setCountryArrow] = useState(false);
    const [formKey, setFormKey] = useState(0);

    const validateInput = (value) => {
        if (value.trim() === "") {
            return "Input cannot be just blank spaces";
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        setLoading(true);
        setStatus(null);

        // // need to delete start
        // console.log("formData = ", formData);
        // setLoading(false);
        // setStatus(null);
        // // need to delete end

        if (!country) {
            setCountryError(true);
            setLoading(false);
            return;
        }

        const emailValue = formData.get("email");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailValue)) {
            setStatus({
                type: "error",
                message: "Please enter a valid email address.",
            });
            setLoading(false);
            return;
        }

        // phone and country fields doesn't auto bind
        formData.set("phone", phoneValue || "");
        formData.set("country", country?.name || "");

        // Simulate 2-second loading before making request
        setTimeout(async () => {
            try {
                const response = await fetch(
                    "https://nexaglobalads.com/post-contact.php",
                    {
                        method: "POST",
                        body: formData,
                    }
                );

                // const response = await fetch(
                //     "/post-contact.php",
                //     {
                //         method: "POST",
                //         body: formData,
                //     }
                // );

                const result = await response.json();
                if (response.ok) {
                    setStatus({ type: "success", message: result.success });
                    e.target.reset(); // Reset form fields

                    // Reset controlled fields
                    setPhoneValue("");
                    setCountry(null);
                    setCountryError(false);
                    setCountryArrow(false);
                    setFormKey((prev) => prev + 1); // 👈 Force UI reset
                } else {
                    setStatus({ type: "error", message: result.error });
                }

                // Hide message after 5 seconds
                setTimeout(() => {
                    setStatus(null);
                }, 5000);
            } catch (error) {
                setStatus({
                    type: "error",
                    message: "Something went wrong. Try again later.",
                });

                // Hide message after 5 seconds
                setTimeout(() => {
                    setStatus(null);
                }, 5000);

                console.log("error = ", error);
            } finally {
                setLoading(false); // Hide loader after request completes
            }
        }, 2000); // 2-second delay before sending the request
    };

    return (
        <div className="form-wrapper">
            <p className="text-medium">
                For specific support, get a demo or to learn more about Nexa's
                CUaS capabilities, send us a message and our team will get back
                to you shortly.
            </p>

            <Form
                key={formKey}
                validationBehavior="native"
                onSubmit={handleSubmit}
                onInvalid={(e) => {
                    if (!country) {
                        setCountryError(true);
                        return;
                    }
                    setCountryError(false);
                }}
            >
                <div className="inner">
                    <Input
                        type="text"
                        name="firstname"
                        label="First Name"
                        labelPlacement="outside"
                        placeholder=" "
                        isRequired
                        errorMessage="Please enter your first name"
                        validate={validateInput}
                        className="half"
                    />

                    <Input
                        type="text"
                        name="lastname"
                        label="Last Name"
                        labelPlacement="outside"
                        placeholder=" "
                        isRequired
                        errorMessage="Please enter your last name"
                        validate={validateInput}
                        className="half"
                    />

                    <Input
                        type="email"
                        name="email"
                        label="Email"
                        labelPlacement="outside"
                        placeholder=" "
                        isRequired
                        errorMessage="Please enter a valid email"
                        validate={validateInput}
                        className="half"
                    />

                    <div className="group custom-group half">
                        <label htmlFor="">Phone Number</label>
                        <PhoneInput
                            name="phone"
                            label="Phone Number"
                            international
                            countryCallingCodeEditable={false}
                            defaultCountry="IN"
                            value={phoneValue}
                            onChange={setPhoneValue}
                        />
                    </div>

                    <div
                        className={`group custom-group country-group ${
                            countryError ? "error" : ""
                        } ${countryArrow ? "focus" : ""}`}
                        onFocusCapture={() => setCountryArrow(true)}
                        onBlurCapture={() => setCountryArrow(false)}
                    >
                        <label htmlFor="">
                            Country <span className="required">*</span>
                        </label>
                        <CountrySelect
                            name="country"
                            value={country}
                            required
                            onChange={(_country) => setCountry(_country)}
                            showFlag={false}
                        />
                    </div>

                    <Input
                        type="text"
                        name="company"
                        label="Company"
                        labelPlacement="outside"
                        placeholder=" "
                        isRequired
                        errorMessage="Please enter your company name"
                        validate={validateInput}
                        className="half"
                    />

                    <Input
                        type="text"
                        label="Job Title"
                        name="jobTitle"
                        labelPlacement="outside"
                        placeholder=" "
                        isRequired
                        errorMessage="Please enter your job title"
                        validate={validateInput}
                        className="half"
                    />

                    <Select
                        label="Department"
                        name="department"
                        labelPlacement="outside"
                        placeholder=" "
                        isRequired
                        className="select"
                    >
                        {departmentsList.map((item) => (
                            <SelectItem key={item.key} data-lenis-prevent={""}>
                                {item.label}
                            </SelectItem>
                        ))}
                    </Select>

                    <Select
                        label="Sector"
                        name="sector"
                        labelPlacement="outside"
                        placeholder=" "
                        isRequired
                        className="select"
                    >
                        {sectorsList.map((item) => (
                            <SelectItem key={item.key} data-lenis-prevent={""}>
                                {item.label}
                            </SelectItem>
                        ))}
                    </Select>

                    <Textarea
                        name="message"
                        label="Message"
                        labelPlacement="outside"
                        placeholder=" "
                        maxRows={6}
                        minRows={6}
                        isRequired
                        errorMessage="Please enter your message"
                        validate={validateInput}
                    />

                    <div className="flex gap-2 mt-4">
                        <Button
                            type="submit"
                            className="button !py-4 mx-auto !w-full sm:!w-auto sm:min-w-64 !rounded-[4px]"
                            disabled={loading}
                        >
                            {loading ? "Submitting..." : "Submit"}
                        </Button>
                    </div>

                    {status && (
                        <div
                            className={`text-medium text-center ${
                                status.type === "success"
                                    ? "text-green-600"
                                    : "text-danger"
                            }`}
                        >
                            {status.message}
                        </div>
                    )}
                </div>
            </Form>
        </div>
    );
};

export default ContactForm;
