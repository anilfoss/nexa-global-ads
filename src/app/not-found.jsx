import React from "react";
import { Providers } from "./providers";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Section from "./components/utils/Section";
import Container from "./components/utils/Container";
import { Button, Image } from "@heroui/react";
import Link from "next/link";

const NotFound = () => {
    return (
        <Providers>
            <Header />
            <main>
                <Section className="not-found-section bg-overlay-1 text-center content-center pt-32 md:pt-56 pb-16 md:pb-32 min-h-[90vh] relative z-[1]">
                    <Container>
                        <h1 className="text-gradient-1 font-semibold table mx-auto mb-3">
                            Page Not Found
                        </h1>
                        <p className="h6  text-white">
                            The page you were looking for could not be found.
                        </p>
                        <Button
                            as={Link}
                            href="/"
                            className="button btn-primary mt-6"
                        >
                            Back to Homepage
                        </Button>

                        <div className="bg-[url('/images/bg-blur.svg')] bg-no-repeat bg-center bg-cover w-full h-full absolute inset-0 -z-[1] opacity-30"></div>
                    </Container>
                </Section>
            </main>
            <Footer />
        </Providers>
    );
};

export default NotFound;
