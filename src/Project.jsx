import Landing from "./components/landing/landing";
import './App.css';
import Holder from "./components/holder/Holder";
import { SiChatbot } from "react-icons/si";
import { Link } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

function Project() {
    return ( 
        <div style={{ width: "100vw", overflow: "hidden" }}>
            <Navbar />
            <div className="chatbot">
                <Link to="/ask-ai">
                    <SiChatbot className="bot" />
                </Link>
            </div>
            <Landing />
            <Holder />
            <Footer/>
        </div>
    );
}

export default Project;
