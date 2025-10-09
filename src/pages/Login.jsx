import React from 'react';

const Login = () => {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-800 text-center">
          Login / Sign Up
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600 text-center">
          Access your account to track repairs and orders.
        </p>
        <div className="mt-8 max-w-md mx-auto">
          <form className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
            <button
              type="submit"
              className="w-full bg-teal-500 text-white font-semibold py-2 rounded-lg hover:bg-teal-600 transition duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;