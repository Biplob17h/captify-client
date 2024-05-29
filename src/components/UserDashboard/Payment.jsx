import React from 'react'

const Payment = () => {
    const plan = {
        type: 'Premium',
        startDate: '2023-01-01',
        endDate: '2024-01-01',
        duration: '1 year',
      };
    
      const handleChangePlan = () => {
        // Handle change plan logic
        console.log('Change Plan Clicked');
      };
  return (
    <div className="p-4">
  <h2 className="text-3xl font-bold mb-4">Payment & Billing Info</h2>
  <div className="mb-4 flex flex-col sm:flex-row gap-1">
    <label className="block mb-2 text-xl">Plan Type :</label>
    <p className="text-orange-400 text-xl">{plan.type}</p>
  </div>
  <div className="mb-4 flex flex-col sm:flex-row gap-1">
    <label className="block mb-2 text-xl">Start Date :</label>
    <p className="text-xl">{plan.startDate}</p>
  </div>
  <div className="mb-4 flex flex-col sm:flex-row gap-1">
    <label className="block mb-2 text-xl">End Date :</label>
    <p className="text-xl">{plan.endDate}</p>
  </div>
  <div className="mb-4 flex flex-col sm:flex-row gap-1">
    <label className="block mb-2 text-xl">Plan Duration :</label>
    <p className="text-xl">{plan.duration}</p>
  </div>
  <button onClick={handleChangePlan} className="px-5 py-3 bg-purple-700 text-white rounded text-xl">
    Change Plan
  </button>
</div>

  )
}

export default Payment