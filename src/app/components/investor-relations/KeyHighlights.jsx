import React from "react";
import Section from "../utils/Section";
import Container from "../utils/Container";
import RadioTitle from "../utils/RadioTitle";
import parse from "html-react-parser";
import Image from "next/image";

// const keyData = [
//     {
//         num: "<span class='font-body'>+</span>45<span class='font-body'>%</span>",
//         title: "Market Growth",
//         desc: "YoY growth in C-UAS demand across government and enterprise sectors",
//     },
//     {
//         num: "12<span class='font-body'>+</span>",
//         title: "Global Reach",
//         desc: "Multi-region deployments across Asia, Middle East, and EU",
//     },
//     {
//         num: "68<span class='font-body'>%</span>",
//         title: "Recurring Revenue",
//         desc: "Recurring revenue from SLAs and AI model updates",
//     },
//     {
//         num: "15<span class='font-body'>+</span>",
//         title: "IP Portfolio",
//         desc: "Strong technology IP portfolio and global partnerships",
//     },
// ];

const cardsData = [
    {
        num: `25<span className="font-body">%</span>`,
        title: "Market Growth",
        desc: "YoY growth in C-UAS demand across government and enterprise sectors",
        img: "img-drone.svg",
        imgWidth: 322,
        imgHeight: 253,
        imgPattern1: "img-card-1-pattern-1.svg",
        imgPattern1Width: 337,
        imgPattern1Height: 212,
        imgPattern2: "img-card-1-pattern-2.svg",
        imgPattern2Width: 336,
        imgPattern2Height: 322,
        class: "card-green",
    },
    {
        num: `19<span className="font-body">+</span>`,
        title: "Global Reach",
        desc: "Multi-region deployments across Asia, Middle East, and EU",
        img: "img-global-reach.svg",
        imgWidth: 303,
        imgHeight: 334,
        imgPattern1: "img-card-2-pattern-1.svg",
        imgPattern1Width: 312,
        imgPattern1Height: 182,
        imgPattern2: "img-card-2-pattern-2.svg",
        imgPattern2Width: 400,
        imgPattern2Height: 352,
        class: "card-brown",
    },
    {
        num: `107<span className="font-body">%</span>`,
        title: "Recurring Growth",
        desc: "Recurring revenue from SLAs and AI model updates",
        img: "img-coins.svg",
        imgWidth: 341,
        imgHeight: 331,
        imgPattern1: "img-card-3-pattern-1.svg",
        imgPattern1Width: 319,
        imgPattern1Height: 220,
        imgPattern2: "img-card-3-pattern-2.svg",
        imgPattern2Width: 365,
        imgPattern2Height: 331,
        class: "card-blue",
    },
    {
        num: `15<span className="font-body">+</span>`,
        title: "IP Portfolio",
        desc: "Strong technology IP portfolio and global partnerships",
        img: "img-portfolio.svg",
        imgWidth: 322,
        imgHeight: 321,
        imgPattern1: "img-card-4-pattern-1.svg",
        imgPattern1Width: 311,
        imgPattern1Height: 221,
        imgPattern2: "img-card-4-pattern-2.svg",
        imgPattern2Width: 374,
        imgPattern2Height: 352,
        class: "card-purple",
    },
];

const KeyHighlights = () => {
    return (
        <Section className="section-key-highlights bg-white">
            <div className="border-b-2 border-solid border-black border-opacity-20">
                <Container>
                    <div className="flex">
                        <div className="pt-6 md:pt-12 2xl:pt-16 pb-4 border-r-2 border-solid border-black border-opacity-20 pr-6 w-full lg:w-52 lg:min-w-52 2xl:w-60 2xl:min-w-60">
                            <RadioTitle title="Key Highlights" />
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
                                Strategic positioning in the global defense
                                technology landscape
                            </h3>

                            {/* <div className="flex flex-wrap pb-4 md:pb-6 -mx-2 -mb-6 md:-mb-10 mt-8 md:mt-12 xl:mt-16">
                                {keyData.map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="text-center px-2 mb-6 md:mb-10 w-full sm:w-[50%] xl:w-[25%]"
                                        >
                                            <div className="font-heading text-[3.5rem] md:text-[4rem] lg:text-[4.5rem] xl:text-[5rem] 2xl:text-[6.25rem] leading-none">
                                                {parse(item.num)}
                                            </div>
                                            <h5 className="font-body text-[1.5rem] md:text-[2rem] xl:text-[1.75rem] 2xl:text-[2rem] font-medium mt-4 xl:mt-6">
                                                {item.title}
                                            </h5>
                                            <p className="text-[1.125rem] md:text-[1.25rem] xl:text-[1.125rem] 2xl:text-[1.25rem] mx-auto mt-2 xl:mt-3 max-w-80">
                                                {item.desc}
                                            </p>
                                        </div>
                                    );
                                })}
                            </div> */}

                            <div className="card-wrapper">
                                {cardsData?.map((card, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className={`card ${card.class}`}
                                        >
                                            <div className="inner ">
                                                <div className="left">
                                                    <div className="num">
                                                        {parse(card.num)}
                                                    </div>
                                                    <div className="bottom">
                                                        <h5>{card.title}</h5>
                                                        <p>{card.desc}</p>
                                                    </div>
                                                </div>
                                                <div className="right">
                                                    <Image
                                                        src={`/images/${card.img}`}
                                                        alt="img"
                                                        width={card.imgWidth}
                                                        height={card.imgHeight}
                                                        unoptimized
                                                        className="image"
                                                    />
                                                </div>

                                                <Image
                                                    src={`/images/${card.imgPattern1}`}
                                                    alt="img-pattern-1"
                                                    width={
                                                        card.imgPattern1Width
                                                    }
                                                    height={
                                                        card.imgPattern1Height
                                                    }
                                                    unoptimized
                                                    className="pattern pattern-1"
                                                />
                                                <Image
                                                    src={`/images/${card.imgPattern2}`}
                                                    alt="img-pattern-2"
                                                    width={
                                                        card.imgPattern2Width
                                                    }
                                                    height={
                                                        card.imgPattern2Height
                                                    }
                                                    unoptimized
                                                    className="pattern pattern-2"
                                                />
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

export default KeyHighlights;
