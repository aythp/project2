import React from 'react'
import { Link } from 'react-router-dom'

export default function ErrorPage() {
    return (
        <div className='text-2xl text-center'>
            <h1>404</h1>
            <p>Page not found</p>
            <Link to="/">Home</Link>
        </div>
    )
}
