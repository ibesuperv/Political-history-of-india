import { Link } from "react-router-dom";
import './ai.css';
import { IoSend } from "react-icons/io5";
import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai"; 

const apiKey = "AIzaSyB6mWlKKUwJwmMzhnJBMyYC2UsVf-CyYHk";
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
};

async function run(prompt, setResponse, setLoading, setStoresearch) {
    try {
        setLoading(true);
        const chatSession = model.startChat({ generationConfig, history: [] });
        const result = await chatSession.sendMessage(prompt);
        setResponse(result.response.text()); 
        setStoresearch(prev => [...prev, { user: prompt, ai: result.response.text() }]);
    } catch (error) {
        console.error("Error during AI generation:", error);
        setResponse("An error occurred while generating a response.");
    } finally {
        setLoading(false);
    }
}

function Ai() {
    const [searchAI, setSearchAI] = useState('');
    const [storesearch, setStoresearch] = useState([]);    
    const [response, setResponse] = useState(''); 
    const [loading, setLoading] = useState(false); 

    const handleSend = () => {
        if (searchAI.trim() && searchAI.length <= 200) {
            run(searchAI, setResponse, setLoading, setStoresearch);
            setSearchAI('');
        }
    };

    return (
        <>
            <div className="nav">
                <div className='logo'>Ask AI</div>
                <div className='lis'>
                    <ul>
                        <li className='home'><Link to='/' className='home links'>Home</Link></li>
                        <li className='home'><Link to='/' className='links'>About-Us</Link></li>
                        <li className='home'><Link to='/' className='links'>Share</Link></li>
                    </ul>
                </div>
            </div>
            <div className="askk"> 
                {loading ? (
                    <div className="spinner">Loading...</div>
                ) : storesearch.length > 0 ? (
                    <div className="response">
                        {storesearch.map((item, index) => (
                            <div className="single-chat" key={index}>
                                <p><strong>You:</strong> {item.user}</p>
                                <p className="ai"><strong>AI:</strong> {item.ai}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="p">ASK YOUR QUESTIONS</p>
                )}
            </div>
            <div className="searchai">
                <input 
                    type="text" 
                    value={searchAI} 
                    onChange={(e) => setSearchAI(e.target.value)}
                    className="question" 
                    placeholder="Ask any questions"
                />
                <button onClick={handleSend} disabled={loading}>
                    <IoSend />
                </button>
            </div>
        </>
    );
}

export default Ai;
