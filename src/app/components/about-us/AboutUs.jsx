"use client";

import React from "react";
import Section from "../utils/Section";
import Container from "../utils/Container";
import RadioTitle from "../utils/RadioTitle";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const textData =
    "For a connected world, safeguarding every space skies, and seas by integrating advanced artificial intelligence with cutting-edge detection and defense technologies.";

const AboutUs = () => {
    // gsap
    useGSAP(() => {
        const radioTitle = gsap.utils.toArray(
            ".section-about-us .radio-title > *"
        );

        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".section-about-us",
                start: "top 70%",
                markers: false,
            },
        });

        tl1.to(radioTitle, {
            left: 0,
            opacity: 1,
            duration: 0.3,
            stagger: 0.1,
            ease: "power3.inout",
        });
    });

    useGSAP(() => {
        const texts = gsap.utils.toArray(".section-about-us h3 span");

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".section-about-us",
                start: "top 60%",
                end: "120% 100%",
                markers: false,
                scrub: 1,
                ease: "power3.inout",
            },
        });

        tl2.from(texts, {
            opacity: 0.1,
            duration: 2,
            delay: 2,
            stagger: 0.5,
        });
    });

    useGSAP(() => {
        const splitDescription = new SplitText(
            ".section-about-us .desc-animation",
            {
                type: "lines, words",
                tag: "span",
                linesClass: "lines",
                wordsClass: "words",
            }
        );

        const tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".section-about-us",
                start: "top 40%",
                markers: false,
            },
        });

        tl3.to(".section-about-us .desc-animation", { opacity: 1 });
        tl3.to(splitDescription.words, {
            top: 0,
            opacity: 1,
            stagger: 0.02,
            duration: 1,
            ease: "back.out(0.8)",
        });

        return () => {
            splitDescription.revert();
        };
    });

    return (
        <Section className="section-about-us bg-light-gray overflow-hidden">
            <div className="border-b-2 border-solid border-black border-opacity-20">
                <Container>
                    <div className="flex">
                        <div className="pt-6 md:pt-12 2xl:pt-16 pb-4 border-r-2 border-solid border-black border-opacity-20 pr-6 w-full lg:w-44 lg:min-w-44 xl:w-52 xl:min-w-52 2xl:w-60 2xl:min-w-60">
                            <RadioTitle title="About Us" className="hide" />
                        </div>
                        <div className="grow"></div>
                    </div>
                </Container>
            </div>
            <div className="">
                <Container>
                    <div className="flex flex-row-reverse lg:flex-row">
                        <div className="border-r-2 border-solid border-black border-opacity-20 lg:w-44 lg:min-w-44 xl:w-52 xl:min-w-52 2xl:w-60 2xl:min-w-60"></div>
                        <div className="grow p-6 md:p-10 max-md:pr-4 max-lg:!pl-0 lg:pr-0">
                            <h3 className="leading-snug md:leading-normal">
                                {textData.split("").map((text, index) => {
                                    return <span key={index}>{text}</span>;
                                })}
                            </h3>

                            <p className="desc-animation pt-6 md:pt-10 pb-2">
                                We exist to protect people, infrastructure, and
                                airspace from evolving drone-borne threats
                                empowering governments, defense agencies, and
                                industries with intelligent, adaptive, and
                                ethical solutions that enhance safety,
                                resilience, and operational confidence.
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
        </Section>
    );
};

export default AboutUs;
