import React, { useState } from 'react'
import SecuritySetting from '../../../components/UserDashboard/SecuritySetting';
import Payment from '../../../components/UserDashboard/Payment';
import Sidebar from '../../../components/UserDashboard/Sidebar';
import Account from '../../../components/UserDashboard/Account';

const UpdateProfile = () => {
    const [activeSection, setActiveSection] = useState('account');
  return (
    <div className="flex">
    <Sidebar activeSection={activeSection} setActiveSection={setActiveSection} />
    <div className="flex-grow p-4">
      {activeSection === 'account' && <Account />}
      {activeSection === 'security' && <SecuritySetting />}
      {activeSection === 'payment' && <Payment />}
    </div>
  </div>
  )
}

export default UpdateProfile