"use client";

import React from "react";
import Section from "../utils/Section";
import Container from "../utils/Container";
import RadioTitle from "../utils/RadioTitle";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const OurContact = () => {
    // gsap
    useGSAP(() => {
        const ctx = gsap.context(() => {
            const radioTitle = gsap.utils.toArray(
                ".section-our-contact .radio-title > *"
            );
            const chips = gsap.utils.toArray(
                ".section-our-contact .chip-wrapper > a"
            );
            const addresses = gsap.utils.toArray(
                ".section-our-contact .address-wrapper > *"
            );
            const forms = gsap.utils.toArray(
                ".section-our-contact .form-wrapper > *"
            );

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section-our-contact",
                    start: "top 50%",
                    markers: false,
                },
            });

            tl.to(radioTitle, {
                left: 0,
                opacity: 1,
                duration: 0.3,
                stagger: 0.1,
                ease: "power3.inout",
            })
                .to(chips, {
                    top: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.15,
                    ease: "power3.inout",
                })
                .to(
                    addresses,
                    {
                        top: 0,
                        opacity: 1,
                        duration: 1,
                        stagger: 0.15,
                        ease: "power3.inout",
                    },
                    "-=0.5"
                )
                .to(
                    forms,
                    {
                        top: 0,
                        opacity: 1,
                        duration: 1,
                        stagger: 0.15,
                        ease: "power3.inout",
                    },
                    "-=1.5"
                );
        });

        return () => ctx.revert();
    }, []);

    return (
        <Section className="section-our-contact overflow-hidden">
            <Container>
                <div className="flex max-lg:flex-col">
                    <div className="border-r-2 border-solid border-black border-opacity-20 lg:w-[35%] lg:min-w-[35%] xl:w-[40%] xl:min-w-[40%]">
                        <div className="pt-6 md:pt-12 2xl:pt-16 pb-4 w-full relative after:content-[''] after:bg-black after:bg-opacity-20 after:w-screen after:h-0.5 after:absolute after:-right-6 after:md:-right-8 after:lg:right-0 after:bottom-0">
                            <RadioTitle
                                title="Our Contact Information"
                                className="hide"
                            />
                        </div>
                        <div className="p-6 pl-0 md:p-10 md:pl-0">
                            <ContactInfo />
                        </div>
                    </div>
                    <div className="grow max-lg:border-r-2 border-solid border-black border-opacity-20">
                        <div className="pt-6 md:pt-12 2xl:pt-16 pb-4 lg:pl-10 w-full relative after:content-[''] after:bg-black after:bg-opacity-20 after:w-screen after:h-0.5 after:absolute after:-left-6 after:md:-left-8 after:lg:left-0 after:bottom-0">
                            <RadioTitle
                                title="Send Us a Message"
                                className="hide"
                            />
                        </div>
                        <div className="p-6 pl-0 md:p-10 md:pl-0 lg:pl-10 lg:pr-0">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default OurContact;
