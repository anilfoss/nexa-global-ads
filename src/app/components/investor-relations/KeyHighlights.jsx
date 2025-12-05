"use client";

import React from "react";
import Section from "../utils/Section";
import Container from "../utils/Container";
import RadioTitle from "../utils/RadioTitle";
import parse from "html-react-parser";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const cardsData = [
    {
        num: `<span class="count">25</span><span class="font-body">%</span>`,
        title: "Market Growth",
        desc: "YoY growth in C-UAS demand across government and enterprise sectors",
        img: "img-drone.svg",
        imgWidth: 322,
        imgHeight: 253,
        imgPattern1: "img-card-1-pattern-1.svg",
        imgPattern1Width: 337,
        imgPattern1Height: 212,
        imgPattern2: "img-card-1-pattern-2.svg",
        imgPattern2Width: 336,
        imgPattern2Height: 322,
        class: "card-green",
    },
    {
        num: `<span class="count">19</span><span class="font-body">+</span>`,
        title: "Global Reach",
        desc: "Multi-region deployments across Asia, Middle East, and EU",
        img: "img-global-reach.svg",
        imgWidth: 303,
        imgHeight: 334,
        imgPattern1: "img-card-2-pattern-1.svg",
        imgPattern1Width: 312,
        imgPattern1Height: 182,
        imgPattern2: "img-card-2-pattern-2.svg",
        imgPattern2Width: 400,
        imgPattern2Height: 352,
        class: "card-brown",
    },
    {
        num: `<span class="count">107</span><span class="font-body">%</span>`,
        title: "Recurring Growth",
        desc: "Recurring revenue from SLAs and AI model updates",
        img: "img-coins.svg",
        imgWidth: 341,
        imgHeight: 331,
        imgPattern1: "img-card-3-pattern-1.svg",
        imgPattern1Width: 319,
        imgPattern1Height: 220,
        imgPattern2: "img-card-3-pattern-2.svg",
        imgPattern2Width: 365,
        imgPattern2Height: 331,
        class: "card-blue",
    },
    {
        num: `<span class="count">15</span><span class="font-body">+</span>`,
        title: "IP Portfolio",
        desc: "Strong technology IP portfolio and global partnerships",
        img: "img-portfolio.svg",
        imgWidth: 322,
        imgHeight: 321,
        imgPattern1: "img-card-4-pattern-1.svg",
        imgPattern1Width: 311,
        imgPattern1Height: 221,
        imgPattern2: "img-card-4-pattern-2.svg",
        imgPattern2Width: 374,
        imgPattern2Height: 352,
        class: "card-purple",
    },
];

const KeyHighlights = () => {
    // gsap
    useGSAP(() => {
        const ctx = gsap.context(() => {
            const radioTitle = gsap.utils.toArray(
                ".section-key-highlights .radio-title > *"
            );
            const splitDescription1 = new SplitText(
                ".section-key-highlights h3.desc-animation",
                {
                    type: "lines, words",
                    tag: "span",
                    linesClass: "lines",
                    wordsClass: "words",
                }
            );
            const boxes = gsap.utils.toArray(
                ".section-key-highlights .card-wrapper .card"
            );
            const num = gsap.utils.toArray(
                ".section-key-highlights .card-wrapper .card .num"
            );
            const counts = gsap.utils.toArray(
                ".section-key-highlights .card-wrapper .card .num .count"
            );

            // Store original values + reset text before scroll animation starts
            counts.forEach((count) => {
                const finalValue = parseInt(count.innerText);
                count.dataset.value = finalValue; // store
                count.innerText = 1; // set initial
            });

            const content = gsap.utils.toArray(
                ".section-key-highlights .card-wrapper .card .bottom > *"
            );
            const image = gsap.utils.toArray(
                ".section-key-highlights .card-wrapper .card .image"
            );

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section-key-highlights",
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
                .to(".section-key-highlights h3.desc-animation", {
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
                    "-=0.5"
                )
                .to(
                    num,
                    {
                        top: 0,
                        opacity: 1,
                        duration: 0.5,
                        stagger: 0.1,
                        ease: "power3.inout",
                        onComplete: () => {
                            counts.forEach((count) => {
                                gsap.to(count, {
                                    innerText: count.dataset.value,
                                    duration: 1.5,
                                    ease: "power3.out",
                                    snap: "innerText",
                                    stagger: 0.2,
                                });
                            });
                        },
                    },
                    "-=0.9"
                )
                .to(
                    content,
                    {
                        top: 0,
                        opacity: 1,
                        duration: 0.5,
                        stagger: 0.1,
                        ease: "power3.inout",
                    },
                    "-=0.5"
                )
                .to(
                    image,
                    {
                        top: 0,
                        opacity: 1,
                        duration: 0.5,
                        stagger: 0.1,
                        ease: "back.out(0.8)",
                    },
                    "-=0.5"
                );

            return () => {
                splitDescription1.revert();
            };
        });

        return () => ctx.revert();
    }, []);

    return (
        <Section className="section-key-highlights bg-white">
            <div className="border-b-2 border-solid border-black border-opacity-20">
                <Container>
                    <div className="flex">
                        <div className="pt-6 md:pt-12 2xl:pt-16 pb-4 border-r-2 border-solid border-black border-opacity-20 pr-6 w-full lg:w-52 lg:min-w-52 2xl:w-60 2xl:min-w-60">
                            <RadioTitle
                                title="Key Highlights"
                                className="hide"
                            />
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
                            <h3 className="desc-animation leading-snug md:leading-normal">
                                Strategic positioning in the global defense
                                technology landscape
                            </h3>

                            <div className="card-wrapper">
                                {cardsData?.map((card, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className={`card opacity-0 relative top-8 ${card.class}`}
                                        >
                                            <div className="inner overflow-hidden">
                                                <div className="left">
                                                    <div className="num opacity-0 relative top-8">
                                                        {parse(card.num)}
                                                    </div>
                                                    <div className="bottom">
                                                        <h5 className="opacity-0 relative top-8">
                                                            {card.title}
                                                        </h5>
                                                        <p className="opacity-0 relative top-8">
                                                            {card.desc}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="right">
                                                    <Image
                                                        src={`/images/${card.img}`}
                                                        alt="img"
                                                        width={card.imgWidth}
                                                        height={card.imgHeight}
                                                        unoptimized
                                                        className="image opacity-0 relative top-8"
                                                    />
                                                </div>

                                                <Image
                                                    src={`/images/${card.imgPattern1}`}
                                                    alt="img-pattern-1"
                                                    width={
                                                        card.imgPattern1Width
                                                    }
                                                    height={
                                                        card.imgPattern1Height
                                                    }
                                                    unoptimized
                                                    className="pattern pattern-1"
                                                />
                                                <Image
                                                    src={`/images/${card.imgPattern2}`}
                                                    alt="img-pattern-2"
                                                    width={
                                                        card.imgPattern2Width
                                                    }
                                                    height={
                                                        card.imgPattern2Height
                                                    }
                                                    unoptimized
                                                    className="pattern pattern-2"
                                                />
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

export default KeyHighlights;
