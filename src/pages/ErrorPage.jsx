import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-2xl text-center">
            <h1 className="text-6xl font-bold">404</h1>
            <p className="text-xl">Page not found</p>
            <Link to="/" className="mt-4 text-blue-800 hover:underline">Home</Link>
        </div>
    )
}
