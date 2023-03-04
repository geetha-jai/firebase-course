import React from "react";
import "./App.jsx";
import { BrowserRouter,Route,Switch } from "react-router-dom";
const main =()=>{
    return(
        <div>
            <BrowserRouter>
            <Switch>
               <App/>
            </Switch>
            </BrowserRouter>
        </div>
    )
}
export default main;