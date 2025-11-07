"use client";

import React from "react";
import Section from "../utils/Section";
import Image from "next/image";
import { Button } from "@heroui/react";
import Link from "next/link";
import IconPhone from "../utils/icons/IconPhone";
import IconEmail from "../utils/icons/IconEmail";
import IconWeb from "../utils/icons/IconWeb";
import Marquee from "react-fast-marquee";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const ComingSoon = () => {
    // gsap

    useGSAP(() => {
        const timeout = setTimeout(() => {
            const animateTop = gsap.utils.toArray(
                ".section-coming-soon .top-wrapper"
            );
            const animateColumns = gsap.utils.toArray(
                ".section-coming-soon .middle-wrapper .col"
            );
            const animateButtons = gsap.utils.toArray(
                ".section-coming-soon .middle-wrapper [role='button']"
            );
            const animateBottom = gsap.utils.toArray(
                ".section-coming-soon .bottom-wrapper"
            );

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section-coming-soon",
                    start: "top 80%",
                    markers: false,
                },
            });

            // 🟢 1. TOP
            tl.to(animateTop, {
                top: 0,
                opacity: 1,
                duration: 1,
                ease: "back.in(1.7)",
            });

            // 🔵 2. BOTTOM
            tl.to(animateBottom, {
                top: 0,
                opacity: 1,
                duration: 1,
                ease: "back.out(1.7)",
            });

            // 🟡 3. MIDDLE
            tl.to(animateColumns, {
                top: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.3,
                ease: "back.out(1.7)",
            });
            tl.to(
                animateButtons,
                {
                    top: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.2,
                    ease: "back.out(1.7)",
                },
                "-=0.8"
            ); // starts slightly before columns end (optional for smoothness)
        }, 500);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <Section className="section-coming-soon bg-gradient-to-b from-[rgba(4,68,86,0.85)] from-40% to-[rgba(3,9,0,0.85)] to-100% text-white text-center flex flex-col justify-between gap-8 min-h-dvh overflow-hidden">
            {/* top */}
            <div className="top-wrapper font-heading text-5xl md:text-6xl lg:text-7xl xl:text-[5rem] 2xl:text-[6.25rem] font-semibold uppercase mt-4 md:mt-6 whitespace-nowrap tracking-[0.187rem] min-h-[48px] md:min-h-[60px] lg:min-h-[72px] xl:min-h-[80px] 2xl:min-h-[100px] overflow-hidden relative -top-8 opacity-0">
                <Marquee
                    autoFill
                    // delay={1.5}
                    speed={150}
                    // pauseOnHover
                    className="opacity-20 !overflow-visible"
                >
                    <span className="mx-5 md:mx-6 lg:mx-8 xl:mx-10 2xl:mx-12">
                        Smarter Skies. Safer Future
                    </span>
                </Marquee>
            </div>
            {/* middle */}
            <div className="middle-wrapper px-6">
                <div
                    // className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-5 mx-auto w-full max-w-[25rem] md:max-w-[32rem] lg:max-w-[104rem]"
                    className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-5 mx-auto w-full max-w-[28rem] md:max-w-[35rem] lg:max-w-[114rem]"
                >
                    <div className="col flex flex-col gap-3 lg:gap-[clamp(0.65rem,-0.3214rem+1.5179vw,1.5rem);] relative top-8 opacity-0">
                        <h6 className="text-lg md:text-[1.35rem] lg:text-[clamp(1.05rem,0.5357rem+0.8036vw,1.5rem)] text-white font-semibold uppercase">
                            NEXA GLOBAL Co. Ltd.
                        </h6>
                        <p className="text-xl md:text-[1.55rem] lg:text-[clamp(1.2rem,0.5714rem+0.9821vw,1.75rem)] leading-snug">
                            26-22, 5th floor, Sanbon-ro 323beon-gil, Gunpo-si,{" "}
                            <br className="" />
                            Gyeonggi-do, Republic of Korea
                        </p>
                    </div>
                    <div className="col flex flex-col gap-3 lg:gap-[clamp(0.65rem,-0.3214rem+1.5179vw,1.5rem);] relative top-8 opacity-0">
                        <h6 className="text-lg md:text-[1.35rem] lg:text-[clamp(1.05rem,0.5357rem+0.8036vw,1.5rem)] text-white font-semibold uppercase">
                            Nexa Global <span className="font-body">(</span>ADS
                            <span className="font-body">)</span> Pte. Ltd.
                        </h6>
                        <p className="text-xl md:text-[1.55rem] lg:text-[clamp(1.2rem,0.5714rem+0.9821vw,1.75rem)] leading-snug">
                            8 Eu Tong Sen Street, 13-86 The Central,
                            <br />
                            Singapore 059818
                        </p>
                    </div>
                    <div className="col flex flex-col gap-3 lg:gap-[clamp(0.65rem,-0.3214rem+1.5179vw,1.5rem);] relative top-8 opacity-0">
                        <h6 className="text-lg md:text-[1.35rem] lg:text-[clamp(1.05rem,0.5357rem+0.8036vw,1.5rem)] text-white font-semibold uppercase">
                            NEXA GLOBAL <span className="font-body">(</span>ADS
                            <span className="font-body">)</span> PRIVATE LIMITED
                        </h6>
                        <p className="text-xl md:text-[1.55rem] lg:text-[clamp(1.2rem,0.5714rem+0.9821vw,1.75rem)] leading-snug">
                            45 Basant Lok, 3rd Floor, Vasant Vihar,
                            <br />
                            New Delhi - 110 057, INDIA
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-12 lg:mt-14 xl:mt-16 2xl:mt-20">
                    <Button
                        as={Link}
                        href="tel:+6591299319"
                        color="default"
                        radius="full"
                        variant="flat"
                        className="bg-white bg-opacity-20 text-lg md:text-xl text-white font-medium leading-6 md:leading-7 px-4 py-[0.7rem] w-auto h-auto relative top-8 opacity-0"
                    >
                        <IconPhone className="max-md:h-5" /> +65 9129 9319
                    </Button>
                    <Button
                        as={Link}
                        href="mailto:info@nexaglobalads.com"
                        color="default"
                        radius="full"
                        variant="flat"
                        className="bg-white bg-opacity-20 text-lg md:text-xl text-white font-medium leading-6 md:leading-7 px-4 py-[0.7rem] w-auto h-auto relative top-8 opacity-0"
                    >
                        <IconEmail className="max-md:h-5" />{" "}
                        info@nexaglobalads.com
                    </Button>
                    <Button
                        as={Link}
                        href="/"
                        color="default"
                        radius="full"
                        variant="flat"
                        className="bg-white bg-opacity-20 text-lg md:text-xl text-white font-medium leading-6 md:leading-7 px-4 py-[0.7rem] w-auto h-auto relative top-8 opacity-0"
                    >
                        <IconWeb className="max-md:h-5" /> nexaglobalads.com
                    </Button>
                </div>
            </div>
            {/* bottom */}
            <div className="bottom-wrapper px-6 overflow-hidden relative top-8 opacity-0">
                <Image
                    src="/images/logo-large.svg"
                    alt="logo-large"
                    width={1835}
                    height={371}
                    priority
                    className="mx-auto -mb-[7.25%] opacity-20 w-full h-auto"
                />
            </div>
        </Section>
    );
};

export default ComingSoon;
