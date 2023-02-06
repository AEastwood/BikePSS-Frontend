import mainIcon from '../../assets/svgs/main.svg';
import mediaIcon from '../../assets/svgs/media.svg';
import mapIcon from '../../assets/svgs/maps.svg';
import settingsIcon from '../../assets/svgs/settings.svg';
import {Link} from 'react-router-dom';
import {useContext, useState} from "react";
import {WebsocketsContext} from "../../context/websockets.context";

function Sidebar() {
    const [selectedRoute, setSelectedRoute] = useState('/');
    const ws = useContext(WebsocketsContext);
    const [connected, setConnected] = useState(false);

    setTimeout(() => {
        ws.getState() === WebSocket.OPEN ? setConnected(true) : setConnected(false);
    }, 500);

    return (
        <div className="h-screen flex">
            <aside
                className="flex flex-col items-center bg-white text-gray-700 dark:bg-gray-700 shadow h-full"
            >
                <ul>
                    <li
                        className={`${selectedRoute === '/' ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                        onClick={() => setSelectedRoute('/')}
                    >
                        <Link
                            to="/"
                            className="h-24 px-6 flex flex justify-center items-center w-full"
                        >
                            <img className="h-12 w-12" src={mainIcon} alt=""/>
                        </Link>

                    </li>
                    <li
                        className={`${selectedRoute === '/media' ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                        onClick={() => setSelectedRoute('/media')}
                    >
                        <Link
                            to="/media"
                            className="h-24 px-6 flex flex justify-center items-center w-full"
                        >
                            <img className="h-12 w-12" src={mediaIcon} alt=""/>
                        </Link>

                    </li>
                    <li
                        className={`${selectedRoute === '/maps' ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                        onClick={() => setSelectedRoute('/maps')}
                    >
                        <Link
                            to="/maps"
                            className="h-24 px-6 flex flex justify-center items-center w-full"
                        >
                            <img className="h-12 w-12" src={mapIcon} alt=""/>
                        </Link>

                    </li>
                    <li
                        className={`${selectedRoute === '/settings' ? 'bg-gray-100 dark:bg-gray-800' : ''}`}
                        onClick={() => setSelectedRoute('/settings')}
                    >
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
