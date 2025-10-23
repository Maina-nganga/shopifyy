import  React from 'react'
import { useNavigate } from 'react-router-dom'

// Navbar component in this project
import Navbar from '../../Components/Navbar/navbar'
import './login.css'

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
      <div className="login-wrap">
        <div className="login-card">
          <h1 className="login-title">Sign in to your account</h1>
          <form onSubmit={handleSubmit} className="login-form">
            <div className="field">
              <label className="label">Email</label>
              <input name="email" type="email" required className="input" />
            </div>

            <div className="field">
              <label className="label">Password</label>
              <input name="password" type="password" required className="input" />
            </div>

            <div className="actions">
              <button type="submit" className="btn btn-primary">Sign In</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
};


