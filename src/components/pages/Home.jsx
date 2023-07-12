// import React, { useEffect } from 'react';
import Contents from '../layout/Contents';
import Banner from '../section/Banner_test';
import Keyword from '../section/Keyword';
import Donation from '../section/Donation';
import Funding from '../section/Funding';
import Ad from '../section/Ad';
import Statistics from '../section/Statistics';
import Campaign from '../section/Campaign';

const Home = () => {
  return (
    <Contents>
      <Banner />
      <Keyword />
      <Donation />
      <Funding />
      <Ad />
      <Statistics />
      <Campaign />
    </Contents>
  );
};

export default Home;
