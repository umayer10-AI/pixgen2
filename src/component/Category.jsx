import { getCategory } from '@/lib/fetching';
import { Button } from '@heroui/react';
import Link from 'next/link';
import React from 'react';

const Category = async () => {

    const data = await getCategory()

    return (
        <div className='flex items-center justify-center gap-2 mb-5'>
            {
                data.map(v => (
                    <Link href={`?category=${v.name}`} key={v.id}><Button variant='outline'>{v.name}</Button></Link>
                ))
            }
        </div>
    );
};

export default Category;