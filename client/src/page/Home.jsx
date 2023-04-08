import React from 'react';

import {PageHOC} from '../components'

const Home = () => {
  return (
    <div>
     <h1 className="text-white text-xl"> Hello from Home</h1>
    </div>
  )
};

export default PageHOC(
  Home,
  <>Welcome to AvaxGods<br/> a Web3 NFT card game.</>,
  <>Connect your wallet to start playing<br/> the ultimate web3 battle card game.</>
);