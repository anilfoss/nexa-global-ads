import React from "react";
import Section from "../utils/Section";
import Container from "../utils/Container";
import "@/app/scss/legal.scss";

const WebsiteDisclaimer = () => {
    return (
        <Section className="section-legal section-privacy-policy py-6 md:py-12 2xl:py-16 overflow-hidden">
            <Container>
                <div className="flex gap-6 lg:gap-8 xl:gap-10 max-lg:flex-col">
                    <div className="lg:w-[35%] lg:min-w-[35%] xl:w-[27%] xl:min-w-[27%]">
                        <h3>Website Disclaimer</h3>
                    </div>
                    <div className="grow">
                        <p>
                            Nexa Global ADS provides this website for general
                            informational and promotional purposes only.
                        </p>

                        <div className="list-box">
                            <ol className="level-1">
                                <li>
                                    <h5>
                                        1. No Professional or Security Advice
                                    </h5>
                                    <p>Nothing on this website constitutes:</p>
                                    <ul>
                                        <li>Security guarantees.</li>
                                        <li>Operational directives.</li>
                                        <li>Legal or regulatory advice.</li>
                                        <li>
                                            Military or tactical
                                            recommendations.
                                        </li>
                                    </ul>
                                    <p>
                                        Decisions about drone-threat mitigation
                                        must be made by licensed professionals
                                        and authorized agencies.
                                    </p>
                                </li>
                            </ol>
                        </div>

                        <div className="list-box">
                            <ol className="level-1">
                                <li>
                                    <h5>2. Accuracy of Information</h5>
                                    <p>
                                        While we strive for accuracy, the
                                        Company does not warrant that:
                                    </p>
                                    <ul>
                                        <li>
                                            Information is complete or up to
                                            date.
                                        </li>
                                        <li>
                                            Specifications reflect final or
                                            deployed product capabilities.
                                        </li>
                                        <li>
                                            Descriptions represent legally
                                            permissible use cases in all
                                            jurisdictions.
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                        </div>

                        <div className="list-box">
                            <ol className="level-1">
                                <li>
                                    <h5>3. No Warranty</h5>
                                    <p>
                                        All content is provided “as is” without
                                        warranties of any kind.
                                    </p>
                                </li>
                            </ol>
                        </div>

                        <div className="list-box">
                            <ol className="level-1">
                                <li>
                                    <h5>4. Technology Limitations</h5>
                                    <p>Anti-drone solutions depend on:</p>
                                    <ul>
                                        <li>Environmental variables.</li>
                                        <li>Interference levels.</li>
                                        <li>Regulatory restrictions.</li>
                                    </ul>
                                    <p>
                                        We disclaim liability for incorrect
                                        deployment, misuse, or unauthorized
                                        operation.
                                    </p>
                                </li>
                            </ol>
                        </div>

                        <div className="list-box">
                            <ol className="level-1">
                                <li>
                                    <h5>5. External Links</h5>
                                    <p>
                                        The website may contain third-party
                                        links. We do not endorse or control
                                        these websites.
                                    </p>
                                </li>
                            </ol>
                        </div>

                        <div className="list-box">
                            <ol className="level-1">
                                <li>
                                    <h5>6. No Liability</h5>
                                    <p>
                                        To the maximum extent permitted by law,
                                        the Company is not liable for:
                                    </p>
                                    <ul>
                                        <li>
                                            Damages resulting from reliance on
                                            website information.
                                        </li>
                                        <li>
                                            Cyberattacks or technical failures.
                                        </li>
                                        <li>
                                            Unauthorized access to your device
                                            or network.
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                        </div>

                        <div className="list-box">
                            <ol className="level-1">
                                <li>
                                    <h5>7. Regulatory Compliance</h5>
                                    <p>
                                        Use of anti-drone equipment may require:
                                    </p>
                                    <ul>
                                        <li>Government approvals.</li>
                                        <li>Special permits.</li>
                                        <li>
                                            Compliance with national-security
                                            regulations.
                                        </li>
                                    </ul>
                                </li>
                            </ol>
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};

export default WebsiteDisclaimer;
