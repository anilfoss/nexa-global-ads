import React from "react";
import HeroMedia from "@/app/components/media-and-insights/HeroMedia";
import GlobalSecurity from "@/app/components/media-and-insights/GlobalSecurity";
import MarketInsights from "@/app/components/media-and-insights/MarketInsights";
import MarketOverview from "@/app/components/media-and-insights/MarketOverview";
import FinancialOverview from "@/app/components/media-and-insights/FinancialOverview";
import "@/app/scss/media.scss";

export const metadata = {
    title: "Media and Insights",
    description: "Investor Intelligence & Industry Landscape",
    robots: "noindex, nofollow",
    alternates: {
        canonical: "https://nexaglobalads.com/",
    },
    openGraph: {
        title: "Media and Insights",
        description: "Investor Intelligence & Industry Landscape",
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
        title: "Media and Insights",
        description: "Investor Intelligence & Industry Landscape",
        images: ["https://nexaglobalads.com/images/meta-banner.jpg"],
        site: "https://nexaglobalads.com/",
    },
};

const page = () => {
    return (
        <>
            <HeroMedia />
            <GlobalSecurity />
            <MarketInsights />
            <MarketOverview />
            <FinancialOverview />
        </>
    );
};

export default page;
