import Sidebar from "../sidebar/sidebar";
import config from "../../config.json";

function Maps() {
    return (
        <div className="flex h-screen bg-gray-200">
            <Sidebar config={config}/>

            <div className="m-auto">
                maps
            </div>
        </div>
    );
}

export default Maps;
