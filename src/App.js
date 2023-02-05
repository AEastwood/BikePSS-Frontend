import {Route, Routes} from 'react-router-dom';
import Main from "./components/main/main";
import Media from "./components/media/media";
import Maps from "./components/maps/maps";

function App() {
    return <Routes>
        <Route path="/" element={<Main/>}> </Route>
        <Route path="/maps" element={<Maps/>}> </Route>
        <Route path="/media" element={<Media/>}> </Route>
    </Routes>;
}

export default App;
