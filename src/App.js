import {HashRouter, Route, Routes} from 'react-router-dom';
import Main from "./pages/main/main";
import Media from "./pages/media/media";
import Maps from "./pages/navigation/navigation";
import Settings from "./pages/settings/settings";
import Sidebar from "./components/sidebar/sidebar";
import config from "./data/config.json";
import {ConfigContext} from "./context/config.context";
import {WebsocketsContext} from "./context/websockets.context";
import WebSockets from "./services/websockets";
import Error from "./pages/errors/error";

function App() {
    const webSockets = new WebSockets();

    webSockets.open({
        ip: config.WEBSOCKETS.IP,
        path: '/api',
        port: config.WEBSOCKETS.PORT,
        persistence: {
            reconnectOnFailure: true,
            timeoutDelay: 1000
        },
        secure: false
    });

    return <HashRouter>
        <div className="flex h-screen bg-gray-200 dark:bg-gray-900 text-black dark:text-gray-200">
            <ConfigContext.Provider value={config}>
                <WebsocketsContext.Provider value={webSockets}>
                    <Sidebar config={config}/>
                    <Routes>
                        <Route path="/" element={<Main/>}> </Route>
                        <Route path="/media" element={<Media/>}> </Route>
                        <Route path="/navigation" element={<Maps/>}> </Route>
                        <Route path="/settings" element={<Settings/>}> </Route>
                        <Route path="*" element={<Error/>}> </Route>
                    </Routes>
                </WebsocketsContext.Provider>
            </ConfigContext.Provider>
        </div>
    </HashRouter>;
}

export default App;
