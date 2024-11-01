import './news.css';

function Cards(props) {
    console.log(props.data);
    return (
        <div className="cards">
            {
                props.data.map((item, index) => (
                    item.author !== null && (  // Conditional rendering
                        <div className="card" key={index}>
                            <div className="imgpart">
                                <img
                                    src={item.urlToImage || '/image.png'}  // Use default image if urlToImage is null
                                    alt="news thumbnail"
                                />
                                <button onClick={() => window.open(item.url, "_blank")}>Read</button>
                            </div>
                            <div className="content">
                                <a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a>
                                {item.description && <p>{item.description}</p>}
                            </div>
                        </div>
                    )
                ))
            }
        </div>
    );
}

export default Cards;
