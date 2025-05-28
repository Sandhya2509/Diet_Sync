import './Header.css';
import {FaBell} from "react-icons/fa";
import { FaMessage } from 'react-icons/fa6';
import {FaUser} from 'react-icons/fa6';
import { FaArrowDown } from 'react-icons/fa';
import {AiFillCaretDown} from 'react-icons/ai'
function Header(){
    return (
        <div className="header">
            <div className='header1'>
            <input type="text"  className='icon' placeholder='Search for food...'/>
            <p>Help</p>
            <p>Upgrade</p>
            <p>FAQs</p>
            <p>Download Apps</p>
            <p><FaBell/></p>
            <p><FaMessage/></p>
            <p><FaUser/></p>
            <p>Name</p>
            <p><AiFillCaretDown/></p>
            </div>
            <hr/>
        </div>
    );
}
export default Header