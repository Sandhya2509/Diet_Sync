import './Sidebar.css'
import {
    FaUserFriends, FaCalendarAlt, FaUtensils, FaCheckCircle, FaEnvelope,
    FaChartPie, FaHeart, FaTint, FaDumbbell, FaSearch, FaBell, FaPlus
  } from 'react-icons/fa';
function Sidebar(){
    return (
        <div className="sidebar">
            <ul>
            <li>Daily Meal</li>
            <hr/>
            <li> Dashboard</li>
            <li>{<FaUserFriends />}  Clients</li>
            <li>{<FaCalendarAlt />} SChedules</li>
            <li>{<FaUtensils />} Meals plans</li>
            <li>{<FaCheckCircle />} Check in</li>
            <li>{<FaEnvelope />} Messages</li>
            </ul>
        </div>
    );
}export default Sidebar;