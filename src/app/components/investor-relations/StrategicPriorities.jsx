import React from "react";
import Section from "../utils/Section";
import Container from "../utils/Container";
import RadioTitle from "../utils/RadioTitle";
import Image from "next/image";
import { Button } from "@heroui/react";
import Link from "next/link";

const strategicData = [
    {
        title: "Scale Deployments",
        desc: "Expand government + enterprise installations globally",
        image: "img-scale-deployment.svg",
        imgWidth: "642",
        imgHeight: "342",
        class: "item-scale-deployment",
    },
    {
        title: "Expand Maritime",
        desc: "Grow maritime + shipborne product portfolio",
        image: "img-expand-maritime.svg",
        imgWidth: "253",
        imgHeight: "234",
        class: "item-expand-maritime",
    },
    {
        title: "Build Recurring Revenue",
        desc: "Increase SLA penetration and model update subscriptions",
        image: "img-build-revenue.svg",
        imgWidth: "146",
        imgHeight: "251",
        class: "item-build-revenue",
    },
    {
        title: "Strengthen AI",
        desc: "Enhance AI models and retraining infrastructure",
        image: "img-strengthen-ai.svg",
        imgWidth: "242",
        imgHeight: "242",
        class: "item-strengthen-ai",
    },
];

const StrategicPriorities = () => {
    return (
        <Section className="section-strategic-priorities bg-light-gray">
            <div className="border-b-2 border-solid border-black border-opacity-20">
                <Container>
                    <div className="flex">
                        <div className="pt-6 md:pt-12 2xl:pt-16 pb-4 pr-6 md:pr-10 lg:pr-6 border-r-2 border-solid border-black border-opacity-20 w-full lg:w-[16.5rem] lg:min-w-[16.5rem]">
                            <RadioTitle title="Strategic Priorities" />
                        </div>
                        <div className="grow"></div>
                    </div>
                </Container>
            </div>
            <div className="">
                <Container>
                    <div className="flex flex-col-reverse lg:flex-row">
                        <div className="content-end p-6 pt-0 pl-0 md:pr-10 md:pb-10 md:pt-0 lg:pt-6 lg:pr-6 border-r-2 border-solid border-black border-opacity-20 lg:w-[16.5rem] lg:min-w-[16.5rem]">
                            <Button
                                as={Link}
                                href="/contact-us"
                                className="button !px-7 max-sm:w-full"
                            >
                                Get in Touch
                            </Button>
                        </div>
                        <div className="grow p-6 pl-0 md:p-10 md:pl-0 lg:pr-0 lg:pl-10 max-lg:border-r-2 border-solid border-black border-opacity-20">
                            <h3 className="leading-snug md:leading-normal">
                                Our roadmap to market leadership in the C-UAS
                                sector
                            </h3>

                            <div className="grid-wrapper mt-8 md:mt-12">
                                {strategicData.map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className={`item ${item.class}`}
                                        >
                                            <Image
                                                src={`/images/${item.image}`}
                                                alt={item.title}
                                                width={item.imgWidth}
                                                height={item.imgHeight}
                                                unoptimized
                                                className="image"
                                            />
                                            <h5>{item.title}</h5>
                                            <p>{item.desc}</p>
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

export default StrategicPriorities;
