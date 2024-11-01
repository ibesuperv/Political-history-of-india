import { Link } from "react-router-dom";
import './news.css';
import Cards from "./Cards";
import { useEffect, useState } from "react";
import axios from "axios";

function News() {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('india');
    const [loading, setLoading] = useState(false); 

    const API_KEY = "bda49b820d014e29ba8b7570ed9575f6";

    const getData = async () => {
        setLoading(true);  
        try {
            const response = await axios.get(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
            
            const filteredArticles = response.data.articles.filter(article => article.author !== null);
            
            setData(filteredArticles);
        } catch (error) {
            console.error("Error fetching data:", error);
            setData([]);
        } finally {
            setLoading(false); 
        }
    };

    useEffect(() => {
        getData();
    }, [search]);

    return (
        <>
            <div className="nav">
                <div className='logo'>News</div>
                <div className='lis'>
                    <ul>
                        <li className='home'>
                            <Link to='/' className='home links'>Home</Link>
                        </li>
                        <li className='home'>
                            <Link to='/' className='links'>About-Us</Link>
                        </li>
                        <li className='home'>
                            <Link to='/' className='links'>Share</Link>
                        </li>
                    </ul>
                </div>
            </div>
            
            <div className="search">
                <input 
                    type="text" 
                    placeholder="Search for news" 
                    onChange={(e) => setSearch(e.target.value)} 
                />
                <button onClick={getData}>Search</button>
            </div>
            
            <hr />
            
            <div className="category">
                <button onClick={() => setSearch('politics')}>Politics</button>
                <button onClick={() => setSearch('sports')}>Sports</button>
                <button onClick={() => setSearch('entertainment')}>Entertainment</button>
                <button onClick={() => setSearch('health')}>Health</button>
                <button onClick={() => setSearch('fitness')}>Fitness</button>
            </div>
            
            {loading ? (
                <h1 className="loading">Please wait...</h1>
            ) : (
                data.length > 0 ? <Cards data={data} /> : <h1 className="notfound">No results found</h1>
            )}
        </>
    );
}

export default News;
