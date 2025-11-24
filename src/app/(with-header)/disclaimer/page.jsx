import React from "react";
import WebsiteDisclaimer from "@/app/components/disclaimer/WebsiteDisclaimer";

export const metadata = {
    title: "Disclaimer",
    description: "",
    robots: "noindex, nofollow",
    alternates: {
        canonical: "https://nexaglobalads.com/",
    },
    openGraph: {
        title: "Disclaimer",
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
        title: "Disclaimer",
        description: "",
        images: ["https://nexaglobalads.com/images/meta-banner.jpg"],
        site: "https://nexaglobalads.com/",
    },
};

const page = () => {
    return (
        <>
            <WebsiteDisclaimer />
        </>
    );
};

export default page;
