import { showcaseData } from '@/constant/dummyData';
import React from 'react';
import { HiArrowLongRight } from "react-icons/hi2";
import Image from 'next/image';
import Link from 'next/link';

const Showcase = () => {
    return (
        <section className='mx-10 mt-20'>
            <div className='flex items-center flex-col'>
                <h6 className='uppercase border-b-color-slate-400 border-b-4'>Works</h6>
                <h2 className='text-3xl my-2'>Discover our Projects and Works</h2>
                <p className='text-slate-400 text-xl'>
                    We have worked with various clients and companies to deliver the best results.
                </p>
            </div>
            <div className='grid grid-cols-3 gap-3 my-5'>
                {showcaseData.map((data, index) => (
                    <div key={index} className='shadow-md p-1'>
                        <Image src={data.image} alt={data.imageAlt} className='w-full h-72 object-cover rounded-md' />
                        <div className='py-4 px-3 flex items-end justify-between'>
                            <div>
                                <span className='text-sm'>{data.category}</span>
                                <h4 className='text-xl'>{data.title}</h4>
                            </div>
                            <div className='flex items-center justify-between'>
                                <Link href={data.link} className='flex items-center gap-2 text-slate-400 hover:text-slate-500'>
                                    {data.linkText}
                                    <HiArrowLongRight className='text-slate-400' />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Showcase;