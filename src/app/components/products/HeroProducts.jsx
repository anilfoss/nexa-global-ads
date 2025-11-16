"use client";

import React, { useEffect, useRef, useState } from "react";
import Section from "../utils/Section";
import Container from "../utils/Container";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, SplitText);

const HeroProducts = () => {
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
        const splitTitle = new SplitText(".section-products-hero .title", {
            type: "lines, words, chars",
            tag: "span",
            charsClass: "chars",
        });
        const splitDescription = new SplitText(
            ".section-products-hero .description",
            {
                type: "lines, words",
                tag: "span",
                linesClass: "lines",
                wordsClass: "words",
            }
        );

        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.to(".title", { opacity: 1 })
            .to(splitTitle.chars, {
                top: 0,
                opacity: 1,
                stagger: 0.05,
                ease: "back.out(1.7)",
            })
            .to(".description", { opacity: 1 }, "-=0.5")
            .to(
                splitDescription.words,
                {
                    top: 0,
                    opacity: 1,
                    stagger: 0.02,
                    duration: 1,
                    ease: "back.out(0.8)",
                },
                "-=0.3"
            );

        return () => {
            splitTitle.revert();
            splitDescription.revert();
        };
    });

    return (
        <Section className="section-products-hero content-end pt-28 md:pt-40 pb-12 md:pb-20 min-h-svh relative z-[1] overflow-hidden">
            {/* Text and content */}
            <Container className="relative z-[2]">
                <div className="relative">
                    <h1 className="title text-white text-[3rem] sm:text-[clamp(3rem,0.4803rem+6.2992vw,3.5rem)] md:text-[clamp(3rem,-1.5176rem+9.4118vw,4.5rem)] lg:text-[clamp(3.8rem,-0.4286rem+6.6071vw,7.5rem)] font-semibold sm:flex sm:flex-col opacity-0">
                        <span className="outer-span">
                            End-to-end{" "}
                            <span className="text-highlight">AI</span>
                        </span>
                        <span className="outer-span sm:indent-[3rem] md:indent-[9rem] lg:indent-[clamp(17rem,4.4286rem+19.6429vw,28rem)] ">
                            {" "}
                            Counter{" "}
                            <span className="text-highlight">
                                UAS solutions
                            </span>
                        </span>
                    </h1>

                    <div className="description text-medium lg:text-[clamp(0.9rem,0.5rem+0.625vw,1.25rem)] text-white text-opacity-70 max-lg:mt-4 max-w-4xl lg:max-w-[clamp(16rem,6.8571rem+14.2857vw,24rem)] lg:absolute lg:left-0 lg:bottom-[clamp(0rem,-1.7143rem+2.6786vw,1.5rem)] opacity-0">
                        Deployable as fixed perimeter stacks, mobile tactical
                        units, and shipborne systems
                    </div>
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
                    src="/images/products-video-placeholder.jpg"
                    alt="products video placeholder"
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
                <source src="/images/products-video.mp4" type="video/mp4" />
            </video>
        </Section>
    );
};

export default HeroProducts;
