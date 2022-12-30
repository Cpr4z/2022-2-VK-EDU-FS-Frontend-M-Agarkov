import React from 'react';
import {Routes, Route} from "react-router-dom";
import {routes} from './../router/index'

const AppRouter = () => {
    return (
        <Routes>
        {routes.map(route =>
                <Route element={route.element}
                path={route.path}
                exact={route.exact}
                key={route.path}/>
            )}
        </Routes>

    );
};

export default AppRouter;