import "./scss/style.scss";

export const metadata = {
    title: "Nexa Global",
    description: "",
    icons: {
        icon: "images/favicon.ico",
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
