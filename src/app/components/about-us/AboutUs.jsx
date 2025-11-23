import React from "react";
import Section from "../utils/Section";
import Container from "../utils/Container";
import RadioTitle from "../utils/RadioTitle";

const AboutUs = () => {
    return (
        <Section className="bg-light-gray">
            <div className="border-b-2 border-solid border-black border-opacity-20">
                <Container>
                    <div className="flex">
                        <div className="pt-6 md:pt-12 2xl:pt-16 pb-4 border-r-2 border-solid border-black border-opacity-20 pr-6 w-full lg:w-44 lg:min-w-44 xl:w-52 xl:min-w-52 2xl:w-60 2xl:min-w-60">
                            <RadioTitle title="About Us" />
                        </div>
                        <div className="grow"></div>
                    </div>
                </Container>
            </div>
            <div className="">
                <Container>
                    <div className="flex flex-row-reverse lg:flex-row">
                        <div className="border-r-2 border-solid border-black border-opacity-20 lg:w-44 lg:min-w-44 xl:w-52 xl:min-w-52 2xl:w-60 2xl:min-w-60"></div>
                        <div className="grow p-6 md:p-10 max-md:pr-4 max-lg:!pl-0 lg:pr-0">
                            <h3 className="leading-snug md:leading-normal">
                                For a connected world, safeguarding every space
                                skies, and seas by integrating advanced
                                artificial intelligence with cutting-edge
                                detection and defense technologies.
                            </h3>
                            <p className="pt-6 md:pt-10 pb-2">
                                We exist to protect people, infrastructure, and
                                airspace from evolving drone-borne threats
                                empowering governments, defense agencies, and
                                industries with intelligent, adaptive, and
                                ethical solutions that enhance safety,
                                resilience, and operational confidence.
                            </p>
                        </div>
                    </div>
                </Container>
            </div>
        </Section>
    );
};

export default AboutUs;
