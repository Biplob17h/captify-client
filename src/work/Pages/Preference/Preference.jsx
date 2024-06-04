import React from 'react'

const Preference = () => {
  return (
    <div className="bg-black text-white min-h-screen flex justify-center items-center mt-[-200px] mb-[-200px]">
    <div className="max-w-lg p-8 bg-black shadow-md rounded-lg">
      <h1 className="text-3xl font-semibold mb-6">Preference Center</h1>
      <div className="mb-4">
        <input type="checkbox" id="serviceUpdates" name="serviceUpdates" className="mr-2" />
        <label htmlFor="serviceUpdates">Receive service updates</label>
      </div>
      <div className="mb-4">
        <input type="checkbox" id="promotions" name="promotions" className="mr-2" />
        <label htmlFor="promotions">Receive promotions</label>
      </div>
      <div className="mb-8">
        <input type="checkbox" id="newsletters" name="newsletters" className="mr-2" />
        <label htmlFor="newsletters">Subscribe to newsletters</label>
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded">
        Save Preferences
      </button>
    </div>
  </div>
  )
}

export default Preference