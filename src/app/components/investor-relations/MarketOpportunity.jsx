import React from "react";
import Section from "../utils/Section";
import Container from "../utils/Container";
import RadioTitle from "../utils/RadioTitle";
import Image from "next/image";
import { Button } from "@heroui/react";
import Link from "next/link";

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
    return (
        <Section className="section-market-opportunity bg-light-gray">
            <div className="border-b-2 border-solid border-black border-opacity-20">
                <Container>
                    <div className="flex">
                        <div className="grow"></div>
                        <div className="pt-6 md:pt-12 2xl:pt-16 pb-4 pl-6 md:pl-10 lg:pl-6 border-l-2 border-solid border-black border-opacity-20 w-full lg:w-[16.5rem] lg:min-w-[16.5rem]">
                            <RadioTitle title="Market Opportunity" />
                        </div>
                    </div>
                </Container>
            </div>
            <div className="">
                <Container>
                    <div className="flex flex-col lg:flex-row">
                        <div className="grow p-6 pr-0 md:p-10 md:pr-0 lg:pl-0 lg:pr-10 max-lg:border-l-2 border-solid border-black border-opacity-20">
                            <h3 className="leading-snug md:leading-normal">
                                Capturing demand across high-growth defense and
                                enterprise sectors
                            </h3>

                            <div className="grid-wrapper mt-8 md:mt-12">
                                {marketOpportunityData.map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className={`item ${item.class}`}
                                        >
                                            <Image
                                                src={`/images/${item.image}`}
                                                alt={item.title}
                                                fill
                                                unoptimized
                                                className="image"
                                            />
                                            <h5>{item.title}</h5>
                                            <p>{item.desc}</p>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="content-end p-6 pt-0 pr-0 md:pl-10 md:pb-10 md:pt-0 lg:pt-6 lg:pl-6 border-l-2 border-solid border-black border-opacity-20 lg:w-[16.5rem] lg:min-w-[16.5rem]">
                            <Button
                                as={Link}
                                href="/contact-us"
                                className="button !px-7 max-sm:w-full"
                            >
                                Request a Demo
                            </Button>
                        </div>
                    </div>
                </Container>
            </div>
        </Section>
    );
};

export default MarketOpportunity;
