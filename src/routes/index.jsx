import React, { lazy, Suspense } from 'react';
import { Route, Routes as DomRoutes } from "react-router-dom";
import { APP_CONSTANTS } from '../appconsts';
import Home from '../pages/home';

const Login = lazy(() => import('../pages/login'));
const NewUser = lazy(() => import('../pages/newuser'));

const Routes = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <DomRoutes>
                <Route path={APP_CONSTANTS.ROUTES.LOGIN} element={<Login />} />
                <Route path={APP_CONSTANTS.ROUTES.HOME} element={<Home />} />
                <Route path={APP_CONSTANTS.ROUTES.NEW_USER} element={<NewUser />} />
            </DomRoutes>
        </Suspense>
    );
};
export default Routes;