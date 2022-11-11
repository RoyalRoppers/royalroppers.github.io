import Header from "./Components/header";
import About from "./Components/about";
import Events from "./Components/events";
import Sponsors from "./Components/sponsors";
import Ctfs from "./Components/ctfs";
import Footer from "./Components/footer";

export default function App() {
    return (
        <div>
            <Header />
            <About />
            <Events />
            <Ctfs />
            <Sponsors />
            <Footer />
        </div>
    );
}