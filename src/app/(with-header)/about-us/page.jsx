import React from "react";
import HeroAbout from "@/app/components/about-us/HeroAbout";
import AboutUs from "@/app/components/about-us/AboutUs";
import OurValues from "@/app/components/about-us/OurValues";
import VisionMission from "@/app/components/about-us/VisionMission";
import OurLeadership from "@/app/components/about-us/OurLeadership";
import "@/app/scss/about.scss";

export const metadata = {
    title: "About Us | Ai-Driven Defense. Human-Focused Safety",
    description:
        "Next-generation radar and anti-drone solutions powered by AI. Comprehensive threat detection and neutralization for land, sea, and strategic installations.",
    robots: "noindex, nofollow",
    alternates: {
        canonical: "https://nexaglobalads.com/",
    },
    openGraph: {
        title: "About Us | Ai-Driven Defense. Human-Focused Safety",
        description:
            "Next-generation radar and anti-drone solutions powered by AI. Comprehensive threat detection and neutralization for land, sea, and strategic installations.",
        url: "https://nexaglobalads.com/",
        type: "website",
        images: [
            {
                url: "https://nexaglobalads.com/images/meta-banner.jpg",
                width: 1200,
                height: 630,
                alt: "Nexa Global (ADS)",
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: "About Us | Ai-Driven Defense. Human-Focused Safety",
        description:
            "Next-generation radar and anti-drone solutions powered by AI. Comprehensive threat detection and neutralization for land, sea, and strategic installations.",
        images: ["https://nexaglobalads.com/images/meta-banner.jpg"],
        site: "https://nexaglobalads.com/",
    },
};

const page = () => {
    return (
        <>
            <HeroAbout />
            <AboutUs />
            <OurValues />
            <OurLeadership />
            <VisionMission />
        </>
    );
};

export default page;
