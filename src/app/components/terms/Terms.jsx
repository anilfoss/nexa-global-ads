"use client";

import React from "react";
import Section from "../utils/Section";
import Container from "../utils/Container";
import "@/app/scss/legal.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const Terms = () => {
    // gsap
    useGSAP(() => {
        const ctx = gsap.context(() => {
            const splitDescription = new SplitText(
                ".section-legal .left-wrapper .desc-animation",
                {
                    type: "lines, words",
                    tag: "span",
                    linesClass: "lines",
                    wordsClass: "words",
                }
            );
            const leftContent = gsap.utils.toArray(
                ".section-legal .left-wrapper p"
            );
            const rightContent = gsap.utils.toArray([
                ".section-legal .right-wrapper > *",
            ]);

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".section-legal",
                    start: "top 50%",
                    markers: false,
                },
            });

            tl.to(".section-legal .desc-animation", {
                opacity: 1,
            })
                .to(splitDescription.words, {
                    top: 0,
                    opacity: 1,
                    duration: 1,
                    stagger: 0.05,
                    ease: "back.out(0.8)",
                })
                .to(
                    leftContent,
                    {
                        top: 0,
                        opacity: 1,
                        duration: 1,
                        stagger: 0.3,
                        ease: "back.out(0.8)",
                    },
                    "-=0.5"
                )
                .to(
                    rightContent,
                    {
                        top: 0,
                        opacity: 1,
                        duration: 1,
                        stagger: 0.3,
                        ease: "back.out(0.8)",
                    },
                    "-=0.5"
                );

            return () => {
                splitDescription.revert();
            };
        });

        return () => ctx.revert();
    }, []);

    return (
        <Section className="section-legal section-terms py-6 md:py-12 2xl:py-16 overflow-hidden">
            <Container>
                <div className="flex gap-6 lg:gap-8 xl:gap-10 max-lg:flex-col">
                    <div className="left-wrapper lg:w-[35%] lg:min-w-[35%] xl:w-[27%] xl:min-w-[27%]">
                        <h3 className="desc-animation mb-4 md:mb-6 xl:mb-10">
                            Terms and Conditions
                        </h3>
                        <p className="max-md:mb-2">
                            Effective Date: <strong>1 September 2025</strong>
                        </p>
                        <p>
                            Last Updated: <strong>24 November 2025</strong>
                        </p>
                    </div>
                    <div className="right-wrapper grow">
                        <div className="list-box">
                            <ol className="level-1">
                                <li>
                                    <h5>1. Acceptance of Terms</h5>
                                    <p>
                                        By accessing or using the website
                                        operated by <strong>Nexa Global</strong>{" "}
                                        (“Company,” “we,” “us,” or “our”), you
                                        agree to be bound by these Terms &
                                        Conditions (“Terms”). If you do not
                                        agree, you must discontinue use
                                        immediately.
                                    </p>
                                </li>
                            </ol>
                        </div>

                        <div className="list-box">
                            <ol className="level-1">
                                <li>
                                    <h5>2. Company Information</h5>
                                    {/* <p>
                                        The Company operates in the{" "}
                                        <strong>
                                            United Arab Emirates (UAE)
                                        </strong>{" "}
                                        and the{" "}
                                        <strong>
                                            Republic of Korea (South Korea)
                                        </strong>
                                        and complies with applicable local laws,
                                        including:
                                    </p> */}
                                    <p>
                                        The Company operates in the{" "}
                                        <strong>
                                            Republic of Korea (South Korea)
                                        </strong>
                                        and complies with applicable local laws,
                                        including:
                                    </p>
                                    <ul>
                                        {/* <li>
                                            UAE Federal Laws on Cybersecurity,
                                            Data Protection, and Commercial
                                            Transactions.
                                        </li> */}
                                        <li>
                                            Korea's Personal Information
                                            Protection Act (PIPA) and relevant
                                            technology/security regulations.
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                        </div>

                        <div className="list-box">
                            <ol className="level-1">
                                <li>
                                    <h5>3. Use of the Website</h5>
                                    <p>
                                        You agree to use the website only for
                                        lawful purposes and in accordance with
                                        these terms.
                                    </p>
                                    <p>
                                        You may <strong>not:</strong>
                                    </p>
                                    <ul>
                                        <li>
                                            Interfere with or attempt to disrupt
                                            website operation.
                                        </li>
                                        <li>
                                            Reverse engineer any technology
                                            showcased or referenced.
                                        </li>
                                        <li>
                                            Access areas of the website that are
                                            not public.
                                        </li>
                                        <li>
                                            Use the website to conduct or
                                            facilitate unlawful drone
                                            operations.
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                        </div>

                        <div className="list-box">
                            <ol className="level-1">
                                <li>
                                    <h5>4. Intellectual Property Rights</h5>
                                    <p>
                                        All website content—including text,
                                        graphics, designs, product descriptions,
                                        algorithms, brand names, and
                                        technology—is the exclusive property of
                                        the Company.
                                    </p>
                                    <p>
                                        You may not copy, reproduce, distribute,
                                        or exploit any content without{" "}
                                        <strong>written authorization</strong>.
                                    </p>
                                </li>
                            </ol>
                        </div>

                        <div className="list-box">
                            <ol className="level-1">
                                <li>
                                    <h5>5. Product and Service Information</h5>
                                    <p>
                                        Anti-drone technologies are subject to:
                                    </p>
                                    <ul>
                                        <li>National security regulations.</li>
                                        <li>Export controls.</li>
                                        <li>Licensing requirements.</li>
                                        <li>Restricted-use classifications.</li>
                                    </ul>
                                    <p>
                                        Descriptions on the website do{" "}
                                        <strong>not</strong> constitute:
                                    </p>
                                    <ul>
                                        <li>A binding offer.</li>
                                        <li>Legal advice.</li>
                                        <li>Security guarantees.</li>
                                        <li>Performance warranties.</li>
                                    </ul>
                                    <p>
                                        Actual system performance depends on
                                        operational environment, authorized
                                        deployment, and regulatory approvals.
                                    </p>
                                </li>
                            </ol>
                        </div>

                        <div className="list-box">
                            <ol className="level-1">
                                <li>
                                    <h5>6. Disclaimers</h5>

                                    <p>
                                        The website is provided “
                                        <strong>as is</strong>”, without any
                                        guarantees or warranties of any kind.
                                        The Company does not guarantee:
                                    </p>
                                    <ul>
                                        <li>
                                            Continuous, uninterrupted access.
                                        </li>
                                        <li>
                                            Accuracy or completeness of content.
                                        </li>
                                        <li>
                                            Error-free or virus-free operation.
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                        </div>

                        <div className="list-box">
                            <ol className="level-1">
                                <li>
                                    <h5>7. Limitation of Liability</h5>
                                    <p>
                                        To the fullest extent permitted under
                                        UAE and Korean law, the Company is{" "}
                                        <strong>not liable</strong> for:
                                    </p>
                                    <p>
                                        We ensure that such transfers occur in
                                        compliance with:
                                    </p>
                                    <ul>
                                        <li>
                                            Indirect, incidental, or
                                            consequential damages.
                                        </li>
                                        <li>
                                            Loss of data, revenue, profits, or
                                            security capability.
                                        </li>
                                        <li>
                                            Unauthorized access or misuse of the
                                            website.
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                        </div>

                        <div className="list-box">
                            <ol className="level-1">
                                <li>
                                    <h5>8. Third-Party Links</h5>
                                    <p>
                                        We are not responsible for third-party
                                        content or practices.
                                    </p>
                                    <p>
                                        Visiting third-party websites is at your
                                        own risk.
                                    </p>
                                </li>
                            </ol>
                        </div>

                        <div className="list-box">
                            <ol className="level-1">
                                <li>
                                    <h5>9. Indemnification</h5>
                                    <p>
                                        You agree to indemnify and hold the
                                        Company harmless from any claims arising
                                        out of:
                                    </p>
                                    <ul>
                                        <li>Your misuse of the website.</li>
                                        <li>Your violation of these terms.</li>
                                        <li>
                                            Your breach of any laws relating to
                                            drone operations.
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                        </div>

                        <div className="list-box">
                            <ol className="level-1">
                                <li>
                                    <h5>10. Governing Law and Jurisdiction</h5>
                                    <p>
                                        These terms are governed by the laws of:
                                    </p>
                                    <ul>
                                        {/* <li>
                                            <strong>
                                                United Arab Emirates (UAE)
                                            </strong>
                                        </li> */}
                                        <li>
                                            <strong>
                                                Republic of Korea (ROK)
                                            </strong>
                                        </li>
                                    </ul>
                                    <p>
                                        Disputes shall be resolved exclusively
                                        in the competent courts of:
                                    </p>
                                    <ul>
                                        {/* <li>
                                            <strong>
                                                Abu Dhabi Global Market (ADGM)
                                            </strong>{" "}
                                            or{" "}
                                            <strong>
                                                Dubai International Financial
                                                Centre (DIFC)
                                            </strong>{" "}
                                            for UAE matters.
                                        </li> */}
                                        <li>
                                            <strong>
                                                Seoul Central District Court
                                            </strong>{" "}
                                            for Korean matters.
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                        </div>

                        <div className="list-box">
                            <ol className="level-1">
                                <li>
                                    <h5>11. Modifications</h5>
                                    <p>
                                        We may update these terms at any time.
                                    </p>
                                    <p>
                                        Continued use of the website constitutes
                                        acceptance of updated terms.
                                    </p>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default Terms;
