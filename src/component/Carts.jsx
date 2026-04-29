import { getCarts } from '@/lib/fetching';
import React from 'react';
import CartList from './CartList';

const Carts = async () => {

    const data = await getCarts()
    console.log(data)

    return (
        <div>
            <h2 className='text-2xl font-bold mt-7 mb-5'>Top Generations</h2>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
                {
                    data.slice(0,8).map(v => <CartList key={v.id} p={v}></CartList>)
                }
            </div>
        </div>
    );
};

export default Carts;