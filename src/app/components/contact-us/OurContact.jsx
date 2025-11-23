import React from "react";
import Section from "../utils/Section";
import Container from "../utils/Container";
import RadioTitle from "../utils/RadioTitle";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const OurContact = () => {
    return (
        <>
            <Section className="section-our-contact overflow-hidden">
                <Container>
                    <div className="flex max-lg:flex-col">
                        <div className="border-r-2 border-solid border-black border-opacity-20 lg:w-[35%] lg:min-w-[35%] xl:w-[40%] xl:min-w-[40%]">
                            <div className="pt-6 md:pt-12 2xl:pt-16 pb-4 w-full relative after:content-[''] after:bg-black after:bg-opacity-20 after:w-screen after:h-0.5 after:absolute after:-right-6 after:md:-right-8 after:lg:right-0 after:bottom-0">
                                <RadioTitle title="Our Contact Information" />
                            </div>
                            <div className="p-6 pl-0 md:p-10 md:pl-0">
                                <ContactInfo />
                            </div>
                        </div>
                        <div className="grow max-lg:border-r-2 border-solid border-black border-opacity-20">
                            <div className="pt-6 md:pt-12 2xl:pt-16 pb-4 lg:pl-10 w-full relative after:content-[''] after:bg-black after:bg-opacity-20 after:w-screen after:h-0.5 after:absolute after:-left-6 after:md:-left-8 after:lg:left-0 after:bottom-0">
                                <RadioTitle title="Send Us a Message" />
                            </div>
                            <div className="p-6 pl-0 md:p-10 md:pl-0 lg:pl-10 lg:pr-0">
                                <ContactForm />
                            </div>
                        </div>
                    </div>
                </Container>
            </Section>
        </>
    );
};

export default OurContact;
