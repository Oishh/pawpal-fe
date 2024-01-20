import Navbar from "./Navbar"
import { useLocation } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Donate from "./pages/Donate";
import About from "./pages/About";
import Adopt from "./pages/Adopt";
import Missing from "./pages/Missing";

export default function Main() {

    const { pathname } = useLocation();
    let content;

    if (pathname === "/") {
        content = <Home />;
    } else if (pathname === "/pawpal") {
        content = <Home />;
    } else if (pathname === "/pawpal/home") {
        content = <Home />;
    } else if (pathname === "/pawpal/donate") {
        content = <Donate />;
    } else if (pathname === "/pawpal/adopt") {
        content = <Adopt />;
    } else if (pathname === "/pawpal/about") {
        content = <About />;
    } else if (pathname === "/pawpal/missing") {
        content = <Missing />;
    } else {
        content = <NotFound />;
    }

    return (
    <div className="block-content">
        <div className="min-h-screen flex flex-column surface-ground">
            <Navbar />
            <div
                className="flex flex-column flex-auto"
            >
                {content}
          </div>
        </div>
    </div>
    )
}