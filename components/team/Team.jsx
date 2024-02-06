import React from 'react';
import Image from 'next/image';
import { teamData } from '@/constant/dummyData';
import { FiGithub } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";

const Team = () => {
    return (
        <section className='px-5 lg:px-20 pt-20 bg-white'>
            <div className='flex items-center flex-col'>
                <h6 className='uppercase border-b-color-slate-400 border-b-4 text-black'>About Us</h6>
                <h2 className='text-3xl my-2 text-center text-black font-semibold'>
                    The Talented People Behind the Scenes
                    <br className='lg:inline-block hidden' /> of the Organization
                </h2>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-5 py-8 lg:py-8'>
                {teamData.map((data, index) => (
                    <div key={index} className='shadow-md p-1 h-80 card-hover'>
                        <div className='my-2'>
                            <Image src={data.image} alt={data.imageAlt} className='w-32 h-32 object-cover rounded-full mx-auto' />
                        </div>
                        <div className='px-5'>
                            <h3 className='text-xl text-center text-black'>{data.name}</h3>
                            <h6 className='text-center text-slate-500'>{data.position}</h6>
                            <p className='text-center text-slate-400'>{data.intro}</p>
                        </div>
                        <div className='flex item-center justify-center gap-4 mt-2'>
                            <FiGithub className='text-2xl text-slate-400 hover:text-slate-500 cursor-pointer' />
                            <FiTwitter className='text-2xl text-slate-400 hover:text-slate-500 cursor-pointer' />
                            <FiInstagram className='text-2xl text-slate-400 hover:text-slate-500 cursor-pointer' />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Team;