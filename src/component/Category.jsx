import { getCategory } from '@/lib/fetching';
import { Button } from '@heroui/react';
import React from 'react';

const Category = async () => {

    const data = await getCategory()
    console.log(data)

    return (
        <div className='flex items-center justify-center gap-2 mb-5'>
            {
                data.map(v => (
                    <Button key={v.id} variant='outline'>{v.name}</Button>
                ))
            }
        </div>
    );
};

export default Category;