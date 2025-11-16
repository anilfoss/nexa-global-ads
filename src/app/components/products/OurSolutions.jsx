"use client";

import React, { useEffect, useRef, useState } from "react";
import Section from "../utils/Section";
import Container from "../utils/Container";
import RadioTitle from "../utils/RadioTitle";
import { Button, Tab, Tabs } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const AUTOPLAY_TIME = 20000;
const FPS = 20;

const OurSolutions = () => {
    const tabKeys = [
        "Fixed and Perimeter Stacks",
        "Mobile and Rapid Deploy",
        "Maritime and Shipborne Systems",
        "Managed Services and Integration",
    ];
    const [selected, setSelected] = useState(tabKeys[0]);
    const [progress, setProgress] = useState(0);
    const tabRefs = useRef({});

    // for progress bar
    useEffect(() => {
        const step = 100 / (AUTOPLAY_TIME / FPS);

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    const currentIndex = tabKeys.indexOf(selected);
                    const nextIndex = (currentIndex + 1) % tabKeys.length;
                    setSelected(tabKeys[nextIndex]);
                    return 0;
                }
                return prev + step;
            });
        }, FPS);

        return () => clearInterval(interval);
    }, [selected]);

    // start tabs from left below 767px

    const scrollActiveTabIntoView = () => {
        if (window.innerWidth >= 768) return; // only on horizontal/mobile

        const el = tabRefs.current[selected];
        if (el) {
            el.scrollIntoView({
                behavior: "smooth",
                block: "nearest",
                inline: "start",
            });
        }
    };

    useEffect(() => {
        scrollActiveTabIntoView();
    }, [selected]);

    return (
        <Section className="section-our-solutions bg-overlay-1 text-white">
            <Container>
                <div className="flex flex-col">
                    <div className="max-md:px-6 pt-6 md:pt-12 2xl:pt-16 pb-4 max-md:-mx-6 max-md:border-b-2 md:border-r-2 border-solid border-white border-opacity-20 md:w-[30%] xl:w-[30%] 2xl:w-[35%]">
                        <RadioTitle title="Our Solutions" color="white" />
                    </div>

                    <Tabs
                        aria-label="product-tabs"
                        isVertical
                        variant="underlined"
                        classNames={{
                            wrapper: "product-tabs-wrapper",
                        }}
                        selectedKey={selected}
                        onSelectionChange={(key) => {
                            setSelected(key);
                            setProgress(0);
                        }}
                    >
                        {tabKeys.map((key, index) => (
                            <Tab
                                key={key}
                                title={
                                    <div
                                        ref={(el) =>
                                            (tabRefs.current[key] = el)
                                        }
                                        className="px-6 -mx-6"
                                    >
                                        <span className="text">{key}</span>
                                        {selected === key && (
                                            <div
                                                className="progress-bar"
                                                style={{
                                                    width: `${progress}%`,
                                                }}
                                            ></div>
                                        )}
                                    </div>
                                }
                            >
                                {key === "Fixed and Perimeter Stacks" && (
                                    <div className="inner">
                                        <figure>
                                            <Image
                                                src="/images/img-fix-perimeter-stacks.png"
                                                alt="img-fix-perimeter-stacks"
                                                width="1772"
                                                height="957"
                                                unoptimized
                                                className="image"
                                            />
                                        </figure>
                                        <div>
                                            <h3 className="text-white mb-3">
                                                Fixed and Perimeter Stacks
                                            </h3>
                                            <p className="opacity-80">
                                                (Container / Mast / Tower)
                                            </p>
                                            <p>
                                                Persistent 24/7 protection for
                                                high-value sites (airports,
                                                refineries, data centres).
                                            </p>
                                        </div>
                                        <div>
                                            <h5>What we deliver</h5>
                                            <p>
                                                Hardened container or mast
                                                solutions with AESA 3D FMCW
                                                radar, RF direction finding,
                                                EO/IR cameras, AI fusion C2 and
                                                evidence-grade logging. Systems
                                                are built for continuous
                                                operation, integrated with
                                                SOC/ATC and delivered with SOPs
                                                and regulatory support. (Mirrors
                                                the layered fixed-site approach
                                                used by leader vendors).
                                            </p>
                                        </div>
                                        <div>
                                            <h5>Use cases and outcomes</h5>
                                            <p>
                                                Reduce false alarms, deliver
                                                forensic evidence for
                                                prosecution, and provide early
                                                warning so response teams act
                                                before airspace incursions
                                                escalate.
                                            </p>
                                        </div>

                                        <div className="button-wrapper">
                                            <Button
                                                as={Link}
                                                href="/"
                                                className="button"
                                            >
                                                Request Site Assessment
                                            </Button>
                                            <Button
                                                as={Link}
                                                href="/"
                                                className="button button-border-white"
                                            >
                                                Download Fixed Stack Datasheet
                                            </Button>
                                        </div>
                                    </div>
                                )}

                                {key === "Mobile and Rapid Deploy" && (
                                    <div className="inner">
                                        <figure>
                                            <Image
                                                src="/images/img-fix-perimeter-stacks.png"
                                                alt="img-fix-perimeter-stacks"
                                                width="1772"
                                                height="957"
                                                unoptimized
                                                className="image"
                                            />
                                        </figure>
                                        <div>
                                            <h3 className="text-white mb-3">
                                                Mobile and Rapid Deploy
                                            </h3>
                                            <p className="opacity-80">
                                                (Container / Mast / Tower)
                                            </p>
                                            <p>
                                                Persistent 24/7 protection for
                                                high-value sites (airports,
                                                refineries, data centres).
                                            </p>
                                        </div>
                                        <div>
                                            <h5>What we deliver</h5>
                                            <p>
                                                Hardened container or mast
                                                solutions with AESA 3D FMCW
                                                radar, RF direction finding,
                                                EO/IR cameras, AI fusion C2 and
                                                evidence-grade logging. Systems
                                                are built for continuous
                                                operation, integrated with
                                                SOC/ATC and delivered with SOPs
                                                and regulatory support. (Mirrors
                                                the layered fixed-site approach
                                                used by leader vendors).
                                            </p>
                                        </div>
                                        <div>
                                            <h5>Use cases and outcomes</h5>
                                            <p>
                                                Reduce false alarms, deliver
                                                forensic evidence for
                                                prosecution, and provide early
                                                warning so response teams act
                                                before airspace incursions
                                                escalate.
                                            </p>
                                        </div>

                                        <div className="button-wrapper">
                                            <Button
                                                as={Link}
                                                href="/"
                                                className="button"
                                            >
                                                Request Site Assessment
                                            </Button>
                                            <Button
                                                as={Link}
                                                href="/"
                                                className="button button-border-white"
                                            >
                                                Download Fixed Stack Datasheet
                                            </Button>
                                        </div>
                                    </div>
                                )}

                                {key === "Maritime and Shipborne Systems" && (
                                    <div className="inner">
                                        <figure>
                                            <Image
                                                src="/images/img-fix-perimeter-stacks.png"
                                                alt="img-fix-perimeter-stacks"
                                                width="1772"
                                                height="957"
                                                unoptimized
                                                className="image"
                                            />
                                        </figure>
                                        <div>
                                            <h3 className="text-white mb-3">
                                                Maritime and Shipborne Systems
                                            </h3>
                                            <p className="opacity-80">
                                                (Container / Mast / Tower)
                                            </p>
                                            <p>
                                                Persistent 24/7 protection for
                                                high-value sites (airports,
                                                refineries, data centres).
                                            </p>
                                        </div>
                                        <div>
                                            <h5>What we deliver</h5>
                                            <p>
                                                Hardened container or mast
                                                solutions with AESA 3D FMCW
                                                radar, RF direction finding,
                                                EO/IR cameras, AI fusion C2 and
                                                evidence-grade logging. Systems
                                                are built for continuous
                                                operation, integrated with
                                                SOC/ATC and delivered with SOPs
                                                and regulatory support. (Mirrors
                                                the layered fixed-site approach
                                                used by leader vendors).
                                            </p>
                                        </div>
                                        <div>
                                            <h5>Use cases and outcomes</h5>
                                            <p>
                                                Reduce false alarms, deliver
                                                forensic evidence for
                                                prosecution, and provide early
                                                warning so response teams act
                                                before airspace incursions
                                                escalate.
                                            </p>
                                        </div>

                                        <div className="button-wrapper">
                                            <Button
                                                as={Link}
                                                href="/"
                                                className="button"
                                            >
                                                Request Site Assessment
                                            </Button>
                                            <Button
                                                as={Link}
                                                href="/"
                                                className="button button-border-white"
                                            >
                                                Download Fixed Stack Datasheet
                                            </Button>
                                        </div>
                                    </div>
                                )}

                                {key === "Managed Services and Integration" && (
                                    <div className="inner">
                                        <figure>
                                            <Image
                                                src="/images/img-fix-perimeter-stacks.png"
                                                alt="img-fix-perimeter-stacks"
                                                width="1772"
                                                height="957"
                                                unoptimized
                                                className="image"
                                            />
                                        </figure>
                                        <div>
                                            <h3 className="text-white mb-3">
                                                Managed Services and Integration
                                            </h3>
                                            <p className="opacity-80">
                                                (Container / Mast / Tower)
                                            </p>
                                            <p>
                                                Persistent 24/7 protection for
                                                high-value sites (airports,
                                                refineries, data centres).
                                            </p>
                                        </div>
                                        <div>
                                            <h5>What we deliver</h5>
                                            <p>
                                                Hardened container or mast
                                                solutions with AESA 3D FMCW
                                                radar, RF direction finding,
                                                EO/IR cameras, AI fusion C2 and
                                                evidence-grade logging. Systems
                                                are built for continuous
                                                operation, integrated with
                                                SOC/ATC and delivered with SOPs
                                                and regulatory support. (Mirrors
                                                the layered fixed-site approach
                                                used by leader vendors).
                                            </p>
                                        </div>
                                        <div>
                                            <h5>Use cases and outcomes</h5>
                                            <p>
                                                Reduce false alarms, deliver
                                                forensic evidence for
                                                prosecution, and provide early
                                                warning so response teams act
                                                before airspace incursions
                                                escalate.
                                            </p>
                                        </div>

                                        <div className="button-wrapper">
                                            <Button
                                                as={Link}
                                                href="/"
                                                className="button"
                                            >
                                                Request Site Assessment
                                            </Button>
                                            <Button
                                                as={Link}
                                                href="/"
                                                className="button button-border-white"
                                            >
                                                Download Fixed Stack Datasheet
                                            </Button>
                                        </div>
                                    </div>
                                )}
                            </Tab>
                        ))}
                    </Tabs>
                </div>
            </Container>
        </Section>
    );
};

export default OurSolutions;

// =========================================================================

// "use client";

// import React, { useEffect, useState } from "react";
// import Section from "../utils/Section";
// import Container from "../utils/Container";
// import RadioTitle from "../utils/RadioTitle";
// import { Button, Tab, Tabs } from "@heroui/react";
// import Image from "next/image";
// import Link from "next/link";

// const AUTOPLAY_TIME = 20000;
// const FPS = 20;

// const OurSolutions = () => {
//     const tabKeys = [
//         "Fixed and Perimeter Stacks",
//         "Mobile and Rapid Deploy",
//         "Maritime and Shipborne Systems",
//         "Managed Services and Integration",
//     ];
//     const [selected, setSelected] = useState(tabKeys[0]);
//     const [progress, setProgress] = useState(0);

//     useEffect(() => {
//         const step = 100 / (AUTOPLAY_TIME / FPS);

//         const interval = setInterval(() => {
//             setProgress((prev) => {
//                 if (prev >= 100) {
//                     const currentIndex = tabKeys.indexOf(selected);
//                     const nextIndex = (currentIndex + 1) % tabKeys.length;
//                     setSelected(tabKeys[nextIndex]);
//                     return 0;
//                 }
//                 return prev + step;
//             });
//         }, FPS);

//         return () => clearInterval(interval);
//     }, [selected]);

//     return (
//         <Section className="section-our-solutions bg-overlay-1 text-white">
//             <Container>
//                 <div className="flex flex-col">
//                     <div className="max-md:px-6 pt-6 md:pt-12 2xl:pt-16 pb-4 max-md:-mx-6 max-md:border-b-2 md:border-r-2 border-solid border-white border-opacity-20 md:w-[30%] xl:w-[30%] 2xl:w-[35%]">
//                         <RadioTitle title="Our Solutions" color="white" />
//                     </div>

//                     <Tabs
//                         aria-label="product-tabs"
//                         isVertical
//                         variant="underlined"
//                         classNames={{
//                             wrapper: "product-tabs-wrapper",
//                         }}
//                         selectedKey={selected}
//                         onSelectionChange={(key) => {
//                             setSelected(key);
//                             setProgress(0);
//                         }}
//                     >
//                         {tabKeys.map((key, index) => (
//                             <Tab
//                                 key={key}
//                                 title={
//                                     <>
//                                         <span className="text">{key}</span>
//                                         {selected === key && (
//                                             <div
//                                                 className="progress-bar"
//                                                 style={{
//                                                     width: `${progress}%`,
//                                                 }}
//                                             ></div>
//                                         )}
//                                     </>
//                                 }
//                             >
//                                 {key === "Fixed and Perimeter Stacks" && (
//                                     <div className="inner">
//                                         <figure>
//                                             <Image
//                                                 src="/images/img-fix-perimeter-stacks.png"
//                                                 alt="img-fix-perimeter-stacks"
//                                                 width="1772"
//                                                 height="957"
//                                                 unoptimized
//                                                 className="image"
//                                             />
//                                         </figure>
//                                         <div>
//                                             <h3 className="text-white mb-3">
//                                                 Fixed and Perimeter Stacks
//                                             </h3>
//                                             <p className="opacity-80">
//                                                 (Container / Mast / Tower)
//                                             </p>
//                                             <p>
//                                                 Persistent 24/7 protection for
//                                                 high-value sites (airports,
//                                                 refineries, data centres).
//                                             </p>
//                                         </div>
//                                         <div>
//                                             <h5>What we deliver</h5>
//                                             <p>
//                                                 Hardened container or mast
//                                                 solutions with AESA 3D FMCW
//                                                 radar, RF direction finding,
//                                                 EO/IR cameras, AI fusion C2 and
//                                                 evidence-grade logging. Systems
//                                                 are built for continuous
//                                                 operation, integrated with
//                                                 SOC/ATC and delivered with SOPs
//                                                 and regulatory support. (Mirrors
//                                                 the layered fixed-site approach
//                                                 used by leader vendors).
//                                             </p>
//                                         </div>
//                                         <div>
//                                             <h5>Use cases and outcomes</h5>
//                                             <p>
//                                                 Reduce false alarms, deliver
//                                                 forensic evidence for
//                                                 prosecution, and provide early
//                                                 warning so response teams act
//                                                 before airspace incursions
//                                                 escalate.
//                                             </p>
//                                         </div>

//                                         <div className="button-wrapper">
//                                             <Button
//                                                 as={Link}
//                                                 href="/"
//                                                 className="button"
//                                             >
//                                                 Request Site Assessment
//                                             </Button>
//                                             <Button
//                                                 as={Link}
//                                                 href="/"
//                                                 className="button button-border-white"
//                                             >
//                                                 Download Fixed Stack Datasheet
//                                             </Button>
//                                         </div>
//                                     </div>
//                                 )}

//                                 {key === "Mobile and Rapid Deploy" && (
//                                     <div className="inner">
//                                         "Lorem ipsum dolor sit amet, consectetur
//                                         adipiscing elit."
//                                     </div>
//                                 )}

//                                 {key === "Maritime and Shipborne Systems" && (
//                                     <div className="inner">
//                                         "Lorem ipsum dolor sit amet, consectetur
//                                         adipiscing elit."
//                                     </div>
//                                 )}

//                                 {key === "Managed Services and Integration" && (
//                                     <div className="inner">
//                                         "Lorem ipsum dolor sit amet, consectetur
//                                         adipiscing elit."
//                                     </div>
//                                 )}
//                             </Tab>
//                         ))}
//                     </Tabs>
//                 </div>
//             </Container>
//         </Section>
//     );
// };

// export default OurSolutions;

// ============================================================

// "use client";

// import React from "react";
// import Section from "../utils/Section";
// import Container from "../utils/Container";
// import RadioTitle from "../utils/RadioTitle";
// import { Tab, Tabs } from "@heroui/react";

// const OurSolutions = () => {
//     return (
//         <Section className="section-our-solutions bg-overlay-1 text-white">
//             <Container>
//                 <div className="flex">
//                     <div className="border-r-2 border-solid border-white border-opacity-20 w-[35%]">
//                         <div className="pt-6 md:pt-12 2xl:pt-16 pb-4 border-b-2 border-solid border-white border-opacity-20 w-full">
//                             <RadioTitle title="Our Solutions" color="white" />
//                         </div>

//                         <div>
//                             <Tabs aria-label="Options" isVertical>
//                                 <Tab key="photos" title="Photos">
//                                     <div>
//                                         Lorem ipsum dolor sit amet, consectetur
//                                         adipiscing elit, sed do eiusmod tempor
//                                         incididunt ut labore et dolore magna
//                                         aliqua. Ut enim ad minim veniam, quis
//                                         nostrud exercitation ullamco laboris
//                                         nisi ut aliquip ex ea commodo consequat.
//                                     </div>
//                                 </Tab>
//                                 <Tab key="music" title="Music">
//                                     <div>
//                                         Ut enim ad minim veniam, quis nostrud
//                                         exercitation ullamco laboris nisi ut
//                                         aliquip ex ea commodo consequat. Duis
//                                         aute irure dolor in reprehenderit in
//                                         voluptate velit esse cillum dolore eu
//                                         fugiat nulla pariatur.
//                                     </div>
//                                 </Tab>
//                                 <Tab key="videos" title="Videos">
//                                     <div>
//                                         Excepteur sint occaecat cupidatat non
//                                         proident, sunt in culpa qui officia
//                                         deserunt mollit anim id est laborum.
//                                     </div>
//                                 </Tab>
//                             </Tabs>
//                         </div>
//                     </div>
//                     <div className="grow p-10 min-h-96">right</div>
//                 </div>
//             </Container>
//         </Section>
//     );
// };

// export default OurSolutions;
