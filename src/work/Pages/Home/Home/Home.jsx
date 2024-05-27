import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import CardSection from '../CardSection/CardSection';
import HomeValueSection from '../HomeValueSection/HomeValueSection';
import GlobalSection from '../GlobalSection/GlobalSection';

const Home = () => {
    return (
        <div className='mb-96 overflow-hidden'>
            <HeroSection></HeroSection>
            <CardSection></CardSection>
            <HomeValueSection></HomeValueSection>
            <GlobalSection></GlobalSection>
        </div>
    );
};

export default Home;