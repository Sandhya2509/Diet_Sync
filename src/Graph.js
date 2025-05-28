import './Graph.css';
function Graph(){
    return (
        <>
        <div className="graph">
            <div className="graph1">
            <div className="graph-header">
                <h3>Calories Graph</h3>
                <div className="graph-options">
                <p>Weekly</p>
                <p>Monthly</p>
                <p>Yearly</p>
                </div>
            </div>
            </div>
        </div>

        <div className="report-graph">
            <div className="graph1">
            <div className="report-header">
                <h3>Report on this week</h3>
                <div className="report-options">
                <p>From Date</p>
                </div>
            </div>
            </div>
        </div>
        <div>
            <h1>**Here we add graphs**</h1>
        </div>
        <div className="meal-recommendation">
        <div className="meal-section">
            <h3>Meal for today</h3>
            <table>
            <thead>
                <tr>
                <th>Time</th>
                <th>Name food</th>
                <th>Categories</th>
                <th>Amount</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td>Breakfast</td>
                <td>Bread with chocolate</td>
                <td>Bread</td>
                <td>1 item</td>
                </tr>
                <tr>
                <td>Lunch</td>
                <td>Fried chicken spicy</td>
                <td>Fruits</td>
                <td>2 items</td>
                </tr>
                <tr>
                <td>Dinner</td>
                <td>Broccoli with cabai</td>
                <td>Vegetables</td>
                <td>4 items</td>
                </tr>
            </tbody>
            </table>
        </div>

        <div className="recommend-section">
            <div className="recommend-header">
            <h3>Recommend food</h3>
            <span>...</span>
            </div>
            <ul className="recommend-list">
            <li>
                <div className="recommend-item">
                <div className="icon purple">🍗</div>
                <div>
                    <p>Hot fried chicken</p>
                    <span>2 items</span>
                </div>
                </div>
                <div className="tags">
                <button>Carbs</button>
                <button>Fats</button>
                <button>+4</button>
                </div>
            </li>
            <li>
                <div className="recommend-item">
                <div className="icon green">🍰</div>
                <div>
                    <p>Bolu cake srikaya</p>
                    <span>2 items</span>
                </div>
                </div>
                <div className="tags">
                <button>Carbs</button>
                <button>Fats</button>
                <button>+4</button>
                </div>
            </li>
            <li>
                <div className="recommend-item">
                <div className="icon yellow">🥤</div>
                <div>
                    <p>Milkshake</p>
                    <span>2 items</span>
                </div>
                </div>
                <div className="tags">
                <button>Carbs</button>
                <button>Fats</button>
                <button>+4</button>
                </div>
            </li>
            </ul>
        </div>
        </div>

        </>

    );
}
export default Graph;