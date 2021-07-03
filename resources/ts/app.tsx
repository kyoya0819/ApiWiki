import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Index from "pages/Index";

const App = () => {

    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Index} />
                </Switch>
            </BrowserRouter>
        </>
    );
};

ReactDOM.render(
    <App />,
    document.getElementById('app')
)
