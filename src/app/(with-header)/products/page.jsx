import React from "react";
import HeroProducts from "@/app/components/products/HeroProducts";
import OurProducts from "@/app/components/products/OurProducts";
import OurSolutions from "@/app/components/products/OurSolutions";
import "@/app/scss/products.scss";

export const metadata = {
    title: "Products | End-to-end AI Counter UAS solutions",
    description:
        "Deployable as fixed perimeter stacks, mobile tactical units, and shipborne systems",
    robots: "noindex, nofollow",
    alternates: {
        canonical: "https://nexaglobalads.com/",
    },
    openGraph: {
        title: "Products | End-to-end AI Counter UAS solutions",
        description:
            "Deployable as fixed perimeter stacks, mobile tactical units, and shipborne systems",
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
        title: "Products | End-to-end AI Counter UAS solutions",
        description:
            "Deployable as fixed perimeter stacks, mobile tactical units, and shipborne systems",
        images: ["https://nexaglobalads.com/images/meta-banner.jpg"],
        site: "https://nexaglobalads.com/",
    },
};

const page = () => {
    return (
        <>
            <HeroProducts />
            <OurSolutions />
            <OurProducts />
        </>
    );
};

export default page;
