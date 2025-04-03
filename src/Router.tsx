import { BrowserRouter, Routes, Route} from "react-router-dom";
import App from "./App";
import { Navbar } from "./components/Navbar";




const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/Navbar" element={<Navbar/>} />




            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;