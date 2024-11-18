import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-9xl font-bold primary-color">404</h1>
            <p className="mt-4 text-4xl font-semibold text-gray-700">Page Not Found</p>
            <p className="mt-2 text-lg text-gray-500">
                "Every setback is a setup for a comeback." - T.D. Jakes
            </p>
            <Link to="/" className="mt-6 px-4 py-3 bg-primary-color text-white rounded-md hover:bg-pink-800 transition">
                Go Back Home
            </Link>
        </div>
    );
};

export default PageNotFound;
