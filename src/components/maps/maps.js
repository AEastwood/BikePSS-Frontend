import config from "../../config.json";
import Sidebar from "../sidebar/sidebar";

function Media() {
    return (
        <div className="flex h-screen bg-gray-200">
            <Sidebar config={config}/>

            <div className="m-auto text-7xl">
                media
            </div>
        </div>
    );
}

export default Media;
