"use client";

import React from "react";
import Container from "../utils/Container";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import IconPhoneGreen from "@/app/components/utils/icons/IconPhoneGreen";
import IconEmailGreen from "@/app/components/utils/icons/IconEmailGreen";
import IconWebGreen from "@/app/components/utils/icons/IconWebGreen";
import NewsletterForm from "./NewsletterForm";
import Disclaimer from "./Disclaimer";
import "@/app/scss/footer.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const footerData = {
    footerAddress: [
        {
            title: "Nexa Global ADS Pte. Ltd.",
            address:
                "8 Eu Tong Sen Street, 13-86 The Central, Singapore 059818",
        },
        {
            title: "Nexa Global Co. Ltd.",
            address:
                "26-22, 5th floor, Sanbon-ro 323beon-gil, Gunpo-si, Gyeonggi-do, Republic of Korea",
        },
    ],
    mainMenu: [
        {
            title: "Home",
            link: "/",
        },
        {
            title: "About",
            link: "/about-us",
        },
        {
            title: "Products",
            link: "/products",
        },
        {
            title: "Capabilities",
            link: "/capabilities",
        },
        {
            title: "Investor Relations",
            link: "/investor-relations",
        },
        {
            title: "Media and Insights",
            link: "/media-and-insights",
        },
        {
            title: "Careers",
            link: "/careers",
        },
        {
            title: "Contact Us",
            link: "/contact-us",
        },
    ],
    aboutMenu: [
        {
            title: "Vision & Mission",
            link: "/about-us#vision-mission",
        },
        {
            title: "Our Values",
            link: "/about-us#our-values",
        },
        {
            title: "Board Of Directors",
            link: "/about-us#board-of-directors",
        },
        // {
        //     title: "Management",
        //     link: "/management",
        // },
    ],
    contactMenu: [
        {
            title: "Email Us",
            link: "mailto:info@nexaglobalads.com",
        },
        {
            title: "Call Us",
            link: "tel:+6591299319",
        },
    ],
    contactIconsMenu: [
        {
            title: "+65 9129 9319",
            link: "tel:+6591299319",
            icon: "IconPhoneGreen",
            class: "icon-phone",
        },
        {
            title: "info@nexaglobalads.com",
            link: "mailto:info@nexaglobalads.com",
            icon: "IconEmailGreen",
            class: "icon-email",
        },
        {
            title: "nexaglobalads.com",
            link: "/",
            icon: "IconWebGreen",
            class: "icon-web",
        },
    ],
    bottomMenu: [
        {
            title: "Cookies",
            link: "/cookies",
        },
        {
            title: "Terms",
            link: "/terms",
        },
        {
            title: "Privacy Policy",
            link: "/privacy-policy",
        },
    ],
};

const iconMap = {
    IconPhoneGreen: IconPhoneGreen,
    IconEmailGreen: IconEmailGreen,
    IconWebGreen: IconWebGreen,
};

const Footer = () => {
    const pathname = usePathname();

    // gsap

    useGSAP(() => {
        const timeout = setTimeout(() => {
            const animates = gsap.utils.toArray(".footer-section .animate");

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".footer-section",
                    start: "top 80%",
                    markers: false,
                },
            });

            tl.from(animates, {
                y: 50,
                opacity: 0,
                duration: 0.5,
                stagger: 0.2,
                ease: "power3.inout",
            });
        }, 300);

        return () => clearTimeout(timeout);
    }, []);

    return (
        <footer className="footer-section bg-overlay-4 font-body text-base text-white text-opacity-60">
            {/* footer menu */}
            <div className="border-b-2 border-white border-opacity-30 overflow-hidden">
                <Container>
                    <div className="flex flex-wrap xl:flex-row -mx-6 md:-mx-8 xl:-mx-8 2xl:-mx-10">
                        <div className="p-6 md:p-8 xl:p-8 2xl:p-10 w-full lg:w-[34%] xl:w-[35%] 2xl:w-[32%] xl:max-w-[430px] 2xl:max-w-full">
                            <div>
                                {footerData?.footerAddress?.map(
                                    (address, index) => {
                                        return (
                                            <div
                                                key={index}
                                                className="animate mb-6 lg:mb-8 last-of-type:mb-0 group"
                                            >
                                                <div className="flex items-start gap-2 mb-4">
                                                    <Image
                                                        src="/images/logo-icon.svg"
                                                        alt="logo-icon"
                                                        width={36}
                                                        height={30}
                                                        unoptimized
                                                        className="max-md:max-h-[27px] rounded-none"
                                                    />
                                                    <h6 className="text-white font-semibold uppercase">
                                                        {address.title}
                                                    </h6>
                                                </div>
                                                <p className="group-first-of-type:max-w-[212px] group-last-of-type:max-w-[290px]">
                                                    {address.address}
                                                </p>
                                            </div>
                                        );
                                    }
                                )}
                            </div>

                            <div className="animate mt-6 sm:mt-8 md:mt-10 lg:mt-12">
                                <h6 className="text-white font-semibold uppercase mb-4">
                                    Contact
                                </h6>
                                <div className="flex flex-wrap gap-4">
                                    {footerData?.contactIconsMenu?.map(
                                        (item, index) => {
                                            const IconComponent =
                                                iconMap[item.icon];

                                            return (
                                                <Link
                                                    key={index}
                                                    href={item.link}
                                                    className="hover:text-active flex items-center gap-2 group transition-none"
                                                >
                                                    {IconComponent && (
                                                        <IconComponent className="w-auto h-[18px] brightness-0 invert opacity-60 group-hover:brightness-100 group-hover:invert-0 group-hover:opacity-100 transition-none" />
                                                    )}

                                                    <span>{item.title}</span>
                                                </Link>
                                            );
                                        }
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:hidden xl:flex p-0 lg:p-8 xl:p-8 2xl:p-10 lg:border-l-2 border-white border-opacity-30 w-full lg:w-[23%] xl:w-[8%] 2xl:w-[23%] xl:grow 2xl:grow-0"></div>
                        <div className="p-6 md:p-8 xl:p-8 2xl:p-10 max-lg:border-t-2 lg:border-l-2 border-white border-opacity-30 w-full sm:w-[33.33%] lg:w-[22%] xl:w-[19%] 2xl:w-[15%] xl:max-w-[240px] 2xl:max-w-full">
                            <h6 className="animate text-white font-medium uppercase mb-4">
                                Menu
                            </h6>
                            <ul className="animate flex flex-col gap-4">
                                {footerData?.mainMenu?.map((item, index) => {
                                    const isActive = pathname === item.link;
                                    return (
                                        <li key={index}>
                                            <Link
                                                href={item.link}
                                                className={`uppercase hover:text-active ${
                                                    isActive
                                                        ? "text-active"
                                                        : ""
                                                }`}
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="p-6 md:p-8 xl:p-8 2xl:p-10 max-lg:border-t-2 sm:border-l-2 border-white border-opacity-30 w-full sm:w-[33.33%] lg:w-[22%] xl:w-[19%] 2xl:w-[15%] xl:max-w-[240px] 2xl:max-w-full">
                            <h6 className="animate text-white font-medium uppercase mb-4">
                                About
                            </h6>
                            <ul className="animate flex flex-col gap-4">
                                {footerData?.aboutMenu?.map((item, index) => {
                                    const isActive = pathname === item.link;
                                    return (
                                        <li key={index}>
                                            <Link
                                                href={item.link}
                                                className={`uppercase hover:text-active ${
                                                    isActive
                                                        ? "text-active"
                                                        : ""
                                                }`}
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div className="p-6 md:p-8 xl:p-8 2xl:p-10 max-lg:border-t-2 sm:border-l-2 border-white border-opacity-30 w-full sm:w-[33.33%] lg:w-[22%] xl:w-[19%] 2xl:w-[15%] xl:max-w-[240px] 2xl:max-w-full">
                            <h6 className="animate text-white font-medium uppercase mb-4">
                                Contact Us
                            </h6>
                            <ul className="animate flex flex-col gap-4">
                                {footerData?.contactMenu?.map((item, index) => {
                                    const isActive = pathname === item.link;
                                    return (
                                        <li key={index}>
                                            <Link
                                                href={item.link}
                                                className={`uppercase hover:text-active ${
                                                    isActive
                                                        ? "text-active"
                                                        : ""
                                                }`}
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </div>
                </Container>
            </div>

            {/* newsletter */}
            <div className="border-b-2 border-white border-opacity-30">
                <Container>
                    <div className="flex flex-col lg:flex-row justify-between gap-6 md:gap-8 xl:gap-8 2xl:gap-10 py-6 md:py-8 xl:py-8 2xl:py-10">
                        <h6 className="animate text-white font-medium md:whitespace-nowrap">
                            Subscribe to our newsletter
                        </h6>
                        <NewsletterForm className="animate w-full max-w-5xl xl:max-w-3xl 2xl:max-w-5xl" />
                    </div>
                </Container>
            </div>

            {/* disclaimer */}
            <div className="border-b-2 border-white border-opacity-30">
                <Container>
                    <div className="flex flex-col lg:flex-row justify-between gap-6 lg:gap-8 xl:gap-8 2xl:gap-10 pt-6 md:pt-8 xl:pt-8 2xl:pt-10">
                        <h6 className="animate text-white font-medium">
                            Disclaimer
                        </h6>
                        {/* <Disclaimer className="animate lg:text-right w-full lg:max-w-[65%] xl:max-w-3xl 2xl:max-w-5xl" /> */}
                        <div className="animate text-white text-opacity-60 lg:text-right w-full lg:max-w-[65%] xl:max-w-3xl 2xl:max-w-5xl">
                            Nexa Global ADS provides this website for general
                            informational and promotional purposes only and does
                            not offer professional, legal, military, regulatory,
                            or security advice; all decisions relating to
                            drone-threat mitigation must be made by licensed
                            professionals and authorized agencies. While we
                            strive for accuracy, we do not guarantee that the
                            information is complete, current, or reflective of
                            final product capabilities, nor that described use
                            cases are legally permissible in all
                            jurisdictions...
                            <Link
                                href="/disclaimer"
                                className="text-white hover:text-active inline-block ml-1"
                            >
                                Read more
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-between gap-6 sm:gap-8 xl:gap-8 2xl:gap-10 pb-6 md:pb-8 xl:pb-8 2xl:pb-10 mt-8 xl:mt-8 2xl:mt-10">
                        <div className="animate text-white text-opacity-100">
                            &copy; 2025 Nexa Global ADS. All Rights Reserved.
                        </div>

                        <div className="flex flex-wrap gap-6 md:gap-8">
                            {footerData?.bottomMenu?.map((item, index) => {
                                const isActive = pathname === item.link;
                                return (
                                    <Link
                                        key={index}
                                        href={item.link}
                                        className={`animate text-white hover:text-active uppercase flex items-center group transition-none ${
                                            isActive ? "!text-active" : ""
                                        }`}
                                    >
                                        <span>{item.title}</span>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </Container>
            </div>

            {/* bottom logo */}
            <div className="pt-12 md:pt-16 lg:pt-20 xl:pt-24 2xl:pt-32 overflow-hidden">
                <Container>
                    <Image
                        src="/images/logo-large.svg"
                        alt="logo-large"
                        width={1835}
                        height={371}
                        priority
                        className="animate mx-auto -mb-[7.25%] opacity-20 w-full h-auto"
                    />
                </Container>
            </div>
        </footer>
    );
};

export default Footer;
