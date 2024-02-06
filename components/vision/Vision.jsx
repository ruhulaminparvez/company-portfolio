import { visionData } from '@/constant/dummyData';
import React from 'react';
import { MdArrowForwardIos } from "react-icons/md";
import Image from 'next/image';
import Link from 'next/link';
import { AiOutlinePercentage } from "react-icons/ai";
import { BsGraphUp } from "react-icons/bs";

const Vision = () => {
    return (
        <section className='px-5 lg:px-20 lg:pb-12 lg:pt-24 bg-white'>
            {visionData.map((item, index) => (
                <div key={index} className={`w-full flex flex-col-reverse pt-20 lg:pt-0 lg:py-32 gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                    <div className={`w-full lg:w-2/3`}>
                        <div className='w-full'>
                            <h3 className='text-3xl font-semibold text-black mt-10 lg:mt-0'>{item.title}</h3>
                        </div>
                        <p className='text-xl my-6 text-justify pr-10 text-slate-600 leading-8'>{item.description}</p>
                        <div className='flex items-center justify-between'>
                            <Link href='#' className='flex items-center gap-2 btn btn-outline text-blue-400 hover:bg-blue-500 hover:border-0'>
                                <span className='text-md'>Lets Get Started</span>
                                <MdArrowForwardIos />
                            </Link>
                        </div>
                    </div>
                    <div className='w-full lg:w-1/3 relative'>
                        <Image src={item.image} alt={item.imageAlt} className='w-full h-72 rounded-md shadow-lg card-hover' />
                        <div className="absolute bottom-0 left-0 right-0 top-60 text-center">
                            <div className="bg-white border shadow-md py-4 px-2 mx-8 rounded-md card-hover">
                                <div className='flex items-center justify-between'>
                                    <div className='flex items-center gap-2'>
                                        <AiOutlinePercentage className='text-6xl text-blue-400' />
                                        <div className='text-left'>
                                            <h4 className='text-2xl text-black font-bold'>2,330</h4>
                                            <p className='text-md text-slate-600'>AVG Sales</p>
                                        </div>
                                    </div>
                                    <div className=''>
                                        <div className='flex items-center justify-center gap-2'>
                                            <BsGraphUp className='text-xl text-blue-400' />
                                            <p className='text-xl text-slate-600'>7.2%</p>
                                        </div>
                                        <h4 className='text-xl'>Increase</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default Vision;