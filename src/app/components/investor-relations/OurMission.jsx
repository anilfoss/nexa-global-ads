import React from "react";
import Section from "../utils/Section";
import Container from "../utils/Container";
import RadioTitle from "../utils/RadioTitle";
import Image from "next/image";

const cardsData = [
    {
        title: "Mission-critical technology",
        icon: "icon-mission-critical.svg",
    },
    {
        title: "Multi-domain deployability",
        icon: "icon-multi-domain.svg",
    },
    {
        title: "Regulatory-first, lawful engagement",
        icon: "icon-regulatory.svg",
    },
    {
        title: "Full-stack vendor ecosystem",
        icon: "icon-full-stack.svg",
    },
    {
        title: "Recurring SLAs and AI model updates",
        icon: "icon-ai-model.svg",
    },
    {
        title: "Proven leadership and patents",
        icon: "icon-leadership.svg",
    },
];

const OurMission = () => {
    return (
        <Section className="bg-light-gray">
            <div className="border-b-2 border-solid border-black border-opacity-20">
                <Container>
                    <div className="flex">
                        <div className="pt-6 md:pt-12 2xl:pt-16 pb-4 border-r-2 border-solid border-black border-opacity-20 pr-6 w-full lg:w-52 lg:min-w-52 2xl:w-60 2xl:min-w-60">
                            <RadioTitle title="Our Mission" />
                        </div>
                        <div className="grow"></div>
                    </div>
                </Container>
            </div>
            <div className="">
                <Container>
                    <div className="flex flex-row-reverse lg:flex-row">
                        <div className="border-r-2 border-solid border-black border-opacity-20 lg:w-52 lg:min-w-52 2xl:w-60 2xl:min-w-60"></div>
                        <div className="grow p-6 md:p-10 md:pr-8 lg:pr-0 max-md:pr-6 max-lg:!pl-0">
                            <h3 className="leading-snug md:leading-normal">
                                Nexa Global is positioned to become a leading
                                force in the rapidly expanding Counter-UAS and
                                AI-enabled air defense market. With a full-stack
                                architecture spanning radar, RF intelligence, EO
                                <span className="font-body">/</span>IR, AI
                                fusion and layered mitigation, Nexa delivers
                                mission-critical systems for governments and
                                high-value infrastructure worldwide.
                            </h3>

                            <div className="flex flex-wrap -mx-3 md:-mx-4 lg:-mx-5 mt-6">
                                {cardsData.map((card, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="p-3 md:p-4 lg:p-5 w-full sm:w-[50%]"
                                        >
                                            <div className="bg-light-gray inner flex justify-between gap-4 p-4 2xl:p-6 border-1 border-solid border-black border-opacity-20 h-full rounded-md shadow-card">
                                                <h5 className="content-center text-[clamp(1.05rem,0.3478rem+3.511vw,1.75rem)] sm:text-[1.25rem] md:text-[1.375rem] xl:text-[clamp(1.55rem,-0.7088rem+2.8235vw,2rem)] 2xl:text-[2rem] grow">
                                                    {card.title}
                                                </h5>
                                                <figure className="content-end -mb-4 2xl:-mb-6">
                                                    <Image
                                                        src={`/images/${card.icon}`}
                                                        alt={card.title}
                                                        fill
                                                        unoptimized
                                                        className="!w-auto max-w-20 sm:max-w-32 md:max-w-32 xl:max-w-44 2xl:max-w-52 !h-20 sm:!h-24 md:!h-24 xl:!h-36 2xl:!h-44 opacity-50 !static rounded-none"
                                                    />
                                                </figure>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </Section>
    );
};

export default OurMission;
