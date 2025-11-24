"use client";

import React, { useRef, useState } from "react";
import Section from "../utils/Section";
import Container from "../utils/Container";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const capabilitiesData = [
    {
        num: "01",
        title: "Military Defense",
        desc: "Governments worldwide are accelerating C-UAS procurement to protect forward operating bases, critical infrastructure, and high-value assets from emerging drone threats. Nexa's multi-layered architecture meets strict defense standards for reliability, lawful engagement, and evidence chain.",
        image: "img-defence.jpg",
        imgWidth: 1920,
        imgHeight: 1280,
    },
    {
        num: "02",
        title: "Maritime Drone Radar Solution",
        desc: "Ports, oil rigs, and coastal installations face unique challenges from drone reconnaissance and payload delivery. Nexa's maritime-grade radar systems provide 360° coverage in harsh environments, with salt-fog resistant hardware and integration with existing vessel management systems.",
        image: "img-maritime.jpg",
        imgWidth: 2000,
        imgHeight: 1333,
    },
    {
        num: "03",
        title: "Shipborne Anti-Drone Radar Solution",
        desc: "Naval forces require compact, stabilized C-UAS solutions for deployment on ships, patrol boats, and offshore platforms. Nexa delivers shipborne radar modules with gyro stabilization, reduced SWaP-C footprint, and seamless integration with ship command and control networks.",
        image: "img-shipborne.jpg",
        imgWidth: 2000,
        imgHeight: 1124,
    },
    {
        num: "04",
        title: "AI Integrated Drone Defense System",
        desc: "Modern defense demands intelligent threat classification to reduce false alarms and operator fatigue. Nexa's AI models leverage multi-modal sensor fusion (radar, RF, EO/IR) to distinguish birds, weather, and benign aircraft from genuine drone threats, with continuous model improvement.",
        image: "img-integrated.jpg",
        imgWidth: 2000,
        imgHeight: 796,
    },
    {
        num: "05",
        title: "AI Anti-Drone Radar",
        desc: "Commercial and enterprise sectors—including airports, stadiums, energy facilities, and data centers—need rapid, autonomous detection without dedicated security teams. Nexa's AI-driven radar provides real-time alerts, automatic tracking, and API integration for smart building ecosystems.",
        image: "img-anti-drone.jpg",
        imgWidth: 2000,
        imgHeight: 1333,
    },
];

const Capabilities = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRef = useRef(null);

    // gsap 1
    useGSAP(() => {
        const splitTitle = new SplitText(".section-capabilities .title", {
            type: "lines, words, chars",
            tag: "span",
            charsClass: "chars",
        });

        const tl1 = gsap.timeline({
            scrollTrigger: {
                trigger: ".section-capabilities",
                start: "top 60%",
                markers: false,
            },
        });

        tl1.to(splitTitle.chars, {
            opacity: 1,
            top: 0,
            stagger: 0.03,
            ease: "back.out(1.7)",
        });

        return () => {
            splitTitle.revert();
        };
    });

    // gsap 2
    useGSAP(() => {
        const section = document.querySelector(".section-capabilities");
        const listBox = document.querySelector(".section-capabilities ul");
        const listItem = gsap.utils.toArray(".section-capabilities ul li");
        const button = document.querySelector(".section-capabilities .button");
        const descEl = document.querySelector(
            ".section-capabilities .description"
        );
        if (!descEl) return;

        const tl2 = gsap.timeline({
            scrollTrigger: {
                trigger: ".section-capabilities",
                start: "top 30%",
                markers: false,
            },
        });

        // list box
        tl2.to(listBox, {
            opacity: 1,
            top: 0,
            duration: 0.3,
            ease: "power3.inOut",
            onStart: () => section.classList.add("section-active"),
        });

        // list items
        tl2.to(listItem, {
            opacity: 1,
            top: 0,
            duration: 1,
            delay: 0.3,
            stagger: 0.5,
            ease: "back.out(1.7)",
        });

        // description
        const splitDesc = new SplitText(descEl, {
            type: "lines, words",
            tag: "span",
            linesClass: "lines",
            wordsClass: "words",
        });

        gsap.to(
            splitDesc.words,
            {
                top: 0,
                opacity: 1,
                stagger: 0.02,
                duration: 1,
                ease: "back.out(0.8)",
            },
            "-=0.3"
        );

        // button
        tl2.to(button, {
            opacity: 1,
            bottom: 0,
            duration: 1.5,
            delay: -1,
            ease: "bounce.out",
        });

        return () => {
            splitDesc.revert();
        };
    }, [activeIndex]);

    // gsap 3
    useGSAP(() => {
        const timerBars = gsap.utils.toArray(".timer-bar");
        const images = gsap.utils.toArray(".bg-image");

        gsap.set(images, { opacity: 0, scale: 1.3 });
        gsap.set(images[0], { opacity: 1, scale: 1 });

        const tl3 = gsap.timeline({
            scrollTrigger: {
                trigger: ".section-capabilities",
                start: "top 50%",
                markers: false,
            },
            repeat: -1,
            repeatDelay: 0,
            defaults: { ease: "none" },
        });

        timerBars.forEach((bar, i) => {
            tl3.to(bar, {
                width: "100%",
                duration: 8,
                onStart: () => {
                    setActiveIndex(i);
                    // fade out all, fade in current
                    gsap.to(images, { opacity: 0, duration: 1 });
                    gsap.to(images[i], { opacity: 1, duration: 1 });
                    // sync scale with bar animation (1.3 → 1 over 8s)
                    gsap.fromTo(
                        images[i],
                        { scale: 1.3 },
                        { scale: 1, duration: 8, ease: "power2.out" }
                    );
                },
            });
        });

        // Reset bars at the end before loop restarts
        tl3.to(timerBars, { width: "0%", duration: 0.8 });
    }, []);

    return (
        <Section
            ref={sectionRef}
            className="section-capabilities relative z-[1] overflow-hidden"
        >
            <div className="py-6 md:py-12 2xl:py-16 border-b-2 border-solid border-white border-opacity-20 relative z-[1]">
                <Container>
                    <h2 className="title text-white">
                        Our Advance Capabilities
                    </h2>
                </Container>
            </div>

            <div className="relative z-[1]">
                <Container>
                    <div className="flex flex-col lg:flex-row">
                        <div className="content-end max-md:pr-6 lg:pr-8 xl:pr-14 2xl:pr-16 w-full md:w-[65%] xl:w-[70%]">
                            <ul className="bg-green-light bg-opacity-60 md:bg-opacity-80 px-6 md:px-8 lg:px-12 mt-12 md:mt-14 mb-8 lg:my-14 2xl:my-20 max-md:w-full table max-w-lg md:max-w-3xl rounded-[1.25rem]">
                                {capabilitiesData.map((item, index) => (
                                    <li key={index}>
                                        <h5 className="flex gap-4 py-5 md:py-6 lg:py-8 2xl:py-10">
                                            <span className="num font-semibold">
                                                {item.num}
                                            </span>
                                            <span className="text">
                                                {item.title}
                                            </span>
                                        </h5>

                                        <div className="timer-wrapper bg-green-dark bg-opacity-30 w-full h-[1px] relative overflow-hidden">
                                            <div className="timer-bar bg-green-dark absolute w-0 h-full top-0 left-0 z-[1]" />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="text-white flex justify-between flex-col pr-6 md:pr-8 lg:pr-0 lg:pl-8 xl:pl-14 2xl:pl-16 pt-0 pb-12 md:pb-14 lg:py-14 2xl:py-20 lg:w-[35%] xl:w-[30%] relative after:content-[''] after:w-[1px] after:h-[200vh] after:border-l-2 after:border-solid after:border-white after:border-opacity-20 after:absolute after:left-full after:lg:left-0 after:bottom-0">
                            <div className="description text-medium mb-8 opacity-0 w-full max-w-lg md:max-w-[calc(65%+1.2rem)] lg:max-w-full">
                                {capabilitiesData[activeIndex].desc}
                            </div>

                            <Button
                                as={Link}
                                href="/capabilities"
                                className="button !w-full max-w-lg md:max-w-[calc(65%+1.2rem)] lg:max-w-full"
                            >
                                See All Capabilities
                            </Button>
                        </div>
                    </div>
                </Container>
            </div>

            <div className="bg-overlay-2 w-full h-full absolute inset-0 z-0"></div>

            {capabilitiesData.map((item, index) => (
                <Image
                    key={index}
                    src={`/images/${item.image}`}
                    alt={item.image}
                    width={item.imgWidth}
                    height={item.imgHeight}
                    priority
                    unoptimized
                    className="bg-image object-cover w-full h-full absolute inset-0 -z-[1] opacity-0 transition-opacity duration-1000"
                />
            ))}
        </Section>
    );
};

export default Capabilities;

// ====================================================================================

// "use client";

// import React, { useRef } from "react";
// import Section from "../utils/Section";
// import Container from "../utils/Container";
// import Image from "next/image";
// import Link from "next/link";
// import { Button } from "@heroui/react";
// import gsap from "gsap";
// import { useGSAP } from "@gsap/react";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import { SplitText } from "gsap/SplitText";

// gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

// const capabilitiesData = [
//     {
//         num: "01",
//         title: "Military Defense",
//         image: "img-defence.jpg",
//         imgWidth: 1920,
//         imgHeight: 1280,
//     },
//     {
//         num: "02",
//         title: "Maritime Drone Radar Solution",
//         image: "img-maritime.jpg",
//         imgWidth: 2000,
//         imgHeight: 1333,
//     },
//     {
//         num: "03",
//         title: "Shipborne Anti-Drone Radar Solution",
//         image: "img-shipborne.jpg",
//         imgWidth: 2000,
//         imgHeight: 1124,
//     },
//     {
//         num: "04",
//         title: "AI Integrated Drone Defense System",
//         image: "img-integrated.jpg",
//         imgWidth: 2000,
//         imgHeight: 796,
//     },
//     {
//         num: "05",
//         title: "AI Anti-Drone Radar",
//         image: "img-anti-drone.jpg",
//         imgWidth: 2000,
//         imgHeight: 1333,
//     },
// ];

// const Capabilities = () => {
//     const sectionRef = useRef(null);

//     // gsap 1
//     useGSAP(() => {
//         const splitTitle = new SplitText(".section-capabilities .title", {
//             type: "lines, words, chars",
//             tag: "span",
//             charsClass: "chars",
//         });

//         const tl1 = gsap.timeline({
//             scrollTrigger: {
//                 trigger: ".section-capabilities",
//                 start: "top 60%",
//                 markers: false,
//             },
//         });

//         tl1.to(splitTitle.chars, {
//             opacity: 1,
//             top: 0,
//             stagger: 0.03,
//             ease: "back.out(1.7)",
//         });

//         return () => {
//             splitTitle.revert();
//         };
//     });

//     // gsap 2
//     useGSAP(() => {
//         const listBox = document.querySelector(".section-capabilities ul");
//         const listItem = gsap.utils.toArray(".section-capabilities ul li");
//         const button = document.querySelector(".section-capabilities .button");

//         const tl2 = gsap.timeline({
//             scrollTrigger: {
//                 trigger: ".section-capabilities",
//                 start: "top 30%",
//                 markers: false,
//             },
//         });

//         tl2.to(listBox, {
//             opacity: 1,
//             top: 0,
//             duration: 0.3,
//             ease: "power3.inOut",
//         });

//         tl2.to(listItem, {
//             opacity: 1,
//             top: 0,
//             duration: 1,
//             delay: 0.3,
//             stagger: 0.5,
//             ease: "back.out(1.7)",
//         });

//         tl2.to(button, {
//             opacity: 1,
//             bottom: 0,
//             duration: 1.5,
//             ease: "bounce.out",
//         });
//     });

//     // gsap 3
//     useGSAP(() => {
//         const timerBars = gsap.utils.toArray(".timer-bar");
//         const images = gsap.utils.toArray(".bg-image");

//         gsap.set(images, { opacity: 0, scale: 1.3 });
//         gsap.set(images[0], { opacity: 1, scale: 1 });

//         const tl3 = gsap.timeline({
//             scrollTrigger: {
//                 trigger: ".section-capabilities",
//                 start: "top 50%",
//                 markers: false,
//             },
//             repeat: -1,
//             repeatDelay: 0,
//             defaults: { ease: "none" },
//         });

//         timerBars.forEach((bar, i) => {
//             tl3.to(bar, {
//                 width: "100%",
//                 duration: 8,
//                 onStart: () => {
//                     // fade out all, fade in current
//                     gsap.to(images, { opacity: 0, duration: 1 });
//                     gsap.to(images[i], { opacity: 1, duration: 1 });
//                     // sync scale with bar animation (1.3 → 1 over 8s)
//                     gsap.fromTo(
//                         images[i],
//                         { scale: 1.3 },
//                         { scale: 1, duration: 8, ease: "power2.out" }
//                     );
//                 },
//             });
//         });

//         // Reset bars at the end before loop restarts
//         tl3.to(timerBars, { width: "0%", duration: 0.8 });
//     }, []);

//     return (
//         <Section
//             ref={sectionRef}
//             className="section-capabilities relative z-[1] overflow-hidden"
//         >
//             <div className="py-6 md:py-12 2xl:py-16 border-b-2 border-solid border-white border-opacity-20 relative z-[1]">
//                 <Container>
//                     <h2 className="title text-white">
//                         Our Advance Capabilities
//                     </h2>
//                 </Container>
//             </div>

//             <div className="relative z-[1]">
//                 <Container>
//                     <div className="flex flex-col lg:flex-row">
//                         <div className="content-end max-md:pr-6 lg:pr-8 xl:pr-14 2xl:pr-16 w-full md:w-[65%] xl:w-[70%]">
//                             <ul className="bg-green-light bg-opacity-60 md:bg-opacity-80 px-6 md:px-8 lg:px-12 mt-12 md:mt-14 mb-8 lg:my-14 2xl:my-20 max-md:w-full table max-w-lg md:max-w-3xl rounded-[1.25rem]">
//                                 {capabilitiesData.map((item, index) => (
//                                     <li key={index}>
//                                         <h5 className="flex gap-4 py-5 md:py-6 lg:py-8 2xl:py-10">
//                                             <span className="num font-semibold">
//                                                 {item.num}
//                                             </span>
//                                             <span className="text">
//                                                 {item.title}
//                                             </span>
//                                         </h5>

//                                         <div className="timer-wrapper bg-green-dark bg-opacity-30 w-full h-[1px] relative overflow-hidden">
//                                             <div className="timer-bar bg-green-dark absolute w-0 h-full top-0 left-0 z-[1]" />
//                                         </div>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>

//                         <div className="content-end pr-6 md:pr-8 lg:pr-0 lg:pl-8 xl:pl-14 2xl:pl-16 pt-0 pb-12 md:pb-14 lg:py-14 2xl:py-20 lg:w-[35%] xl:w-[30%] relative after:content-[''] after:w-[1px] after:h-[200vh] after:border-l-2 after:border-solid after:border-white after:border-opacity-20 after:absolute after:left-full after:lg:left-0 after:bottom-0">
//                             <Button
//                                 as={Link}
//                                 href="/capabilities"
//                                 className="button !w-full max-w-lg md:max-w-[calc(65%+1.2rem)] lg:max-w-full"
//                             >
//                                 See All Capabilities
//                             </Button>
//                         </div>
//                     </div>
//                 </Container>
//             </div>

//             <div className="bg-overlay-2 w-full h-full absolute inset-0 z-0"></div>

//             {capabilitiesData.map((item, index) => (
//                 <Image
//                     key={index}
//                     src={`/images/${item.image}`}
//                     alt={item.image}
//                     width={item.imgWidth}
//                     height={item.imgHeight}
//                     priority
//                     unoptimized
//                     className="bg-image object-cover w-full h-full absolute inset-0 -z-[1] opacity-0 transition-opacity duration-1000"
//                 />
//             ))}
//         </Section>
//     );
// };

// export default Capabilities;
