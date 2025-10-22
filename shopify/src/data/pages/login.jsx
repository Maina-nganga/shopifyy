import  React from 'react'
import { useNavigate } from 'react-router-dom'

// Navbar lives in the shopify app folder; adjust the relative path
import Navbar from '../shopify/src/Components/Navbar/navbar'

export default function Login() {
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: wire up authentication
    navigate('/')
  }

  return (
    <>
      <Navbar />
      <div className="max-w-md mx-auto mt-12 p-6 bg-white rounded shadow">
        <h1 className="text-2xl font-semibold mb-4">Sign in to your account</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              name="email"
              type="email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              name="password"
              type="password"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
            >
              Sign In
            </button>
          </div>
        </form>
      </div>
    </>
  )
};


