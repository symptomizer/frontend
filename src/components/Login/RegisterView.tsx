import { FC, useState } from "react";
import { Link } from "react-router-dom";

import { View } from "../../pages/Login";

interface LoginViewProps {
  changeView: React.Dispatch<React.SetStateAction<View>>;
}

export const RegisterView: FC<LoginViewProps> = ({ changeView }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700"
        >
          Full Name
        </label>
        <div className="mt-1">
          <input
            id="full-name"
            name="full-name"
            type="text"
            autoFocus={false}
            value={name}
            onChange={e => setName(e.target.value)}
            className="transition duration-500 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email address
        </label>
        <div className="mt-1">
          <input
            id="email"
            name="email"
            type="email"
            autoFocus={false}
            value={email}
            onChange={e => setEmail(e.target.value)}
            className="transition duration-500 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <div className="mt-1">
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            className="transition duration-500 appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </div>
      <div>
        <Link to="/">
          <button className="transition w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyans-500 disabled:opacity-50">
            Sign Up
          </button>
        </Link>
      </div>

      <div className="text-right">
        <div className="text-sm">
          <a
            onClick={() => changeView(View.Login)}
            className="font-medium text-cyan-600 hover:text-cyan-500 cursor-pointer"
          >
            Back to Login
          </a>
        </div>
      </div>
    </div>
  );
};
