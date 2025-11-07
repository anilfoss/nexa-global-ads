import { ReactLenis } from "lenis/react";
import { HeroUIProvider } from "@heroui/react";

export function Providers({ children }) {
    return (
        <ReactLenis root>
            <HeroUIProvider>{children}</HeroUIProvider>
        </ReactLenis>
    );
}
