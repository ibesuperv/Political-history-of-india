import './nav.css'
import { Link } from 'react-router-dom';


function Navbar() {
     return ( 
        <>
        <div className="nav">
            <div className='logo'>
                POLITICAL HISTORY OF INDIA
            </div>
            <div className='lis'>
                <ul><li className='home'>
                    <Link to='/' className='home links'>
                    Home</Link>
                </li>
                <li className='home'>
                    <Link to='/' className='links'>
                    About-us</Link>
                </li>
                    <a href="#resource" className='links'>
                    <li>Resources</li>
                    </a>

                </ul>
            </div>
        </div>
        
        
        </>
     );
}

export default Navbar;