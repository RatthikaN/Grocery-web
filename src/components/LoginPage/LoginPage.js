import React, { useState, useContext } from 'react';
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { UserContext } from '../../UserContext';
import backgroundImage2 from '../../assets/Background/greenimage2.jpg';

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const loginUser = userCredential.user;

      setUser({
        email: loginUser.email,
        displayName: loginUser.displayName,
        uid: loginUser.uid,
      });

      navigate("/"); // Redirect to home page on successful login
    } catch (error) {
      setError(`Login failed: ${error.message}`);
      console.error("Login Error", error);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen relative"
      style={{
        backgroundImage: `url(${backgroundImage2})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Background Blur Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-40 backdrop-blur-md"></div>
      
      {/* Centered Login Form */}
      <div className="relative z-10 bg-white p-8 rounded-xl shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        {error && (
          <p className="text-red-600 mb-4 text-center">{error}</p>
        )}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700">Email</label>
            <input
              className="w-full px-3 py-2 border rounded"
              type="email"
              placeholder="Enter your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700">Password</label>
            <input
              className="w-full px-3 py-2 border rounded"
              type="password"
              placeholder="Enter your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
            Login
          </button>
        </form>

        <p className="mt-4 text-center text-gray-600">
          Don't have an account?{" "}
          <Link to="/signup" className="text-green-600 hover:underline">Create an Account</Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
