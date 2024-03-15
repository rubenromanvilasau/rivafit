import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { FaTiktok } from 'react-icons/fa';

type Props = {
    month: string;
    day: number;
    title: string;
    description: string;
    imagePath: string;
    videoUrl: string;
};

const VideoPost = ({ month, day, title, description, imagePath, videoUrl }: Props) => {
    return (
        <div className="flex items-center gap-4 border-b-2 border-purple-200 mt-2 py-4">
            <div className="flex flex-col">
                <span className="text-slate-600 tracking-widest">{ month }</span>
                <span className="block text-slate-600 tracking-widest text-4xl">{ day }</span>
            </div>
            <div className="relative flex-grow">
                <Link href={ videoUrl } rel="noopener noreferrer" target="_blank">
                <Image 
                    className="rounded-lg grayscale cursor-pointer hover:opacity-50"
                    src={ imagePath }
                    width={0} 
                    height={0}
                    sizes="100vw"
                    style={{ width: '100%', height: '100%'}} 
                    alt="img"
                />
                <FaTiktok className="text-4xl text-white absolute bottom-1/2 translate-y-1/2 left-1/2 -translate-x-1/2"/>
                </Link>
            </div>
            <div className="flex flex-col">
                <span className="font-bold text-lg text-primary">{ title }</span>
                <p className="text-light text-slate-500">{ description }</p>
            </div>
        </div>
    )
}

export default VideoPost;