import React from "react";
import Section from "../utils/Section";
import Container from "../utils/Container";
import Image from "next/image";
import { Button } from "@heroui/react";
import Link from "next/link";

const MarketOverview = () => {
    return (
        <Section className="section-market-overview bg-gradient-to-b from-white from-[50%] to-[#CEDAC7] py-6 md:py-12 2xl:py-16 border-t-1 border-solid border-black border-opacity-20">
            <Container>
                <h3 className="md:text-center mb-6">
                    Global Anti-Drone System Market Overview
                </h3>

                <div className="text-[1.375rem] md:text-[1rem] lg:text-[1.25rem] xl:text-[1.375rem] 2xl:text-[1.5rem] relative mt-8 md:mt-24">
                    <Image
                        src="/images/img-market-overview.svg"
                        alt="img-market-overview"
                        width={580}
                        height={639}
                        className="mx-auto md:max-w-[18rem] lg:max-w-[24rem] xl:max-w-[30rem] 2xl:max-w-[clamp(30rem,5.0812rem+25.974vw,36.25rem)]"
                    />

                    <div className="flex gap-4 mb-4 md:absolute md:max-w-[30rem] 2xl:max-w-[33rem] md:-top-[6%] lg:-top-[4%] xl:lg:-top-[2%] left-[52%] 2xl:left-[51%]">
                        <span className="bg-[#325021] md:hidden border-4 border-solid border-[#B3D59E] w-4 min-w-4 h-4 relative top-2 rounded-full"></span>
                        <p>
                            UAE market growing ~20-30% CAGR, driven by heavy
                            UMEX-linked investments.
                        </p>
                    </div>
                    <div className="flex gap-4 mb-4 md:absolute md:max-w-[28rem] top-[26%] right-[70%] 2xl:right-[65%]">
                        <span className="bg-[#325021] md:hidden border-4 border-solid border-[#B3D59E] w-4 min-w-4 h-4 relative top-2 rounded-full"></span>
                        <p>
                            MENA demand driven by security, energy, and events,
                            with &gt;20% growth forecast.
                        </p>
                    </div>
                    <div className="flex gap-4 mb-4 md:absolute md:max-w-[35rem] top-[29%] left-[70%] 2xl:left-[67%]">
                        <span className="bg-[#325021] md:hidden border-4 border-solid border-[#B3D59E] w-4 min-w-4 h-4 relative top-2 rounded-full"></span>
                        <p>
                            GCC (Saudi, UAE, Qatar, Kuwait): focused procurement
                            for military bases, oil & gas assets and VIP
                            protection.
                        </p>
                    </div>
                    <div className="flex gap-4 mb-4 md:absolute md:max-w-[29rem] top-[70%] right-[65%] 2xl:right-[62%]">
                        <span className="bg-[#325021] md:hidden border-4 border-solid border-[#B3D59E] w-4 min-w-4 h-4 relative top-2 rounded-full"></span>
                        <p>
                            Australia is driving major C-UAS procurement and
                            backing local exporters like DroneShield and AIM
                            Defense.
                        </p>
                    </div>
                    <div className="flex gap-4 mb-4 md:absolute md:max-w-[35rem] top-[76%] left-[62%] 2xl:left-[59%]">
                        <span className="bg-[#325021] md:hidden border-4 border-solid border-[#B3D59E] w-4 min-w-4 h-4 relative top-2 rounded-full"></span>
                        <p>
                            Japan formal MOD budgeting for counter- drone
                            gear-new allocations to field detection and defeat
                            systems for Self-Defense Forces and bases.
                        </p>
                    </div>
                </div>

                <Button
                    as={Link}
                    href="/files/go-to-market-media-and-insights.pdf"
                    target="_blank"
                    download={true}
                    className="button table md:!px-10 !py-[1rem] md:!py-[1.125rem] mx-auto mt-8 md:mt-16 max-md:w-full max-sm:whitespace-normal !rounded-[4px]"
                >
                    Download Go To Market
                </Button>
            </Container>
        </Section>
    );
};

export default MarketOverview;
