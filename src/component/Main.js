import { createContext } from "react";
import { Routes, Route } from "react-router-dom";
import { DATA } from "../config/Config";
import Products from "./Products";
import CheckOut from "./CheckOut";

export const dataSet = createContext(); //create

function Main() {
    return (
        <dataSet.Provider value={DATA}> {/*PUblisher*/}
            <Routes>
                <Route path="/" element={<Products />} /> 
                <Route path="/add/:productid" element={<CheckOut/>}/>
            </Routes>
        </dataSet.Provider>
    );
}

export default Main;