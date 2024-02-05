"use client"
import React, { Fragment, useState, useEffect } from 'react';
import Image from 'next/image';
import { HiArrowLongRight } from "react-icons/hi2";
import { sliderData, typeEffectData } from '@/constant/dummyData';
import TypeEffect from '../shared/reusable/TypeEffect';

const HeroSlider = () => {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prevCurrent) => (prevCurrent === sliderData.length - 1 ? 0 : prevCurrent + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, []);
    return (
        <Fragment>
            <section className='w-full flex px-10 pt-5 bg-white'>
                <div className='w-1/2 flex items-start flex-col justify-center'>
                    <div className='bg-base-200 flex items-center gap-2 rounded-full p-1'>
                        <button className='bg-white rounded-full p-1 px-2 text-black'>We&apos;re hiring</button>
                        <button className='flex items-center gap-2 text-black'>Join our team
                            <span>
                                <HiArrowLongRight />
                            </span>
                        </button>
                    </div>
                    <div className='flex flex-col gap-5 pt-5'>
                        <h1 className='text-6xl font-bold text-black'>
                            <TypeEffect arrList={typeEffectData} />
                            into Seamless Experiences
                        </h1>
                        <p className='text-slate-400 text-xl'>Your trusted partner for web, app development, and top-notch creative solutions.</p>
                        <button className='btn bg-blue-500 text-white hover:bg-blue-600 w-fit'>Get Started <HiArrowLongRight /></button>
                    </div>
                </div>
                <div className='w-1/2 carousel'>
                    {sliderData?.map((item, index) => (
                        <div
                            key={index + 1}
                            className='carousel-item w-full'
                            style={{ transform: `translateX(-${current * 100}%)`, transition: 'all 0.5s ease', height: '500px' }}
                        >
                            <Image
                                src={item?.image}
                                alt={item?.imageAlt}
                                layout='responsive'
                                width={500}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </Fragment>
    );
};

export default HeroSlider;
