/* eslint-disable react/prop-types */
import React from 'react'

const Sidebar = ({ activeSection, setActiveSection }) => {
  return (
    <div className="h-screen w-64 bg-gray-800 text-white">
      <div className="p-4 font-bold text-lg">Profile</div>
      <ul className="space-y-2">
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
  )
}

export default Sidebar