import React from "react";
import Section from "../utils/Section";
import Container from "../utils/Container";
import { Button } from "@heroui/react";
import Link from "next/link";
import Image from "next/image";

const AnnualReport = () => {
    return (
        <Section className="section-annual-report py-8 md:py-16">
            <Container>
                <div className="bg-overlay-4 text-white flex max-lg:flex-col-reverse justify-between gap-6 lg:gap-10 p-6 md:p-8 lg:p-10 rounded-xl overflow-hidden">
                    <div className="max-w-[70rem]">
                        <h3 className="max-sm:text-[clamp(2.25rem,1.9992rem+1.2539vw,2.5rem)] text-white">
                            Reports<span className="font-body">:</span>{" "}
                            Performance, Progress, Perspective and Purpose
                        </h3>
                        <p className="text-medium tracking-wider mt-4">
                            A comprehensive review of Nexa Global’s financial
                            results, operational milestones, technology
                            advancements, and strategic priorities for the year.
                        </p>
                        <div className="button-wrapper flex flex-wrap gap-4 mt-10 md:mt-14">
                            <Button
                                as={Link}
                                href="/files/financials-media-and-insights.pdf"
                                target="_blank"
                                download={true}
                                className="button button-border-white max-xl:grow lg:!px-14"
                            >
                                Download Report
                            </Button>
                            <Button
                                as={Link}
                                href="/media-and-insights"
                                className="button max-xl:grow lg:!px-14 max-sm:whitespace-normal"
                            >
                                See Media and Insights
                            </Button>
                        </div>
                    </div>
                    <div className="content-end">
                        <figure className="lg:-mb-[20%]">
                            <Image
                                src="/images/icon-download.svg"
                                alt="icon-download"
                                width={401}
                                height={385}
                                unoptimized
                                className="image max-w-48 md:max-w-60 lg:min-w-[18rem] xl:min-w-[20rem]"
                            />
                        </figure>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default AnnualReport;
