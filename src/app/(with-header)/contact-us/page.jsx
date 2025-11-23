import React from "react";
import ContactHero from "@/app/components/contact-us/ContactHero";
import OurContact from "@/app/components/contact-us/OurContact";
import "@/app/scss/contact.scss";

export const metadata = {
    title: "Contact Us | Get In Touch",
    description:
        "Our team is ready to listen and help. Tell us about your project and we’ll respond with a clear next step.",
    robots: "noindex, nofollow",
    alternates: {
        canonical: "https://nexaglobalads.com/",
    },
    openGraph: {
        title: "Contact Us | Get In Touch",
        description:
            "Our team is ready to listen and help. Tell us about your project and we’ll respond with a clear next step.",
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
        title: "Contact Us | Get In Touch",
        description:
            "Our team is ready to listen and help. Tell us about your project and we’ll respond with a clear next step.",
        images: ["https://nexaglobalads.com/images/meta-banner.jpg"],
        site: "https://nexaglobalads.com/",
    },
};

const page = () => {
    return (
        <>
            <ContactHero />
            <OurContact />
        </>
    );
};

export default page;
