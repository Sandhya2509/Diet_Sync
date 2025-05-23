import './Main.css';
import { FaHeartbeat, FaTimesCircle } from "react-icons/fa";
import { FaChartPie } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { MdOutlineWaterDrop } from "react-icons/md";
import { TfiTimer } from 'react-icons/tfi';
import Graph from './Graph';
function Main(){
    return (
        <div className="main">
            <div className="div1">
                <FaHeartbeat />
                <p style={{fontSize:"smaller", padding:"0px"}}>Calories tracker</p>
            </div>
            <div className="div2">
                <FaChartPie/>
                <p style={{fontSize:"smaller", padding:"0px"}}>Carbon tracker</p>
            </div>
            <div className="div3">
                <FaHeart/>
                <p style={{fontSize:"smaller", padding:"0px"}}>Heart tracker</p>
            </div>
            <div className='div4'>
                <MdOutlineWaterDrop/>
                <p style={{fontSize:"smaller", padding:"0px"}}>Water tracker</p>
            </div>
            <div className='div5'>
                <TfiTimer/>
                <p style={{fontSize:"smaller", padding:"0px"}}>Exercise tracker</p>

            </div>
            <Graph />
        </div>
    );
}
export default Main;