import { visionData } from '@/constant/dummyData';
import React from 'react';
import { MdArrowForwardIos } from "react-icons/md";
import Image from 'next/image';
import Link from 'next/link';

const Vision = () => {
    return (
        <section className='px-5 lg:px-20 lg:py-12 bg-white'>
            {visionData.map((item, index) => (
                <div key={index} className={`w-full flex flex-col-reverse pt-20 lg:pt-0 lg:py-12 gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    <div className={`w-full lg:w-2/3`}>
                        <div className='w-full'>
                            <h3 className='text-3xl text-black'>{item.title}</h3>
                        </div>
                        <p className='text-xl my-6 text-justify pr-10 text-black'>{item.description}</p>
                        <div className='flex items-center justify-between'>
                            <Link href='#' className='flex items-center gap-2 btn btn-outline text-blue-400 hover:bg-blue-500 hover:border-0'>
                                <span className='text-md'>Lets Get Started</span>
                                <MdArrowForwardIos />
                            </Link>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/3'>
                        <Image src={item.image} alt={item.imageAlt} className='w-full h-72 rounded-md' />
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Vision;