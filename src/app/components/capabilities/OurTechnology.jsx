"use client";

import React from "react";
import Section from "../utils/Section";
import Container from "../utils/Container";
import RadioTitle from "../utils/RadioTitle";
import Image from "next/image";
import { Button } from "@heroui/react";
import Link from "next/link";
import parse from "html-react-parser";

const technologyData = [
    {
        id: 1,
        title: "AESA 3D FMCW Radar <br/><span class='font-body'>(</span>Detection Backbone<span class='font-body'>)</span>",
        desc: "Our AESA 3D FMCW radar is engineered for detection of small RCS targets (mini-UAVs) in cluttered environments, offering 360° azimuth coverage and elevation discrimination. Onboard edge-AI reduces raw contact noise and improves track quality for faster decisions. (Fortem and other vendors emphasize AESA + AI at the edge as a defining capability).",
        image: "img-aesa.svg",
        imgWidth: 560,
        imgHeight: 377,
        class: "box-aesa",
    },
    {
        id: 2,
        title: "RF Sensing and Electronic Warfare <br/><span class='font-body'>(</span>lawful, managed<span class='font-body'>)</span>",
        desc: "Passive RF sensing and direction finding provide the earliest possible cue to UAS operations by identifying C2 and telemetry links. Nexa’s RF library fingerprints common UAS comms and supports prioritized rules of engagement. Soft-kill (jamming/spoofing) is offered only after regulatory engagement; we provide licensing support and operator training.",
        image: "img-rf-sensing.svg",
        imgWidth: 705,
        imgHeight: 527,
        class: "box-sensing",
    },
    {
        id: 3,
        title: "EO <span class='font-body'>/</span> IR and AI Classification",
        desc: "High-resolution EO/IR with ML classifiers differentiates drones from birds and benign objects. Our models use multi-modal inputs (RCS + RF + optical signatures) to reduce false alarms and speed operator confidence. We provide human-in-the-loop modes for civil deployments and automated escalation for defence customers.",
        image: "img-eo-ir.svg",
        imgWidth: 513,
        imgHeight: 354,
        class: "box-eo",
    },
    {
        id: 4,
        title: "Mitigation Suite <span class='font-body'>(</span>Soft <span class='font-body'>→</span> Capture <span class='font-body'>→</span> Hard<span class='font-body'>)</span>",
        desc: "Layered mitigation: geo-fencing, lawful RF disruption, interceptor nets/recapture drones, and integration options with authorized hard-kill effectors (RCWS/DE) for defense clients. Civil customers typically deploy capture/net or denial workflows while Nexa supports required clearance for EW / hard-kill.",
        image: "img-mitigation-suite.svg",
        imgWidth: 626,
        imgHeight: 236,
        class: "box-mitigation",
    },
    {
        id: 5,
        title: "Fusion C2 and Evidence Chain",
        desc: "Fusion C2 consoles aggregate sensor tracks, provide timeline logging, exportable evidence packages and API hooks for SOC/ATC and partner systems. Continuous model retraining and secure OTA updates keep detection models current.",
        buttonText: "Request a Demo",
        buttonLink: "#",
        image: "img-fusion-c2.svg",
        imgWidth: 542,
        imgHeight: 443,
        class: "box-fusion",
    },
];

const OurTechnology = () => {
    return (
        <Section className="section-our-technology">
            <div className="border-b-2 border-solid border-black border-opacity-20">
                <Container>
                    <div className="radio-title-wrapper max-md:px-6 pt-6 md:pt-12 2xl:pt-16 pb-4 max-md:-mx-6 md:border-r-2 border-solid border-black border-opacity-20 md:w-[30%] xl:w-[30%] 2xl:w-[35%]">
                        <RadioTitle title="Our Technology" />
                    </div>
                </Container>
            </div>

            <div className="py-6 md:py-12 2xl:py-16">
                <Container>
                    <div className="box-wrapper">
                        {technologyData.map((item) => {
                            return (
                                <div
                                    key={item.id}
                                    className={`box ${item.class}`}
                                >
                                    <div className="inner">
                                        <Image
                                            src={`/images/${item.image}`}
                                            alt={item.title}
                                            width={item.imgWidth}
                                            height={item.imgHeight}
                                            unoptimized
                                            className="image"
                                        />
                                        <div className="content">
                                            <h5>{parse(item.title)}</h5>
                                            <p>{item.desc}</p>
                                            {item?.buttonText && (
                                                <div className="button-wrapper">
                                                    <Button
                                                        as={Link}
                                                        href={item?.buttonLink}
                                                        className="button !px-8 md:!py-[1.125rem] max-sm:w-full"
                                                    >
                                                        {item?.buttonText}
                                                    </Button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </Container>
            </div>
        </Section>
    );
};

export default OurTechnology;
