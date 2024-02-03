import React from 'react';
import { HiArrowLongRight } from "react-icons/hi2";
import { testimonialsData } from '@/constant/dummyData';
import Image from 'next/image';
import { FaQuoteLeft } from "react-icons/fa";

const ClientFeedback = () => {
    return (
        <section className='px-10 mt-20'>
            <div className='flex items-center flex-col'>
                <h6 className='flex items-center gap-2'>Testimonials <HiArrowLongRight /></h6>
                <h2 className='text-3xl my-2'>Hear from Our Clients</h2>
            </div>
            <div className='grid grid-cols-2 gap-2 my-5'>
                {testimonialsData.map((item, index) => (
                    <div key={index}>
                        <div className='border rounded-md p-4'>
                            <span className='text-4xl text-blue-400'><FaQuoteLeft /></span>
                            <p className='text-justify mt-3'>{item.quote}</p>
                        </div>
                        <div className='flex items-center gap-2 mt-3'>
                            <div className='p-1 rounded-full border-2 border-blue-400'>
                                <Image src={item.avatar} alt={item.avatarAlt} className='w-10 h-10 rounded-full' />
                            </div>
                            <div>
                                <h6 className='text-md'>{item.name}</h6>
                                <p className='text-sm text-slate-400'>{item.position}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ClientFeedback;