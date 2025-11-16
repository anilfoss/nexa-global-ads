import React from "react";
import HeroCareers from "@/app/components/careers/HeroCareers";
import OpenPositions from "@/app/components/careers/OpenPositions";
import "@/app/scss/careers.scss";

export const metadata = {
    title: "Careers | Join Our Force",
    description: "",
    robots: "noindex, nofollow",
    alternates: {
        canonical: "https://nexaglobalads.com/",
    },
    openGraph: {
        title: "Careers | Join Our Force",
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
        title: "Careers | Join Our Force",
        description: "",
        images: ["https://nexaglobalads.com/images/meta-banner.jpg"],
        site: "https://nexaglobalads.com/",
    },
};

const page = () => {
    return (
        <>
            <HeroCareers />
            <OpenPositions />
        </>
    );
};

export default page;
