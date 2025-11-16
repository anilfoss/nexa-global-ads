import Capabilities from "../components/home/Capabilities";
import HeroHome from "../components/home/HeroHome";
import Platform from "../components/home/Platform";
import "@/app/scss/home.scss";

export const metadata = {
    title: "Nexa Global (ADS) | Protecting the Skies and the Seas with Precision",
    description:
        "India’s trusted trading platform built for all investors and traders, backed by 34 years of trust.",
    robots: "noindex, nofollow",
    alternates: {
        canonical: "https://nexaglobalads.com/",
    },
    openGraph: {
        title: "Nexa Global (ADS) | Protecting the Skies and the Seas with Precision",
        description:
            "India’s trusted trading platform built for all investors and traders, backed by 34 years of trust.",
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
        title: "Nexa Global (ADS) | Protecting the Skies and the Seas with Precision",
        description:
            "India’s trusted trading platform built for all investors and traders, backed by 34 years of trust.",
        images: ["https://nexaglobalads.com/images/meta-banner.jpg"],
        site: "https://nexaglobalads.com/",
    },
};

export default function Home() {
    return (
        <>
            <HeroHome />
            <Platform />
            <Capabilities />
        </>
    );
}

// ===========================================================================================

// import ComingSoon from "../components/coming-soon/ComingSoon";

// export const metadata = {
//     title: "Coming Soon | Nexa Global",
//     description: "",
// };

// export default function Home() {
//     return (
//         <>
//             <ComingSoon />
//         </>
//     );
// }
