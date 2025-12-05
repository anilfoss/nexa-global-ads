"use client";

import React from "react";
import Section from "../utils/Section";
import Container from "../utils/Container";
import { Button } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const AnnualReport = () => {
    // gsap
    useGSAP(() => {
        const ctx = gsap.context(() => {
            const image = gsap.utils.toArray(".section-annual-report .image");
            const wrapper = gsap.utils.toArray(
                ".section-annual-report .wrapper"
            );
            const button = gsap.utils.toArray(".section-annual-report .button");
            const splitDescription = new SplitText(
                ".section-annual-report .desc-animation",
                {
                    type: "lines, words",
                    tag: "span",
                    linesClass: "lines",
                    wordsClass: "words",
                }
            );

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section-annual-report",
                    start: "top 50%",
                    markers: false,
                },
            });

            tl.to(wrapper, {
                scale: 1,
                borderRadius: "0.75rem",
                duration: 1.5,
                ease: "power3.inout",
            })
                .to(image, {
                    top: 0,
                    opacity: 1,
                    duration: 1,
                    ease: "back.out(0.8)",
                })
                .to(
                    ".section-annual-report .desc-animation",
                    {
                        opacity: 1,
                    },
                    "-=0.3"
                )
                .to(
                    splitDescription.words,
                    {
                        top: 0,
                        opacity: 1,
                        duration: 1,
                        stagger: 0.05,
                        ease: "back.out(0.8)",
                    },
                    "-=0.6"
                )
                .to(
                    button,
                    {
                        top: 0,
                        opacity: 1,
                        duration: 1,
                        stagger: 0.2,
                        ease: "back.out(0.8)",
                    },
                    "-=0.9"
                );

            return () => {
                splitDescription.revert();
            };
        });

        return () => ctx.revert();
    }, []);

    return (
        <Section className="section-annual-report py-8 md:py-16 overflow-hidden">
            <Container>
                <div className="wrapper bg-overlay-4 text-white flex max-lg:flex-col-reverse justify-between gap-6 lg:gap-10 p-6 md:p-8 lg:p-10 rounded-none overflow-hidden scale-150">
                    <div className="max-w-[70rem]">
                        <h3 className="desc-animation max-sm:text-[clamp(2.25rem,1.9992rem+1.2539vw,2.5rem)] text-white">
                            Reports<span className="font-body">:</span>{" "}
                            Performance, Progress, Perspective and Purpose
                        </h3>
                        <p className="desc-animation text-medium tracking-wider mt-4">
                            A comprehensive review of Nexa Global’s financial
                            results, operational milestones, technology
                            advancements, and strategic priorities for the year.
                        </p>
                        <div className="button-wrapper flex flex-wrap gap-4 mt-10 md:mt-14">
                            <Button
                                as={Link}
                                href="/files/financials-media-and-insights.pdf"
                                target="_blank"
                                download={true}
                                className="button button-border-white max-xl:grow lg:!px-14 opacity-0 relative top-8"
                            >
                                Download Report
                            </Button>
                            <Button
                                as={Link}
                                href="/media-and-insights"
                                className="button max-xl:grow lg:!px-14 max-sm:whitespace-normal opacity-0 relative top-8"
                            >
                                See Media and Insights
                            </Button>
                        </div>
                    </div>
                    <div className="content-end">
                        <figure className="lg:-mb-[20%]">
                            <Image
                                src="/images/icon-download.svg"
                                alt="icon-download"
                                width={401}
                                height={385}
                                unoptimized
                                className="image max-w-48 md:max-w-60 lg:min-w-[18rem] xl:min-w-[20rem] opacity-0 relative top-8"
                            />
                        </figure>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default AnnualReport;
