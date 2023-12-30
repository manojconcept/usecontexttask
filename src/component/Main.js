import { createContext } from "react";
import { Routes, Route } from "react-router-dom";
import { DATA } from "../config/Config";
import Products from "./Products";
import CheckOut from "./CheckOut";

export const dataSet = createContext(); 

function Main() {
    const realData = DATA.products;
    return (
        <dataSet.Provider value={realData}>
            <Routes>
                <Route path="/" element={<Products />} /> 
                <Route path="/add/:productid" element={<CheckOut/>}/>
            </Routes>
        </dataSet.Provider>
    );
}

export default Main;