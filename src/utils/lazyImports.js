import { lazy } from 'react';

// Lazy load pages for better performance
export const Home = lazy(() => import('../pages/Home.jsx'));
export const Translate = lazy(() => import('../pages/Translate.jsx'));
export const Random = lazy(() => import('../pages/Random.jsx'));
export const NotFound = lazy(() => import('../pages/NotFound.jsx'));
export const About = lazy(() => import('../pages/About.jsx'));
export const Contact = lazy(() => import('../pages/Contact.jsx'));
export const Support = lazy(() => import('../pages/Support.jsx'));
export const TermsOfService = lazy(() => import('../pages/TermsOfService.jsx'));
export const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy.jsx'));
