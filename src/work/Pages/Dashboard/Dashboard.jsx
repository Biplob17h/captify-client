import React, { useState } from 'react'
import Maindashboard from '../../../components/MainDashboard/Maindashboard';
import LiveTranscript from '../../../components/MainDashboard/LiveTranscript';
import AudioTranscript from '../../../components/MainDashboard/AudioTranscript';
import ResyncingAI from '../../../components/MainDashboard/ResyncingAI';
import Mainsidebar from '../../../components/MainDashboard/Mainsidebar';

const Dashboard = () => {
  const [activeOption, setActiveOption] = useState('dashboard');

  const renderContent = () => {
    switch (activeOption) {
      case 'dashboard':
        return <Maindashboard />;
      case 'live-transcript':
        return <LiveTranscript />;
      case 'audio-transcript':
        return <AudioTranscript />;
      case 'resyncing-ai':
        return <ResyncingAI/>;
      default:
        return <div>Home</div>;
    }
  };

  return (
    <div className="flex">
      <Mainsidebar setActiveOption={setActiveOption} />
      <div className="flex-grow p-4">
        {renderContent()}
      </div>
    </div>
  )
}

export default Dashboard