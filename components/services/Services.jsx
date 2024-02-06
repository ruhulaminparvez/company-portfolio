import React from 'react';
import { servicesData } from '@/constant/dummyData';
import { HiArrowLongRight } from "react-icons/hi2";

const Services = () => {
    return (
        <section className='px-5 lg:px-20 pt-20 lg:pt-10 bg-white'>
            <div>
                <h6 className='flex items-center gap-2 text-black'>Services <HiArrowLongRight /></h6>
                <h2 className='text-3xl my-2 text-black font-semibold'>Our Services</h2>
                <p className='text-slate-400 text-xl'>
                    We offer a wide range of services to cater to your business needs.
                </p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-5 pt-8 lg:mt-5'>
                {servicesData?.map((item, index) => (
                    <div key={index + 1} className={`bg-base-200 rounded-md box-border card-hover ${(item?.id === 2 || item?.id === 3) && 'lg:col-span-2'}`}>
                        <div className='flex items-center justify-center gap-2 my-3'>
                            <span className='text-blue-400'>{item?.icon}</span>
                            <h4 className='text-xl text-black'>{item?.title}</h4>
                        </div>
                        <div className='bg-blue-400 text-white p-3 mx-4 mt-2 rounded-t-lg min-h-36'>
                            <p className='text-justify'>
                                {item?.description?.length > 450 ? `${item?.description?.substring(0, 450)}...` : item?.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Services;