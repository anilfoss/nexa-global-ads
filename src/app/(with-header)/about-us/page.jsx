import React from "react";
import PageHeader from "@/app/components/utils/PageHeader";
// import "@/app/scss/why-vse.scss";
// import AboutUs from "@/app/components/about-us/AboutUs";
// import OurFoundation from "@/app/components/about-us/OurFoundation";

// export const metadata = {
//     title: "About Us | Leading industrial materials trading with three decades of excellence and trust",
//     description:
//         "Jatalia Global Ventures Limited (Formerly known as Aashee Infotech Limited) was incorporated in the year 1987 as S.R. Oils and Fats Limited. The Company has issued Shares to Public in 1994. The shares of the company are listed with Bombay Stock Exchange.",
//     robots: "noindex, nofollow",
//     alternates: {
//         canonical: "https://jatalia.in/",
//     },
//     openGraph: {
//         title: "About Us | Leading industrial materials trading with three decades of excellence and trust",
//         description:
//             "Jatalia Global Ventures Limited (Formerly known as Aashee Infotech Limited) was incorporated in the year 1987 as S.R. Oils and Fats Limited. The Company has issued Shares to Public in 1994. The shares of the company are listed with Bombay Stock Exchange.",
//         url: "https://jatalia.in/",
//         type: "website",
//         images: [
//             {
//                 url: "https://jatalia.in/images/meta-banner.jpg",
//                 width: 1200,
//                 height: 630,
//                 alt: "Jatalia | Global Ventures Limited",
//             },
//         ],
//     },
//     twitter: {
//         card: "summary_large_image",
//         title: "About Us | Leading industrial materials trading with three decades of excellence and trust",
//         description:
//             "Jatalia Global Ventures Limited (Formerly known as Aashee Infotech Limited) was incorporated in the year 1987 as S.R. Oils and Fats Limited. The Company has issued Shares to Public in 1994. The shares of the company are listed with Bombay Stock Exchange.",
//         images: ["https://jatalia.in/images/meta-banner.jpg"],
//         site: "https://jatalia.in/",
//     },
// };

const page = () => {
    return (
        <>
            <PageHeader
                title="About Us"
                description="Leading industrial materials trading with three decades of excellence and trust."
                img="img-about.jpg"
                imgWidth="1440"
                imgHeight="382"
                className=""
            />
        </>
    );
};

export default page;
