"use client";

import React from "react";
import Section from "../utils/Section";
import Container from "../utils/Container";
import RadioTitle from "../utils/RadioTitle";
import { Accordion, AccordionItem } from "@heroui/react";
import parse from "html-react-parser";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const productsData = [
    {
        id: 1,
        title: "Master Control System",
        desc: `
                <ul>
                    <li>Central Control System Console with monitoring capabilities to connected sub-system</li>
                    <li>Separate console for Detect & Neutralization system</li>
                </ul>
            `,
        image: "img-master-control-system.png",
    },
    {
        id: 2,
        title: "Container <span className='font-body'>(</span>Fixed<span className='font-body'>)</span>",
        desc: `
                <ul>
                    <li>20 ft Container (~2 blocks)</li>
                    <li>Air Condition</li>
                    <li>Generator</li>
                    <li>UPS: 2 hours without external power unit</li>
                    <li>Wiring, Cutting, Bracket, etc</li>
                </ul>
            `,
        image: "img-container.png",
    },
    {
        id: 3,
        title: "Anti Drone Radar",
        desc: `
                <ul>
                    <li>3D FMCW ASEA Radar</li>
                    <li>Detect/Identification: More than 10km (RCS 0.03m²)</li>
                    <li>Azimuth 360°, Elevation 90°</li>
                    <li>Threat Priority list included</li>
                </ul>
            `,
        image: "img-anti-drone-radar.png",
    },
    {
        id: 4,
        title: "EO <span className='font-body'>/</span> IR",
        desc: `
                <ul>
                    <li>Maximum Detection Range: < 8km (RCS 0.03m²)</li>
                    <li>Maximum Identification Range: <5km (RCS 0.03m²)</li>
                    <li>Al target identification and Tracking system included</li>
                </ul>
            `,
        image: "img-eo-ir.png",
    },
    {
        id: 5,
        title: "RF Jammer",
        desc: `
                <ul>
                    <li>Jammer Capability: GPS/GLONASS/Galileo/Beidou/QZSS/NAVIC, ETC.</li>
                    <li>Jamming Distance: < 8km</li>
                </ul>
            `,
        image: "img-rf-jammer.png",
    },
    {
        id: 6,
        title: "R C W S",
        desc: `
                <ul>
                    <li>Hard kill system capable of neutralizing target through remote control 40mm RCWS and more</li>
                    <li>Target Range: 2km or better</li>
                </ul>
            `,
        image: "img-rcws.png",
    },
    {
        id: 7,
        title: "Anti-Drone Defense Vehicle",
        desc: `
                <p>An Al-integrated tactical vehicle designed to detect, track, and neutralize unauthorized drones using advanced sensors and countermeasure systems.</p>
            `,
        image: "img-defence-vehicle.png",
    },
];

const OurProducts = () => {
    // gsap
    useGSAP(() => {
        const radioTitle = gsap.utils.toArray(
            ".section-our-products .radio-title > *"
        );

        const accordionItems = gsap.utils.toArray(
            ".products-accordion .accordion-item"
        );

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".section-our-products",
                start: "top 70%",
                markers: false,
            },
        });

        tl.to(radioTitle, {
            left: 0,
            opacity: 1,
            duration: 0.3,
            stagger: 0.1,
            ease: "power3.inout",
        });

        tl.to(accordionItems, {
            top: 0,
            opacity: 1,
            duration: 0.5,
            delay: 0.5,
            stagger: 0.3,
            ease: "power3.inout",
        });
    });

    return (
        <Section className="section-our-products">
            <div className="border-b-2 border-solid border-black border-opacity-20">
                <Container>
                    <div className="flex">
                        <div className="pt-6 md:pt-12 2xl:pt-16 pb-4 w-full">
                            <RadioTitle title="Our Products" className="hide" />
                        </div>
                        {/* <div className="grow"></div> */}
                    </div>
                </Container>
            </div>

            <div>
                <Container>
                    <Accordion
                        defaultExpandedKeys={["1"]}
                        className="products-accordion"
                        hideIndicator
                        showDivider={false}
                        disallowEmptySelection={true}
                    >
                        {productsData.map((product) => {
                            return (
                                <AccordionItem
                                    key={product.id}
                                    aria-label={`accordion-${product.id}`}
                                    title={parse(product.title)}
                                    keepContentMounted
                                    className="accordion-item opacity-0 relative top-8"
                                >
                                    <div className="inner">
                                        {product?.image && (
                                            <figure>
                                                <Image
                                                    src={`/images/${product?.image}`}
                                                    alt={product.title}
                                                    width="832"
                                                    height="478"
                                                    unoptimized
                                                    className="product-image"
                                                />
                                            </figure>
                                        )}
                                        <div className="desc">
                                            {parse(product.desc)}
                                        </div>
                                    </div>
                                </AccordionItem>
                            );
                        })}
                    </Accordion>
                </Container>
            </div>
        </Section>
    );
};

export default OurProducts;
