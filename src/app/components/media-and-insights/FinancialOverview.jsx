"use client";

import React from "react";
import Section from "../utils/Section";
import Container from "../utils/Container";
import RadioTitle from "../utils/RadioTitle";
import { Button } from "@heroui/react";
import Link from "next/link";
import IconGrow from "../utils/icons/IconGrow";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const financialData = [
    {
        title: "Projected Revenue (5 years)",
        num: "$274.25M",
        grow: "Y5",
        IconGrow: true,
        duration: "From $15.5M in Year 1",
        img: "img-projected-revenue.svg",
        imgWidth: 145,
        imgHeight: 131,
        class: "projected-revenue",
    },
    {
        title: "Projected Profit (5 years)",
        num: "$31.1M",
        grow: "Y5",
        IconGrow: true,
        duration: "From $11.2M in Year 1",
        img: "img-projected-profit.svg",
        imgWidth: 165,
        imgHeight: 139,
        class: "projected-profit",
    },
    {
        title: "Annual Growth Rate (5 years)",
        num: "106.74%",
        grow: "CAGR",
        IconGrow: false,
        duration: "5-Year Projection",
        img: "img-growth-rate.svg",
        imgWidth: 167,
        imgHeight: 123,
        class: "growth-rate",
    },
];

const FinancialOverview = () => {
    // gsap
    useGSAP(() => {
        const ctx = gsap.context(() => {
            const radioTitle = gsap.utils.toArray(
                ".section-financial-overview .radio-title > *"
            );
            const splitDescription1 = new SplitText(
                ".section-financial-overview .desc-animation1",
                {
                    type: "lines, words",
                    tag: "span",
                    linesClass: "lines",
                    wordsClass: "words",
                }
            );
            const cards = gsap.utils.toArray(
                ".section-financial-overview .card-wrapper .card"
            );
            const splitDescription2 = new SplitText(
                ".section-financial-overview .desc-animation2",
                {
                    type: "lines, words",
                    tag: "span",
                    linesClass: "lines",
                    wordsClass: "words",
                }
            );
            const button = gsap.utils.toArray([
                ".section-financial-overview .button",
            ]);

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section-financial-overview",
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
                .to(".section-financial-overview .desc-animation1", {
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
                    cards,
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
                    ".section-financial-overview .desc-animation2",
                    {
                        opacity: 1,
                    },
                    "-=0.5"
                )
                .to(
                    splitDescription2.words,
                    {
                        top: 0,
                        opacity: 1,
                        duration: 1,
                        stagger: 0.015,
                        ease: "back.out(0.8)",
                    },
                    "-=0.5"
                )
                .to(
                    button,
                    {
                        top: 0,
                        opacity: 1,
                        duration: 0.5,
                        stagger: 0.1,
                        ease: "power3.inout",
                    },
                    "-=0.5"
                );

            return () => {
                splitDescription1.revert();
                splitDescription2.revert();
            };
        });

        return () => ctx.revert();
    }, []);

    return (
        <Section className="section-financial-overview bg-gradient-to-b from-[#CEDAC7] to-light-gray to-[54%] overflow-hidden">
            <div className="border-b-2 border-solid border-black border-opacity-20">
                <Container>
                    <div className="pt-6 md:pt-12 2xl:pt-16 pb-4">
                        <RadioTitle
                            title="Our Financial Overview"
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
                            <h3 className="desc-animation desc-animation1 mb-6">
                                Performance, Progress, and Outlook
                            </h3>

                            <p className="desc-animation desc-animation1">
                                Nexa Global’s financial outlook reflects rapid
                                growth and strong early traction. Revenue is
                                projected to increase from USD 15.5M in Year 1
                                to USD 274.25M in Year 5, with projected profit
                                rising from USD 11.2M to USD 31.1M over the same
                                period, representing an annual growth rate of
                                106.74%. Operational progress includes
                                multi-sector deployments, advancements in
                                AI-based swarm detection, and expansion toward
                                50+ installations across eight countries by Year
                                3. Nexa targets under 0.01% of the global
                                market—yet even this small share represents
                                strong attainable opportunity due to rapidly
                                expanding infrastructure needs.
                            </p>

                            <div className="mt-8 mb-12">
                                <div className="card-wrapper flex flex-wrap -mx-3 md:-mx-2 mt-8 md:mt-12">
                                    {financialData.map((item, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="card px-3 md:px-2 mb-6 md:mb-4 w-full md:w-1/2 xl:w-1/3 opacity-0 relative top-8"
                                            >
                                                <div
                                                    className={`inner text-[clamp(0.9rem,0.56rem+1.7002vw,1.375rem)] md:text-[clamp(1rem,0.2485rem+1.5656vw,1.5rem)] xl:text-[clamp(1.05rem,0.15rem+1.125vw,1.5rem)] flex p-4 h-full border-2 border-solid border-black border-opacity-20 whitespace-nowrap rounded-md overflow-hidden ${item?.class}`}
                                                >
                                                    <div className="grow">
                                                        <div className="">
                                                            {item?.title}
                                                        </div>
                                                        <div className="flex items-center mt-4">
                                                            <h3 className="font-body text-[clamp(1.75rem,1.2131rem+2.6846vw,2.5rem)] md:text-[clamp(2.25rem,0.9349rem+2.7397vw,3.125rem)] xl:text-[clamp(2.125rem,0.125rem+2.5vw,3.125rem)] mr-4">
                                                                {item?.num}
                                                            </h3>
                                                            {item?.IconGrow && (
                                                                <span className="mr-1.5">
                                                                    <IconGrow />
                                                                </span>
                                                            )}
                                                            <span className="text-green">
                                                                {item?.grow}
                                                            </span>
                                                        </div>
                                                        <div className="mt-4">
                                                            {item?.duration}
                                                        </div>
                                                    </div>
                                                    <div className="content-end">
                                                        <Image
                                                            src={`/images/${item?.img}`}
                                                            alt={item?.title}
                                                            width={
                                                                item?.imgWidth
                                                            }
                                                            height={
                                                                item?.imgWidth
                                                            }
                                                            unoptimized
                                                            className={`-mb-4 rounded-none ${
                                                                item?.class ===
                                                                "growth-rate"
                                                                    ? "relative -right-4"
                                                                    : ""
                                                            }`}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <h3 className="desc-animation desc-animation2 mb-6">
                                Strategic Position
                            </h3>
                            <p className="desc-animation desc-animation2">
                                Nexa Global operates within a fast-growing,
                                strategically critical segment of global defense
                                and security. Rising drone threats, combined
                                with defense modernization and regulatory
                                mandates, drive urgent demand for AI-powered
                                counter-UAS systems. Nexa’s multi-sensor fusion
                                architecture positions the company strongly
                                across military, commercial, and critical
                                infrastructure markets.
                            </p>
                            <Button
                                as={Link}
                                href="/files/financials-media-and-insights.pdf"
                                target="_blank"
                                download={true}
                                className="button sm:!px-16 !py-[1rem] md:!py-[1.125rem] mt-8 max-sm:w-full !rounded-[4px] opacity-0 relative top-8"
                            >
                                Download Report
                            </Button>
                        </div>
                    </div>
                </Container>
            </div>
        </Section>
    );
};

export default FinancialOverview;
