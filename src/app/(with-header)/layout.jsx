import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import { Providers } from "../providers";
import "../scss/style.scss";
// import ScrollToTop from "../components/utils/ScrollToTop";

export default function WithHeaderLayout({ children }) {
    return (
        <Providers>
            {/* <ScrollToTop /> */}
            <Header />
            <main>{children}</main>
            <Footer />
        </Providers>
    );
}
