import { useState, useEffect } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from "../assets/logo.png";
import resume from "../assets/Harley_Zhang_Resume.pdf";

const Link = ({ page, setSelectedPage }) => {
    const lowerCasePage = page.toLowerCase();
    return (
        <AnchorLink
            className="inline-block"
            href={`#${lowerCasePage}`}
            offset={() => 100}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    );
};

const Navbar = ({ setSelectedPage }) => {
    const [navbarBackground, setNavbarBackground] = useState("");

    useEffect(() => {
        setNavbarBackground("bg-opacity-40 backdrop-filter backdrop-blur-lg");
    }, []);

    return (
        <nav className={`${navbarBackground} text-white bg-darkgrey z-40 w-full fixed top-0 py-3`}>
            <div className="flex items-center justify-between mx-auto md:w-[1000px] px-5">
                <img src={logo} alt="harley-zhang-logo" className="h-6 z-50" />
                <div className="flex justify-between gap-14 font-helvetica tracking-wide text-[13px] font-medium">
                    <Link
                        page="Projects"
                        setSelectedPage={setSelectedPage}
                    />
                    <Link
                        page="Education"
                        setSelectedPage={setSelectedPage}
                    />
                    <Link
                        page="Experience"
                        setSelectedPage={setSelectedPage}
                    />
                    <a href={resume} target="_blank" rel="noopener noreferrer">
                        Resume
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
