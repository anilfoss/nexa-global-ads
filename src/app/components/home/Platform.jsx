"use client";

import React from "react";
import Section from "../utils/Section";
import Container from "../utils/Container";
import { Accordion, AccordionItem } from "@heroui/react";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const accordionData = [
    {
        title: "End-to-End Integrated Solution",
        desc: "Covers the full cycle: detection → identification → tracking → neutralization → post-incident analysis. (Most competitors offer only single-function devices such as jammers or radars.)",
        image: "img-integrated-solution.jpg",
        imgWidth: 1343,
        imgHeight: 740,
    },
    {
        title: "AI-Based Threat Analysis and Prediction",
        desc: "Analyzes drone flight patterns, communication protocols, and threat levels using AI Identification of Friendly vs. Enemy Forces , Utilizing a Database of Over 180 Drone Models.",
        image: "img-analysis-prediction.jpg",
        imgWidth: 1343,
        imgHeight: 740,
    },
    {
        title: "Multi-Sensor Fusion and Centralized Command",
        desc: "Integrates data from radar, RF  scanners, EO/IR cameras, and acoustic sensors to enhance accuracy and detection rate. Simultaneous Tracking Capability: 10 or more possible(80~120).",
        image: "img-centralized-command.jpg",
        imgWidth: 1342,
        imgHeight: 740,
    },
    {
        title: "Advanced Disruption and Neutralization",
        desc: "Beyond simple jamming, enables selective targeting by drone model and precise hijacking/control takeover capabilities.",
        image: "img-disruption-neutralization.jpg",
        imgWidth: 1342,
        imgHeight: 740,
    },
];

const Platform = () => {
    // gsap
    useGSAP(() => {
        const splitTitle = new SplitText(".section-platform .title", {
            type: "lines, words, chars",
            tag: "span",
            charsClass: "chars",
        });
        const splitDesc = new SplitText(".section-platform .desc", {
            type: "lines, words",
            tag: "span",
            linesClass: "lines",
            wordsClass: "words",
        });

        const accordionItems = gsap.utils.toArray(
            ".section-platform .platform-accordion .accordion-item"
        );

        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".section-platform",
                start: "top 70%",
                markers: false,
            },
        });

        tl1.to(
            splitTitle.chars,
            {
                opacity: 1,
                top: 0,
                stagger: 0.03,
                ease: "back.out(1.7)",
            },
            "a"
        ).to(
            splitDesc.words,
            {
                opacity: 1,
                top: 0,
                stagger: 0.02,
                duration: 1,
                delay: 0.5,
                ease: "back.out(1.7)",
            },
            "a"
        );

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".section-platform .platform-accordion",
                start: "top 50%",
                markers: false,
            },
        });

        tl2.to(accordionItems, {
            opacity: 1,
            top: 0,
            duration: 1,
            stagger: 0.8,
            ease: "bounce.out",
        });

        return () => {
            splitTitle.revert();
            splitDesc.revert();
        };
    });

    return (
        <Section className="section-platform">
            <div className="bg-white py-6 md:py-12 2xl:py-16">
                <Container>
                    <h2 className="title">
                        Nexa Global, an AI-Integrated Anti-Drone Platform
                    </h2>
                    <p className="desc mt-4">
                        Unique Differentiators powered by Technological
                        Superiority and Specialized Capabilities
                    </p>
                </Container>
            </div>
            <div className="">
                <Accordion
                    defaultExpandedKeys={["0"]}
                    hideIndicator
                    className="platform-accordion"
                >
                    {accordionData?.map((item, index) => {
                        return (
                            <AccordionItem
                                key={index}
                                aria-label={item?.title}
                                keepContentMounted
                                title={item?.title}
                                className="accordion-item"
                            >
                                <p>{item?.desc}</p>

                                <div className="accordion-img-wrapper">
                                    <Image
                                        src={`/images/${item?.image}`}
                                        alt={item?.image}
                                        width={item?.imgWidth}
                                        height={item?.imgHeight}
                                        unoptimized
                                        className="accordion-img"
                                    />
                                </div>
                            </AccordionItem>
                        );
                    })}
                </Accordion>
            </div>
        </Section>
    );
};

export default Platform;
