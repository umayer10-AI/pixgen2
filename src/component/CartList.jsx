import { Button, Chip, Separator } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { FiDownload } from 'react-icons/fi';

const CartList = ({p}) => {
    return (
        <div className='border rounded-xl shadow-xl p-4 space-y-3'>
            <div className='relative aspect-square'>
                <Image fill
                src={p.imageUrl} 
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt='photo' className='object-cover rounded-xl'></Image>
                <Chip size='sm' className='absolute top-2 right-2 px-1'>{p.category}</Chip>
            </div>
            <h2 className='font-bold'>{p.title}</h2>
            <div className='font-semibold flex gap-5'>
                <h2 className='flex items-center gap-2'><FaHeart />{p.likes}</h2>
                <Separator  orientation="vertical"></Separator>
                <h2 className='flex items-center gap-1'><FiDownload className='text-xl' />{p.downloads}</h2>
            </div>
            <Link href={`/all-photos/${p.id}`}><Button className={'w-full bg-linear-to-r from-green-500 via-blue-500 bg-green-500'}>View</Button></Link>
        </div>
    );
};

export default CartList;