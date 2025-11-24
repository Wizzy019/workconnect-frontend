import React, { useState } from 'react'
import { Link } from 'react-router-dom';

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [role, setRole] = useState("user");
    // const [error, setError] = useState("");


  return (
    <div className='flex items-center justify-center h-screen'>
      <form 
       className="w-80 space-y-3">
      <h2 className="text-2xl font-semibold">Create Account</h2>
      {/* {error && <p className="text-red-500 text-sm">{error}</p>} */}

      <input type="text" placeholder="Full Name" value={name} 
      onChange={(e) => setName(e.target.value)}
      className="border p-2 w-full rounded"
      required
      />
       <input type="email" placeholder="Email" value={email} 
       onChange={(e) => setEmail(e.target.value)}
      className="border p-2 w-full rounded"
      required
      />
       <input type="password" placeholder="Password" value={password} 
       onChange={(e) => setPassword(e.target.value)}
      className="border p-2 w-full rounded"
      required
      />
      {/* <select value={role} onChange={(e) => setRole(e.target.value)}
      className="border p-2 w-full rounded"
      >
        <option value="user">Custormer</option>
        <option value="provider">Provider</option>
        <option value="admin">Admin</option>
      </select> */}
      <button type="submit" className="bg-green-700 text-white w-full py-2 rounded">Sign Up</button>

      <p className="text-sm text-center">Already have an account?{" "} <Link to="/login" 
      className="text-blue-600 underline">Login</Link> </p>
    </form>
    </div>
  )
}

export default Register