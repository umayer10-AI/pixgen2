import CartList from '@/component/CartList';
import Category from '@/component/Category';
import { getCarts } from '@/lib/fetching';
import React from 'react';

const page = async () => {

    const data = await getCarts()

    return (
        <div>
            <h2 className='text-2xl font-bold my-5'>All Photos</h2>

            <Category></Category>

            <div className='grid grid-cols-1 lg:grid-cols-4 gap-5'>
                {
                    data.map(v => <CartList key={v.id} p={v}></CartList>)
                }
            </div>
        </div>
    );
};

export default page;