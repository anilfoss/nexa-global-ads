"use client";

import React from "react";
import Section from "../utils/Section";
import Container from "../utils/Container";
import RadioTitle from "../utils/RadioTitle";
import Link from "next/link";
import IconArrow from "../utils/icons/IconArrow";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const articlesData = [
    {
        id: 1,
        title: "White House Crash",
        desc: "A DJI Phantom operated by a civilian hobbyist crashed within White House grounds, breaching restricted airspace and raising alarm about small-UAV threats to VIP zones.",
        year: 2015,
        btnText: "Read Article",
        btnLink: "https://www.bbc.com/news/technology-31023750",
    },
    {
        id: 2,
        title: "Gatwick Airport Shutdown",
        desc: "Repeated drone sightings over the runway area halted operations for 36 hours, grounding-1,000 flights and stranding 140 k passengers.",
        year: 2018,
        btnText: "Read Article",
        btnLink: "https://www.bbc.com/news/uk-england-sussex-65591023",
    },
    {
        id: 3,
        title: "Aramco Attack",
        desc: "25 drones and cruise missiles struck two of the world's largest all-processing plants, temporarily removing 5.7 million bpd from global supply.",
        year: 2019,
        btnText: "Read Article",
        btnLink:
            "https://www.aljazeera.com/economy/2019/9/14/houthi-drone-attacks-on-2-saudi-aramco-oil-facilities-spark-fires",
    },
    {
        id: 4,
        title: "Venezuela Presidential Parade Attack",
        desc: "Two explosive-laden drones petornated near President Maduro during a televised military parade, fragments injured soldiers and caused panic.",
        year: 2019,
        btnText: "Read Article",
        btnLink: "https://www.bbc.com/news/world-latin-america-45073385",
    },
    {
        id: 5,
        title: "Red Sea Maritime Drone Strikes",
        desc: "Sea-borne and serial drones targeted merchant and naval vessels in the Red Sea and Persian Gulf, damaging tankers and causing navigation alerts.",
        year: 2023,
        btnText: "Read Article",
        btnLink:
            "https://www.securitycouncilreport.org/whatsinblue/2024/01/houthi-red-sea-attacks-briefing-and-consultations.php",
    },
    {
        id: 6,
        title: "Moscow Kremlin Drone Attack",
        desc: "Two small drones exploded near the Kremlin dome at night, fragments fell onto the compound roof-captured on public footage.",
        year: 2023,
        btnText: "Read Article",
        btnLink: "https://en.wikipedia.org/wiki/Kremlin_drone_attack",
    },
];

const MarketInsights = () => {
    // gsap
    useGSAP(() => {
        const ctx = gsap.context(() => {
            const radioTitle = gsap.utils.toArray(
                ".section-market-insights .radio-title > *"
            );
            const splitDescription1 = new SplitText(
                ".section-market-insights .desc-animation",
                {
                    type: "lines, words",
                    tag: "span",
                    linesClass: "lines",
                    wordsClass: "words",
                }
            );
            const img = gsap.utils.toArray(
                ".section-market-insights .img-wrapper .image"
            );
            const splitDescription2 = new SplitText(
                ".section-market-insights .img-wrapper .desc-animation",
                {
                    type: "lines, words",
                    tag: "span",
                    linesClass: "lines",
                    wordsClass: "words",
                }
            );
            const imgLink = gsap.utils.toArray([
                ".section-market-insights .img-wrapper > a",
            ]);

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section-market-insights",
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
                .to(".section-market-insights .desc-animation", {
                    opacity: 1,
                })
                .to(splitDescription1.words, {
                    top: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.015,
                    ease: "back.out(0.8)",
                })
                .to(
                    img,
                    {
                        width: "100%",
                        duration: 1,
                        ease: "power3.inout",
                    },
                    "-=1"
                )
                .to(".section-market-insights .img-wrapper .desc-animation", {
                    opacity: 1,
                })
                .to(splitDescription2.words, {
                    top: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.015,
                    ease: "back.out(0.8)",
                })
                .to(
                    imgLink,
                    {
                        bottom: 0,
                        opacity: 1,
                        duration: 0.5,
                        stagger: 0.1,
                        ease: "power3.inout",
                    },
                    "-=0.75"
                );

            return () => {
                splitDescription1.revert();
                splitDescription2.revert();
            };
        });

        return () => ctx.revert();
    }, []);

    return (
        <Section className="section-market-insights overflow-hidden">
            <div className="border-b-2 border-solid border-black border-opacity-20">
                <Container>
                    <div className="pt-6 md:pt-12 2xl:pt-16 pb-4">
                        <RadioTitle
                            title="Industry & Market Insights"
                            className="hide"
                        />
                    </div>
                </Container>
            </div>
            <div className="">
                <Container>
                    <div className="flex flex-col lg:flex-row">
                        <div className="xl:content-center p-6 md:p-10 max-md:pl-4 max-lg:!pl-0 lg:pl-0 border-r-2 border-solid border-black border-opacity-20 lg:w-[50%] 2xl:w-[60%] lg:min-w-[50%] 2xl:min-w-[60%]">
                            <h3 className="desc-animation mb-6">
                                Key Industry Insights
                            </h3>

                            <p className="desc-animation">
                                The global Anti-Drone / Counter-UAS sector is a
                                rapidly expanding part of the defense and
                                security industry, driven by rising drone
                                misuse, increasing airspace threats, and the
                                need to protect critical infrastructure.
                                Advancements in radar, RF analytics, EO/IR
                                sensors, and AI-powered fusion systems are
                                reshaping the competitive landscape, with
                                governments tightening regulations and
                                prioritizing airspace security technologies.
                            </p>
                            <p className="desc-animation">
                                Market demand is strong across military,
                                homeland security, airports, energy facilities,
                                major events, and high-value infrastructure.
                                Growth is supported by higher defense budgets,
                                escalating drone incidents, and evolving
                                compliance requirements. The overall outlook
                                remains high-growth, mission-critical, and
                                strategically important for national and
                                commercial security worldwide.
                            </p>
                        </div>
                        <div className="grow xl:content-center p-6 md:p-10 max-lg:!pl-0 max-lg:!pt-0 lg:pr-0 max-lg:border-r-2 border-solid border-black border-opacity-20">
                            <div className="img-wrapper relative rounded-xl overflow-hidden">
                                <h5 className="desc-animation text-white uppercase p-6 md:p-8 w-full absolute top-8 left-0 z-[1]">
                                    Global Anti-Drone System Market Overview
                                </h5>
                                <Link
                                    href="/files/industry-overview-media-and-insights.pdf"
                                    target="_blank"
                                    download={true}
                                    className="group max-sm:text-[clamp(0.9rem,0.4235rem+2.3824vw,1.375rem)] text-white font-semibold uppercase tracking-[1px] flex items-center gap-4 m-6 md:m-8 opacity-0 absolute left-0 -bottom-8 z-[1]"
                                >
                                    Download Insights{" "}
                                    <IconArrow className="invert brightness-0 relative left-0 group-hover:left-1 transition-all duration-300 ease-in-out" />
                                </Link>
                                <figure className="aspect-square">
                                    <Image
                                        src="/images/img-industry-insights.jpg"
                                        alt="img-industry-insights"
                                        width={1094}
                                        height={1010}
                                        unoptimized
                                        className="image w-0 h-full min-h-72 aspect-square object-cover object-left"
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </Section>
    );
};

export default MarketInsights;
