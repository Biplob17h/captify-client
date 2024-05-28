import React, { useState } from 'react'

const SecuritySetting = () => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');

    const handleChangePassword = () => {
        // Handle change password logic
        console.log('Old Password:', oldPassword);
        console.log('New Password:', newPassword);
      };
  return (
    <div className="p-4">
  <h2 className="text-3xl font-bold mb-4">Security Settings</h2>
  <div className="mb-4">
    <label className="block mb-2 md:text-xl">Old Password</label>
    <input
      type="password"
      value={oldPassword}
      onChange={(e) => setOldPassword(e.target.value)}
      className="w-full md:w-[500px] p-2 border border-gray-300 rounded"
    />
  </div>
  <div className="mb-4">
    <label className="block mb-2 md:text-xl">New Password</label>
    <input
      type="password"
      value={newPassword}
      onChange={(e) => setNewPassword(e.target.value)}
      className="w-full md:w-[500px] p-2 border border-gray-300 rounded"
    />
  </div>
  <div className="flex flex-col md:flex-row md:items-center">
    <button
      onClick={handleChangePassword}
      className="px-4 py-2 mb-2 md:mb-0 md:mr-4 text-white bg-blue-500 rounded"
    >
      Forget Password?
    </button>
    <button
      onClick={handleChangePassword}
      className="px-4 py-2 bg-purple-700 text-white rounded"
    >
      Change Password
    </button>
  </div>
</div>

  )
}

export default SecuritySetting