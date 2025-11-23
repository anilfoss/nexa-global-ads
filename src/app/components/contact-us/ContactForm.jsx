"use client";

import React, { useState } from "react";
import { Form, Input, Button, Textarea } from "@heroui/react";

const ContactForm = () => {
    const [action, setAction] = useState(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState(null);
    // const [status, setStatus] = useState({
    //     type: "error",
    //     message: "Something went wrong. Try again later.",
    // });

    const validateInput = (value) => {
        if (value.trim() === "") {
            return "Input cannot be just blank spaces";
        }
        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);

        setLoading(true); // Show loader
        setStatus(null);

        // need to delete start
        // console.log("formData = ", formData);
        e.target.reset();
        setLoading(false);
        setStatus(null);
        // need to delete end

        // // Simulate 2-second loading before making request
        // setTimeout(async () => {
        //     try {
        //         const response = await fetch(
        //             "https://integraindia.com/next/post.php",
        //             {
        //                 method: "POST",
        //                 body: formData,
        //             }
        //         );

        //         const result = await response.json();
        //         if (response.ok) {
        //             setStatus({ type: "success", message: result.success });
        //             e.target.reset(); // Reset form fields
        //         } else {
        //             setStatus({ type: "error", message: result.error });
        //         }

        //         // Hide message after 5 seconds
        //         setTimeout(() => {
        //             setStatus(null);
        //         }, 5000);
        //     } catch (error) {
        //         setStatus({
        //             type: "error",
        //             message: "Something went wrong. Try again later.",
        //         });

        //         // Hide message after 5 seconds
        //         setTimeout(() => {
        //             setStatus(null);
        //         }, 5000);

        //         console.log("error = ", error);
        //     } finally {
        //         setLoading(false); // Hide loader after request completes
        //     }
        // }, 2000); // 2-second delay before sending the request
    };

    return (
        <div className="form-wrapper">
            <p className="text-medium">
                For specific support, get a demo or to learn more about Nexa's
                CUaS capabilities, send us a message and our team will get back
                to you shortly.
            </p>

            <Form
                className=""
                validationBehavior="native"
                onReset={() => setAction("reset")}
                onSubmit={handleSubmit}
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

                    <Input
                        type="text"
                        name="phone"
                        label="Phone Number"
                        labelPlacement="outside"
                        placeholder=" "
                        validate={validateInput}
                        className="half"
                    />

                    <Input
                        type="text"
                        name="country"
                        label="Country"
                        labelPlacement="outside"
                        placeholder=" "
                        isRequired
                        errorMessage="Please enter your country name"
                        validate={validateInput}
                    />

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

                    <Input
                        type="text"
                        label="Department"
                        name="department"
                        labelPlacement="outside"
                        placeholder=" "
                        isRequired
                        errorMessage="Please enter your department"
                        validate={validateInput}
                    />

                    <Input
                        type="text"
                        label="Sector"
                        name="sector"
                        labelPlacement="outside"
                        placeholder=" "
                        isRequired
                        errorMessage="Please enter your sector"
                        validate={validateInput}
                    />

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

// =======================================================================

// "use client";

// import React, { useState } from "react";
// import { Button, Form, Input } from "@heroui/react";

// const ContactForm = () => {
//     const [errors, setErrors] = useState({});

//     const onSubmit = (e) => {
//         e.preventDefault();

//         const data = Object.fromEntries(new FormData(e.currentTarget));

//         if (!data.username) {
//             setErrors({ username: "Username is required" });

//             return;
//         }

//         const result = callServer(data);

//         setErrors(result.errors);
//     };

//     return (
//         <div className="form-wrapper">
//             <p>
//                 For specific support, get a demo or to learn more about Nexa's
//                 CUaS capabilities, send us a message and our team will get back
//                 to you shortly.
//             </p>

//             <Form
//                 validationErrors={errors}
//                 onSubmit={onSubmit}
//                 className="w-full max-w-xs flex flex-col gap-4"
//             >
//                 <Input
//                     isRequired
//                     label="Username"
//                     labelPlacement="outside"
//                     name="username"
//                     placeholder="Enter your username"
//                     type="text"
//                 />

//                 <Input
//                     isRequired
//                     label="Email"
//                     labelPlacement="outside"
//                     name="email"
//                     placeholder="Enter your email"
//                     type="email"
//                 />
//                 <div className="flex gap-2">
//                     <Button color="primary" type="submit">
//                         Submit
//                     </Button>
//                 </div>
//             </Form>
//         </div>
//     );
// };

// export default ContactForm;
