"use client";

import React from "react";
import Section from "../utils/Section";
import Container from "../utils/Container";
import RadioTitle from "../utils/RadioTitle";
import Image from "next/image";

const ourValuesData = [
    {
        title: "Innovation with Purpose",
        desc: "We advance AI and sensing technologies to protect people, assets, and airspace with intelligent precision.",
        image: "img-innovation-purpose.jpg",
        imgWidth: 592,
        imgHeight: 740,
    },
    {
        title: "Integrity and Trust",
        desc: "We operate with transparency, accountability, and reliability - earning trust from defence, government, and commercial partners.",
        image: "img-integrity-trust.jpg",
        imgWidth: 740,
        imgHeight: 493,
    },
    {
        title: "Safety First",
        desc: "Every solution we design prioritizes human safety, operational reliability, and ethical AI use.",
        image: "img-safety-first.jpg",
        imgWidth: 591,
        imgHeight: 739,
    },
    {
        title: "Excellence in Performance",
        desc: "We strive for unmatched detection accuracy, speed, and system resilience in every deployment.",
        image: "img-excellence-performance.jpg",
        imgWidth: 560,
        imgHeight: 416,
    },
    {
        title: "Collaboration and Partnership",
        desc: "We work closely with clients, regulators, and partners to co-create smarter and more secure skies.",
        image: "img-collaboration-partnership.jpg",
        imgWidth: 740,
        imgHeight: 493,
    },
    {
        title: "Agility and Adaptability",
        desc: "We move fast, think ahead, and adapt to evolving drone threats and technology landscapes.",
        image: "img-agility-adaptability.jpg",
        imgWidth: 492,
        imgHeight: 739,
    },
];

const OurValues = () => {
    return (
        <Section className="bg-light-gray border-t-2 border-solid border-black border-opacity-20">
            <div className="">
                <Container>
                    <div className="flex flex-col lg:flex-row">
                        <div className="pt-6 md:pt-12 2xl:pt-16 pb-4 border-r-2 border-solid border-black border-opacity-20 pr-6 w-full lg:w-44 lg:min-w-44 xl:w-52 xl:min-w-52 2xl:w-60 2xl:min-w-60">
                            <RadioTitle title="Our Values" />
                        </div>
                        <div className="flex flex-wrap justify-center sm:justify-between grow gap-6 md:gap-12 p-6 md:p-10 lg:pr-0 max-lg:!pt-0 max-md:pr-6 max-lg:pr-10 max-lg:!pl-0 max-lg:border-r-2 max-lg:border-solid max-lg:border-black max-lg:border-opacity-20">
                            {ourValuesData?.map((item, index) => {
                                return (
                                    <figure
                                        key={index}
                                        className="text-white text-center flex flex-col justify-center content-center gap-4 p-4 2xl:p-8 w-full sm:w-[47%] md:w-[45%] max-w-[24rem] xl:w-[30%] xl:max-w-[24rem] aspect-square relative z-[1] rounded-full overflow-hidden group transition-all duration-300 ease-in-out after:content-[''] after:bg-overlay-3 after:absolute after:inset-0 after:-z-[1]"
                                    >
                                        <h5 className="text-white font-semibold max-sm:px-4 mt-0 group-hover:-mt-12 visible opacity-100 group-hover:invisible group-hover:opacity-0 transition-all duration-300 ease-in-out">
                                            {item.title}
                                        </h5>
                                        <p className="text-medium p-6 2xl:p-8 mt-8 mb-0 invisible opacity-0 group-hover:mt-0 group-hover:visible group-hover:opacity-100 w-full absolute left-0 top-1/2 -translate-y-1/2 transition-all duration-300 ease-in-out">
                                            {item.desc}
                                        </p>
                                        <Image
                                            src={`/images/${item.image}`}
                                            alt={item.title}
                                            fill
                                            priority
                                            unoptimized
                                            className="object-cover object-center w-full h-full absolute inset-0 -z-[1] scale-100 group-hover:scale-105 rounded-none transition-all duration-[2000ms] ease-in-out"
                                        />
                                    </figure>
                                );
                            })}
                        </div>
                    </div>
                </Container>
            </div>
        </Section>
    );
};

export default OurValues;
