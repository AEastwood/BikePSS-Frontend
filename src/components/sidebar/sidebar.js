import mainIcon from './resources/svgs/main.svg';
import mediaIcon from './resources/svgs/media.svg';
import mapIcon from './resources/svgs/maps.svg';
import {Link} from 'react-router-dom';

function Sidebar({config}) {

    return (
        <div className="h-screen flex">
            <aside
                className="flex flex-col items-center bg-white text-gray-700 shadow h-full"
            >
                <ul>
                    <li className="hover:bg-gray-100">
                        <Link
                            to="/"
                            className="h-16 px-6 flex flex justify-center items-center w-full"
                        >

                            <img className="h-6 w-6" src={mainIcon} alt=""/>
                        </Link>

                    </li>
                    <li className="hover:bg-gray-100">
                        <Link
                            to="/media"
                            className="h-16 px-6 flex flex justify-center items-center w-full"
                        >
                            <img className="h-6 w-6" src={mediaIcon} alt=""/>
                        </Link>

                    </li>
                    <li className="hover:bg-gray-100">
                        <Link
                            to="/maps"
                            className="h-16 px-6 flex flex justify-center items-center w-full"
                        >
                            <img className="h-6 w-6" src={mapIcon} alt=""/>
                        </Link>

                    </li>

                </ul>

                <div className="mt-auto h-16 flex items-center w-full">

                    <div className="h-16 w-10 mx-auto flex flex justify-center items-center w-full">
                        {config.APP.VERSION}
                    </div>
                </div>

            </aside>
        </div>
    );
}

export default Sidebar;
