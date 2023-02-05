import mainIcon from './resources/svgs/main.svg';
import mediaIcon from './resources/svgs/media.svg';
import mapIcon from './resources/svgs/maps.svg';
import settingsIcon from './resources/svgs/settings.svg';
import {Link} from 'react-router-dom';
import {useState} from "react";

function Sidebar({config}) {
    const [connected, setConnected] = useState(false);
    const ws = new WebSocket(`${config.SIDEBAR.WEBHOOKS.URL}:${config.SIDEBAR.WEBHOOKS.PORT}`);

    ws.onclose = (e) => setConnected(false);
    ws.onopen = (e) => setConnected(true);

    return (
        <div className="h-screen flex">
            <aside
                className="flex flex-col items-center bg-white text-gray-700 shadow h-full"
            >
                <ul>
                    <li className="hover:bg-gray-100">
                        <Link
                            to="/"
                            className="h-24 px-6 flex flex justify-center items-center w-full"
                        >
                            <img className="h-12 w-12" src={mainIcon} alt=""/>
                        </Link>

                    </li>
                    <li className="hover:bg-gray-100">
                        <Link
                            to="/media"
                            className="h-24 px-6 flex flex justify-center items-center w-full"
                        >
                            <img className="h-12 w-12" src={mediaIcon} alt=""/>
                        </Link>

                    </li>
                    <li className="hover:bg-gray-100">
                        <Link
                            to="/maps"
                            className="h-24 px-6 flex flex justify-center items-center w-full"
                        >
                            <img className="h-12 w-12" src={mapIcon} alt=""/>
                        </Link>

                    </li>
                    <li className="hover:bg-gray-100">
                        <Link
                            to="/settings"
                            className="h-24 px-6 flex flex justify-center items-center w-full"
                        >
                            <img className="h-12 w-12" src={settingsIcon} alt=""/>
                        </Link>

                    </li>
                </ul>

                <div className="mt-auto h-16 flex items-center w-full">
                    <div className="h-16 w-10 mx-auto flex flex justify-center items-center w-full">
                        <span
                            className={
                                `
                                    flex w-3 h-3 rounded-full
                                    ${connected === true ? 'bg-green-500' : 'bg-red-500'}
                                `
                            }
                        />
                    </div>
                </div>

            </aside>
        </div>
    );
}

export default Sidebar;
