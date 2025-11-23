import React from "react";
import InvestorHero from "@/app/components/investor-relations/InvestorHero";
import OurMission from "@/app/components/investor-relations/OurMission";
import KeyHighlights from "@/app/components/investor-relations/KeyHighlights";
import MarketOpportunity from "@/app/components/investor-relations/MarketOpportunity";
import AnnualReport from "@/app/components/investor-relations/AnnualReport";
import StrategicPriorities from "@/app/components/investor-relations/StrategicPriorities";
import "@/app/scss/investor-relations.scss";

export const metadata = {
    title: "Investor Relations",
    description:
        "Nexa Global delivers end-to-end AI-powered C-UAS technologies protecting airspace, maritime infrastructure and critical industries.",
    robots: "noindex, nofollow",
    alternates: {
        canonical: "https://nexaglobalads.com/",
    },
    openGraph: {
        title: "Investor Relations",
        description:
            "Nexa Global delivers end-to-end AI-powered C-UAS technologies protecting airspace, maritime infrastructure and critical industries.",
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
        title: "Investor Relations",
        description:
            "Nexa Global delivers end-to-end AI-powered C-UAS technologies protecting airspace, maritime infrastructure and critical industries.",
        images: ["https://nexaglobalads.com/images/meta-banner.jpg"],
        site: "https://nexaglobalads.com/",
    },
};

const page = () => {
    return (
        <>
            <InvestorHero />
            <OurMission />
            <KeyHighlights />
            <MarketOpportunity />
            <AnnualReport />
            <StrategicPriorities />
        </>
    );
};

export default page;
