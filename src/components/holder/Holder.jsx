import { Link } from 'react-router-dom';
import './holder.css'
function Holder() {
    return ( 
        <div className="parent" id='resource'>

<Link to='/history' className='link'>
            <div className='history'>
                    <p>HISTORY</p>
            </div>
            </Link>
            <Link to='/news' className='link' target='_blank'>
            <div className='news'>
                <p>
                NEWS
                </p>
            </div>
            </Link>
        </div>
 );
}

export default Holder;