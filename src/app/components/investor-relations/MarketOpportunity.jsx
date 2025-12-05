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

const marketOpportunityData = [
    {
        title: "Military and Defense",
        desc: "Governments worldwide are accelerating C-UAS procurement to protect forward operating bases, critical infrastructure, and high-value assets from emerging drone threats. Nexa's multi-layered architecture meets strict defense standards for reliability, lawful engagement, and evidence chain.",
        image: "img-military.jpg",
        class: "item-military",
    },
    {
        title: "Maritime Anti-Drone Radar",
        desc: "Ports, oil rigs, and coastal installations face unique challenges from drone reconnaissance and payload delivery. Nexa's maritime-grade radar systems provide 360° coverage in harsh environments, with salt-fog resistant hardware and integration with existing vessel management systems.",
        image: "img-maritime-radar.jpg",
        class: "item-maritime",
    },
    {
        title: "AI-Integrated Defense Systems",
        desc: "Modern defense demands intelligent threat classification to reduce false alarms and operator fatigue. Nexa's AI models leverage multi-modal sensor fusion (radar, RF, EO/IR) to distinguish birds, weather, and benign aircraft from genuine drone threats, with continuous model improvement.",
        image: "img-ai-integrated.jpg",
        class: "item-integrated",
    },
    {
        title: "Shipborne Defense",
        desc: "Naval forces require compact, stabilized C-UAS solutions for deployment on ships, patrol boats, and offshore platforms. Nexa delivers shipborne radar modules with gyro stabilization, reduced SWaP-C footprint, and seamless integration with ship command and control networks.",
        image: "img-shipborne-defence.jpg",
        class: "item-shipborne",
    },
    {
        title: "AI Anti-Drone Radar",
        desc: "Commercial and enterprise sectors—including airports, stadiums, energy facilities, and data centers—need rapid, autonomous detection without dedicated security teams. Nexa's AI-driven radar provides real-time alerts, automatic tracking, and API integration for smart building ecosystems.",
        image: "img-ai-radar.jpg",
        class: "item-radar",
    },
];

const MarketOpportunity = () => {
    // gsap
    useGSAP(() => {
        const ctx = gsap.context(() => {
            const radioTitle = gsap.utils.toArray(
                ".section-market-opportunity .radio-title > *"
            );
            const splitDescription1 = new SplitText(
                ".section-market-opportunity h3.desc-animation",
                {
                    type: "lines, words",
                    tag: "span",
                    linesClass: "lines",
                    wordsClass: "words",
                }
            );
            const boxes = gsap.utils.toArray(
                ".section-market-opportunity .grid-wrapper .item"
            );
            const splitDescription2 = new SplitText(
                ".section-market-opportunity .grid-wrapper .item h5.desc-animation",
                {
                    type: "lines, words",
                    tag: "span",
                    linesClass: "lines",
                    wordsClass: "words",
                }
            );
            const content = gsap.utils.toArray(
                ".section-market-opportunity .grid-wrapper .item p"
            );

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section-market-opportunity",
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
                .to(".section-market-opportunity h3.desc-animation", {
                    opacity: 1,
                })
                .to(splitDescription1.words, {
                    top: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.05,
                    ease: "back.out(0.8)",
                })
                .to(
                    boxes,
                    {
                        top: 0,
                        opacity: 1,
                        duration: 1,
                        stagger: 0.3,
                        ease: "back.out(0.8)",
                    },
                    "-=0.6"
                )
                .to(
                    ".section-market-opportunity .grid-wrapper .item h5.desc-animation",
                    {
                        opacity: 1,
                    },
                    "-=1.5"
                )
                .to(
                    splitDescription2.words,
                    {
                        top: 0,
                        opacity: 1,
                        duration: 1,
                        stagger: 0.06,
                        ease: "back.out(0.8)",
                    },
                    "-=1.5"
                )
                .to(
                    content,
                    {
                        top: 0,
                        opacity: 1,
                        duration: 0.5,
                        stagger: 0.1,
                        ease: "back.out(0.8)",
                    },
                    "-=1.4"
                );

            return () => {
                splitDescription1.revert();
                splitDescription2.revert();
            };
        });

        return () => ctx.revert();
    }, []);

    useGSAP(() => {
        const ctx = gsap.context(() => {
            const button = gsap.utils.toArray(
                ".section-market-opportunity .button"
            );

            const tl4 = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section-market-opportunity",
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
        });

        return () => ctx.revert();
    }, []);

    return (
        <Section className="section-market-opportunity bg-light-gray">
            <div className="border-b-2 border-solid border-black border-opacity-20">
                <Container>
                    <div className="flex">
                        <div className="grow"></div>
                        <div className="pt-6 md:pt-12 2xl:pt-16 pb-4 pl-6 md:pl-10 lg:pl-6 border-l-2 border-solid border-black border-opacity-20 w-full lg:w-[16.5rem] lg:min-w-[16.5rem]">
                            <RadioTitle
                                title="Market Opportunity"
                                className="hide"
                            />
                        </div>
                    </div>
                </Container>
            </div>
            <div className="">
                <Container>
                    <div className="flex flex-col lg:flex-row">
                        <div className="grow p-6 pr-0 md:p-10 md:pr-0 lg:pl-0 lg:pr-10 max-lg:border-l-2 border-solid border-black border-opacity-20">
                            <h3 className="desc-animation leading-snug md:leading-normal">
                                Capturing demand across high-growth defense and
                                enterprise sectors
                            </h3>

                            <div className="grid-wrapper mt-8 md:mt-12">
                                {marketOpportunityData.map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className={`item opacity-0 relative top-8 ${item.class}`}
                                        >
                                            <Image
                                                src={`/images/${item.image}`}
                                                alt={item.title}
                                                fill
                                                unoptimized
                                                className="image"
                                            />
                                            <h5 className="desc-animation">
                                                {item.title}
                                            </h5>
                                            <p className="opacity-0 relative top-8">
                                                {item.desc}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="content-end p-6 pt-0 pr-0 md:pl-10 md:pb-10 md:pt-0 lg:pt-6 lg:pl-6 border-l-2 border-solid border-black border-opacity-20 lg:w-[16.5rem] lg:min-w-[16.5rem]">
                            <Button
                                as={Link}
                                href="/contact-us"
                                className="button !px-7 max-sm:w-full opacity-0 relative top-8"
                            >
                                Get in Touch
                            </Button>
                        </div>
                    </div>
                </Container>
            </div>
        </Section>
    );
};

export default MarketOpportunity;
