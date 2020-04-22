import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { close } from "./HamburgerMenu";
import scrollToElement from 'scroll-to-element';

export default function OnNavigate() {
    const { pathname, search, hash } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
        close();
    }, [pathname, search]);

    useEffect(() => {
        if (hash) {
            scrollToElement(hash)
        }
    }, [hash])

    return null;
}