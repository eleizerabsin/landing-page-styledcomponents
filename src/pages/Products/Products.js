import React from 'react';
import {
  homeObjTwo,
} from './Data'
import { InfoSection, Pricing } from '../../components';

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjTwo}/>
    </>
  )
}

export default Home
