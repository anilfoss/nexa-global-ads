"use client";

import React from "react";
import Section from "../utils/Section";
import Container from "../utils/Container";
import RadioTitle from "../utils/RadioTitle";
import { Button, Chip } from "@heroui/react";
import Link from "next/link";
import IconArrow from "../utils/icons/IconArrow";
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

const GlobalSecurity = () => {
    // gsap
    useGSAP(() => {
        const ctx = gsap.context(() => {
            const radioTitle = gsap.utils.toArray(
                ".section-global-security .radio-title > *"
            );
            const splitDescription1 = new SplitText(
                ".section-global-security .desc-animation1",
                {
                    type: "lines, words",
                    tag: "span",
                    linesClass: "lines",
                    wordsClass: "words",
                }
            );
            const boxes = gsap.utils.toArray(
                ".section-global-security .card-wrapper .card"
            );
            const boxContent = gsap.utils.toArray(
                ".section-global-security .card-wrapper .card .inner > *"
            );

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section-global-security",
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
                .to(".section-global-security .desc-animation1", {
                    opacity: 1,
                })
                .to(splitDescription1.words, {
                    top: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.015,
                    ease: "back.out(0.8)",
                })
                .to(boxes, {
                    top: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.3,
                    ease: "back.out(0.8)",
                })
                .to(
                    boxContent,
                    {
                        top: 0,
                        opacity: 1,
                        duration: 0.5,
                        stagger: 0.1,
                        ease: "power3.inout",
                    },
                    "-=1.5"
                );

            return () => {
                splitDescription1.revert();
            };
        });

        return () => ctx.revert();
    }, []);

    return (
        <Section className="section-global-security bg-light-gray overflow-hidden">
            <div className="border-b-2 border-solid border-black border-opacity-20">
                <Container>
                    <div className="pt-6 md:pt-12 2xl:pt-16 pb-4">
                        <RadioTitle
                            title="Global Security Context"
                            className="hide"
                        />
                    </div>
                </Container>
            </div>
            <div className="">
                <Container>
                    <div className="flex flex-row-reverse lg:flex-row">
                        <div className="border-r-2 border-solid border-black border-opacity-20 lg:w-44 lg:min-w-44 xl:w-52 xl:min-w-52 2xl:w-60 2xl:min-w-60"></div>
                        <div className="grow p-6 md:p-10 max-lg:!pl-0 lg:pr-0">
                            <h3 className="desc-animation1">
                                Global Incidents That Drive the Anti-Drone
                                Market
                            </h3>

                            <p className="desc-animation1 pt-4">
                                A sharp rise in drone-related intrusions,
                                attacks, and airspace disruptions over the past
                                decade has rapidly accelerated global C-UAS
                                demand. High-impact incidents—including ISIS
                                drone weaponization (2014–2015), the White House
                                lawn crash (2015), the Gatwick Airport shutdown
                                (2018), the Saudi Aramco attack (2019), and
                                repeated Ukrainian conflict drone strikes
                                (2022–2025)—have exposed vulnerabilities across
                                national security, aviation, and critical
                                infrastructure sectors, prompting widespread
                                deployment initiatives in North America, Europe,
                                the Middle East, and Asia-Pacific.
                            </p>

                            <div className="mt-12 md:mt-[5rem]">
                                <h3 className="desc-animation1">
                                    Global Incidents in News
                                </h3>

                                <div className="card-wrapper flex flex-wrap -mx-3 mt-8 md:mt-12">
                                    {articlesData
                                        .slice()
                                        .reverse()
                                        .map((article) => {
                                            return (
                                                <div
                                                    key={article?.id}
                                                    className="card px-3 mb-6 w-full sm:w-1/2 2xl:w-1/3 opacity-0 relative top-8"
                                                >
                                                    <div className="inner flex flex-col p-5 h-full border-2 border-solid border-black border-opacity-20 rounded-md overflow-hidden">
                                                        {article?.year && (
                                                            <Chip
                                                                variant="bordered"
                                                                className="h6 px-2 md:px-2.5 md:py-0.5 mb-4 md:mb-5 border-black border-opacity-50 h-auto opacity-0 relative top-8"
                                                            >
                                                                {article?.year}
                                                            </Chip>
                                                        )}

                                                        {article?.title && (
                                                            <h5 className="font-semibold mb-4 md:mb-6 2xl:mb-8 opacity-0 relative top-8">
                                                                {article?.title}
                                                            </h5>
                                                        )}
                                                        {article?.desc && (
                                                            <p className="mb-8 md:mb-12 2xl:mb-16 opacity-0 relative top-8">
                                                                {article?.desc}
                                                            </p>
                                                        )}

                                                        {article?.btnText && (
                                                            <Button
                                                                as={Link}
                                                                href={
                                                                    article?.btnLink
                                                                }
                                                                target="_blank"
                                                                className="button group !py-[1rem] md:!py-[1.125rem] mt-auto !w-full !rounded-[4px] opacity-0 relative top-8"
                                                            >
                                                                {
                                                                    article?.btnText
                                                                }{" "}
                                                                <IconArrow className="ml-2 invert brightness-0 relative left-0 group-hover:left-1 transition-all duration-300 ease-in-out" />
                                                            </Button>
                                                        )}
                                                    </div>
                                                </div>
                                            );
                                        })}
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </Section>
    );
};

export default GlobalSecurity;
