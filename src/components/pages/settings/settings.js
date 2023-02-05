import Sidebar from "../../sidebar/sidebar";
import config from "../../../config.json";

function Settings() {
    return (
        <div className="flex h-screen bg-gray-200">
            <Sidebar config={config}/>

            <div className="m-auto text-7xl">
                settings
            </div>
        </div>
    );
}

export default Settings;
