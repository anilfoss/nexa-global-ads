"use client";

import React, { useRef, useState } from "react";
import { Button, Checkbox, Form, Input } from "@heroui/react";
import Image from "next/image";
import IconClose from "../utils/icons/IconClose";

const CareerForm = ({ onClose, jobTitle, jobLocation, jobTags }) => {
    const [submitted, setSubmitted] = useState(null);
    const [errors, setErrors] = useState({});
    const [selectedFile, setSelectedFile] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const fileInputRef = useRef(null);

    const allowedFileTypes = {
        "application/pdf": (
            <Image
                src="/images/icon-pdf.png"
                alt="icon-pdf"
                width={256}
                height={256}
                unoptimized
                className="file-img"
            />
        ),
        "application/msword": (
            <Image
                src="/images/icon-doc.png"
                alt="icon-doc"
                width={256}
                height={256}
                unoptimized
                className="file-img"
            />
        ),
        "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
            (
                <Image
                    src="/images/icon-doc.png"
                    alt="icon-doc"
                    width={256}
                    height={256}
                    unoptimized
                    className="file-img"
                />
            ),
    };

    const maxFileSize = 2 * 1024 * 1024; // 2MB

    const validateForm = (formData) => {
        let newErrors = {};

        const trimValue = (key) => formData.get(key)?.trim() || "";

        if (!trimValue("name")) newErrors.name = "Please enter a valid name";

        const email = trimValue("email");
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email) {
            newErrors.email = "Email is required";
        } else if (!emailRegex.test(email)) {
            newErrors.email = "Please enter a valid email address";
        }

        const phone = trimValue("phone");
        const phoneRegex = /^\+\d{1,3}\d{6,14}$/;
        if (!phone) {
            newErrors.phone = "Please enter a phone number";
        } else if (!/^\d+$/.test(phone.replace("+", ""))) {
            newErrors.phone = "Phone number should contain only digits";
        } else if (!phoneRegex.test(phone)) {
            newErrors.phone =
                "Phone number must include country code (e.g., +91XXXXXXXXXX)";
        }

        if (!trimValue("location"))
            newErrors.location = "Please enter your current location";

        if (!selectedFile) {
            newErrors.cv = "Please upload your CV";
        }

        if (!formData.get("terms"))
            newErrors.terms = "You must agree to the terms";

        return newErrors;
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (!allowedFileTypes[file.type]) {
                setErrors((prev) => ({
                    ...prev,
                    cv: "Invalid file type. Please upload a .pdf, .doc, or .docx file.",
                }));
                return;
            }

            if (file.size > maxFileSize) {
                setErrors((prev) => ({
                    ...prev,
                    cv: "File size exceeds 2 mb. Please upload a smaller file.",
                }));
                return;
            }

            setSelectedFile(file);
            setErrors((prev) => ({ ...prev, cv: null }));
        }
    };

    const removeFile = () => {
        setSelectedFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = ""; // Reset file input
        }
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);

        // console.log("formData = ", formData);

        // Perform client-side validation before submission
        const newErrors = validateForm(formData);

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setIsSubmitting(false);
            return;
        }

        setErrors({}); // Clear previous errors

        if (selectedFile) {
            formData.append("cv", selectedFile);
        }

        try {
            const response = await fetch(
                "https://nexaglobalads.com/post-career.php",
                {
                    method: "POST",
                    body: formData,
                }
            );

            const result = await response.json();

            if (result.success) {
                setSubmitted(true);

                // Reset form fields
                e.target.reset();
                setSelectedFile(null);
                if (fileInputRef.current) {
                    fileInputRef.current.value = "";
                }

                setTimeout(() => {
                    setSubmitted(false);
                    setErrors({});
                }, 5000);
            } else {
                setErrors(
                    result.errors || {
                        form: "Failed to send email. Please try again.",
                    }
                );
            }
        } catch (error) {
            console.error("Error sending form:", error);
            setErrors({ form: "Something went wrong. Try again later." });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            <Form
                className="job-form mx-auto w-full max-w-[38rem] opacity-0 relative top-8"
                validationErrors={errors}
                onSubmit={onSubmit}
            >
                {/* hidden fields */}
                <input type="hidden" name="jobTitle" defaultValue={jobTitle} />
                <input
                    type="hidden"
                    name="jobLocation"
                    defaultValue={jobLocation}
                />
                <input
                    type="hidden"
                    name="jobTags"
                    defaultValue={jobTags?.join(", ")}
                />

                {/* visible fields */}
                <div className="form-group">
                    <label className="form-label" htmlFor="name">
                        Full Name <span className="required">*</span>
                    </label>
                    <div className="form-field">
                        <Input id="name" name="name" type="text" />
                    </div>
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="email">
                        Email <span className="required">*</span>
                    </label>
                    <div className="form-field">
                        <Input id="email" name="email" type="email" />
                    </div>
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="phone">
                        Phone{" "}
                        <span className="optional">(with country code)</span>{" "}
                        <span className="required">*</span>
                    </label>
                    <div className="form-field">
                        <Input
                            id="phone"
                            name="phone"
                            type="text"
                            placeholder="+91XXXXXXXXXX"
                        />
                    </div>
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="location">
                        Current Location <span className="required">*</span>
                    </label>
                    <div className="form-field">
                        <Input id="location" name="location" type="text" />
                    </div>
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="cv">
                        Upload CV <span className="required">*</span>
                    </label>
                    <div className="form-field cv-form-field">
                        <Input
                            ref={fileInputRef}
                            id="cv"
                            name="cv"
                            type="file"
                            accept=".pdf, .doc, .docx"
                            onChange={handleFileChange}
                            className="cv-file-field"
                        />

                        <div className="cv-file-style">Choose File</div>

                        {selectedFile && (
                            <div className="file-preview">
                                {allowedFileTypes[selectedFile.type]}
                                <span className="file-name">
                                    {selectedFile.name}
                                </span>
                                <button
                                    type="button"
                                    onClick={removeFile}
                                    className="file-close"
                                >
                                    <IconClose width={14} height={14} />
                                </button>
                            </div>
                        )}
                    </div>
                    {errors.cv === "Please upload your CV" ? null : (
                        <p className="error-text">{errors.cv}</p>
                    )}
                </div>

                <div className="form-group">
                    <Checkbox
                        name="terms"
                        radius="sm"
                        value="true"
                        className={`${errors.terms ? "error" : ""}`}
                        classNames={{
                            base: "accept-terms items-start",
                            label: "text-base",
                            wrapper: "wrapper",
                        }}
                    >
                        By submitting this form you agree to us storing your
                        data, subject to the terms set out in our privacy
                        policy. <span className="text-danger">*</span>
                    </Checkbox>
                </div>

                <div className="form-action">
                    <Button
                        type="submit"
                        variant="bordered"
                        disabled={isSubmitting}
                        isLoading={isSubmitting}
                        spinnerPlacement="end"
                        className="button button-border-green !px-4 !py-4 !w-full !rounded-[4px]"
                    >
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                </div>

                {submitted && (
                    <p className="contact-animation3 text-base text-green-600">
                        Your application has been submitted successfully. Our HR
                        team will review your application and get back to you
                        shortly.
                    </p>
                )}
            </Form>
        </>
    );
};

export default CareerForm;

// ==================================================

// "use client";

// import React, { useRef, useState } from "react";
// import { Button, Checkbox, Form, Input } from "@heroui/react";
// import Image from "next/image";
// import IconClose from "../utils/icons/IconClose";

// const CareerForm = ({ onClose, jobTitle, jobLocation, jobTags }) => {
//     const [submitted, setSubmitted] = useState(null);
//     const [errors, setErrors] = useState({});
//     const [selectedFile, setSelectedFile] = useState(null);
//     const [isSubmitting, setIsSubmitting] = useState(false);
//     const fileInputRef = useRef(null);

//     const allowedFileTypes = {
//         "application/pdf": (
//             <Image
//                 src="/images/icon-pdf.png"
//                 alt="icon-pdf"
//                 width={256}
//                 height={256}
//                 unoptimized
//                 className="file-img"
//             />
//         ),
//         "application/msword": (
//             <Image
//                 src="/images/icon-doc.png"
//                 alt="icon-doc"
//                 width={256}
//                 height={256}
//                 unoptimized
//                 className="file-img"
//             />
//         ),
//         "application/vnd.openxmlformats-officedocument.wordprocessingml.document":
//             (
//                 <Image
//                     src="/images/icon-doc.png"
//                     alt="icon-doc"
//                     width={256}
//                     height={256}
//                     unoptimized
//                     className="file-img"
//                 />
//             ),
//     };

//     const maxFileSize = 2 * 1024 * 1024; // 2MB

//     const validateForm = (formData) => {
//         let newErrors = {};

//         const trimValue = (key) => formData.get(key)?.trim() || "";

//         if (!trimValue("name")) newErrors.name = "Please enter a valid name";

//         const email = trimValue("email");
//         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         if (!email) {
//             newErrors.email = "Email is required";
//         } else if (!emailRegex.test(email)) {
//             newErrors.email = "Please enter a valid email address";
//         }

//         const phone = trimValue("phone");
//         const phoneRegex = /^\+\d{1,3}\d{6,14}$/;
//         if (!phone) {
//             newErrors.phone = "Please enter a phone number";
//         } else if (!/^\d+$/.test(phone.replace("+", ""))) {
//             newErrors.phone = "Phone number should contain only digits";
//         } else if (!phoneRegex.test(phone)) {
//             newErrors.phone =
//                 "Phone number must include country code (e.g., +91XXXXXXXXXX)";
//         }

//         if (!trimValue("location"))
//             newErrors.location = "Please enter your current location";

//         if (!selectedFile) {
//             newErrors.cv = "Please upload your CV";
//         }

//         if (!formData.get("terms"))
//             newErrors.terms = "You must agree to the terms";

//         return newErrors;
//     };

//     const handleFileChange = (e) => {
//         const file = e.target.files[0];
//         if (file) {
//             if (!allowedFileTypes[file.type]) {
//                 setErrors((prev) => ({
//                     ...prev,
//                     cv: "Invalid file type. Please upload a .pdf, .doc, or .docx file.",
//                 }));
//                 return;
//             }

//             if (file.size > maxFileSize) {
//                 setErrors((prev) => ({
//                     ...prev,
//                     cv: "File size exceeds 2 mb. Please upload a smaller file.",
//                 }));
//                 return;
//             }

//             setSelectedFile(file);
//             setErrors((prev) => ({ ...prev, cv: null }));
//         }
//     };

//     const removeFile = () => {
//         setSelectedFile(null);
//         if (fileInputRef.current) {
//             fileInputRef.current.value = ""; // Reset file input
//         }
//     };

//     const onSubmit = async (e) => {
//         e.preventDefault();
//         setIsSubmitting(true);

//         const formData = new FormData(e.currentTarget);

//         console.log("formData = ", formData);

//         // Perform client-side validation before submission
//         const newErrors = validateForm(formData);

//         if (Object.keys(newErrors).length > 0) {
//             setErrors(newErrors);
//             setIsSubmitting(false);
//             return;
//         }

//         setErrors({}); // Clear previous errors

//         if (selectedFile) {
//             formData.append("cv", selectedFile);
//         }

//         try {
//             const response = await fetch(
//                 "https://nexaglobalads.com/post-career.php",
//                 {
//                     method: "POST",
//                     body: formData,
//                 }
//             );

//             const result = await response.json();

//             if (result.success) {
//                 setSubmitted(true);
//             } else {
//                 setErrors(
//                     result.errors || {
//                         form: "Failed to send email. Please try again.",
//                     }
//                 );
//             }
//         } catch (error) {
//             console.error("Error sending form:", error);
//             setErrors({ form: "Something went wrong. Try again later." });
//         } finally {
//             setIsSubmitting(false);
//         }
//     };

//     return (
//         <>
//             {/* {submitted ? (
//                 <div className="text-blue text-center flex flex-col justify-center items-center mt-4 mb-12">
//                     <video
//                         className="checkmark-animation mx-auto mb-4 w-20 md:w-24 h-auto relative mix-blend-darken"
//                         width="150"
//                         height="150"
//                         controls={false}
//                         muted
//                         autoPlay
//                         preload="auto"
//                         playsInline
//                     >
//                         <source
//                             src="/videos/checkmark-video.mp4"
//                             type="video/mp4"
//                         />
//                         Your browser does not support the video tag.
//                     </video>
//                     <h2 className="contact-animation3 text-3xl md:text-5xl mb-4 relative">
//                         We recieved your Application!
//                     </h2>
//                     <p className="contact-animation3 text-lg md:text-xl relative">
//                         Our HR team will review your application and get back to
//                         you.
//                     </p>
//                     <Button
//                         onPress={onClose}
//                         className="bg-transparent font-heading text-base md:text-xl flex flex-col items-center p-0 mt-4 min-w-1 h-auto rounded-none"
//                     >
//                         <IconClose className="border-2 border-neutral-400 w-9 md:w-11 !max-w-full h-9 md:h-11 rounded-[0.25rem]" />
//                         Close
//                     </Button>
//                 </div>
//             ) : ( */}
//             <Form
//                 className="job-form mx-auto w-full max-w-[38rem]"
//                 validationErrors={errors}
//                 onSubmit={onSubmit}
//             >
//                 {/* hidden fields */}
//                 <input type="hidden" name="jobTitle" value={jobTitle} />
//                 <input type="hidden" name="jobLocation" value={jobLocation} />
//                 <input
//                     type="hidden"
//                     name="jobTags"
//                     value={jobTags?.join(", ")}
//                 />

//                 {/* visible fields */}
//                 <div className="form-group">
//                     <label className="form-label" htmlFor="name">
//                         Full Name <span className="required">*</span>
//                     </label>
//                     <div className="form-field">
//                         <Input id="name" name="name" type="text" />
//                     </div>
//                 </div>

//                 <div className="form-group">
//                     <label className="form-label" htmlFor="email">
//                         Email <span className="required">*</span>
//                     </label>
//                     <div className="form-field">
//                         <Input id="email" name="email" type="email" />
//                     </div>
//                 </div>

//                 <div className="form-group">
//                     <label className="form-label" htmlFor="phone">
//                         Phone{" "}
//                         <span className="optional">(with country code)</span>{" "}
//                         <span className="required">*</span>
//                     </label>
//                     <div className="form-field">
//                         <Input
//                             id="phone"
//                             name="phone"
//                             type="text"
//                             placeholder="+91XXXXXXXXXX"
//                         />
//                     </div>
//                 </div>

//                 <div className="form-group">
//                     <label className="form-label" htmlFor="location">
//                         Current Location <span className="required">*</span>
//                     </label>
//                     <div className="form-field">
//                         <Input id="location" name="location" type="text" />
//                     </div>
//                 </div>

//                 <div className="form-group">
//                     <label className="form-label" htmlFor="cv">
//                         Upload CV <span className="required">*</span>
//                     </label>
//                     <div className="form-field cv-form-field">
//                         <Input
//                             ref={fileInputRef}
//                             id="cv"
//                             name="cv"
//                             type="file"
//                             accept=".pdf, .doc, .docx"
//                             onChange={handleFileChange}
//                             className="cv-file-field"
//                         />

//                         <div className="cv-file-style">Choose File</div>

//                         {selectedFile && (
//                             <div className="file-preview">
//                                 {allowedFileTypes[selectedFile.type]}
//                                 <span className="file-name">
//                                     {selectedFile.name}
//                                 </span>
//                                 <button
//                                     type="button"
//                                     onClick={removeFile}
//                                     className="file-close"
//                                 >
//                                     <IconClose width={14} height={14} />
//                                 </button>
//                             </div>
//                         )}
//                     </div>
//                     {errors.cv === "Please upload your CV" ? null : (
//                         <p className="error-text">{errors.cv}</p>
//                     )}
//                 </div>

//                 <div className="form-group">
//                     <Checkbox
//                         name="terms"
//                         radius="sm"
//                         value="true"
//                         className={`${errors.terms ? "error" : ""}`}
//                         classNames={{
//                             base: "accept-terms items-start",
//                             label: "text-base",
//                             wrapper: "wrapper",
//                         }}
//                     >
//                         By submitting this form you agree to us storing your
//                         data, subject to the terms set out in our privacy
//                         policy. *
//                     </Checkbox>
//                 </div>

//                 <div className="form-action">
//                     <Button
//                         type="submit"
//                         variant="bordered"
//                         disabled={isSubmitting}
//                         isLoading={isSubmitting}
//                         spinnerPlacement="end"
//                         className="button button-border-green !px-4 !py-4 !w-full !rounded-[4px]"
//                     >
//                         {isSubmitting ? "Submitting..." : "Submit"}
//                     </Button>
//                 </div>

//                 {submitted && (
//                     <p className="contact-animation3 text-base text-green-600">
//                         Your application has been submitted successfully. Our HR
//                         team will review your application and get back to you
//                         shortly.
//                     </p>
//                 )}
//             </Form>
//             {/* )} */}
//         </>
//     );
// };

// export default CareerForm;
