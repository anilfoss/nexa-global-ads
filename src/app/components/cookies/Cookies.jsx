import React from "react";
import Section from "../utils/Section";
import Container from "../utils/Container";
import "@/app/scss/legal.scss";

const Cookies = () => {
    return (
        <Section className="section-legal section-privacy-policy py-6 md:py-12 2xl:py-16 overflow-hidden">
            <Container>
                <div className="flex gap-6 lg:gap-8 xl:gap-10 max-lg:flex-col">
                    <div className="lg:w-[35%] lg:min-w-[35%] xl:w-[27%] xl:min-w-[27%]">
                        <h3 className="mb-4 md:mb-6 xl:mb-10">
                            Cookies Policy
                        </h3>
                        <p className="max-md:mb-2">
                            Effective Date: <strong>1 September 2025</strong>
                        </p>
                    </div>
                    <div className="grow">
                        <div className="list-box">
                            <ol className="level-1">
                                <li>
                                    <h5>
                                        1. What Are Cookies
                                        <span className="font-body">?</span>
                                    </h5>
                                    <p>
                                        Cookies are small text files stored on
                                        your device to help provide a better
                                        website experience. We use cookies to
                                        enhance security, performance, and
                                        functionality.
                                    </p>
                                </li>
                            </ol>
                        </div>

                        <div className="list-box">
                            <ol className="level-1">
                                <li>
                                    <h5>2. Types of Cookies We Use</h5>

                                    <ol className="level-2">
                                        <li>
                                            <h6>a. Essential Cookies</h6>
                                            <p>
                                                Required for website operation.
                                            </p>
                                        </li>
                                        <li>
                                            <h6>
                                                b. Analytical{" "}
                                                <span className="font-body">
                                                    &
                                                </span>{" "}
                                                Performance Cookies
                                            </h6>
                                            <p>
                                                Used to measure traffic, user
                                                behavior, and site performance.
                                            </p>
                                        </li>
                                        <li>
                                            <h6>c. Functionality Cookies</h6>
                                            <p>
                                                Remember user preferences and
                                                location.
                                            </p>
                                        </li>
                                        <li>
                                            <h6>d. Security Cookies</h6>
                                            <p>
                                                Support threat detection and
                                                anti-fraud systems.
                                            </p>
                                        </li>
                                        <li>
                                            <h6>e. Third-Party Cookies</h6>
                                            <p>
                                                Analytics and embedded service
                                                providers may place cookies on
                                                your device.
                                            </p>
                                        </li>
                                    </ol>
                                </li>
                            </ol>
                        </div>

                        <div className="list-box">
                            <ol className="level-1">
                                <li>
                                    <h5>3. Why We Use Cookies</h5>
                                    <p>To:</p>
                                    <ul>
                                        <li>
                                            Improve security and
                                            threat-monitoring.
                                        </li>
                                        <li>Customize user experience.</li>
                                        <li>Measure engagement.</li>
                                        <li>Enhance system performance.</li>
                                    </ul>
                                </li>
                            </ol>
                        </div>

                        <div className="list-box">
                            <ol className="level-1">
                                <li>
                                    <h5>4. Managing Cookies</h5>
                                    <p>
                                        You may modify your browser settings to:
                                    </p>
                                    <ul>
                                        <li>Block cookies.</li>
                                        <li>Delete cookies.</li>
                                        <li>
                                            Receive notifications before cookies
                                            are placed.
                                        </li>
                                    </ul>
                                    <p>
                                        Blocking essential cookies may limit
                                        functionality.
                                    </p>
                                </li>
                            </ol>
                        </div>

                        <div className="list-box">
                            <ol className="level-1">
                                <li>
                                    <h5>5. Third-Party Providers</h5>
                                    <p>We may use:</p>
                                    <ul>
                                        <li>Google Analytics.</li>
                                        <li>Cloudflare Security Tools.</li>
                                        <li>
                                            Other performance or security
                                            monitoring services.
                                        </li>
                                    </ul>
                                    <p>
                                        These providers maintain their own
                                        privacy and cookie policies.
                                    </p>
                                </li>
                            </ol>
                        </div>

                        <div className="list-box">
                            <ol className="level-1">
                                <li>
                                    <h5>6. Changes to This Policy</h5>
                                    <p>
                                        We may update this Cookies Policy
                                        periodically.
                                    </p>
                                    <p>Changes are effective upon posting.</p>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default Cookies;
