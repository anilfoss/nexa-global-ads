import React from "react";
import Section from "../utils/Section";
import Container from "../utils/Container";
import RadioTitle from "../utils/RadioTitle";

const VisionMission = () => {
    return (
        <Section className="bg-light-gray overflow-hidden">
            <div className="border-b-2 border-solid border-black border-opacity-20">
                <Container>
                    <div className="flex">
                        <div className="pt-6 md:pt-12 2xl:pt-16 pb-4 border-r-2 border-solid border-black border-opacity-20 pr-6 w-full lg:w-[17rem] lg:min-w-[17rem] xl:w-[17rem] xl:min-w-[17rem] 2xl:w-[17rem] 2xl:min-w-[17rem]">
                            <RadioTitle title="Our Vision & Mission" />
                        </div>
                        <div className="grow"></div>
                    </div>
                </Container>
            </div>
            <div className="">
                <Container>
                    <div className="flex flex-row-reverse lg:flex-row">
                        <div className="border-r-2 border-solid border-black border-opacity-20 lg:w-[17rem] lg:min-w-[17rem] xl:w-[17rem] xl:min-w-[17rem] 2xl:w-[17rem] 2xl:min-w-[17rem]"></div>
                        <div className="flex flex-col sm:flex-row grow">
                            <div className="p-6 pl-0 md:p-10 md:pl-0 lg:px-8 xl:p-10 w-full sm:w-[45%]">
                                <h3 className="leading-snug md:leading-normal">
                                    Vision
                                </h3>
                                <p className="pt-6 md:pt-10 pb-2">
                                    To lead global innovation in AI-powered
                                    airspace and seas protection, ensuring
                                    safety, privacy, and trust above every
                                    horizon.
                                </p>
                            </div>
                            <div className="p-6 max-sm:pl-6 max-sm:pr-12 md:p-10 lg:pl-8 lg:pr-0 xl:p-10 xl:pr-0 max-sm:-mx-6 max-sm:border-t-2 sm:border-l-2 border-solid border-black border-opacity-20 max-sm:w-[calc(100%+3rem+2px)] sm:w-[55%]">
                                <h3 className="leading-snug md:leading-normal">
                                    Mission
                                </h3>
                                <p className="pt-6 md:pt-10 pb-2">
                                    To develop next-generation counter-UAS
                                    systems, a premium integrated defense
                                    platform that harness AI analytics to
                                    predict, prevent, and respond to emerging
                                    threats in every space, skies and seas.
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        </Section>
    );
};

export default VisionMission;
