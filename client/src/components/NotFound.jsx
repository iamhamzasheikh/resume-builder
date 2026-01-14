import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-slate-100 text-center px-4">
            <h1 className="text-7xl font-bold text-slate-400 mb-4">404</h1>
            <p className="text-2xl text-slate-600 mb-6">
                Oops! The page you're looking for doesn't exist.
            </p>
            <Link
                to="/"
                className="bg-green-500 hover:bg-green-600 text-white rounded-full px-6 py-3 transition-all"
            >
                Go to Home
            </Link>
        </div>
    )
}

export default NotFound
