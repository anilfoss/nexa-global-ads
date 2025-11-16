import { heroui } from "@heroui/react";

/** @type {import('tailwindcss').Config} */
const config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                heading: ["Noka Sans", "sans-serif"],
                body: [
                    "Neue Haas Grotesk Display Pro",
                    "Helvetica Neue",
                    "Helvetica",
                    "Arial",
                    "sans-serif",
                ],
                // body: ["PP Mori", "sans-serif"],
            },
            fontSize: {
                // base: "0.9375rem", // 15px
            },
            colors: {
                // "black-2": "#282828",
                // "gray-1": "#edefec",
                "light-gray": "#edefec",
                // "green-light": "#DEF6D1CC",
                "green-light": "#DEF6D1",
                "green-dark": "#4A5D3F",
                // blue2: "#0057AA",

                muted: "#525252",
                danger: "#d4000a",
                red: {
                    50: "#fff0f1",
                    100: "#ffdddf",
                    200: "#ffc1c4",
                    300: "#ff959a",
                    400: "#ff5961",
                    500: "#ff2630",
                    600: "#fc0612",
                    700: "#d4000a", // default
                    800: "#af050d",
                    900: "#900c12",
                    950: "#500004",
                    DEFAULT: "#d4000a",
                },

                blue: {
                    50: "#f3f6fc",
                    100: "#e7edf7",
                    200: "#cad8ed",
                    300: "#9bb7de",
                    400: "#6591cb",
                    500: "#4173b6",
                    600: "#305999",
                    700: "#28487c",
                    800: "#243e68",
                    900: "#233657",
                    950: "#101828", // default
                    DEFAULT: "#101828",
                },
                active: "#B2DF97",
            },
            backgroundImage: {
                "overlay-1":
                    "linear-gradient(180deg, rgba(4,68,86,0.85) 19.61%, rgba(3,9,0,0.85) 102.74%)",
                "overlay-2":
                    "linear-gradient(180deg, rgba(4,68,86,0.85) 19.61%, rgba(4,68,86,0.85) 102.74%)",
                "overlay-3":
                    "linear-gradient(180deg, rgba(4, 68, 86, 0.65) 19.61%, rgba(3, 9, 0, 0.65) 102.74%)",
            },
            // backgroundImage: {
            //     "gradient-button":
            //         "linear-gradient(180deg, #0057AA 0%, #002344 100%)",
            //     "gradient-1":
            //         "linear-gradient(90deg, #006ED8 0%, #D81114 100%)",
            //     "gradient-2":
            //         "linear-gradient(90deg, #ffe7e8 0%, #e5ebf6 80%, #fff 100%)",
            //     "gradient-3":
            //         "linear-gradient(180deg, #0057AA 0%, #002344 100%)",

            //     "gradient-diagonal-1":
            //         "linear-gradient(135deg, #ffe7e8 0%, #e5ebf6 100%)",
            //     "gradient-diagonal-2":
            //         "linear-gradient(108.88deg, rgba(255, 162, 167, 0.25) 9.93%, rgba(0, 102, 255, 0.05) 92.8%)",
            //     "gradient-diagonal-3":
            //         "linear-gradient(104.5deg, #FFEEEF 28.84%, #E3EEFF 84.66%)",

            //     "gradient-success":
            //         "linear-gradient(90deg, #007206 0%, #00D80B 100%)",
            // },
            backgroundSize: {
                27: "27px",
            },
            transitionProperty: {
                all: "all", // enables `transition-all`
            },
            transitionDuration: {
                300: "300ms", // enables `duration-300`
            },
            transitionTimingFunction: {
                "in-out": "ease-in-out", // enables `ease-in-out`
            },
            boxShadow: {
                card: "0px 2px 12px rgba(0, 0, 0, 0.2)",
            },
        },
    },
    darkMode: "class",
    plugins: [
        heroui(),
        function ({ addUtilities }) {
            addUtilities({
                // ".text-gradient-1": {
                //     background: "linear-gradient(to bottom, #B2DF97, #637E53)", // ✅ use standard syntax
                //     WebkitBackgroundClip: "text", // ✅ note the capital "W"
                //     WebkitTextFillColor: "transparent",
                //     color: "transparent", // ✅ fallback for Firefox
                // },
                ".text-gradient-1": {
                    background:
                        "-webkit-linear-gradient(top, #B2DF97, #637E53)", // 👈 vertical gradient
                    "-webkit-background-clip": "text",
                    "-webkit-text-fill-color": "transparent",
                },

                // ".text-gradient-1": {
                //     background:
                //         "-webkit-linear-gradient(left, #006ED8, #D81114)", // 👈 horizontal gradient
                //     "-webkit-background-clip": "text",
                //     "-webkit-text-fill-color": "transparent",
                // },
                // ".text-gradient-2": {
                //     background:
                //         "-webkit-linear-gradient(top, #0057AA, #002344)", // 👈 vertical gradient
                //     "-webkit-background-clip": "text",
                //     "-webkit-text-fill-color": "transparent",
                // },
                // ".text-gradient-3": {
                //     background:
                //         "-webkit-linear-gradient(45deg, #006ED8, #D81114)", // 👈 horizontal gradient
                //     "-webkit-background-clip": "text",
                //     "-webkit-text-fill-color": "transparent",
                // },
                // ".text-gradient-4": {
                //     background:
                //         "-webkit-linear-gradient(340deg, #FFA2A7, #0066FFCC)", // 👈 horizontal gradient
                //     "-webkit-background-clip": "text",
                //     "-webkit-text-fill-color": "transparent",
                // },
                // ".text-gradient-success": {
                //     background:
                //         "-webkit-linear-gradient(left, #007206, #00D80B)", // 👈 horizontal gradient
                //     "-webkit-background-clip": "text",
                //     "-webkit-text-fill-color": "transparent",
                // },
            });
        },
    ],
};

export default config;
