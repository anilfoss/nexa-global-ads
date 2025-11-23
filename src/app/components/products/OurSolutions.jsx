"use client";

import React, { useEffect, useRef, useState } from "react";
import Section from "../utils/Section";
import Container from "../utils/Container";
import RadioTitle from "../utils/RadioTitle";
import { Button, Tab, Tabs } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import parser from "html-react-parser";

export const solutionsData = [
    {
        key: "Fixed and Perimeter Stacks",
        title: "Fixed and Perimeter Stacks",
        subtitle: "(Container / Mast / Tower)",
        content: ` 
                    <p>Persistent 24/7 protection for high-value sites (airports, refineries, data centres).</p>
                    <h5>What we deliver</h5>
                    <p>Hardened container or mast solutions with AESA 3D FMCW radar, RF direction finding, EO/IR cameras, AI fusion C2 and evidence-grade logging. Systems are built for continuous operation, integrated with SOC/ATC and delivered with SOPs and regulatory support. (Mirrors the layered fixed-site approach used by leader vendors).</p>
                    <h5>Use cases and outcomes</h5>
                    <p>Reduce false alarms, deliver forensic evidence for prosecution, and provide early warning so response teams act before airspace incursions escalate.</p>
                `,
        image: "img-fix-perimeter-stacks.png",
        imageAlt: "img-fix-perimeter-stacks",
        imgWidth: "1746",
        imgHeight: "854",
        buttons: [
            { label: "Request Site Assessment", href: "/", primary: true },
            {
                label: "Download Fixed Stack Datasheet",
                href: "/",
                primary: false,
            },
        ],
    },
    {
        key: "Mobile and Rapid Deploy",
        title: "Mobile and Rapid Deploy",
        subtitle: "(Vehicles, Trailers, Dismounted Kits)",
        content: ` 
                    <p>Short-notice protection for events, VIPs, and expeditionary operations.</p>
                    <h5>What we deliver</h5>
                    <p>Low-SWaP radar + RF suite + EO/IR + portable C2 in a vehicle/trailer or man-portable kit with rapid set-up and remote link to central monitoring. Configured for day/night and degraded comms.</p>
                `,
        image: "img-rapid-deploy.png",
        imageAlt: "img-rapid-deploy",
        imgWidth: "1746",
        imgHeight: "945",
        buttons: [
            { label: "Request a Demo", href: "/contact-us", primary: true },
        ],
    },
    {
        key: "Maritime and Shipborne Systems",
        title: "Maritime and Shipborne Systems",
        subtitle:
            "(Hardened maritime C-UAS for ships, offshore platforms and ports)",
        content: ` 
                    <p>Stabilized EO/IR, long-range detection, maritime-tuned radar, and integration to bridge systems; options for fleet dashboards and port-wide situational awareness. Built to marine environmental standards</p>
                `,
        image: "img-maritime-systems.png",
        imageAlt: "img-maritime-systems",
        imgWidth: "1746",
        imgHeight: "945",
        buttons: [
            { label: "Request a Demo", href: "/contact-us", primary: true },
        ],
    },
    {
        key: "Managed Services and Integration",
        title: "Managed Services and Integration",
        subtitle:
            "(PoC → deployment → training → long-term SLA and model updates.)",
        content: ` 
                    <p>Spectrum / WPC engagement, SOP & RoE templates, operator training, 24/7 monitoring offerings, and firmware/security updates. This civil-first operational model avoids unlawful jamming and prioritizes non-kinetic capture unless regulatory clearance is granted. (Industry best practice.)</p>
                `,
        image: "img-managed-services.png",
        imageAlt: "img-managed-services",
        imgWidth: "1746",
        imgHeight: "945",
        buttons: [
            { label: "Request a Demo", href: "/contact-us", primary: true },
            { label: "Solutions Comparison Guide", href: "/", primary: false },
        ],
    },
    {
        key: "AI Anti-Drone Radar Integrated system",
        title: "AI Anti-Drone Radar Integrated system",
        subtitle: "(Radar / Pan-tilt / MW[EO]/IR Camera / Jammer)",
        content: ` 
                    <h5>System Specifications</h5>
                    <ol>
                        <li>
                            <h5>4 Bay <span class="font-body">(</span>AI 3D AESA X-Band Radar<span class="font-body">)</span></h5>
                            <ul>
                                <li>Maximum Detection Range: 7km (RCS 0.01m²)/10km (RCS 0.03m²)</li>
                                <li>Azimuth Coverage: 360 degree</li>
                                <li>Elevation Coverage: 0-90 degree</li>
                            </ul>
                        </li>
                        <li>
                            <h5>Pan-tilt System</h5>
                            <ul>
                                <li>Pan Operating Range: 360 degree (Infinite Rotation with Slip Ring Structure)</li>
                                <li>Tilt Operating Range: -20-90 degree</li>
                            </ul>
                        </li>
                        <li>
                            <h5>MW <span class="font-body">[</span>EO<span class="font-body">]</span><span class="font-body">/</span>IR Camera</h5>
                            <ul>
                                <li>Detection Range: 3.5km (0.4m x 0.4m)/8km (1.8m x 1.4m)</li>
                                <li>Recognition Range: 2.5km (0.4m x 0.4m) / 5km (1.8m x 1.4m)</li>
                                <li>Lens Focal Length: 72~900mm</li>
                                <li>Detector Image Format: 1280(H) x 1024(V)</li>
                                <li>Field of View: 0.8~7.6 degree</li>
                            </ul>
                        </li>
                        <li>
                            <h5>Jammer</h5>
                            <ul>
                                <li>Jamming Frequency: ISM 433 & 900MHz, ISM 2.4 & 5.8GHz, GNSS L1, L2, L5</li>
                                <li>Jamming Range: 5km</li>
                            </ul>
                        </li>
                    </ol>
                `,
        image: "img-ai-anti-drone-radar.png",
        imageAlt: "img-ai-anti-drone-radar",
        imgWidth: "1746",
        imgHeight: "945",
        buttons: [
            { label: "Request a Demo", href: "/contact-us", primary: true },
        ],
    },
];

const AUTOPLAY_TIME = 20000;
const FPS = 20;

const OurSolutions = () => {
    const tabKeys = solutionsData.map((item) => item.key);
    const [selected, setSelected] = useState(tabKeys[0]);
    const [progress, setProgress] = useState(0);
    const tabRefs = useRef({});

    // autoplay
    useEffect(() => {
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
    }, [selected]);

    // mobile scroll
    const scrollActiveTabIntoView = () => {
        if (window.innerWidth >= 768) return;
        const el = tabRefs.current[selected];
        if (el) {
            el.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "start",
            });
        }
    };

    useEffect(() => {
        scrollActiveTabIntoView();
    }, [selected]);

    return (
        <Section className="section-our-solutions bg-overlay-1 text-white">
            <Container>
                <div className="flex flex-col">
                    <div className="max-md:px-6 pt-6 md:pt-12 2xl:pt-16 pb-4 max-md:-mx-6 max-md:border-b-2 md:border-r-2 border-solid border-white border-opacity-20 md:w-[30%] xl:w-[30%] 2xl:w-[35%] min-w-[30%] xl:min-w-[30%] 2xl:min-w-[35%]">
                        <RadioTitle title="Our Solutions" color="white" />
                    </div>

                    <Tabs
                        aria-label="product-tabs"
                        isVertical
                        variant="underlined"
                        classNames={{ wrapper: "product-tabs-wrapper" }}
                        selectedKey={selected}
                        onSelectionChange={(key) => {
                            setSelected(key);
                            setProgress(0);
                        }}
                    >
                        {solutionsData.map((item) => (
                            <Tab
                                key={item.key}
                                title={
                                    <div
                                        ref={(el) =>
                                            (tabRefs.current[item.key] = el)
                                        }
                                        className="px-6 -mx-6"
                                    >
                                        <span className="text">{item.key}</span>
                                        {selected === item.key && (
                                            <div
                                                className="progress-bar"
                                                style={{
                                                    width: `${progress}%`,
                                                }}
                                            ></div>
                                        )}
                                    </div>
                                }
                            >
                                {/* JSON-DRIVEN CONTENT */}
                                <div className="inner">
                                    <figure>
                                        <Image
                                            src={`/images/${item.image}`}
                                            alt={item.imageAlt}
                                            width={item.imgWidth}
                                            height={item.imgHeight}
                                            unoptimized
                                            className="image"
                                        />
                                    </figure>

                                    <div>
                                        <h3 className="text-white mb-3">
                                            {item.title}
                                        </h3>
                                        <p className="opacity-80">
                                            {item.subtitle}
                                        </p>
                                        <div className="mt-4">
                                            {parser(item.content)}
                                        </div>
                                    </div>

                                    <div className="button-wrapper">
                                        {item.buttons.map((btn, index) => (
                                            <Button
                                                key={index}
                                                as={Link}
                                                href={btn.href}
                                                className={`button ${
                                                    btn.primary
                                                        ? ""
                                                        : "button-border-white"
                                                }`}
                                            >
                                                {btn.label}
                                            </Button>
                                        ))}
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

export default OurSolutions;
