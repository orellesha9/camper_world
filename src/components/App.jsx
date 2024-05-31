import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

import SharedLayout from '../components/SharedLayout/SharedLayout';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const CatalogPage = lazy(() => import('../pages/CatalogPage/CatalogPage'));
import FavoritePage from 'pages/FavoritePage/favoritePage';
import RestrictedRoute from './RestrictedRoute/RestrictedRoute';
// const SinglePostPage = lazy(
//     () => import('pages/SinglePostPage/SinglePostPage.jsx')
// );
// const SinglePostComentsPage = lazy(
//     () => import('pages/SinglePostComentPage/SingelPostComentPage')
// );
// const Reviews = lazy(() => import('pages/Reviews/Reviews.jsx'));
// const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));
// import CatalogPage from '../pages/MoviesPage/MoviesPage';

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<SharedLayout />}>
                <Route index element={<HomePage />} />
                <Route path="catalog" element={<CatalogPage />} />
                <Route path="favorites" element={<FavoritePage />} />
                <Route path="/*" element={<RestrictedRoute />} />
                {/* <Route path="*" element={<NotFoundPage />} /> */}
            </Route>
        </Routes>
    );
};

export default App;
