import React from "react";

const SignIn = () => {
  const handleSignIn = (e) => {
    e.preventDefault();
    console.log("Sign-in functionality to be implemented.");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      {/* Container */}
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        {/* Welcome Message */}
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-4">
          Welcome Back 👋
        </h1>
        <p className="text-sm text-gray-600 text-center mb-6">
          Please sign in to your account or{" "}
          <a
            href="#"
            className="text-blue-600 hover:text-blue-800 underline transition-colors duration-300"
          >
            sign up
          </a>{" "}
          if you don’t have one.
        </p>

        {/* Sign-In Form */}
        <form onSubmit={handleSignIn} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              required
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              required
              className="w-full px-4 py-2 mt-1 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
        <div className="text-center mt-4">
          <p className="text-sm text-gray-600">
            Forgot your password?{" "}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-800 underline transition-colors duration-300"
            >
              Reset it
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
