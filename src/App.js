import DefaultLayout from '~/layouts/DefaultLayout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Fragment } from 'react';

import { publicRoutes } from '~/routes';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((route, index) => {
                        let Layout = DefaultLayout;
                        if (route.layout) Layout = route.layout;
                        if (route.layout === null) Layout = Fragment;
                        const Element = route.component;
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                element={
                                    <Layout>
                                        <Element />
                                    </Layout>
                                }
                            />
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
