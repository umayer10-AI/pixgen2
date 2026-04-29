import CartList from '@/component/CartList';
import { getCarts } from '@/lib/fetching';
import { Button, Chip } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { MdOutlineFileDownload } from 'react-icons/md';

const page = async ({params}) => {

    const {id} = await params
    const data = await getCarts()
    const p = data.find(v => v.id === Number(id))
    console.log(p)

    return (
        <div>
            <div>
            <div className="max-w-6xl mx-auto px-4 py-10">

      <div className="grid md:grid-cols-2 gap-10 items-start">

        {/* 🔥 Image Section */}
        <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-lg">
          <Image
            src={p.imageUrl}
            alt="image"
            fill
            className="object-cover"
          />
        </div>

        {/* 🔥 Details Section */}
        <div className="space-y-5">

          {/* Title */}
          <h1 className="text-3xl font-bold">{p.title}</h1>

          {/* Category + Model */}
          <div className="flex flex-wrap gap-2">
            <Chip>{p.category}</Chip>
            <Chip variant="flat">{p.model}</Chip>
            <Chip variant="flat">{p.resolution}</Chip>
          </div>

          {/* Prompt */}
          <div>
            <h3 className="font-semibold mb-1">Prompt</h3>
            <p className="text-gray-600">{p.prompt}</p>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {
              p.tags.map((tag, i) => (
                <Chip key={i} size="sm" variant="bordered">
                  #{tag}
                </Chip>
              ))
            }
          </div>

          {/* Stats */}
          <div className="flex items-center gap-6 text-gray-700">
            <span className="flex items-center gap-2">
              <FaHeart className="text-pink-500" /> {p.likes}
            </span>
            <span className="flex items-center gap-2">
              <MdOutlineFileDownload /> {p.downloads}
            </span>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <Button className="bg-linear-to-r from-pink-500 via-purple-500 to-red-500 text-white">
              Download
            </Button>
            <Button variant="secondary">
              Like
            </Button>
          </div>
          <Link href={'/'}><Button className={'bg-violet-600'}><FaArrowLeftLong />Back</Button></Link>

        </div>

      </div>
    </div>
        </div>
        </div>
    );
};

export default page;