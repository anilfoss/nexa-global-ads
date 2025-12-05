"use client";

import React, { useEffect, useRef, useState } from "react";
import Section from "../utils/Section";
import Container from "../utils/Container";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, SplitText);

const HeroCareers = () => {
    const videoRef = useRef(null);
    const [showPlaceholder, setShowPlaceholder] = useState(true);

    // 🔹 Wait 0.5 seconds before playing video from the start
    useEffect(() => {
        const timer = setTimeout(() => {
            if (videoRef.current) {
                videoRef.current.currentTime = 0; // start from beginning
                videoRef.current.play().catch((err) => {
                    console.warn("Autoplay blocked:", err);
                });
            }
            // setShowPlaceholder(false);
            setShowPlaceholder(true);
        }, 500);

        return () => clearTimeout(timer);
    }, []);

    // 🔹 GSAP text animation
    useGSAP(() => {
        const splitTitle = new SplitText(".section-career-hero .title", {
            type: "lines, words, chars",
            tag: "span",
            charsClass: "chars",
        });

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.to(".title", { opacity: 1 }).to(splitTitle.chars, {
            top: 0,
            opacity: 1,
            stagger: 0.05,
            ease: "back.out(1.7)",
        });

        return () => {
            splitTitle.revert();
        };
    });

    return (
        <Section className="section-career-hero content-end pt-28 md:pt-40 pb-12 md:pb-20 min-h-svh relative z-[1] overflow-hidden">
            {/* Text and content */}
            <Container className="relative z-[2]">
                <div className="relative">
                    <h1 className="title text-white text-[clamp(2.4rem,1.7981rem+3.0094vw,3rem)] sm:text-[clamp(3rem,0.4803rem+6.2992vw,3.5rem)] md:text-[clamp(3rem,-1.5176rem+9.4118vw,4.5rem)] lg:text-[clamp(3.8rem,-0.4286rem+6.6071vw,7.5rem)] font-semibold sm:flex sm:flex-col opacity-0">
                        <span className="outer-span">
                            Join Our{" "}
                            <span className="text-highlight">Force</span>
                        </span>
                    </h1>
                </div>
            </Container>

            {/* Dark overlay */}
            <div className="bg-overlay-1 w-full h-full absolute inset-0 z-[1]" />

            {/* Placeholder Image (for first 0.5s) */}
            <div
                className={`absolute inset-0 z-[0] transition-opacity duration-700 ${
                    showPlaceholder
                        ? "opacity-100"
                        : "opacity-0 pointer-events-none"
                }`}
            >
                <Image
                    src="/images/career-video-placeholder.jpg"
                    alt="Hero video placeholder"
                    fill
                    priority
                    unoptimized
                    className="object-cover w-full h-full"
                />
            </div>

            {/* Background Video */}
            <video
                ref={videoRef}
                className="absolute inset-0 w-full h-full object-cover z-[-1]"
                loop
                muted
                playsInline
                preload="auto"
            >
                <source src="/images/career-video.mp4" type="video/mp4" />
            </video>
        </Section>
    );
};

export default HeroCareers;
