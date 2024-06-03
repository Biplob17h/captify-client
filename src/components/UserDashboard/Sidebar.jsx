/* eslint-disable react/prop-types */
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Sidebar = ({ activeSection, setActiveSection }) => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);

  const handleToggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  };
  return (
    <div className="flex">
    {isSidebarVisible ? (
      <div className="h-screen w-[180px] bg-gray-800 text-white">
        <button
          className="p-2 m-2 text-gray-400 hover:text-white focus:outline-none"
          onClick={handleToggleSidebar}
        >
          X
        </button>
        <div className="p-4 font-bold text-lg">Profile</div>
        <ul className="space-y-2">
        <Link to='/'>
        <li
            className={`p-4 cursor-pointer ${activeSection === 'home' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
            onClick={() => setActiveSection('home')}
          >
            Home
          </li>
        </Link>
          <li
            className={`p-4 cursor-pointer ${activeSection === 'account' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
            onClick={() => setActiveSection('account')}
          >
            Account
          </li>
          <li
            className={`p-4 cursor-pointer ${activeSection === 'security' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
            onClick={() => setActiveSection('security')}
          >
            Security Settings
          </li>
          <li
            className={`p-4 cursor-pointer ${activeSection === 'payment' ? 'bg-gray-700' : 'hover:bg-gray-700'}`}
            onClick={() => setActiveSection('payment')}
          >
            Payment & Billing Info
          </li>
        </ul>
      </div>
    ) : (
      <button
        className="p-2 m-2 text-gray-400 hover:text-white focus:outline-none pb-[240px]"
        onClick={handleToggleSidebar}
      >
        ☰
      </button>
    )}
  </div>
  )
}

export default Sidebar