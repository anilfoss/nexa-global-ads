"use client";

import React from "react";
import Section from "../utils/Section";
import Container from "../utils/Container";
import RadioTitle from "../utils/RadioTitle";
import Image from "next/image";
import { Button } from "@heroui/react";
import Link from "next/link";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const strategicData = [
    {
        title: "Scale Deployments",
        desc: "Expand government + enterprise installations globally",
        image: "img-scale-deployment.svg",
        imgWidth: "642",
        imgHeight: "342",
        class: "item-scale-deployment",
    },
    {
        title: "Expand Maritime",
        desc: "Grow maritime + shipborne product portfolio",
        image: "img-expand-maritime.svg",
        imgWidth: "253",
        imgHeight: "234",
        class: "item-expand-maritime",
    },
    {
        title: "Build Recurring Revenue",
        desc: "Increase SLA penetration and model update subscriptions",
        image: "img-build-revenue.svg",
        imgWidth: "146",
        imgHeight: "251",
        class: "item-build-revenue",
    },
    {
        title: "Strengthen AI",
        desc: "Enhance AI models and retraining infrastructure",
        image: "img-strengthen-ai.svg",
        imgWidth: "242",
        imgHeight: "242",
        class: "item-strengthen-ai",
    },
];

const StrategicPriorities = () => {
    // gsap
    useGSAP(() => {
        const radioTitle = gsap.utils.toArray(
            ".section-strategic-priorities .radio-title > *"
        );

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".section-strategic-priorities",
                start: "top 70%",
                markers: false,
            },
        });

        tl.to(radioTitle, {
            left: 0,
            opacity: 1,
            duration: 0.3,
            stagger: 0.1,
            ease: "power3.inout",
        });
    }, []);

    useGSAP(() => {
        const splitDescription1 = new SplitText(
            ".section-strategic-priorities .desc-animation1",
            {
                type: "lines, words",
                tag: "span",
                linesClass: "lines",
                wordsClass: "words",
            }
        );

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".section-strategic-priorities",
                start: "top 60%",
                markers: false,
                ease: "power3.inout",
            },
        });

        tl2.to(
            ".section-strategic-priorities .desc-animation1",
            {
                opacity: 1,
                delay: 0.3,
            },
            "a"
        ).to(
            splitDescription1.words,
            {
                top: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.05,
                ease: "back.out(0.8)",
            },
            "a"
        );

        return () => {
            splitDescription1.revert();
        };
    }, []);

    useGSAP(() => {
        const boxes = gsap.utils.toArray(
            ".section-strategic-priorities .grid-wrapper .item"
        );
        const boxesImage = gsap.utils.toArray(
            ".section-strategic-priorities .grid-wrapper .item .image"
        );

        const splitDescription2 = new SplitText(
            ".section-strategic-priorities .desc-animation2",
            {
                type: "lines, words",
                tag: "span",
                linesClass: "lines",
                wordsClass: "words",
            }
        );
        const splitDescription3 = new SplitText(
            ".section-strategic-priorities .desc-animation3",
            {
                type: "lines, words",
                tag: "span",
                linesClass: "lines",
                wordsClass: "words",
            }
        );

        const tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".section-strategic-priorities",
                start: "top 50%",
                markers: false,
                ease: "power3.inout",
            },
        });

        tl3.to(
            boxes,
            {
                top: 0,
                opacity: 1,
                duration: 1,
                delay: 0.6,
                stagger: 0.3,
                ease: "back.out(0.8)",
            },
            "a"
        )
            .to(
                boxesImage,
                {
                    top: 0,
                    opacity: 1,
                    duration: 0.5,
                    delay: 1,
                    stagger: 0.3,
                    ease: "back.out(0.8)",
                },
                "a"
            )
            .to(
                ".section-strategic-priorities .desc-animation2",
                {
                    opacity: 1,
                    delay: 0.3,
                },
                "a"
            )
            .to(
                splitDescription2.words,
                {
                    top: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 1.2,
                    stagger: 0.05,
                    ease: "back.out(0.8)",
                },
                "a"
            )
            .to(
                ".section-strategic-priorities .desc-animation3",
                {
                    opacity: 1,
                    delay: 1.5,
                },
                "a"
            )
            .to(
                splitDescription3.words,
                {
                    top: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 1.5,
                    stagger: 0.05,
                    ease: "back.out(0.8)",
                },
                "a"
            );

        return () => {
            splitDescription2.revert();
            splitDescription3.revert();
        };
    }, []);

    useGSAP(() => {
        const button = gsap.utils.toArray(
            ".section-strategic-priorities .button"
        );

        const tl4 = gsap.timeline({
            scrollTrigger: {
                trigger: ".section-strategic-priorities",
                start: "bottom 100%",
                end: "100% 100%",
                markers: false,
                ease: "power3.inout",
            },
        });

        tl4.to(button, {
            top: 0,
            opacity: 1,
            duration: 1,
            delay: 0.5,
            stagger: 0.3,
            ease: "back.out(0.8)",
        });
    }, []);

    return (
        <Section className="section-strategic-priorities bg-light-gray">
            <div className="border-b-2 border-solid border-black border-opacity-20">
                <Container>
                    <div className="flex">
                        <div className="pt-6 md:pt-12 2xl:pt-16 pb-4 pr-6 md:pr-10 lg:pr-6 border-r-2 border-solid border-black border-opacity-20 w-full lg:w-[16.5rem] lg:min-w-[16.5rem]">
                            <RadioTitle
                                title="Strategic Priorities"
                                className="hide"
                            />
                        </div>
                        <div className="grow"></div>
                    </div>
                </Container>
            </div>
            <div className="">
                <Container>
                    <div className="flex flex-col-reverse lg:flex-row">
                        <div className="content-end p-6 pt-0 pl-0 md:pr-10 md:pb-10 md:pt-0 lg:pt-6 lg:pr-6 border-r-2 border-solid border-black border-opacity-20 lg:w-[16.5rem] lg:min-w-[16.5rem]">
                            <Button
                                as={Link}
                                href="/contact-us"
                                className="button !px-7 max-sm:w-full opacity-0 relative top-8"
                            >
                                Get in Touch
                            </Button>
                        </div>
                        <div className="grow p-6 pl-0 md:p-10 md:pl-0 lg:pr-0 lg:pl-10 max-lg:border-r-2 border-solid border-black border-opacity-20">
                            <h3 className="desc-animation1 leading-snug md:leading-normal">
                                Our roadmap to market leadership in the C-UAS
                                sector
                            </h3>

                            <div className="grid-wrapper mt-8 md:mt-12">
                                {strategicData.map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className={`item opacity-0 relative top-8 ${item.class}`}
                                        >
                                            <Image
                                                src={`/images/${item.image}`}
                                                alt={item.title}
                                                width={item.imgWidth}
                                                height={item.imgHeight}
                                                unoptimized
                                                className="image opacity-0 relative top-8"
                                            />
                                            <h5 className="desc-animation2">
                                                {item.title}
                                            </h5>
                                            <p className="desc-animation3">
                                                {item.desc}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </Section>
    );
};

export default StrategicPriorities;
