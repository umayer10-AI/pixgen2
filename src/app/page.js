import Banner from '@/component/Banner';
import Carts from '@/component/Carts';
import { Button } from '@heroui/react';
import React from 'react';

const page = () => {
  return (
    <div>
        <Banner></Banner>
        <Carts></Carts>
    </div>
  );
};

export default page;