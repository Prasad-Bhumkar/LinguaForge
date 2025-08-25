import { lazy } from 'react';

// Lazy load pages for better performance
export const Home = lazy(() => import('../pages/Home.jsx'));
export const Translate = lazy(() => import('../pages/Translate.jsx'));
export const Random = lazy(() => import('../pages/Random.jsx'));
export const NotFound = lazy(() => import('../pages/NotFound.jsx'));
