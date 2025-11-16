"use client";

import React, { useEffect, useRef, useState } from "react";
import Section from "../utils/Section";
import Container from "../utils/Container";
import RadioTitle from "../utils/RadioTitle";
import Image from "next/image";
import parse from "html-react-parser";
import { ScrollShadow } from "@heroui/react";

const ourLeadershipData = [
    {
        id: 1,
        name: "Mr. Baljit Singh",
        designation: `Chairman`,
        description: `<p>Mr. Singh a graduate of the National Defense Academy, is an experienced entrepreneur who has led a multitude of companies in India, Singapore, Australia, Philippines and the Middle East to record growth and profit over the past 26 years. His strength lies in his extensive knowledge of managing regional stock exchanges &amp; brokerage businesses. Mr. Singh’s business acumen has led him to create an extensive network around the world from North America to the Middle East to Asia.</p><p>Mr. Singh is the Chairman and sits on the Board of various public companies and charities.</p>`,
        photo: "img-baljit-singh.png",
    },
    {
        id: 2,
        name: "Lee, Yil-Young",
        designation: `CEO &lpar;Strategy &amp; Defense Sales&rpar;`,
        description: `<ul>
                        <li>CEO, Nexa Innovation Co., Ltd.</li>
                        <li>Secured a contract for 42 anti-drone systems with the Thai Ministry of Justice</li>
                        <li>Registered supplier for anti-drone projects with Thailand’s Defence Technology Institute (DTI)</li>
                        <li>Chancellor, Bucheon University – Ulaanbaatar Campus, Mongolia</li>
                        <li>Chairman, Saeroun Environment Co., Ltd.</li>
                        <li>Developer of the ARTINO apartment complexes in Hapjeong-dong and Seocho-dong, Seoul</li>
                        <li>CEO, Emmet Co., Ltd.</li>
                        <li>Supplier of rescue equipment to the Korea National Fire Agency</li>
                        <li>Provider of emergency medical response systems to the same agency</li>
                    </ul>`,
        photo: "img-yil-young.png",
    },
    {
        id: 3,
        name: "Cho, Byung-Cheol",
        designation: `CTO (Radar & AI) <br />Head of Systems Integration`,
        description: `<h6>Education</h6>
                        <ul>
                            <li>M.S. in Electronics Engineering, Hanyang University Graduate School</li>
                        </ul>
                        <h6>Key Career Highlights</h6>
                        <ul>
                            <li>Led high-speed data-system semiconductor planning and architecture</li>
                            <li>Holder of 54 Korean patents and 21 U.S. patents</li>
                            <li>Founder & CEO of MAXIUS (system-semiconductor company, established Jan 1997 and operating to date)</li>
                        </ul>
                        <h6>Awards & Honors</h6>
                        <ul>
                            <li>Korea Technology Grand Prize</li>
                            <li>Venture Award and Technology Convergence Award</li>
                            <li>Ministerial Commendations from the Ministry of SMEs & Start-ups and the Ministry of Science, ICT & Future Planning</li>
                        </ul>
                        <h6>Government Advisory Roles</h6>
                        <ul>
                            <li>Member, Future Growth Committee and Green Committee, Tsinghua University</li>
                            <li>Planning Committee Member, Ministry of Trade, Industry & Energy</li>
                            <li>Cloud Planning Commissioner, Ministry of Science, ICT & Future Planning</li>
                        </ul>
                        <h6>Professional Affiliations</h6>
                        <ul>
                            <li>Vice President, Cloud Research Society</li>
                            <li>Vice Chairman, Korea Computing Industry Association</li>
                            <li>Member, LEE Society</li>
                        </ul>`,
        photo: "img-byung-cheol.png",
    },
];

const OurLeadership = () => {
    const [selectedLeader, setSelectedLeader] = useState(ourLeadershipData[0]);
    const scrollRef = useRef(null);

    // Scroll active card into view
    useEffect(() => {
        if (!scrollRef.current) return;
        const activeCard = scrollRef.current.querySelector(
            ".leadership-card.active"
        );
        if (activeCard) {
            activeCard.scrollIntoView({
                behavior: "smooth",
                inline: "start", // aligns the card to the left
                block: "nearest",
            });
        }
    }, [selectedLeader]);

    return (
        <Section className="section-our-leadership bg-overlay-1 text-white">
            <div className="border-b-2 border-solid border-white border-opacity-20">
                <Container>
                    <div className="flex">
                        <div className="pt-6 md:pt-12 2xl:pt-16 pb-4 border-r-2 border-solid border-white border-opacity-20 pr-6 w-full lg:w-[65%]">
                            <RadioTitle title="Our Leadership" color="white" />
                        </div>
                        <div className="grow"></div>
                    </div>
                </Container>
            </div>

            <Container>
                <div className="flex flex-col lg:flex-row">
                    {/* Leadership cards */}
                    <div className="leadership-card-wrapper p-6 pl-0 md:pl-0 md:pr-10 md:py-10 border-r-2 border-solid border-white border-opacity-20 w-full lg:w-[65%] lg:min-w-[65%]">
                        {/* ✅ wrap the ScrollShadow in a div with ref */}
                        <ScrollShadow
                            hideScrollBar
                            orientation="horizontal"
                            className="flex -mx-3 md:-mx-4 lg:-mx-3.5 2xl:-mx-5"
                            ref={scrollRef}
                        >
                            {ourLeadershipData.map((leadership) => (
                                <div
                                    key={leadership.id}
                                    className={`leadership-card flex flex-col gap-3 px-3 md:px-4 lg:px-3.5 2xl:px-5 w-1/3 min-w-64 md:min-w-72 lg:min-w-64 xl:min-w-0 cursor-pointer transition-all duration-300 
                                        ${
                                            selectedLeader.id === leadership.id
                                                ? "active"
                                                : ""
                                        }
                                    `}
                                    onClick={() =>
                                        setSelectedLeader(leadership)
                                    }
                                >
                                    <figure>
                                        <Image
                                            src={`/images/${leadership.photo}`}
                                            alt={leadership.name}
                                            fill
                                            priority
                                            unoptimized
                                            className={`photo !w-full !h-auto !static rounded-none transition-all duration-300 ease-in-out 
                                            ${
                                                selectedLeader.id ===
                                                leadership.id
                                                    ? ""
                                                    : ""
                                            }
                                            `}
                                        />
                                    </figure>
                                    <h5 className="text-[1.5rem] md:text-[2rem] lg:text-[clamp(1.5rem,-1.0098rem+3.1373vw,2rem)] 2xl:text-[2rem] text-white hidden lg:block mt-1">
                                        {leadership.name}
                                    </h5>
                                    {leadership.designation && (
                                        <p className="text-[1.375rem] md:text-[1.5rem] lg:text-[clamp(1.125rem,-0.2554rem+1.7255vw,1.4rem)] 2xl:text-[1.5rem] !leading-normal hidden lg:block">
                                            {parse(leadership.designation)}
                                        </p>
                                    )}
                                </div>
                            ))}
                        </ScrollShadow>
                    </div>

                    {/* Leadership detail */}
                    <div className="grow p-6 pl-0 pt-0 md:p-10 md:pl-0 md:pt-0 lg:pl-10 lg:pr-0 lg:py-10 max-lg:border-r-2 border-solid border-white border-opacity-20">
                        <div className="leadership-detail">
                            <h3 className="text-[2.5rem] md:text-[3.125rem] lg:text-[clamp(2.3rem,1.3982rem+1.409vw,2.75rem)] 2xl:text-[3.125rem] text-white">
                                {selectedLeader.name}
                            </h3>

                            {selectedLeader?.designation && (
                                <p className="h6 mt-3">
                                    {parse(selectedLeader?.designation)}
                                </p>
                            )}
                            {selectedLeader.description && (
                                <div className="text-[1.375rem] md:text-[1.5rem] lg:text-[clamp(1.125rem,-0.2554rem+1.7255vw,1.4rem)] 2xl:text-[1.5rem] text-white mt-8">
                                    {parse(selectedLeader.description)}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default OurLeadership;
