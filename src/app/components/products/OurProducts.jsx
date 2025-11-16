"use client";

import React from "react";
import Section from "../utils/Section";
import Container from "../utils/Container";
import RadioTitle from "../utils/RadioTitle";
import { Accordion, AccordionItem } from "@heroui/react";
import parse from "html-react-parser";
import Image from "next/image";

const productsData = [
    {
        id: 1,
        title: "Master Control System",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "img-master-control-system.png",
    },
    {
        id: 2,
        // title: "Container (Fixed)",
        title: "Container <span className='font-body'>(</span>Fixed<span className='font-body'>)</span>",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "img-container.png",
    },
    {
        id: 3,
        title: "Anti Drone Radar",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "img-anti-drone-radar.png",
    },
    {
        id: 4,
        title: "EO <span className='font-body'>/</span> IR",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "img-eo-ir.png",
    },
    {
        id: 5,
        title: "RF Jammer",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "img-rf-jammer.png",
    },
    {
        id: 6,
        title: "R C W S",
        desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        image: "img-rcws.png",
    },
];

const OurProducts = () => {
    const defaultContent =
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

    return (
        <Section className="section-our-products">
            <div className="border-b-2 border-solid border-black border-opacity-20">
                <Container>
                    <div className="flex">
                        <div className="pt-6 md:pt-12 2xl:pt-16 pb-4 w-full">
                            <RadioTitle title="Our Products" />
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
                                    className="accordion-item"
                                    // classNames={{
                                    //     trigger: "cursor-pointer", // Ensures cursor changes over entire trigger area
                                    // }}
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
                                            {product.desc}
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
