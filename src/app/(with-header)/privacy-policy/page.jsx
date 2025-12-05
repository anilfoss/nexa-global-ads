import React from "react";
import PrivacyPolicyLoader from "@/app/components/privacy-policy/PrivacyPolicyLoader";

export const metadata = {
    title: "Privacy Policy",
    description: "",
    robots: "noindex, nofollow",
    alternates: {
        canonical: "https://nexaglobalads.com/",
    },
    openGraph: {
        title: "Privacy Policy",
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
        title: "Privacy Policy",
        description: "",
        images: ["https://nexaglobalads.com/images/meta-banner.jpg"],
        site: "https://nexaglobalads.com/",
    },
};

const page = () => {
    return (
        <>
            <PrivacyPolicyLoader />
        </>
    );
};

export default page;
