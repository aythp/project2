import { useState } from 'react'
import './App.css'

export default function App() {
  return (
    <div className="flex items-center justify-center w-screen h-screen">
      <h1 className="w-full text-6xl font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 transition-all duration-500">
        Hello world!
      </h1>
    </div>
  );
}