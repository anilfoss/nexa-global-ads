import React from "react";
import Section from "./Section";
import Container from "./Container";
import Image from "next/image";

const PageHeader = ({
    title,
    description,
    img,
    imgWidth,
    imgHeight,
    className,
}) => {
    return (
        <Section
            className={`section-page-header text-center flex justify-center items-center mt-[4.375rem] py-12 md:py-16 min-h-72 md:min-h-80 xl:min-h-96 relative z-[1] ${
                className ? className : ""
            }`}
        >
            <Container>
                <div className="flex flex-col gap-5">
                    {title && <h1>{title}</h1>}
                    {description && (
                        <h4 className="text-muted">{description}</h4>
                    )}
                </div>
            </Container>
            {img && (
                <Image
                    src={`/images/${img}`}
                    alt={title}
                    width={imgWidth}
                    height={imgHeight}
                    priority
                    unoptimized
                    className="w-full h-full object-cover object-center absolute inset-0 -z-[1] rounded-none shadow-none"
                />
            )}
            <div className="overlay bg-[#F0F5F9] bg-opacity-85 absolute inset-0 -z-[1]"></div>
        </Section>
    );
};

export default PageHeader;
