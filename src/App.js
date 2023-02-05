import {Route, Routes} from 'react-router-dom';
import Main from "./components/pages/main/main";
import Media from "./components/pages/media/media";
import Maps from "./components/pages/maps/maps";
import Settings from "./components/pages/settings/settings";

function App() {
    return <Routes>
        <Route path="/" element={<Main/>}> </Route>
        <Route path="/maps" element={<Maps/>}> </Route>
        <Route path="/media" element={<Media/>}> </Route>
        <Route path="/settings" element={<Settings/>}> </Route>
    </Routes>;
}

export default App;
