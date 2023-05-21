import HomePage from "./pages/HomePage.jsx";
import Signup from "./pages/signup.jsx";
import LogIn from "./pages/LogIn.jsx";
import Problems from "./pages/Problems.jsx";

import NavBar from "./components/NavBar.jsx";

import SpecificProblem from "./pages/SpecificProblem.jsx";

import {BrowserRouter, Routes, Route} from "react-router-dom";

import ErrorPage from "./pages/ErrorPage.jsx";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<HomePage />}/>
                <Route path={"/signup"} element={<Signup />}/>
                <Route path={"/login"} element={<LogIn />}/>
                <Route path={"/problems/all"} element={<Problems />}/>
                <Route path={"/problem/:pid"} element={<SpecificProblem />}/>
                <Route path={"*"} element={<ErrorPage />}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
