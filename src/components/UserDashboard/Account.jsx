import React, { useState } from 'react';

const Account = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSave = () => {
    console.log('Name:', name);
    console.log('Email:', email);
  };

  return (
    <div className="p-4">
      <h2 className="font-bold mb-4 text-3xl">User Profile</h2>
      <div className="mb-4">
        <label className="block mb-2 md:text-xl">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-[500px] p-2 border border-gray-300 rounded"
          placeholder='John Doe'
        />
      </div>
      <div className="mb-4">
        <label className="block mb-2 md:text-xl">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-[500px] p-2 border border-gray-300 rounded"
          placeholder='Johndoe@gmail.com'
        />
      </div>
      <button onClick={handleSave} className="w-[100px] px-4 py-2 bg-purple-700 text-white rounded">
        Save
      </button>
      
    </div>
  );
};

export default Account;
