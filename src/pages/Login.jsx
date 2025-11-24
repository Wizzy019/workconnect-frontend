import { useState } from "react";
import { Link } from "react-router-dom";

function Login() {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [error, setError] = useState("");


  return (
    <div className='flex items-center justify-center h-screen'>
             <form 
            // onSubmit={handleSubmit}
            className="w-80 space-y-3">
            <h2 className='text-pretty text-3xl font-semibold mb-3'>Login</h2> 

            {/* {error && <p className='text-red-500 text-sm'>{error}</p>} */}
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
            <button 
             className="bg-green-700 text-white w-full py-2 rounded"
             >Login</button> 
             <p className='text-sm text-center'>Don't have an account?{" "}
              <Link to="/register" className='text-blue-600 underline'>Register</Link></p>
            </form>
    </div>
  )
}

export default Login
