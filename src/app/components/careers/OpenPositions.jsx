"use client";

import React, { useState } from "react";
import Section from "../utils/Section";
import Container from "../utils/Container";
import RadioTitle from "../utils/RadioTitle";
import { Button, Chip, useDisclosure } from "@heroui/react";
import Link from "next/link";
import IconArrow from "../utils/icons/IconArrow";
import IconSuitcase from "../utils/icons/IconSuitcase";
import IconFlagIndia from "../utils/icons/IconFlagIndia";
import IconFlagSouthKorea from "../utils/icons/IconFlagSouthKorea";
import IconFlagSingapore from "../utils/icons/IconFlagSingapore";
import CareerModal from "./CareerModal";

const openPositionsData = [
    {
        id: 1,
        position: "Senior Researcher",
        department: "System Integration",
        experience: "25+ years",
        locations: ["India", "South Korea", "Singapore"],
        buttonText: "Apply",
        tags: ["Full Time", "On-Site", "25+ Years"],
        qualifications: ["Doctor's Degree"],
        responsibilities: [
            "Analysis of Signal Processing",
            "Wireless Propagation",
            "Analysis of Microwave communication",
        ],
    },
    {
        id: 2,
        position: "Lead Researcher",
        department: "System Integration",
        experience: "15+ years",
        locations: ["India", "South Korea", "Singapore"],
        buttonText: "Apply",
        tags: ["Full Time", "On-Site", "15+ Years"],
        qualifications: ["Master's Degree"],
        responsibilities: [
            "Design of Wireless Equipment",
            "Design of Radar API",
            "Design of Radar Improved Performance",
        ],
    },
    {
        id: 3,
        position: "Lead Researcher",
        department: "Radar",
        experience: "15+ years",
        locations: ["India", "South Korea", "Singapore"],
        buttonText: "Apply",
        tags: ["Full Time", "On-Site", "15+ Years"],
        qualifications: ["Master's Degree"],
        responsibilities: [
            "Design of Phase Array Ant.",
            "Design of TR Module",
            "Design of RF Matching",
        ],
    },
    {
        id: 4,
        position: "Principal Researcher",
        department: "Radar",
        experience: "8+ years",
        locations: ["India", "South Korea", "Singapore"],
        buttonText: "Apply",
        tags: ["Full Time", "On-Site", "8+ Years"],
        qualifications: ["College Graduation"],
        responsibilities: [
            "Design of Power Supply Unit",
            "Design of Pulse Modulation",
            "Design of Transmission Line for Radar",
        ],
    },
    {
        id: 5,
        position: "Lead Researcher",
        department: "EO/IR",
        experience: "13+ years",
        locations: ["India", "South Korea", "Singapore"],
        buttonText: "Apply",
        tags: ["Full Time", "On-Site", "13+ Years"],
        qualifications: ["Master's Degree"],
        responsibilities: [
            "Developed of Optical Camera Module",
            "Design of Video Processing",
            "Analysis of Object Classification",
        ],
    },
    {
        id: 6,
        position: "Lead Researcher",
        department: "EO/IR",
        experience: "13+ years",
        locations: ["India", "South Korea", "Singapore"],
        buttonText: "Apply",
        tags: ["Full Time", "On-Site", "13+ Years"],
        qualifications: ["Master's Degree"],
        responsibilities: [
            "Design of Video Codec",
            "Design of Video Processing",
            "Analysis of Video AI",
        ],
    },
    {
        id: 7,
        position: "Lead Researcher",
        department: "Jammer",
        experience: "16+ years",
        locations: ["India", "South Korea", "Singapore"],
        buttonText: "Apply",
        tags: ["Full Time", "On-Site", "16+ Years"],
        qualifications: ["Master's Degree"],
        responsibilities: [
            "Developed of GPS Module",
            "Developed of Receiver Module",
            "Developed of RF Filter Bank",
        ],
    },
    {
        id: 8,
        position: "Principal Researcher",
        department: "Jammer",
        experience: "12+ years",
        locations: ["India", "South Korea", "Singapore"],
        buttonText: "Apply",
        tags: ["Full Time", "On-Site", "12+ Years"],
        qualifications: ["Master's Degree"],
        responsibilities: [
            "Developed of Transmitter Module",
            "Design of Wave Propagation",
            "Design of Baseband Control Technique",
        ],
    },
    {
        id: 9,
        position: "Senior Researcher",
        department: "Integration Control",
        experience: "22+ years",
        locations: ["India", "South Korea", "Singapore"],
        buttonText: "Apply",
        tags: ["Full Time", "On-Site", "22+ Years"],
        qualifications: ["Doctor's Degree"],
        responsibilities: [
            "Design of Radar Control System",
            "Design of Radar Signal Processing",
            "Analysis of RCS Detection",
        ],
    },
    {
        id: 10,
        position: "Senior Researcher",
        department: "Integration Control",
        experience: "21+ years",
        locations: ["India", "South Korea", "Singapore"],
        buttonText: "Apply",
        tags: ["Full Time", "On-Site", "21+ Years"],
        qualifications: ["Doctor's Degree"],
        responsibilities: [
            "Design of Wireless Control System",
            "Operation & Management of Radar Control System",
            "Design of Intelligent-Based Cybersecurity Control",
        ],
    },
];

const OpenPositions = () => {
    const [selectedJob, setSelectedJob] = useState(null);
    const { isOpen, onOpen, onClose, onOpenChange } = useDisclosure();

    const handleJob = (job) => {
        setSelectedJob(job);
        onOpen();
    };

    return (
        <>
            <Section className="section-our-positions bg-light-gray pb-12 md:pb-20">
                <div className="border-b-2 border-solid border-black border-opacity-20">
                    <Container>
                        <div className="flex">
                            <div className="pt-6 md:pt-12 2xl:pt-16 pb-4 w-full">
                                <RadioTitle title="Open Positions" />
                            </div>
                            {/* <div className="grow"></div> */}
                        </div>
                    </Container>
                </div>
                <div className="">
                    <Container>
                        <table className="table-open-positions">
                            <thead>
                                <tr>
                                    <th>Position</th>
                                    <th>Department</th>
                                    <th>Experience</th>
                                    <th>Locations</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {openPositionsData.map((data) => {
                                    return (
                                        <tr key={data.id}>
                                            <td data-label="Position">
                                                {data.position}
                                            </td>
                                            <td data-label="Department">
                                                {data.department}
                                            </td>
                                            <td data-label="Experience">
                                                <span className="flex items-center gap-2 xl:gap-3 2xl:gap-4 whitespace-nowrap">
                                                    <IconSuitcase className="w-[18px] md:w-[20px] xl:w-[24px] 2xl:w-[30px] h-auto" />
                                                    {data.experience}
                                                </span>
                                            </td>
                                            <td data-label="Locations">
                                                <div className="locations-wrapper flex flex-wrap gap-2 xl:gap-3 2xl:gap-4">
                                                    {data.locations.map(
                                                        (location, index) => {
                                                            return (
                                                                <Chip
                                                                    key={index}
                                                                    color="default"
                                                                    startContent={
                                                                        location ===
                                                                        "India" ? (
                                                                            <IconFlagIndia className="w-[18px] md:w-[20px] lg:w-[24px] 2xl:w-[29px] h-auto" />
                                                                        ) : location ===
                                                                          "South Korea" ? (
                                                                            <IconFlagSouthKorea className="w-[18px] md:w-[20px] lg:w-[24px] 2xl:w-[29px] h-auto" />
                                                                        ) : (
                                                                            <IconFlagSingapore className="w-[18px] md:w-[20px] lg:w-[24px] 2xl:w-[29px] h-auto" />
                                                                        )
                                                                    }
                                                                    className="chip"
                                                                >
                                                                    {location}
                                                                </Chip>
                                                            );
                                                        }
                                                    )}
                                                </div>
                                            </td>
                                            <td data-label="">
                                                {/* <Link
                                                    className="link"
                                                    href="#"
                                                    onPress={onOpen}
                                                >
                                                    <span className="flex items-center gap-2 md:gap-3 xl:gap-3 2xl:gap-4">
                                                        {data.buttonText}
                                                        <IconArrow className="w-[12px] md:w-[14px] lg:w-[16px] 2xl:w-[18px] h-auto" />
                                                    </span>
                                                </Link> */}
                                                <Button
                                                    variant="light"
                                                    // onPress={onOpen}
                                                    onPress={() =>
                                                        handleJob(data)
                                                    }
                                                    className="link group !bg-transparent p-0"
                                                >
                                                    <span className="flex items-center gap-2 md:gap-3 xl:gap-3 2xl:gap-4">
                                                        {data.buttonText}
                                                        <IconArrow className="group-hover:ml-1 w-[12px] md:w-[14px] lg:w-[16px] 2xl:w-[18px] h-auto transition-all duration-300 ease-in-out;" />
                                                    </span>
                                                </Button>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </Container>
                </div>
            </Section>

            <CareerModal
                isOpen={isOpen}
                onClose={onClose}
                onOpenChange={onOpenChange}
                job={selectedJob}
            />
        </>
    );
};

export default OpenPositions;
