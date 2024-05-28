import { lazy } from 'react';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import SharedLayout from '../components/SharedLayout/SharedLayout';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('../pages/MoviesPage/MoviesPage'));
import FavoritePage from 'pages/FavoritePage/favoritePage';
// const SinglePostPage = lazy(
//     () => import('pages/SinglePostPage/SinglePostPage.jsx')
// );
// const SinglePostComentsPage = lazy(
//     () => import('pages/SinglePostComentPage/SingelPostComentPage')
// );
// const Reviews = lazy(() => import('pages/Reviews/Reviews.jsx'));
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'));

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<SharedLayout />}>
                    <Route index element={<HomePage />} />
                    <Route path='movies' element={<MoviesPage />} />
                    <Route path='favorite' element={<FavoritePage />} />
                    <Route path="*" element={<NotFoundPage />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
