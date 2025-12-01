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
        description: `
                        <p>Mr. Singh, a graduate of the National Defense Academy, is an accomplished entrepreneur with over 26 years of experience leading companies across India, Singapore, Australia, the Philippines, and the Middle East. He brings deep expertise in managing regional stock exchanges and brokerage organizations, consistently driving record growth and profitability. His strategic insight and global business acumen have enabled him to build a wide-reaching network spanning North America, the Middle East, and Asia.</p>
                        <p>Mr. Singh currently serves as Chairman and Board Member for several public companies and charitable organizations.</p>
                    `,
        photo: "img-baljit-singh.png",
    },
    {
        id: 2,
        name: "Lee, Yil-Young",
        designation: `CEO &lpar;Strategy &amp; Defense Sales&rpar;`,
        description: `
                        <p>Mr. Lee is a seasoned executive and the CEO of Nexa Innovation Co., Ltd., where he has led significant advancements in defence technology, including securing a major contract to deliver 42 anti-drone systems to the Thai Ministry of Justice and registering as an approved supplier with Thailand’s Defence Technology Institute (DTI). His leadership spans multiple sectors, with roles including Chancellor of Bucheon University’s Ulaanbaatar Campus in Mongolia and Chairman of Saeroun Environment Co., Ltd.</p>
                        <p>Mr. Lee has also contributed to major urban development projects as the developer of the ARTINO residential complexes in Hapjeong-dong and Seocho-dong, Seoul. In addition, as CEO of Emmet Co., Ltd., he supplies rescue equipment and emergency medical response systems to the Korea National Fire Agency.</p>
                    `,
        photo: "img-yil-young.png",
    },
    {
        id: 3,
        name: "Cho, Byung-Cheol",
        designation: `CTO (Radar & AI) <br />Head of Systems Integration`,
        description: `
                        <p>Mr. Cho holds an M.S. in Electronics Engineering from Hanyang University Graduate School and is a highly accomplished technologist and entrepreneur. With deep expertise in high-speed data-system semiconductor planning and architecture, he has built a distinguished career marked by innovation and technical leadership. He is the founder and CEO of MAXIUS, a system-semiconductor company he established in 1997 and continues to lead today. A prolific inventor, Mr. Cho holds 54 Korean patents and 21 U.S. patents, and has been recognized with major national honors, including the Korea Technology Grand Prize, the Venture Award, and the Technology Convergence Award, along with ministerial commendations from the Ministry of SMEs & Start-ups and the Ministry of Science, ICT & Future Planning.</p>
                        <p>Mr. Cho contributes extensively to national and academic advisory bodies, serving on committees for Tsinghua University, the Ministry of Trade, Industry & Energy, and the Ministry of Science, ICT & Future Planning. He is also an active member of the professional community as Vice President of the Cloud Research Society, Vice Chairman of the Korea Computing Industry Association, and a member of the LEE Society.</p>
                    `,
        photo: "img-byung-cheol.png",
    },
];

const OurLeadership = () => {
    const [selectedLeader, setSelectedLeader] = useState(ourLeadershipData[0]);
    const scrollRef = useRef(null);

    // Scroll active card into view

    useEffect(() => {
        if (!scrollRef.current) return;
        const activeCard = scrollRef.current.querySelector(".active");
        if (!activeCard) return;

        const container = scrollRef.current;

        container.scrollLeft =
            activeCard.offsetLeft -
            container.clientWidth / 2 +
            activeCard.clientWidth / 2;
    }, [selectedLeader]);

    // useEffect(() => {
    //     if (!scrollRef.current) return;
    //     const activeCard = scrollRef.current.querySelector(
    //         ".leadership-card.active"
    //     );
    //     if (activeCard) {
    //         activeCard.scrollIntoView({
    //             behavior: "smooth",
    //             inline: "start", // aligns the card to the left
    //             block: "nearest",
    //         });
    //     }
    // }, [selectedLeader]);

    return (
        <Section
            id="board-of-directors"
            className="section-our-leadership bg-overlay-4 text-white overflow-hidden"
        >
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
