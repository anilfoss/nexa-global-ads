import React from "react";
import HeroCapabilities from "@/app/components/capabilities/HeroCapabilities";
import OurCapabilities from "@/app/components/capabilities/OurCapabilities";
import OurTechnology from "@/app/components/capabilities/OurTechnology";
import "@/app/scss/capabilities.scss";

export const metadata = {
    title: "Capabilities | Our Capabilities",
    description: "",
    robots: "noindex, nofollow",
    alternates: {
        canonical: "https://nexaglobalads.com/",
    },
    openGraph: {
        title: "Capabilities | Our Capabilities",
        description: "",
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
        title: "Capabilities | Our Capabilities",
        description: "",
        images: ["https://nexaglobalads.com/images/meta-banner.jpg"],
        site: "https://nexaglobalads.com/",
    },
};

const page = () => {
    return (
        <>
            <HeroCapabilities />
            <OurCapabilities />
            <OurTechnology />
        </>
    );
};

export default page;
