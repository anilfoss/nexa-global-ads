"use client";

import React, { useEffect, useRef, useState } from "react";
import Section from "../utils/Section";
import Container from "../utils/Container";
import RadioTitle from "../utils/RadioTitle";
import { Button, Tab, Tabs } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const capabilitiesData = [
    {
        key: "Military Defense",
        title: "Military Defense",
        desc: `Precision military-grade drone defense built for mobile, fixed, and expeditionary missions.`,
        image: "img-precision-military.jpg",
        imageWidth: "1024",
        imageHeight: "1536",
        buttonTitle: "Request a Demo",
        buttonLink: "/contact-us",
    },
    {
        key: "Government, Corrections and Border Security",
        title: "Government, Corrections and Border Security",
        desc: `Tailored tactical solutions, training and SOP integration for prisons, border outposts and VIP convoys. We provide ROE templates and work with local authorities to enable lawful interdiction`,
        image: "img-border-security.jpg",
        imageWidth: "1536",
        imageHeight: "1024",
        buttonTitle: "Request a Demo",
        buttonLink: "/contact-us",
    },
    {
        key: "Nuclear Power Plant",
        title: "Nuclear Power Plant",
        desc: `Nexa’s AI-driven drone defense system provides continuous, multi-sensor protection for nuclear power plants, combining AESA radar, RF sensing, EO/IR tracking, and real-time fusion C2 to detect, identify, and neutralize airborne threats before they approach critical infrastructure. Built for high-security environments, it delivers reliable 24/7 situational awareness, automated threat prioritization, and lawful countermeasures to ensure the safety and uninterrupted operation of nuclear facilities.`,
        image: "img-power-plant.jpg",
        imageWidth: "1536",
        imageHeight: "1024",
        buttonTitle: "Request a Demo",
        buttonLink: "/contact-us",
    },
    {
        key: "Airports and Airspace Management",
        title: "Airports and Airspace Management",
        desc: `Airports require persistent, certifiable detection and close coordination with ATC/aviation regulators. Nexa’s fixed stacks monitor approach corridors and terminal airspace and integrate with airport SOCs and DGCA/FAA workflows. We deliver PoC packages for temporary event airspace management and permanent runway approach coverage.`,
        image: "img-airspace-management.jpg",
        imageWidth: "1536",
        imageHeight: "199",
        buttonTitle: "Request a Demo",
        buttonLink: "/contact-us",
    },
    {
        key: "Energy, Oil and Gas, Refineries",
        title: "Energy, Oil and Gas, Refineries",
        desc: `Energy sites are critical, high-risk targets; perimeter radar plus long-range EO and secure C2 reduces exposure and supports incident response. Nexa supports remote platforms (offshore) and onshore refinery hardening with monitored detection rings and escalation SOPs.`,
        image: "img-refineries.jpg",
        imageWidth: "1536",
        imageHeight: "1024",
        buttonTitle: "Request a Demo",
        buttonLink: "/contact-us",
    },
    {
        key: "Port and Maritime Logistics",
        title: "Port and Maritime Logistics",
        desc: `Nexa protects port approaches, shipping lanes and offshore platforms with shipborne radars, stabilized EO/IR and marine EW options. Systems integrate with VTS and port control for coordinated interdiction and forensic logging.`,
        image: "img-logistic.jpg",
        imageWidth: "1024",
        imageHeight: "1024",
        buttonTitle: "Request a Demo",
        buttonLink: "/contact-us",
    },
    {
        key: "Events, Stadiums and VIP Protection",
        title: "Events, Stadiums and VIP Protection",
        desc: `Rapid-deploy mobile stacks and evidence logging provide low-disruption protection for stadiums, parades and VIP assets. Portable radar + RF + EO delivers temporary airspace denial without permanent infrastructure.`,
        image: "img-stadium.jpg",
        imageWidth: "1536",
        imageHeight: "1024",
        buttonTitle: "Request a Demo",
        buttonLink: "/contact-us",
    },
    {
        key: "Data Centers and Corporate Campuses",
        title: "Data Centers and Corporate Campuses",
        desc: `High availability environments require low-false alarm  detection with privacy-aware EO/IR handling and SOC integration. Nexa’s stacks provide perimeter detection and Azure/AWS/SOC API hooks for enterprise incident management.`,
        image: "img-data-center.jpg",
        imageWidth: "1536",
        imageHeight: "1024",
        buttonTitle: "Request a Demo",
        buttonLink: "/contact-us",
    },
];

const AUTOPLAY_TIME = 10000;
const FPS = 20;

const OurCapabilities = () => {
    const tabKeys = capabilitiesData.map((item) => item.key);

    const [selected, setSelected] = useState(tabKeys[0]);
    const [progress, setProgress] = useState(0);
    const tabRefs = useRef({});
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const check = () => setIsMobile(window.innerWidth < 768);
        check();
        window.addEventListener("resize", check);
        return () => window.removeEventListener("resize", check);
    }, []);

    // for progress bar

    useEffect(() => {
        if (isMobile) return; // ❌ Disable autoplay on mobile

        const step = 100 / (AUTOPLAY_TIME / FPS);

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    const currentIndex = tabKeys.indexOf(selected);
                    const nextIndex = (currentIndex + 1) % tabKeys.length;
                    setSelected(tabKeys[nextIndex]);
                    return 0;
                }
                return prev + step;
            });
        }, FPS);

        return () => clearInterval(interval);
    }, [selected, isMobile]);

    // start tabs from left below 767px

    const scrollActiveTabIntoView = () => {
        if (window.innerWidth >= 768) return; // only on horizontal/mobile

        const el = tabRefs.current[selected];
        if (el) {
            el.scrollIntoView({
                behavior: "smooth",
                // block: "nearest",
                inline: "start",
            });
        }
    };

    useEffect(() => {
        scrollActiveTabIntoView();
    }, [selected]);

    return (
        <Section className="section-our-capabilities bg-light-gray">
            <Container>
                <div className="flex flex-col">
                    <div className="radio-title-wrapper max-md:px-6 pt-6 md:pt-12 2xl:pt-16 pb-4 max-md:-mx-6 md:border-r-2 border-solid border-black border-opacity-20 md:w-[30%] xl:w-[30%] 2xl:w-[35%]">
                        <RadioTitle title="Our Capabilities" />
                    </div>

                    <Tabs
                        aria-label="capabilities-tabs"
                        isVertical
                        variant="underlined"
                        classNames={{
                            wrapper: "capabilities-tabs-wrapper",
                        }}
                        selectedKey={selected}
                        onSelectionChange={(key) => {
                            setSelected(key);
                            setProgress(0);
                        }}
                    >
                        {capabilitiesData.map((item) => (
                            <Tab
                                key={item.key}
                                title={
                                    <span
                                        ref={(el) =>
                                            (tabRefs.current[item.key] = el)
                                        }
                                        className="text"
                                    >
                                        {item.key}
                                    </span>
                                }
                            >
                                <div className="inner">
                                    <figure>
                                        <Image
                                            src={`/images/${item.image}`}
                                            alt={item.title}
                                            width={item.imageWidth}
                                            height={item.imageHeight}
                                            unoptimized
                                            className="image"
                                        />
                                    </figure>

                                    <div className="content-wrapper">
                                        <h3 className="text-white mb-3">
                                            {item.title}
                                        </h3>
                                        <p className="text-medium tracking-wider !leading-snug">
                                            {item.desc}
                                        </p>

                                        {item?.buttonLink && (
                                            <Button
                                                as={Link}
                                                href={item.buttonLink}
                                                className="button !px-8 md:!py-[1.125rem] mt-2"
                                            >
                                                {item.buttonTitle}
                                            </Button>
                                        )}
                                    </div>
                                </div>
                            </Tab>
                        ))}
                    </Tabs>
                </div>
            </Container>
        </Section>
    );
};

export default OurCapabilities;
