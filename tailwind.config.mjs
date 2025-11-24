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
            },
            fontSize: {
                // base: "0.9375rem", // 15px
            },
            colors: {
                "light-gray": "#edefec",
                "green-light": "#DEF6D1",
                "green-dark": "#4A5D3F",

                muted: "#525252",
                danger: "#d4000a",
                active: "#B2DF97",
            },
            backgroundImage: {
                "grid-pattern": "url('/images/img-grid.svg')",
                "overlay-1":
                    "linear-gradient(180deg, rgba(4, 68, 86, 0.7) 19.61%, rgba(3, 9, 0, 0.7) 102.74%)",
                "overlay-2":
                    "linear-gradient(180deg, rgba(4,68,86,0.85) 19.61%, rgba(4,68,86,0.85) 102.74%)",
                "overlay-3":
                    "linear-gradient(180deg, rgba(4, 68, 86, 0.65) 19.61%, rgba(3, 9, 0, 0.65) 102.74%)",
                "overlay-4":
                    "linear-gradient(180deg, rgba(4, 68, 86, 0.85) 19.61%, rgba(3, 9, 0, 0.85) 102.74%)",
            },

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
                card: "0px 4px 20px 0px rgba(0, 0, 0, 0.1)",
                "header-2": "0px -2px 0px 0px rgba(0,0,0,0.2) inset",
                "header-2-white":
                    "0px -2px 0px 0px rgba(255,255,255,0.1) inset",
            },
        },
    },
    darkMode: "class",
    plugins: [
        heroui(),
        function ({ addUtilities }) {
            addUtilities({
                ".text-gradient-1": {
                    background:
                        "-webkit-linear-gradient(top, #B2DF97, #637E53)", // 👈 vertical gradient
                    "-webkit-background-clip": "text",
                    "-webkit-text-fill-color": "transparent",
                },
            });
        },
    ],
};

export default config;
