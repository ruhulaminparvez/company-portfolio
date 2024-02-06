import React from 'react';
import { HiArrowLongRight } from "react-icons/hi2";
import { testimonialsData } from '@/constant/dummyData';
import Image from 'next/image';
import { FaQuoteLeft } from "react-icons/fa";

const ClientFeedback = () => {
    return (
        <section className='px-5 lg:px-20 pt-20 bg-white'>
            <div className='flex items-center flex-col'>
                <h6 className='flex items-center gap-2 text-black'>Testimonials <HiArrowLongRight /></h6>
                <h2 className='text-3xl my-2 text-black font-semibold'>Hear from Our Clients</h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-5 py-8 lg:py-6'>
                {testimonialsData.map((item, index) => (
                    <div key={index}>
                        <div className='border rounded-md p-4 card-hover'>
                            <span className='text-4xl text-blue-400'><FaQuoteLeft /></span>
                            <p className='text-justify mt-3 text-black'>{item.quote}</p>
                        </div>
                        <div className='flex items-center gap-2 mt-3'>
                            <div className='p-1 rounded-full border-2 border-blue-400 card-hover'>
                                <Image src={item.avatar} alt={item.avatarAlt} className='w-10 h-10 rounded-full' />
                            </div>
                            <div>
                                <h6 className='text-md text-black'>{item.name}</h6>
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