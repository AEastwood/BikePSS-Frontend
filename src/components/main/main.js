import Sidebar from "../sidebar/sidebar";
import config from "../../config.json";

function Main() {
    return (
        <div className="flex h-screen bg-gray-200">
            <Sidebar config={config}/>

            <div className="m-auto text-7xl">
                main
            </div>
        </div>
    );
}

export default Main;
