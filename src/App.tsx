import React from 'react';
import {Client } from "./router";
import ClientTemplate from "./template/client";
import {Switch, Route, BrowserRouter} from "react-router-dom";

const routesClient = (routes:object[]) => {
    if (routes && routes.length > 0) {
        return routes.map((item:any, index) => {
            return <ClientTemplate
                key={index}
                path={item.path}
                exact={item.exact}
                Component={item.component}
            />
        })
    }
}

function App() {
    return (
        <React.Fragment>
            <BrowserRouter>
                <Switch>
                    {routesClient(Client)}
                </Switch>
            </BrowserRouter>
        </React.Fragment>

    );
}

export default App;
