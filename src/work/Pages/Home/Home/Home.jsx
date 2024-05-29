/* eslint-disable no-unused-vars */
import React from 'react';
import HeroSection from '../HeroSection/HeroSection';
import CardSection from '../CardSection/CardSection';
import HomeValueSection from '../HomeValueSection/HomeValueSection';
import GlobalSection from '../GlobalSection/GlobalSection';
import ExpandPhoto from '../ExpandPhoto/ExpendPhoto';
import AccentureNews from '../AccentureNews/AccentureNews';

const Home = () => {
    return (
        <div className='mb-96 overflow-hidden'>
            <HeroSection></HeroSection>
            <CardSection></CardSection>
            <HomeValueSection></HomeValueSection>
            <GlobalSection></GlobalSection>
            {/* <ExpandPhoto></ExpandPhoto> */}
            <AccentureNews></AccentureNews>
        </div>
    );
};

export default Home;