import {BrowserRouter, HashRouter, Route, Routes} from 'react-router-dom';
import {useState} from "react";
import config from "./data/config.json";
import {ConfigContext} from "./context/config.context";
import {WebhookContext} from "./context/webhook.context";
import Error from "./pages/errors/error";
import Main from "./pages/main/main";
import Maps from "./pages/navigation/navigation";
import Media from "./pages/media/media";
import Sidebar from "./components/sidebar/sidebar";
import Settings from "./pages/settings/settings";
import useWebSocket from "react-use-websocket";

function App() {

    const [connected, setConnected] = useState(false);

    const {
        sendMessage,
        sendJsonMessage,
        lastMessage,
        lastJsonMessage,
        readyState,
        getWebSocket,
    } = useWebSocket(
        `ws://${config.WEBSOCKETS.IP}:${config.WEBSOCKETS.PORT}/${config.WEBSOCKETS.PATH}`,
        {
            reconnectAttempts: Number.MAX_SAFE_INTEGER,
            retryOnError: true,
            onOpen: () => setConnected(true),
            onClose: () => setConnected(false),
            shouldReconnect: () => true,
        });

    const functions = {
        sendMessage,
        sendJsonMessage,
        lastMessage,
        lastJsonMessage,
        readyState,
        getWebSocket,
    };

    return <BrowserRouter>
        <div className="flex h-screen bg-gray-200 dark:bg-gray-900 text-black dark:text-gray-200">
            <ConfigContext.Provider value={config}>
                <Sidebar connected={connected}/>
                <Routes>
                    <Route path="/" element={<Main/>}> </Route>
                    <Route path="/media" element={<Media/>}> </Route>
                    <Route path="/navigation" element={<Maps/>}> </Route>
                    <Route path="/settings" element={<Settings functions={functions}/>}> </Route>
                    <Route path="*" element={<Error/>}> </Route>
                </Routes>
            </ConfigContext.Provider>
        </div>
    </BrowserRouter>;
}

export default App;
