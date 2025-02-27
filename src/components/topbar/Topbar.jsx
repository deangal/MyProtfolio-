import './topbar.scss'
import { Person, Email } from '@material-ui/icons'
const Topbar = ({ setMenuOpen,menuOpen }) => {
    return (
        <div className={'topbar ' + (menuOpen && "active")}>
            <div className='wrapper'>
            <div className='left'>
                <a href="#intro" className='logo'><span>LOGO</span></a>
                <div className="itemContainer">
                    <Person className='icon'/>
                    <span>+972 53-333-3333</span>
                </div>
                <div className="itemContainer">
                    <Email className='icon' />
                    <span>loremipsum@gmail.com</span>
                </div>
            </div>

            <div className='right'>
                <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
                    <span className='line1'></span>
                    <span className='line2'></span>
                    <span className='line3'></span>

                </div>
            </div>
            </div>
        </div>
    );
};

export default Topbar;