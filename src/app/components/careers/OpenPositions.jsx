import React from "react";
import Section from "../utils/Section";
import Container from "../utils/Container";
import RadioTitle from "../utils/RadioTitle";
import { Button, Chip } from "@heroui/react";
import Link from "next/link";
import IconArrow from "../utils/icons/IconArrow";
import IconSuitcase from "../utils/icons/IconSuitcase";
import IconFlagIndia from "../utils/icons/IconFlagIndia";
import IconFlagSouthKorea from "../utils/icons/IconFlagSouthKorea";
import IconFlagSingapore from "../utils/icons/IconFlagSingapore";

const openPositionsData = [
    {
        id: 1,
        position: "Senior Researcher",
        department: "System Integration",
        experience: "25 years",
        locations: ["India", "South Korea", "Singapore"],
        buttonText: "Apply",
    },
    {
        id: 2,
        position: "Lead Researcher",
        department: "System Integration",
        experience: "15 years",
        locations: ["India", "South Korea", "Singapore"],
        buttonText: "Apply",
    },
    {
        id: 3,
        position: "Lead Researcher",
        department: "Radar",
        experience: "15 years",
        locations: ["India", "South Korea", "Singapore"],
        buttonText: "Apply",
    },
    {
        id: 4,
        position: "Principal Researcher",
        department: "Radar",
        experience: "15 years",
        locations: ["India", "South Korea", "Singapore"],
        buttonText: "Apply",
    },
];

const OpenPositions = () => {
    return (
        <Section className="section-our-positions bg-[#EDEFEC] pb-12 md:pb-20">
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
                                            <Link className="link" href="#">
                                                <span className="flex items-center gap-2 md:gap-3 xl:gap-3 2xl:gap-4">
                                                    {data.buttonText}
                                                    <IconArrow className="w-[12px] md:w-[14px] lg:w-[16px] 2xl:w-[18px] h-auto" />
                                                </span>
                                            </Link>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </Container>
            </div>
        </Section>
    );
};

export default OpenPositions;
