import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar";
function Home(){
    return (
        <div>
            <Header/>
            <Sidebar />
            <Main />
        </div>
    );
}
export default Home;