"use client";

import React from "react";
import Section from "../utils/Section";
import Container from "../utils/Container";
import RadioTitle from "../utils/RadioTitle";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import useScreenSize from "../utils/useScreenSize";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const cardsData = [
    {
        title: "Mission-critical technology",
        icon: "icon-mission-critical.svg",
    },
    {
        title: "Multi-domain deployability",
        icon: "icon-multi-domain.svg",
    },
    {
        title: "Regulatory-first, lawful engagement",
        icon: "icon-regulatory.svg",
    },
    {
        title: "Full-stack vendor ecosystem",
        icon: "icon-full-stack.svg",
    },
    {
        title: "Recurring SLAs and AI model updates",
        icon: "icon-ai-model.svg",
    },
    {
        title: "Proven leadership and patents",
        icon: "icon-leadership.svg",
    },
];

const textData =
    "Nexa Global is positioned to become a leading force in the rapidly expanding Counter-UAS and AI-enabled air defense market. With a full-stack architecture spanning radar, RF intelligence, EO / IR, AI fusion and layered mitigation, Nexa delivers mission-critical systems for governments and high-value infrastructure worldwide.";

const OurMission = () => {
    // gsap
    useGSAP(() => {
        const radioTitle = gsap.utils.toArray(
            ".section-our-mission .radio-title > *"
        );

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".section-our-mission",
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
        const texts = gsap.utils.toArray(".section-our-mission h3 span");

        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".section-our-mission h3",
                start: "top 60%",
                end: "140% 100%",
                markers: false,
                scrub: 1,
                ease: "power3.inout",
            },
        });

        tl1.from(texts, {
            opacity: 0.1,
            duration: 2,
            delay: 2,
            stagger: 0.5,
        });
    }, []);

    useGSAP(() => {
        const boxes = gsap.utils.toArray(
            ".section-our-mission .box-wrapper .box"
        );
        const boxesImage = gsap.utils.toArray(
            ".section-our-mission .box-wrapper .box figure"
        );
        const splitDescription = new SplitText(
            ".section-our-mission .desc-animation",
            {
                type: "lines, words",
                tag: "span",
                linesClass: "lines",
                wordsClass: "words",
            }
        );

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".section-our-mission .box-wrapper",
                start: "top 60%",
                markers: false,
                ease: "power3.inout",
            },
        });

        tl2.to(
            boxes,
            {
                top: 0,
                opacity: 1,
                duration: 0.5,
                stagger: 0.2,
            },
            "a"
        )
            .to(
                ".section-our-mission .desc-animation",
                {
                    opacity: 1,
                    delay: 0.3,
                },
                "a"
            )
            .to(
                splitDescription.words,
                {
                    top: 0,
                    opacity: 1,
                    duration: 1,
                    delay: 0.5,
                    stagger: 0.05,
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
                    delay: 0.8,
                    stagger: 0.2,
                    ease: "back.out(0.8)",
                },
                "a"
            );

        return () => {
            splitDescription.revert();
        };
    }, []);

    return (
        <Section className="section-our-mission bg-light-gray">
            <div className="border-b-2 border-solid border-black border-opacity-20">
                <Container>
                    <div className="flex">
                        <div className="pt-6 md:pt-12 2xl:pt-16 pb-4 border-r-2 border-solid border-black border-opacity-20 pr-6 w-full lg:w-52 lg:min-w-52 2xl:w-60 2xl:min-w-60">
                            <RadioTitle title="Our Mission" className="hide" />
                        </div>
                        <div className="grow"></div>
                    </div>
                </Container>
            </div>
            <div className="">
                <Container>
                    <div className="flex flex-row-reverse lg:flex-row">
                        <div className="border-r-2 border-solid border-black border-opacity-20 lg:w-52 lg:min-w-52 2xl:w-60 2xl:min-w-60"></div>
                        <div className="grow p-6 md:p-10 md:pr-8 lg:pr-0 max-md:pr-6 max-lg:!pl-0">
                            <h3 className="leading-snug md:leading-normal">
                                {textData.split("").map((char, index) => {
                                    const isSpecial = char === "/";
                                    return (
                                        <span
                                            key={index}
                                            className={
                                                isSpecial ? "font-body" : ""
                                            }
                                        >
                                            {char}
                                        </span>
                                    );
                                })}
                            </h3>

                            <div className="box-wrapper flex flex-wrap -mx-3 md:-mx-4 lg:-mx-5 mt-6">
                                {cardsData.map((card, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="box p-3 md:p-4 lg:p-5 w-full sm:w-[50%] opacity-0 relative top-8"
                                        >
                                            <div className="bg-light-gray inner flex justify-between gap-4 p-4 2xl:p-6 border-1 border-solid border-black border-opacity-20 h-full rounded-md shadow-card overflow-hidden">
                                                <h5 className="desc-animation content-center text-[clamp(1.05rem,0.3478rem+3.511vw,1.75rem)] sm:text-[1.25rem] md:text-[1.375rem] xl:text-[clamp(1.55rem,-0.7088rem+2.8235vw,2rem)] 2xl:text-[2rem] grow">
                                                    {card.title}
                                                </h5>
                                                <figure className="content-end -mb-4 2xl:-mb-6 opacity-0 relative top-8">
                                                    <Image
                                                        src={`/images/${card.icon}`}
                                                        alt={card.title}
                                                        fill
                                                        unoptimized
                                                        className="!w-auto max-w-20 sm:max-w-32 md:max-w-32 xl:max-w-44 2xl:max-w-52 !h-20 sm:!h-24 md:!h-24 xl:!h-36 2xl:!h-44 opacity-50 !static rounded-none"
                                                    />
                                                </figure>
                                            </div>
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

export default OurMission;
