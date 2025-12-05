import React from "react";
import Section from "../utils/Section";
import Container from "../utils/Container";
import "@/app/scss/legal.scss";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const PrivacyPolicy = () => {
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
        <Section className="section-legal section-privacy-policy py-6 md:py-12 2xl:py-16 overflow-hidden">
            <Container>
                <div className="flex gap-6 lg:gap-8 xl:gap-10 max-lg:flex-col">
                    <div className="left-wrapper lg:w-[35%] lg:min-w-[35%] xl:w-[27%] xl:min-w-[27%]">
                        <h3 className="desc-animation mb-4 md:mb-6 xl:mb-10">
                            Privacy Policy
                        </h3>
                        <p className="max-md:mb-2">
                            Effective Date: <strong>1 September 2025</strong>
                        </p>
                        <p>
                            Last Updated: <strong>24 November 2025</strong>
                        </p>
                    </div>
                    <div className="right-wrapper grow">
                        <p>
                            This Privacy Policy <strong>(“Policy”)</strong>{" "}
                            describes how <strong>Nexa Global</strong> (“
                            <strong>Company</strong>,” “<strong>we</strong>,” “
                            <strong>us</strong>,” or “<strong>our</strong>”)
                            collects, uses, discloses, and protects personal
                            information obtained through our website, products,
                            services, and any related digital platforms
                            (collectively, the “<strong>Services</strong>”). We
                            are committed to safeguarding the privacy,
                            confidentiality, and security of all individuals (“
                            <strong>you</strong>” or “<strong>Users</strong>”)
                            who interact with our Services.
                        </p>
                        <p>
                            By accessing or using our Services, you agree to the
                            terms of this Policy. If you do not agree, please
                            discontinue use immediately.
                        </p>

                        <div className="list-box">
                            <ol className="level-1">
                                <li>
                                    <h5>1. Information We Collect</h5>
                                    <p>
                                        We may collect the following categories
                                        of information:
                                    </p>
                                    <ol className="level-2">
                                        <li>
                                            <h6>
                                                1.1 Personal Information
                                                Provided Directly by You.
                                            </h6>
                                            <ul>
                                                <li>
                                                    Name, email address, phone
                                                    number, organization name,
                                                    job title.
                                                </li>
                                                <li>
                                                    Inquiry or contact-form
                                                    submissions.
                                                </li>
                                                <li>
                                                    Information provided during
                                                    demos, consultations, or
                                                    service requests.
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h6>
                                                1.2 Automatically Collected
                                                Information
                                            </h6>
                                            <p>
                                                When you access our website, we
                                                may automatically collect:
                                            </p>
                                            <ul>
                                                <li>
                                                    IP address, device
                                                    identifiers, browser type,
                                                    operating system.
                                                </li>
                                                <li>
                                                    Geolocation data
                                                    (approximate).
                                                </li>
                                                <li>
                                                    Website usage metrics,
                                                    clickstream activity, access
                                                    times, referring URLs.
                                                </li>
                                                <li>
                                                    Cookies and similar
                                                    technologies, including
                                                    analytics and performance
                                                    trackers.
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h6>
                                                1.3 Sensitive or
                                                Security-Related Information
                                            </h6>
                                            <p>
                                                Due to the nature of anti-drone
                                                and airspace-security
                                                operations, we may process:
                                            </p>
                                            <ul>
                                                <li>
                                                    Operational environment
                                                    details.
                                                </li>
                                                <li>
                                                    Threat data, incident
                                                    reports, and drone-detection
                                                    logs (when applicable).
                                                </li>
                                                <li>
                                                    Information voluntarily
                                                    shared for risk-assessment
                                                    evaluations.
                                                </li>
                                            </ul>
                                            <p>
                                                We do not collect biometric,
                                                financial, or government-issued
                                                identification numbers unless
                                                required by law or regulatory
                                                compliance obligations.
                                            </p>
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                        </div>

                        <div className="list-box">
                            <ol className="level-1">
                                <li>
                                    <h5>2. How We Use Your Information</h5>
                                    <p>
                                        We process personal data for the
                                        following lawful purposes:
                                    </p>
                                    <ol className="level-2">
                                        <li>
                                            <ul>
                                                <li>
                                                    To operate, maintain, and
                                                    improve our Services.
                                                </li>
                                                <li>
                                                    To respond to inquiries,
                                                    demo requests, and customer
                                                    support communications.
                                                </li>
                                                <li>
                                                    To provide threat-detection
                                                    or airspace-security
                                                    solutions, including system
                                                    integrations and technical
                                                    assessments.
                                                </li>
                                                <li>
                                                    To send administrative
                                                    information, security
                                                    alerts, or service updates.
                                                </li>
                                                <li>
                                                    For analytics, usage
                                                    monitoring, and performance
                                                    optimization.
                                                </li>
                                                <li>
                                                    To comply with legal,
                                                    regulatory, or
                                                    national-security
                                                    requirements.
                                                </li>
                                                <li>
                                                    To enforce our contractual
                                                    rights, protect our
                                                    intellectual property, and
                                                    prevent misuse or
                                                    unauthorized access.
                                                </li>
                                                <li>
                                                    For marketing and
                                                    business-development
                                                    communications (with opt-out
                                                    options available).
                                                </li>
                                            </ul>
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                        </div>

                        <div className="list-box">
                            <ol className="level-1">
                                <li>
                                    <h5>
                                        3. Lawful Basis for Processing{" "}
                                        <span className="font-body">(</span>If
                                        Applicable Under GDPR
                                        <span className="font-body">)</span>
                                    </h5>
                                    <p>We process information based on:</p>
                                    <ol className="level-2">
                                        <li>
                                            <ul>
                                                <li>
                                                    <strong>
                                                        Contractual necessity.
                                                    </strong>
                                                </li>
                                                <li>
                                                    <strong>
                                                        Legitimate interests
                                                    </strong>{" "}
                                                    (e.g., security enhancement,
                                                    fraud prevention, service
                                                    optimization).
                                                </li>
                                                <li>
                                                    <strong>Consent</strong>{" "}
                                                    (when required for marketing
                                                    or cookies).
                                                </li>
                                                <li>
                                                    <strong>
                                                        Legal obligations.
                                                    </strong>
                                                </li>
                                                <li>
                                                    <strong>
                                                        Vital interests
                                                    </strong>{" "}
                                                    and{" "}
                                                    <strong>
                                                        public safety
                                                    </strong>
                                                    , particularly in relation
                                                    to airspace-security
                                                    threats.
                                                </li>
                                            </ul>
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                        </div>

                        <div className="list-box">
                            <ol className="level-1">
                                <li>
                                    <h5>
                                        4. Sharing and Disclosure of Information
                                    </h5>
                                    <p>We may share information with:</p>
                                    <ol className="level-2">
                                        <li>
                                            <h6>4.1 Service Providers</h6>
                                            <p>
                                                Trusted third-party vendors
                                                assisting with:
                                            </p>
                                            <ul>
                                                <li>Hosting, cloud storage.</li>
                                                <li>
                                                    Analytics and performance
                                                    monitoring.
                                                </li>
                                                <li>
                                                    Email and communication
                                                    services.
                                                </li>
                                                <li>
                                                    Security infrastructure.
                                                </li>
                                            </ul>
                                            <p>
                                                All vendors are contractually
                                                obligated to maintain strict
                                                confidentiality.
                                            </p>
                                        </li>
                                        <li>
                                            <h6>
                                                4.2 Government, Security, and
                                                Regulatory Authorities
                                            </h6>
                                            <p>We may disclose data:</p>
                                            <ul>
                                                <li>
                                                    When required by law, court
                                                    order, or government
                                                    request.
                                                </li>
                                                <li>
                                                    For national-security,
                                                    counter-drone, and
                                                    public-safety purposes.
                                                </li>
                                                <li>
                                                    During threat assessments,
                                                    investigations, or security
                                                    incidents.
                                                </li>
                                            </ul>
                                        </li>
                                        <li>
                                            <h6>4.3 Corporate Transactions</h6>
                                            <p>
                                                In the event of a merger,
                                                acquisition, restructuring, or
                                                asset sale, data may be
                                                transferred under binding
                                                confidentiality agreements.
                                            </p>
                                            <p>
                                                We <strong>never</strong> sell
                                                personal information.
                                            </p>
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                        </div>

                        <div className="list-box">
                            <ol className="level-1">
                                <li>
                                    <h5>5. Data Retention</h5>
                                    <p>
                                        We retain information for as long as
                                        necessary to:
                                    </p>
                                    <ul className="list-alpha">
                                        <li>
                                            (a) fulfill the purposes outlined in
                                            this Policy,
                                        </li>
                                        <li>
                                            (b) comply with legal, regulatory,
                                            or security obligations, and
                                        </li>
                                        <li>
                                            (c) support operational
                                            requirements.
                                        </li>
                                    </ul>
                                    <p>
                                        Threat reports, detection logs, and
                                        operational data may be retained longer
                                        when necessary for national-security or
                                        compliance reasons.
                                    </p>
                                </li>
                            </ol>
                        </div>

                        <div className="list-box">
                            <ol className="level-1">
                                <li>
                                    <h5>6. Data Security</h5>
                                    <p>
                                        We implement strict technical and
                                        organizational safeguards, including:
                                    </p>
                                    <ul>
                                        <li>
                                            Encryption (in transit and at rest).
                                        </li>
                                        <li>Access-control management</li>
                                        <li>
                                            Network firewalls and intrusion
                                            detection.
                                        </li>
                                        <li>
                                            Regular security audits and
                                            penetration tests.
                                        </li>
                                        <li>
                                            Zero-trust architecture principles
                                            where applicable.
                                        </li>
                                    </ul>
                                    <p>
                                        Despite our best efforts, no system can
                                        guarantee absolute security. You
                                        acknowledge that the transmission of
                                        information via the internet carries
                                        inherent risks.
                                    </p>
                                </li>
                            </ol>
                        </div>

                        <div className="list-box">
                            <ol className="level-1">
                                <li>
                                    <h5>7. International Data Transfers</h5>
                                    <p>
                                        Your information may be transferred and
                                        processed in jurisdictions outside your
                                        country of residence.
                                    </p>
                                    <p>
                                        We ensure that such transfers occur in
                                        compliance with:
                                    </p>
                                    <ul>
                                        <li>
                                            Standard Contractual Clauses (SCCs).
                                        </li>
                                        <li>
                                            Applicable data-protection laws and
                                            cross-border transfer frameworks.
                                        </li>
                                        <li>
                                            Contractual safeguards ensuring data
                                            integrity and security.
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                        </div>

                        <div className="list-box">
                            <ol className="level-1">
                                <li>
                                    <h5>8. Your Rights</h5>
                                    <p>
                                        Depending on your jurisdiction, you may
                                        have the right to:
                                    </p>
                                    <ul>
                                        <li>
                                            Access, correct, or update personal
                                            information.
                                        </li>
                                        <li>
                                            Request deletion or restriction of
                                            processing.
                                        </li>
                                        <li>
                                            Object to certain types of
                                            processing.
                                        </li>
                                        <li>
                                            Withdraw consent at any time (where
                                            applicable).
                                        </li>
                                        <li>
                                            Request a copy of your data in a
                                            portable format.
                                        </li>
                                    </ul>
                                    <p>
                                        To exercise your rights, contact us at{" "}
                                        <a href="mailto:info@nexaglobalads.com">
                                            <strong>
                                                info@nexaglobalads.com
                                            </strong>
                                        </a>
                                    </p>
                                </li>
                            </ol>
                        </div>

                        <div className="list-box">
                            <ol className="level-1">
                                <li>
                                    <h5>
                                        9. Cookies and Tracking Technologies
                                    </h5>
                                    <p>We use cookies for:</p>
                                    <ul>
                                        <li>
                                            Essential website functionality.
                                        </li>
                                        <li>Performance and analytics.</li>
                                        <li>Security monitoring.</li>
                                        <li>User experience enhancement.</li>
                                    </ul>
                                    <p>
                                        You may modify your browser settings to
                                        block cookies; however, this may impact
                                        functionality.
                                    </p>
                                </li>
                            </ol>
                        </div>

                        <div className="list-box">
                            <ol className="level-1">
                                <li>
                                    <h5>10. Links to Third-Party Sites</h5>
                                    <p>
                                        Our website may contain external links.
                                        We are not responsible for the privacy
                                        practices, content, or security of
                                        third-party websites.
                                    </p>
                                </li>
                            </ol>
                        </div>

                        <div className="list-box">
                            <ol className="level-1">
                                <li>
                                    <h5>
                                        11. Children
                                        <span className="font-body">'</span>s
                                        Privacy
                                    </h5>
                                    <p>
                                        Our Services are{" "}
                                        <strong>
                                            not intended for individuals under
                                            the age of 18
                                        </strong>
                                        . We do not knowingly collect personal
                                        information from minors.
                                    </p>
                                </li>
                            </ol>
                        </div>

                        <div className="list-box">
                            <ol className="level-1">
                                <li>
                                    <h5>12. Changes to This Policy</h5>
                                    <p>
                                        We reserve the right to update or amend
                                        this Policy at any time.
                                    </p>
                                    <p>
                                        All changes will be posted with a
                                        revised effective date.
                                    </p>
                                    <p>
                                        Continued use of our Services after
                                        changes constitutes acceptance of the
                                        updated Policy.
                                    </p>
                                </li>
                            </ol>
                        </div>

                        <div className="list-box">
                            <ol className="level-1">
                                <li>
                                    <h5>13. Contact Information</h5>
                                    <p>
                                        If you have questions, requests, or
                                        complaints regarding this Policy,
                                        contact us:
                                    </p>
                                    <p>
                                        <strong>Nexa Global</strong>
                                    </p>
                                    <p>
                                        Email:{" "}
                                        <a href="mailto:info@nexaglobalads.com">
                                            <strong>
                                                info@nexaglobalads.com
                                            </strong>
                                        </a>
                                    </p>
                                    <p>Address: </p>
                                    <p className="mb-1">
                                        <strong>NEXA GLOBAL CO. LTD.</strong>
                                    </p>
                                    <p>
                                        26-22, 5th floor, Sanbon-ro 323beon-gil,
                                        Gunpo-si, Gyeonggi-do, Republic of Korea
                                    </p>
                                    <p className="mb-1">
                                        <strong>
                                            Nexa Global (ADS) Pte. Ltd.
                                        </strong>
                                    </p>
                                    <p>
                                        8 Eu Tong Sen Street, 13-86 The Central,
                                        Singapore 059818
                                    </p>
                                    <p className="mb-1">
                                        <strong>
                                            NEXA GLOBAL (ADS) PRIVATE LIMITED{" "}
                                        </strong>
                                    </p>
                                    <p>
                                        45 Basant Lok, 3rd Floor, Vasant Vihar,
                                        New Delhi - 110 057 INDIA
                                    </p>
                                    <p>
                                        Phone:{" "}
                                        <a href="tel:+6591299319">
                                            <strong>+65 9129 9319</strong>
                                        </a>
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

export default PrivacyPolicy;
